# React-Drf_Jwt_Auth

# React Django Authentication Project

This is a simple authentication project using React for the frontend, Django Rest Framework for the backend, and MySQL as the database. The project includes user registration, login, and logout functionalities.

## Project Structure

- `frontend`: Contains the React app.
- `backend`: Contains the Django Rest Framework app.

## Frontend

### Technologies Used
- React+vite
- Bootstrap
- Axios

### Setup

1. Install dependencies:

   ```bash
   cd frontend
   npm install
   npm run dev
   The app will be available at "http://localhost:5173"


## Backend
*Technologies Used
*Django
*Django Rest Framework
*MySQL
*Corsheaders

1. Setup
 Create a virtual environment:  python -m venv venv

2. Activate the virtual environment:

---  For Windows:

bash 
venv\Scripts\activate

--- For macOS/Linux:

bash

source venv/bin/activate


3. Install dependencies:

bash

pip install -r requirements.txt


4. Migrate the database:

bash

python manage.py migrate


5. Run the Django development server:

bash
python manage.py runserver

The backend API will be available at http://localhost:8000/api/.

Database
MySQL is used as the database. Update the database settings in backend/backend/settings.py accordingly.
CORS Configuration
Corsheaders is used to handle Cross-Origin Resource Sharing. CORS is configured to allow requests from http://localhost:5173 and http://127.0.0.1:8000.
API Endpoints
/api/register/: User registration endpoint.
/api/login/: User login endpoint.
/api/logout/: User logout endpoint.
/api/user/: Fetch user details (protected, requires authentication).
Feel free to customize and extend the project as needed.

sql

Make sure to update the README file with any additional information or specific instructions that might be relevant for users who want to run or contribute to your project.






