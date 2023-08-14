# Monorepo: Backend and Frontend


This repository houses both the backend and frontend of your project.


## Purpose


This monorepo structure allows you to manage both the backend and frontend parts of your application in a unified way. It provides a streamlined development process and shared configurations.


## Folder Structure


- `backend/`: Contains the Express.js backend for your project.
- `frontend/`: Contains the Angular frontend for your project.


## Backend


### Prerequisites

- Node.js and npm
- MongoDB

### Getting Started

1. Install dependencies:
   npm install

2. Set up MongoDB:
   - Make sure you have MongoDB installed and running.
   - Update the MongoDB connection URL in `db/db.ts`.

3. Run the backend:
   npm start

### Endpoints

- **POST /login**: Authenticate a user and return a JWT token.
- **GET /catalog**: Fetch movie and series data from an external API.
- **GET /catalog/:id/details**: Fetch details for a specific movie or series.

### Dependencies

- Express.js
- MongoDB
- Bcrypt
- Jsonwebtoken
- Axios


## Frontend


### Prerequisites

- Node.js and npm

### Getting Started

1. Install dependencies:
   npm install

2. Run the frontend:
   ng serve

3. Open your browser and navigate to `http://localhost:4200`.

### Components

- **MovieComponent**: Displays movie details and poster image.
- **CatalogComponent**: Displays a list of movies and series.
- **SearchComponent**: Allows searching for movies and series.

### Services

- **MovieService**: Handles API requests for movie data.

### Dependencies

- Angular
- Angular CLI
- Angular Material
- TailwindCSS


## Monorepo Benefits


- Unified version control for both backend and frontend.
- Shared tooling and configurations.
- Simplified development and deployment workflows.


## Contributing


Feel free to contribute by submitting pull requests. If you encounter issues or have suggestions, open an issue.


## License

