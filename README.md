# Basic Info Site

A simple static website built with Node.js that serves HTML pages.

## Description

This is a minimal web server that serves static HTML content. It includes basic pages for home, about, contact information, and a 404 error page.

## Features

- Simple Node.js HTTP server
- Static HTML page serving
- Basic navigation between pages
- 404 error handling
- Clean, minimal design

## Project Structure

```
basic-info-site/
├── server.js          # Main server file
├── home.html          # Homepage
├── about.html         # About page
├── contact.html       # Contact page
├── 404.html          # 404 error page
└── README.md         # This file
```

## Getting Started

### Prerequisites

- Node.js installed on your system

### Installation & Running

1. Make sure you're in the project directory
2. Run the server:
   ```bash
   node server.js
   ```
3. Open your browser and visit: `http://localhost:8080`

### Available Pages

- **Home**: `http://localhost:8080/` or `http://localhost:8080/home.html`
- **About**: `http://localhost:8080/about`
- **Contact**: `http://localhost:8080/contact`
- **404**: Any other URL will show the 404 page

## Server Details

- **Port**: 8080
- **Server**: Node.js HTTP server
- **Content Type**: HTML files served with `text/html` content type

## Development

To modify the site:

1. Edit the HTML files directly
2. Restart the server to see changes
3. The server automatically serves files from the current directory

## License

This project is open source and available under the MIT License.