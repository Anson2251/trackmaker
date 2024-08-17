<div style="text-align: center">
<img src="/public/favicon.svg" width=128 height=128 alt="logo"/>

# Trackmaker

</div>

Enabling route planning and navigation for sports activities with map marking feature.

---

## Todo
- [x] About page
- [x] Get and track geolocation
- [x] Add frameworks to load the module
- [x] Basic Bing Maps support
- [ ] MapLibre GL JS Support
- [x] Customise touchpad behaviour for Bing Maps
- [x] Pushpin support
- [x] Include the drawing module
- [ ] Record and track the route
- [ ] Edit routes

    - [ ] Basic route editing page
    - [ ] Save the edit (of the shapes on the map)
    - [ ] Widgets for editing and modifying the information of the shapes
    - [ ] Load and place the previous saves on the map
    - [x] Manage saved routes (shapes)

- [ ] History of drawing actions for using Redo and Undo
- [ ] Export routes
- [ ] Import routes
- [ ] Share routes

*Due to the re-implementation of certain functions, several features are temporarily unavailable, and their status has been changed to "to-do".*

## Notice

### About the Online Demo

This project is still under development. Many features are being implemented.

This [<u>online demo</u>](https://anson2251.github.io/trackmaker/) (on the `gh-page-demo` branch) is for experimental use only. It is now automatically built with the latest code on the `main` branch. Some features may not work properly.

### About the Credential Keys

The required key items are set in `vite.config.ts` via the array `credentialItems`.

The type of the item is as follows:

```typescript
type CredentialItemType = {
	name: string,
	type: "string" | "number"
}
```

To access the credential keys defined in the array, use the global variable named `__<name>__`, for example, `__BING_MAPS_KEY__`.

> **Note:** In the context of `TypeScript`, the new credential item should be declared globally. For example, a new credential item named `NEW_KEY` can be declared as follows:
> ```typescript
> declare const __NEW_KEY__: string;
> ```

The value of the credential items can be set in two ways:

- **Environment Variables:** Assign the value by using environment variables named `<name>`.

    ```bash
    export BING_MAPS_KEY=<Your Key>
    ```

- **Configuration File:** Pass the value by using a configuration file in JSON format. The default path for the file is `./credentials-config.json`, which can be changed using the `CREDENTIALS_CONFIG_PATH` variable.

    ```json
    {
        "BING_MAPS_KEY": "<Your Key>"
    }
    ```

> **Note:** The configuration file is the fallback option.

---

Last update: Jul. 26, 2024.