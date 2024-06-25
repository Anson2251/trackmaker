export interface MapPluginConstructor<HostMapType> {
    new(host: HostMapType): MapPlugin<HostMapType>;
}

export interface MapPlugin<HostMapType> {
    host: HostMapType;
    space: string;
    mount(): boolean;
    unmount(): boolean;
}
