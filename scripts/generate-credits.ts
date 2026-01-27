import { readFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __dirname = dirname(fileURLToPath(import.meta.url));

interface DependencyInfo {
    id: string;
    version: string;
    isDev: boolean;
}

interface PackageInfo {
    license: string;
    description: string;
    repoUrl: string;
    homepage: string;
}

interface CreditEntry {
    id: string;
    name: string;
    description: string;
    url: string;
    homepage: string;
    licenseType: string;
    license: string;
    isDev: boolean;
}

function parsePnpmList(): Record<string, DependencyInfo> {
    const result = execSync('pnpm list --depth=0', { encoding: 'utf-8', cwd: __dirname + '/..' });
    const lines = result.split('\n');
    const dependencies: Record<string, DependencyInfo> = {};
    let currentSection: string | null = null;
    for (const line of lines) {
        const trimmed = line.trim();
        if (trimmed.startsWith('dependencies:')) {
            currentSection = 'dependencies';
            continue;
        }
        if (trimmed.startsWith('devDependencies:')) {
            currentSection = 'devDependencies';
            continue;
        }
        if (!trimmed || trimmed.startsWith('Legend') || trimmed.startsWith('trackmaker')) {
            continue;
        }
        if (currentSection === null) continue;
        const match = trimmed.match(/^([^\s@]+@[^\s]+|[^\s]+)\s+([^\s]+)$/);
        if (match) {
            const pkgName = match[1];
            const version = match[2];
            let depId: string;
            if (pkgName.startsWith('@')) {
                const parts = pkgName.split('/');
                const scope = parts[0];
                const name = parts[1] || '';
                depId = `${scope}-${name}`.replace('@', '');
            } else {
                depId = pkgName;
            }
            dependencies[pkgName] = {
                id: depId.replace(/\./g, '-'),
                version,
                isDev: currentSection === 'devDependencies'
            };
        }
    }
    return dependencies;
}

function findLicenseFile(pkgPath: string): string | null {
    const licenseNames = ['LICENSE', 'LICENSE.md', 'LICENSE.txt', 'COPYING', 'COPYING.md', 'UNLICENSE'];
    for (const name of licenseNames) {
        const path = join(pkgPath, name);
        if (existsSync(path)) {
            try {
                return readFileSync(path, { encoding: 'utf-8', flag: 'r' });
            } catch {
                continue;
            }
        }
    }
    return null;
}

const cleanUpURL = (url: string) => url.replace('git+', '').replace('.git', '').replace('git:', 'https://');

function getPackageInfo(pkgPath: string, pkgName: string): PackageInfo {
    const pkgJsonPath = join(pkgPath, 'package.json');
    const info: PackageInfo = { license: '', description: '', repoUrl: '', homepage: '' };
    if (existsSync(pkgJsonPath)) {
        try {
            const pkgJson = JSON.parse(readFileSync(pkgJsonPath, { encoding: 'utf-8' })) as Record<string, unknown>;
            info.license = (pkgJson.license as string) || '';
            info.description = (pkgJson.description as string) || '';
            const repo = pkgJson.repository;
            if (typeof repo === 'string') {
                info.repoUrl = cleanUpURL(repo) || '';
            } else if (repo && typeof repo === 'object') {
                info.repoUrl = cleanUpURL((repo as Record<string, unknown>).url as string) || '';
            }
            if (info.repoUrl && !info.repoUrl.startsWith('http')) {
                info.repoUrl = `https://github.com/${info.repoUrl}`;
            }
            info.homepage = (pkgJson.homepage as string) || info.repoUrl || '';
        } catch (e) {
            console.error(`Error reading package.json for ${pkgName}:`, (e as Error).message);
        }
    }
    return info;
}

export function generateCredits(verbose: boolean): CreditEntry[] {
    if (verbose) console.log("Generating credits info...");
    const dependencies = parsePnpmList();
    if (verbose) console.log(`Found ${Object.keys(dependencies).length} dependencies`);
    const nodeModulesPath = join(__dirname, '../node_modules');
    const credits: CreditEntry[] = [];
    for (const [pkgName, info] of Object.entries(dependencies)) {
        const pkgPath = join(nodeModulesPath, pkgName);
        if (!existsSync(pkgPath)) {
            if (verbose) console.warn(`Warning: ${pkgName} not found in node_modules`);
            continue;
        }
        const pkgInfo = getPackageInfo(pkgPath, pkgName);
        const licenseText = findLicenseFile(pkgPath);
        if (pkgInfo.description) {
            credits.push({
                id: info.id,
                name: pkgName,
                description: pkgInfo.description,
                url: pkgInfo.repoUrl,
                homepage: pkgInfo.homepage,
                licenseType: pkgInfo.license,
                license: licenseText || '',
                isDev: info.isDev
            });
            const devTag = info.isDev ? ' [dev]' : '';
            if (verbose) console.log(`Added: ${pkgName}${devTag} (license: ${pkgInfo.license || 'none'}, URL: ${pkgInfo.repoUrl ?? 'none'}, Homepage: ${pkgInfo.homepage ?? 'none'}))`);
        }
    }
    return credits;
}
