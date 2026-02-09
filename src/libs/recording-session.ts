import { storageGet, storageSet, storageRemove } from "./storage";

interface SessionData {
    routeId: string;
    startTime: number;
    previousTimespan: number;
}

export class RecordingSession {
    private routeId: string | null = null;
    private sessionStartTime: number = 0;
    private previousTimespan: number = 0;
    private isRecording: boolean = false;

    async start(routeId: string, existingTimespan: number = 0): Promise<void> {
        this.routeId = routeId;
        this.previousTimespan = existingTimespan;
        this.sessionStartTime = Date.now();
        this.isRecording = true;

        await storageSet("session:active", {
            routeId,
            startTime: this.sessionStartTime,
            previousTimespan: this.previousTimespan,
        });
    }

    getCurrentTimespan(): number {
        if (!this.isRecording) return this.previousTimespan;
        return this.previousTimespan + (Date.now() - this.sessionStartTime);
    }

    async stop(): Promise<number> {
        const finalTimespan = this.getCurrentTimespan();
        this.isRecording = false;
        await storageRemove("session:active");
        return finalTimespan;
    }

    async recover(): Promise<boolean> {
        const session = await storageGet<SessionData>("session:active");
        if (!session) return false;

        this.routeId = session.routeId;
        this.sessionStartTime = session.startTime;
        this.previousTimespan = session.previousTimespan;
        this.isRecording = true;
        return true;
    }

    isActive(): boolean {
        return this.isRecording;
    }
    getRouteId(): string | null {
        return this.routeId;
    }
}

export const recordingSession = new RecordingSession();
