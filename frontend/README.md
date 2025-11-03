# Frontend - GitHub Pages Deployment

This directory contains the static frontend for the Task Manager application.

## GitHub Pages Deployment

The frontend is automatically deployed to GitHub Pages via GitHub Actions workflow (`.github/workflows/pages.yml`).

### Configuration

The frontend uses `config.js` to configure the API endpoint:

- **Local Development**: Points to `/api` (Flask backend running on localhost:5000)
- **GitHub Pages**: Can be configured to point to your deployed backend URL

### Setting Up Backend URL for GitHub Pages

To connect the GitHub Pages frontend to a deployed backend:

1. Open `frontend/config.js`
2. Update the `API_BASE_URL` for production:
   ```javascript
   API_BASE_URL: window.location.hostname.includes('github.io')
       ? 'https://your-backend-url.com/api'  // Your deployed backend
       : '/api'  // Local development
   ```

## Local Development

When running locally with Flask:
```bash
# From the repository root
python app.py
# Visit http://localhost:5000
```

The Flask app serves this frontend directory and provides the API endpoints.

## Files

- `index.html` - Main HTML page
- `styles.css` - Styling
- `app.js` - Frontend JavaScript logic
- `config.js` - Configuration for API endpoints
