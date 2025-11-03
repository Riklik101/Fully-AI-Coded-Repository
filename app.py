"""
Simple Flask backend application with REST API endpoints
"""
from flask import Flask, jsonify, request, send_from_directory, render_template
from flask_cors import CORS
import os

app = Flask(__name__, static_folder='frontend', static_url_path='')
CORS(app)

# In-memory data store for demo purposes
tasks = [
    {"id": 1, "title": "Learn Python", "completed": False},
    {"id": 2, "title": "Build a web app", "completed": False},
    {"id": 3, "title": "Deploy to production", "completed": False}
]

@app.route('/')
def index():
    """Serve the frontend"""
    return send_from_directory('frontend', 'index.html')

@app.route('/page2.html')
def page2():
    """Serve the second page"""
    return send_from_directory('frontend', 'page2.html')

@app.route('/api/tasks', methods=['GET'])
def get_tasks():
    """Get all tasks"""
    return jsonify(tasks)

@app.route('/api/tasks/<int:task_id>', methods=['GET'])
def get_task(task_id):
    """Get a specific task by ID"""
    task = next((t for t in tasks if t['id'] == task_id), None)
    if task:
        return jsonify(task)
    return jsonify({"error": "Task not found"}), 404

@app.route('/api/tasks', methods=['POST'])
def create_task():
    """Create a new task"""
    data = request.get_json()
    if not data or 'title' not in data:
        return jsonify({"error": "Title is required"}), 400
    
    new_task = {
        "id": max([t['id'] for t in tasks]) + 1 if tasks else 1,
        "title": data['title'],
        "completed": data.get('completed', False)
    }
    tasks.append(new_task)
    return jsonify(new_task), 201

@app.route('/api/tasks/<int:task_id>', methods=['PUT'])
def update_task(task_id):
    """Update an existing task"""
    task = next((t for t in tasks if t['id'] == task_id), None)
    if not task:
        return jsonify({"error": "Task not found"}), 404
    
    data = request.get_json()
    if 'title' in data:
        task['title'] = data['title']
    if 'completed' in data:
        task['completed'] = data['completed']
    
    return jsonify(task)

@app.route('/api/tasks/<int:task_id>', methods=['DELETE'])
def delete_task(task_id):
    """Delete a task"""
    global tasks
    task = next((t for t in tasks if t['id'] == task_id), None)
    if not task:
        return jsonify({"error": "Task not found"}), 404
    
    tasks = [t for t in tasks if t['id'] != task_id]
    return jsonify({"message": "Task deleted successfully"})

@app.route('/api/health', methods=['GET'])
def health_check():
    """Health check endpoint"""
    return jsonify({"status": "healthy", "message": "Backend is running!"})

# Error handlers for graceful error catching
@app.errorhandler(404)
def not_found_error(error):
    """Handle 404 errors"""
    return render_template('404.html'), 404

@app.errorhandler(500)
def internal_error(error):
    """Handle 500 errors"""
    return render_template('500.html'), 500

@app.errorhandler(403)
def forbidden_error(error):
    """Handle 403 errors"""
    return render_template('403.html'), 403

@app.errorhandler(400)
def bad_request_error(error):
    """Handle 400 errors"""
    return render_template('400.html'), 400

if __name__ == '__main__':
    # Debug mode is enabled for development - disable in production
    # For production: app.run(debug=False, host='0.0.0.0', port=5000)
    app.run(debug=True, host='0.0.0.0', port=5000)
