import { save } from '@tauri-apps/plugin-dialog';
import { create } from '@tauri-apps/plugin-fs';

export async function fileSaveDialog(name: string, extensions: string[]) {
	return await save({
		filters: [
			{
				name: name,
				extensions: extensions,
			},
		],
	});
}

export async function createTextFile(filePath: string, content: string) {
	const file = await create(filePath);
	await file.write(new TextEncoder().encode(content));
	await file.close();
}

/**
 * Download the string as a text file
 * [gist downloadString](https://gist.github.com/danallison/3ec9d5314788b337b682)
 * @param text The content of the file
 * @param fileType The mime type of the file
 * @param fileName The name of the file
 */
export function saveString(text: string, fileType: string, fileName: string) {
	const blob = new Blob([text], { type: fileType });

	const a = document.createElement("a");
	a.download = fileName;
	a.href = URL.createObjectURL(blob);
	a.dataset.downloadurl = [fileType, a.download, a.href].join(":");
	a.style.display = "none";
	document.body.appendChild(a);
	a.click();
	document.body.removeChild(a);
	setTimeout(() => {
		URL.revokeObjectURL(a.href);
	}, 1500);
}

