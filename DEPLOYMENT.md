# Deployment Guide

This guide explains how to deploy the Task Manager application with the frontend on GitHub Pages and the backend on a cloud platform.

## Overview

- **Frontend**: Deployed to GitHub Pages (automatic via GitHub Actions)
- **Backend**: Needs to be deployed separately to a cloud platform
- **Connection**: Frontend configured to connect to the deployed backend API

## Frontend Deployment (GitHub Pages)

### Automatic Deployment

The frontend is automatically deployed to GitHub Pages when you push to the `main` branch:

1. Push your changes to the `main` branch
2. The GitHub Actions workflow (`.github/workflows/pages.yml`) runs automatically
3. The `frontend/` directory is deployed to GitHub Pages
4. Your site will be available at: `https://[username].github.io/[repository-name]/`

### Manual Setup (First Time Only)

If GitHub Pages is not enabled:

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under "Build and deployment", select:
   - **Source**: GitHub Actions
4. The workflow will deploy automatically on the next push to `main`

## Backend Deployment

The Flask backend needs to be deployed to a cloud platform. Here are some popular options:

### Option 1: Heroku

```bash
# Install Heroku CLI and login
heroku login

# Create a new Heroku app
heroku create your-app-name

# Add a Procfile to the repository root
echo "web: gunicorn app:app" > Procfile

# Add gunicorn to requirements.txt
echo "gunicorn==21.2.0" >> requirements.txt

# Deploy
git push heroku main

# Your backend will be at: https://your-app-name.herokuapp.com
```

### Option 2: Railway

1. Go to [Railway.app](https://railway.app)
2. Create a new project from GitHub repository
3. Railway will auto-detect the Flask app
4. Add environment variables if needed
5. Your backend will be at: `https://your-app-name.railway.app`

### Option 3: Render

1. Go to [Render.com](https://render.com)
2. Create a new Web Service
3. Connect your GitHub repository
4. Configure:
   - **Build Command**: `pip install -r requirements.txt`
   - **Start Command**: `gunicorn app:app`
5. Your backend will be at: `https://your-app-name.onrender.com`

### Option 4: PythonAnywhere

1. Go to [PythonAnywhere](https://www.pythonanywhere.com)
2. Create an account and upload your code
3. Create a new web app with Flask
4. Configure the WSGI file to point to your app
5. Your backend will be at: `https://your-username.pythonanywhere.com`

## Connecting Frontend to Backend

After deploying the backend:

1. Note your backend URL (e.g., `https://your-app-name.herokuapp.com`)
2. Update `frontend/config.js`:
   ```javascript
   if (hostname.includes('github.io')) {
       return 'https://your-app-name.herokuapp.com/api';
   }
   ```
3. Commit and push the changes
4. GitHub Pages will redeploy automatically

## CORS Configuration

Make sure your backend allows requests from your GitHub Pages URL:

In `app.py`, the CORS configuration should include:
```python
from flask_cors import CORS

# Configure CORS to accept requests from GitHub Pages
CORS(app, resources={
    r"/api/*": {
        "origins": [
            "http://localhost:5000",
            "https://your-username.github.io"
        ]
    }
})
```

Or for development/testing, you can allow all origins (not recommended for production):
```python
CORS(app)  # Allows all origins
```

## Environment Variables

For production backend deployment, consider using environment variables:

```python
import os

DEBUG = os.environ.get('DEBUG', 'False') == 'True'
PORT = int(os.environ.get('PORT', 5000))

if __name__ == '__main__':
    app.run(debug=DEBUG, host='0.0.0.0', port=PORT)
```

## Testing

1. **Local Testing**:
   ```bash
   python app.py
   # Visit http://localhost:5000
   ```

2. **Frontend Only Testing**:
   ```bash
   cd frontend
   python -m http.server 8080
   # Visit http://localhost:8080
   ```

3. **Production Testing**:
   - Visit your GitHub Pages URL
   - Check browser console for any errors
   - Verify API calls are reaching the backend

## Troubleshooting

### Frontend shows "Backend connection failed"

- Check if the backend URL in `config.js` is correct
- Verify the backend is running and accessible
- Check CORS configuration on the backend
- Look at browser console for detailed errors

### Backend not receiving requests

- Check CORS settings
- Verify the backend URL includes the correct protocol (https://)
- Check if the backend endpoints are accessible directly

### GitHub Pages not updating

- Check the Actions tab for workflow status
- Verify the workflow completed successfully
- Clear browser cache and hard refresh (Ctrl+F5)

## Security Notes

- Never commit API keys or secrets to the repository
- Use environment variables for sensitive configuration
- Implement proper authentication for production use
- Consider rate limiting on the backend
- Use HTTPS for all production deployments
