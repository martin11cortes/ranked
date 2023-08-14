# Express.js Starter with MongoDB and API Integration

This is a simple Express.js starter project that demonstrates how to set up an Express.js application using TypeScript, connect to a MongoDB database, create routes, and fetch data from an external API.


## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js and npm
- Docker
- Git

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/your-username/express-mongodb-api.git
cd express-mongodb-api
```

2. Install dependencies:

```bash
npm install
```

3. Set up MongoDB with Docker:

   - Make sure Docker is installed on your system.
   - Run:

```bash
docker-compose up -d
```

4. Obtain an API Key:

   - Sign up on [The Movie Database (TMDb)](https://www.themoviedb.org/) and obtain an API key.
   - Replace `'TMDB_KEY'` with your actual API key in the `/trending` route.

5. Set env variables:

   - Make a copy from .env.sample file.
   - Replace the variables with your environment values.

6. Start the server (Development):

```bash
npm run dev
```

7. Create some mock db data:

```bash
npx ts-node ./src/db/seed.ts
```

## Routes

- **POST /login**: Authenticate a user by checking username and password against the MongoDB database and return a JWT token upon successful authentication.

- **GET /catalog**: Fetch trending movies from The Movie Database (TMDb) API and return the data in JSON format.

## Dependencies

- Express.js
- Mongoose
- Bcrypt
- Jsonwebtoken
- Axios
- Nodemon

## Contributing

Feel free to fork this repository and contribute by submitting a pull request. If you find any issues or have suggestions, please open an issue.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
