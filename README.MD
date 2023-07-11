# API Boilerplate

This is a boilerplate project for building APIs using Node.js with Express.

## Getting Started

### Prerequisites

- Node.js (version X.X.X or higher)
- MongoDB (if using a database)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/s2925534/api-boilerplate
   ```

2. Install dependencies:

   ```bash
   cd api-boilerplate
   npm install
   ```

### Configuration

1. Rename the `.env.example` file to `.env`.

   ```bash
   cp .env.example .env
   ```

2. Update the values in the `.env` file according to your environment.

### Usage

1. Start the server:

   ```bash
   npm start
   ```

2. The API server will start running on `http://localhost:3000` (or the port specified in `.env`).

3. Use Postman or any other API testing tool to send requests to the available endpoints.

### API Documentation

The API documentation is provided in the Postman collection format. You can import the `api-boilerplate.postman_collection.json` file into Postman to explore and test the API endpoints.

### Folder Structure

- `controllers/`: Contains the controllers that handle the API logic.
- `middleware/`: Contains middleware functions used for authentication, error handling, etc.
- `models/`: Contains the database models or schemas.
- `routes.js`: Defines the API routes and connects them with the corresponding controllers.
- `index.js`: The main entry point of the application.
- `.env`: Environment variables file.
- `.env.example`: Example file for environment variables.
- `.gitignore`: Specifies which files and directories should be ignored by Git.

## Author

Pedro Veloso

- Email: pedro@veloso.dev

## Contributing

Contributions are welcome! If you find any issues or want to enhance the project, feel free to open a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
