# Fully-AI-Coded-Repository
it would be really fun to have a repository FULLY AI coded I mean vibe coding TO THE MAX

## Task Manager - Full Stack Application

A simple yet complete full-stack web application demonstrating a Python Flask backend with a modern HTML/CSS/JavaScript frontend.

### Features

- **Backend (Python Flask)**:
  - RESTful API with CRUD operations
  - Task management endpoints
  - Health check endpoint
  - CORS enabled for cross-origin requests
  - In-memory data storage

- **Frontend (HTML/CSS/JavaScript)**:
  - Modern, responsive UI
  - Real-time task management
  - Add, complete, and delete tasks
  - Backend health status indicator
  - Mobile-friendly design

### Project Structure

```
.
├── app.py                 # Flask backend server
├── requirements.txt       # Python dependencies
├── frontend/
│   ├── index.html        # Main HTML page
│   ├── styles.css        # Styling
│   ├── app.js            # Frontend JavaScript logic
│   ├── config.js         # API configuration
│   └── README.md         # Frontend deployment guide
├── .github/
│   └── workflows/
│       └── pages.yml     # GitHub Pages deployment workflow
└── README.md             # This file
```

### Installation & Setup

#### Prerequisites
- Python 3.7 or higher
- pip (Python package installer)

#### Steps

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Riklik101/Fully-AI-Coded-Repository.git
   cd Fully-AI-Coded-Repository
   ```

2. **Create a virtual environment** (recommended):
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Install dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

4. **Run the application**:
   ```bash
   python app.py
   ```

5. **Open your browser** and navigate to:
   ```
   http://localhost:5000
   ```

### API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/health` | Check backend health status |
| GET | `/api/tasks` | Get all tasks |
| GET | `/api/tasks/<id>` | Get a specific task |
| POST | `/api/tasks` | Create a new task |
| PUT | `/api/tasks/<id>` | Update a task |
| DELETE | `/api/tasks/<id>` | Delete a task |

### Usage

1. **Add a Task**: Type a task title in the input field and click "Add Task" or press Enter
2. **Complete a Task**: Click the "✓ Complete" button to mark a task as done
3. **Undo Completion**: Click "↩ Undo" to mark a completed task as incomplete
4. **Delete a Task**: Click the "🗑 Delete" button to remove a task

### Technology Stack

- **Backend**: Python 3, Flask, Flask-CORS
- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **API**: RESTful JSON API

### Development

The application runs in debug mode by default, which means:
- Auto-reloading on code changes
- Detailed error messages
- Available on all network interfaces (0.0.0.0)

For production deployment, make sure to:
- Set `debug=False` in `app.py`
- Use a production WSGI server (e.g., Gunicorn)
- Implement proper data persistence (database)
- Add authentication and authorization

### GitHub Pages Deployment

The frontend can be deployed to GitHub Pages as a static site:

1. **Automatic Deployment**: The `.github/workflows/pages.yml` workflow automatically deploys the `frontend/` directory to GitHub Pages when you push to the `main` branch.

2. **Backend Configuration**: 
   - For local development, the frontend connects to `localhost:5000`
   - For GitHub Pages, update `frontend/config.js` to point to your deployed backend API URL
   - The backend will need to be hosted separately (e.g., Heroku, Railway, Render, etc.)

3. **CORS Configuration**: Ensure your backend has CORS configured to accept requests from your GitHub Pages URL (e.g., `https://username.github.io`)

See `frontend/README.md` for more details on frontend deployment configuration.

### License

See LICENSE file for details.
