# ReciPeas Backend

## Technologies Used

* Node.js: The runtime environment for running JavaScript on the server.
* Express.js: A fast, unopinionated, minimalist web framework for Node.js.
* MongoDB: A NoSQL database used to store recipe data.
* Mongoose: A MongoDB object modeling tool designed to work in an asynchronous environment.
* Cors: A Node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
* Dotenv: A zero-dependency module that loads environment variables from a .env file into process.env.


## Project Setup

To set up the backend, follow these steps:

1. Clone this repository.

2. Install dependencies using npm:

    ```sh
    npm install
    ```

3. Set up your environment variables by creating a .env file in the root directory of the project. Define variables like MONGO_URI for MongoDB connection and any other necessary configuration.

4. Start the server:

    ```sh
    npm run dev
    ```
    This command will start the server in development mode using nodemon, which automatically restarts the server when changes are detected.

    By default, the server runs on port 3000. You can customize the port by setting the PORT environment variable.