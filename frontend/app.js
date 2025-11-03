// API Base URL - now configured in config.js
const API_BASE_URL = CONFIG.API_BASE_URL;

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    checkBackendHealth();
    loadTasks();
});

/**
 * Check if the backend is healthy
 */
async function checkBackendHealth() {
    const statusDiv = document.getElementById('status');
    try {
        const response = await fetch(`${API_BASE_URL}/health`);
        const data = await response.json();
        
        if (data.status === 'healthy') {
            statusDiv.textContent = '✓ ' + data.message;
            statusDiv.className = 'status healthy';
        }
    } catch (error) {
        const isGitHubPages = window.location.hostname.includes('github.io');
        statusDiv.textContent = isGitHubPages 
            ? '⚠ Backend not configured - Update config.js with your backend URL'
            : '✗ Backend connection failed - Make sure Flask server is running';
        statusDiv.className = 'status error';
        console.error('Health check failed:', error);
    }
}

/**
 * Load all tasks from the backend
 */
async function loadTasks() {
    const tasksList = document.getElementById('tasksList');
    
    try {
        const response = await fetch(`${API_BASE_URL}/tasks`);
        const tasks = await response.json();
        
        if (tasks.length === 0) {
            tasksList.innerHTML = '<p class="empty-state">No tasks yet. Add one above!</p>';
            return;
        }
        
        tasksList.innerHTML = tasks.map(task => createTaskElement(task)).join('');
    } catch (error) {
        tasksList.innerHTML = '<p class="loading error">Failed to load tasks</p>';
        console.error('Error loading tasks:', error);
    }
}

/**
 * Create HTML for a task item
 */
function createTaskElement(task) {
    return `
        <div class="task-item ${task.completed ? 'completed' : ''}">
            <div class="task-content">
                <div class="task-title ${task.completed ? 'completed' : ''}">${escapeHtml(task.title)}</div>
                <div class="task-id">ID: ${task.id}</div>
            </div>
            <div class="task-actions">
                <button 
                    onclick="toggleTaskCompletion(${task.id}, ${!task.completed})" 
                    class="btn ${task.completed ? 'btn-success' : 'btn-success'}"
                >
                    ${task.completed ? '↩ Undo' : '✓ Complete'}
                </button>
                <button 
                    onclick="deleteTask(${task.id})" 
                    class="btn btn-danger"
                >
                    🗑 Delete
                </button>
            </div>
        </div>
    `;
}

/**
 * Add a new task
 */
async function addTask() {
    const input = document.getElementById('taskInput');
    const title = input.value.trim();
    
    if (!title) {
        alert('Please enter a task title');
        return;
    }
    
    try {
        const response = await fetch(`${API_BASE_URL}/tasks`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title, completed: false }),
        });
        
        if (response.ok) {
            input.value = '';
            await loadTasks();
        } else {
            const error = await response.json();
            alert('Failed to add task: ' + error.error);
        }
    } catch (error) {
        alert('Failed to add task: ' + error.message);
        console.error('Error adding task:', error);
    }
}

/**
 * Toggle task completion status
 */
async function toggleTaskCompletion(taskId, completed) {
    try {
        const response = await fetch(`${API_BASE_URL}/tasks/${taskId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ completed }),
        });
        
        if (response.ok) {
            await loadTasks();
        } else {
            const error = await response.json();
            alert('Failed to update task: ' + error.error);
        }
    } catch (error) {
        alert('Failed to update task: ' + error.message);
        console.error('Error updating task:', error);
    }
}

/**
 * Delete a task
 */
async function deleteTask(taskId) {
    if (!confirm('Are you sure you want to delete this task?')) {
        return;
    }
    
    try {
        const response = await fetch(`${API_BASE_URL}/tasks/${taskId}`, {
            method: 'DELETE',
        });
        
        if (response.ok) {
            await loadTasks();
        } else {
            const error = await response.json();
            alert('Failed to delete task: ' + error.error);
        }
    } catch (error) {
        alert('Failed to delete task: ' + error.message);
        console.error('Error deleting task:', error);
    }
}

/**
 * Escape HTML to prevent XSS attacks
 */
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}
