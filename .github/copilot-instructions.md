# Copilot Instructions for Fully-AI-Coded-Repository

## Project Overview

This is a full-stack Task Manager application demonstrating a Python Flask backend with a modern HTML/CSS/JavaScript frontend. The application provides RESTful API endpoints for managing tasks with CRUD operations.

## Technology Stack

- **Backend**: Python 3.7+, Flask 3.0.0, Flask-CORS 4.0.0
- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Data Storage**: In-memory (for demonstration purposes)

## Project Structure

```
.
├── app.py                 # Flask backend server with REST API
├── requirements.txt       # Python dependencies
├── frontend/              # Frontend assets
│   ├── index.html        # Main HTML page (Task Manager UI)
│   ├── page2.html        # Demo page with Lorem Ipsum content
│   ├── styles.css        # Styling
│   └── app.js            # Frontend JavaScript logic
├── src/                   # Additional source code (if any)
└── README.md             # Project documentation
```

## Coding Standards and Best Practices

### Backend (Python/Flask)

1. **Code Style**: Follow PEP 8 style guidelines for Python code
2. **Docstrings**: Use triple-quoted docstrings for all functions and classes
3. **Error Handling**: Always return appropriate HTTP status codes (200, 201, 400, 404, 500)
4. **API Responses**: Return JSON responses using `jsonify()`
5. **CORS**: CORS is enabled for all endpoints to support frontend communication
6. **Route Naming**: Use lowercase with hyphens in URL paths (e.g., `/api/tasks`)
7. **HTTP Methods**: Use appropriate HTTP methods (GET, POST, PUT, DELETE) for CRUD operations

### Frontend (HTML/CSS/JavaScript)

1. **JavaScript**: Use modern ES6+ syntax
2. **Async Operations**: Use `fetch()` API for backend communication
3. **Error Handling**: Always handle promise rejections and display user-friendly errors
4. **Responsive Design**: Ensure mobile-friendly layouts
5. **Accessibility**: Use semantic HTML and appropriate ARIA attributes where needed

## API Endpoints

The application provides the following RESTful endpoints:

- `GET /api/health` - Health check endpoint
- `GET /api/tasks` - Retrieve all tasks
- `GET /api/tasks/<id>` - Retrieve a specific task
- `POST /api/tasks` - Create a new task (requires JSON body with `title`)
- `PUT /api/tasks/<id>` - Update a task (can update `title` and/or `completed`)
- `DELETE /api/tasks/<id>` - Delete a task

## Development Workflow

### Setup

1. Create a virtual environment: `python -m venv venv`
2. Activate it: `source venv/bin/activate` (or `venv\Scripts\activate` on Windows)
3. Install dependencies: `pip install -r requirements.txt`
4. Run the application: `python app.py`
5. Access at `http://localhost:5000`

### Making Changes

- **Backend Changes**: Modify `app.py` for API endpoints or backend logic
- **Frontend Changes**: Update files in the `frontend/` directory
- **Dependencies**: Update `requirements.txt` when adding Python packages
- **Debug Mode**: The app runs in debug mode by default (auto-reloads on changes)

### Testing

- Manually test API endpoints using the frontend UI or tools like curl/Postman
- Test health endpoint: `curl http://localhost:5000/api/health`
- Test task operations through the web interface at `http://localhost:5000`

## Important Considerations

1. **Data Persistence**: Currently uses in-memory storage. Data is lost on server restart.
2. **Production Readiness**: For production deployment:
   - Disable debug mode (`debug=False`)
   - Use a production WSGI server (e.g., Gunicorn)
   - Implement proper database for data persistence
   - Add authentication and authorization
   - Set up environment variables for configuration

3. **Security**: 
   - Validate all user inputs
   - Sanitize data before processing
   - Use HTTPS in production
   - Implement rate limiting if needed

## When Adding New Features

- Maintain RESTful API design patterns
- Keep backend and frontend loosely coupled
- Update README.md with new endpoints or features
- Follow the existing code structure and naming conventions
- Ensure backward compatibility with existing endpoints
- Test thoroughly with the frontend interface

## Common Tasks

### Adding a New API Endpoint

1. Add route decorator in `app.py`
2. Define function with appropriate name
3. Add docstring explaining the endpoint
4. Implement logic with proper error handling
5. Return JSON response with appropriate status code
6. Update README.md API documentation

### Adding Frontend Functionality

1. Update HTML structure in `frontend/index.html` or `frontend/page2.html`
2. Add styling in `frontend/styles.css`
3. Implement JavaScript logic in `frontend/app.js`
4. Use `fetch()` to communicate with backend API
5. Handle loading states and errors gracefully
6. Test responsiveness on different screen sizes

## Notes

- This is a demonstration/learning project ("vibe coding TO THE MAX")
- Simplicity and clarity are prioritized over advanced features
- The codebase is intentionally straightforward for educational purposes
