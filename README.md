<div style="text-align: center">
<img src="/public/favicon.svg" width=128 height=128 alt="logo"/>

# Trackmaker

</div>

Enabling route planning and navigation for sports activities with map marking feature.

---

## Features

✅ **Implemented Features:**

- **Route Tracking**: Real-time geolocation tracking with MapLibre GL JS support
- **Map Drawing**: Pushpin support and drawing module integration with Terra Draw
- **Route Management**: Record, track, export, and import routes
- **Sketch Centre**: Basic route editing page with shape loading and management
- **Settings Page**: Theme customization, language selection (interface & map), geolocation settings
- **About Page**: Application information and credits
- **Multi-platform**: Web app and Tauri desktop application
- **Internationalization**: Support for multiple languages (English, Chinese)
- **Storage**: Persistent data storage using IndexedDB and Tauri Store

## Todo

### High Priority

- [ ] Bug fixes for the latest major version
- [ ] Dead Reckoning (DR) system for better geolocation accuracy
- [ ] Edit routes functionality
- [ ] Implement keep alive feature for the web app
- [ ] Save shape edits on the map
- [ ] Widgets for editing and modifying shape information
- [ ] Share routes capability
- [ ] History of drawing actions for Redo and Undo

### Medium Priority

- [ ] Pin with note functionality
- [ ] Multiple tracks with note/tags system
- [ ] Enhanced Tauri geolocation support

## Technology Stack

- **Frontend**: Vue 3, TypeScript, Pinia, Vue Router
- **Mapping**: MapLibre GL JS, Terra Draw
- **UI Framework**: Naive UI
- **Desktop**: Tauri 2.x
- **Storage**: IndexedDB, LocalForage, Tauri Store
- **Geolocation**: Browser Geolocation API, Tauri Geolocation Plugin
- **Build Tool**: Vite
- **Internationalization**: Vue I18n

## Project Structure

```
src/
├── components/          # Vue components
├── composables/        # Vue composables
├── libs/              # Library modules
│   ├── cartosketch/   # CartoSketch drawing system
│   ├── geolocation/   # Geolocation services
│   └── store/         # Storage implementations
├── locales/           # Internationalization files
├── router/            # Vue Router configuration
├── store/            # Pinia stores
├── utils/            # Utility functions
└── views/            # Main application views
```

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

## Notice

### About the inaccurate map data

The map data we used may **contain inaccuracies or controversial content**, particularly regarding territorial boundaries. Due to **resource limitations**, we are currently unable to use higher-quality data, but we are actively **seeking better sources** and will update the application as soon as feasible.

### About the Online Demo

This project is still under development. Many features are being implemented.

This [online demo](https://anson2251.github.io/trackmaker/) (on the `gh-page-demo` branch) is for experimental use only. It is now automatically built with the latest code on the `main` branch. Some features may not work properly.

### About the Tauri demo

[Tauri](https://v2.tauri.app/) is a framework for building tiny, fast binaries for all major desktop and mobile platforms.

The desktop version of Trackmaker is built using Tauri. Geolocation features are available in the Tauri environment through the Tauri geolocation plugin.

### Browser Compatibility

This application requires modern browser features including:

- Geolocation API
- IndexedDB
- ES6+ JavaScript features
- Web Workers

---

Last update: Aug. 31, 2025.
