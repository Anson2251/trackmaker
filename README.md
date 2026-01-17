<div style="text-align: center">
<img src="/public/favicon.svg" width=128 height=128 alt="logo"/>

# Trackmaker

</div>

Enabling route planning and navigation for sports activities with map marking feature.

---

READ THE DOCUMENTS AT: [https://zread.ai/Anson2251/trackmaker/](https://zread.ai/Anson2251/trackmaker/)

## Features

✅ **Implemented Features:**

- **Route Tracking**: Real-time geolocation tracking with MapLibre GL JS support and Kalman filter for improved accuracy
- **Map Drawing**: Pushpin support and drawing module integration with Terra Draw with undo/redo
- **Route Management**: Record, track, export, and import routes
- **Sketch Centre**: Route editing page with shape loading, management, and metadata editing
- **Settings Page**: Theme customization, language selection (interface & map), geolocation settings, advanced settings with early access
- **About Page**: Application information and credits
- **Multi-platform**: Web app and Tauri desktop application
- **Internationalization**: Support for multiple languages (English, Chinese, System Default)
- **Storage**: Persistent data storage using IndexedDB and Tauri Store
- **Mobile Support**: Responsive mobile layout with touch-optimized controls
- **Sensor Support**: IMU sensor integration for device orientation tracking
- **Rich Text Editing**: Markdown and rich text editor for route notes and descriptions

## Todo

### Urgent

- [ ] **Write-Ahead Log (WAL) Architecture**: Refactor tracking feature to use WAL + Merge architecture for improved performance during GPS recording. See [`docs/write-ahead-log-architecture.md`](./docs/write-ahead-log-architecture.md) for full design specification.

### High Priority

- [x] Route distance calculation
- [x] Route management module refactoring
- [x] Bug fixes for the latest major version
- [x] Dead Reckoning (DR) system for better geolocation accuracy
- [x] Edit routes functionality
   - [x] History of drawing actions for Redo and Undo
   - [ ] MarkDown notes with images
- [x] Implement keep alive feature for the web app
- [x] Save shape edits on the map
- [x] Widgets for editing and modifying shape information
- [x] Feature edit popover with inline editing
- [x] Kalman filter with GPS velocity integration for improved tracking
- [x] Advanced settings system with early access support
- [ ] Share routes capability


### Medium Priority

- [ ] Pin with note functionality
- [x] Multiple tracks with note/tags system
- [x] Enhanced Tauri geolocation support
- [x] IMU sensor support for device orientation tracking
- [x] Mobile responsive design improvements
- [x] Drawing tools with delete mode

## Technology Stack

- **Frontend**: Vue 3, TypeScript, Pinia, Vue Router
- **Mapping**: MapLibre GL JS, Terra Draw
   > NOTE: The version 5.12.0, 5.13.0 would throw the error `__publicField is not defined`, please use the 5.11.0 version.
- **UI Framework**: Naive UI
- **Desktop**: Tauri 2.x
- **Storage**: IndexedDB, LocalForage, Tauri Store
- **Geolocation**: Browser Geolocation API, Tauri Geolocation Plugin, Kalman Filter for GPS accuracy
- **Sensors**: IMU sensor integration (Accelerometer, Gyroscope, Device Orientation)
- **Build Tool**: Vite
- **Internationalization**: Vue I18n
- **Text Editing**: WangEditor for rich text, Markdown support

## Project Structure

```
src/
├── components/          # Vue components
├── composables/         # Vue composables (useTerraDraw, useImuCompass, etc.)
├── libs/                # Library modules
│   ├── cartosketch/     # CartoSketch drawing system
│   ├── geolocation/     # Geolocation services with Kalman filter
│   ├── map-backends/    # Map backend implementations
│   └── store/           # Storage implementations
├── locales/             # Internationalization files
├── router/              # Vue Router configuration
├── store/               # Pinia stores
├── utils/               # Utility functions
├── views/               # Main application views
└── libs/                # Platform services (IMU, Geolocation, Permissions)
```

## Notice

### About the Dev Branch Merge

The `dev` branch is **frozen for feature development** and will be merged to `main` after bug fixing. This update introduces significant improvements:

**Major New Features:**

- **Enhanced Geolocation**: Upgraded 6D Kalman filter with GPS velocity integration apart from position for improved tracking accuracy
- **Advanced Settings**: New settings management system with early access features
- **Rich Text Editing**: WangEditor integration for route notes and descriptions
- **Mobile Responsiveness**: Complete mobile layout overhaul with touch-optimized controls
- **Drawing Tools**: Undo/redo support and delete mode for map drawings
- **System Language**: Auto-detect system language preference

**Architecture Improvements:**

- Backend refactoring for geolocation services with modular architecture
- Singleton pattern for IMU and geolocation managers
- Platform services abstraction layer

### About the inaccurate map data

The map data we used may **contain inaccuracies or controversial content**, particularly regarding territorial boundaries. Due to **resource limitations**, we are currently unable to use higher-quality data, but we are actively **seeking better sources** and will update the application as soon as feasible.

### About the Online Demo

This project is still under development. Many features are being implemented.

- **DEV Branch:**

   This [online demo](https://anson2251.github.io/trackmaker/) (on the `gh-page-demo-dev` branch) is currently in **feature freeze**. It contains the latest features that will be merged to main after bug fixing. Some features may not work properly during this phase.

- **Main Branch:**

   This [online demo](https://trackmaker.pages.dev/) (on the `gh-page-demo` branch) is the latest stable version. It is automatically built with the latest code on the `main` branch.

### About the Tauri demo

[Tauri](https://v2.tauri.app/) is a framework for building tiny, fast binaries for all major desktop and mobile platforms.

The desktop version of Trackmaker is built using Tauri. Geolocation features are available in the Tauri environment through the Tauri geolocation plugin.

### Browser Compatibility

This application requires modern browser features including:

- Geolocation API
- IndexedDB
- ES6+ JavaScript features
- Web Workers
- Device Orientation API (for IMU features on mobile devices)
- Permissions API (for geolocation and sensor access)

> **Note**: IMU sensor features (device orientation tracking) are primarily supported on mobile browsers and require explicit user permission.

## Development

### Prerequisites

- Node.js 20+
- pnpm (recommended) or npm
- Rust (for Tauri desktop builds)

### Installation

- Clone the repository:

```bash
git clone https://github.com/anson2251/trackmaker.git
cd trackmaker
```

- Install dependencies:

```bash
pnpm install
```

- Set up credential keys (see Credential Keys section below)

- Run development server:

```bash
pnpm dev
```

### Building for Production

**Web Version:**

```bash
pnpm build
```

**Tauri Desktop Version:**

```bash
pnpm tauri dev    # Development
pnpm tauri build  # Production build
```

## Credential Keys

The application requires API keys for mapping services. These are configured in the build process:

1. **Environment Variables**: Set the following variables:

   ```bash
   export MAPTILER_KEY=<your key>
   ```

2. **Configuration File**: Create a `.env` in the project root:

   ```env
   MAP_TILER_KEY = <your key>
   ```

> **Note**: The configuration file serves as a fallback option.

## Documentation

Comprehensive documentation is available in the [`docs/`](./docs/) directory:

- [Modules Documentation](./docs/modules.md)
- [CartoSketch Library](./docs/libs/cartosketch/)
- [Map Backends](./docs/libs/map-backends/)
- [Utilities](./docs/utils/)

---

Last update: Jan. 18, 2026.
