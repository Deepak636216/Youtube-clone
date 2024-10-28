
---

# YouTube Clone

A responsive, interactive YouTube clone application built using ReactJS, Material-UI, and Axios for fetching video data from RapidAPI, simulating core YouTube features like video search, browsing, and viewing. This project demonstrates frontend skills in React component design and API integration.

## Features

- **Video Search and Display**: Browse and search videos using the YouTube Data API.
- **Responsive UI**: Built with Material-UI for a sleek and responsive layout.
- **Video Playback**: Video player with related video suggestions.
- **API Integration**: Axios for asynchronous API calls to fetch dynamic content.

## Project Structure

### `public/`
Contains static files and the HTML template for React.

### `src/`
Main folder housing React components and configuration.

- **`components/`**: Core UI components for video display, search bar, and layout.
  - `Header.js`: Site navigation and search bar.
  - `VideoCard.js`: Component to render individual video items.
  - `VideoPlayer.js`: Dedicated player view for selected videos.
  - `Sidebar.js`: Displays categories for browsing.
  
- **`api/`**: API configuration for Axios, including base URL setup.
- **`App.js`**: Main app component, defining the app structure.
- **`App.css`**: Custom styles.

### Configuration Files

- **`.env`**: API key and environment configuration.
- **`package.json`**: Lists dependencies and scripts for app setup.
- **`.gitignore`**: Files to exclude from version control.

## Getting Started

### Prerequisites

- Node.js and npm installed.

### Installation

```bash
git clone https://github.com/Deepak636216/Youtube-clone.git
cd Youtube-clone
npm install
```

### Setup

1. Obtain an API key from [RapidAPI](https://rapidapi.com/).
2. Create a `.env` file and add your key:
   ```plaintext
   REACT_APP_API_KEY=your_api_key
   ```

### Run the App

```bash
npm start
```

Visit `http://localhost:3000` to explore the app.

## Dependencies

- **ReactJS**: JavaScript library for building UI.
- **Material-UI**: Components for responsive design.
- **Axios**: For HTTP requests to RapidAPI.

---

