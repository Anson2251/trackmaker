export interface MapPluginConstructor<HostMapType> {
    new(host: HostMapType): MapPlugin<HostMapType>;
}

export interface MapPlugin<HostMapType> {
    /** host map */
    host: HostMapType;
    /** this space under the plugins where the plugin will mount */
    space: string;
    mount(): boolean;
    unmount(): boolean;
}
