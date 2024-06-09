<div style="text-align: center">
<img src="/public/favicon.svg" width=128 height=128 alt="logo"/>

# Track Maker

</div>

Enabling route planning and navigation for sports activities with map marking feature.

## Todo
- [x] About page
- [x] Get and track geolocation
- [x] Add frameworks to load the module
- [x] Basic Bing Maps support
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

- [x] History of drawing actions for using Redo and Undo
- [ ] Export routes
- [ ] Import routes
- [ ] Share routes

*Due to the re-implementation of some code, several features are temporarily unavailable, and their status has been changed to "to-do."*

## Notice

### About the online demo

This project is still under development. Many features are being implemented.

This [<u>online demo</u>](https://anson2251.github.io/trackmaker/) (on the `gh-page-demo` branch) is for experimental use only. It is now automatically built with the latest code on the `main` branch. Some features may not work properly.

### About the Bing Maps key

The Bing Maps key is passed to the Vite by the environment variable `BING_MAPS_KEY`.

It's free to apply for a basic key from the [Bing Maps Dev Centre](https://www.bingmapsportal.com/).

Additionally, the `/vite.config.ts` file is configured to automatically attempt to read the key from the configuration file as a fallback. 

The configuration file's path may be specified by the environment variable `CREDENTIALS_CONFIG_PATH`. The default value for the path is `/credentials-config.json`.

---

LAST UPDATE Jun. 9, 2024