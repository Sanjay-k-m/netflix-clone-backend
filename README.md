# <span style="font-size: 36px;">🎬</span> Netflix Clone Backend

This repository contains the backend for a <span style="font-size: 24px;">**Netflix Clone**</span> built with <span style="font-size: 24px;">**Node.js**</span>, <span style="font-size: 24px;">**Express**</span>, and <span style="font-size: 24px;">**MongoDB**</span>. It serves as the server-side logic for the application, managing user authentication, fetching movie details, and securely handling user data.

- **Frontend Repository**: Check out the frontend API here: [Netflix Clone Frontend](https://github.com/Sanjay-k-m/netflix-clone-frontend)

## <span style="font-size: 28px;">📚</span> Purpose

This project is created for educational purposes to demonstrate full-stack development using the MERN stack and enhance skills in integrating external APIs, implementing secure user authentication, and developing a robust backend architecture.

## <span style="font-size: 28px;">🛠️</span> Key Features

- **User Authentication**: Secure login and registration using **JWT** tokens and **bcryptjs** for password hashing.
- **Movie Data**: Fetches real-time data from the **TMDb API** for trending movies and TV shows.
- **Movie/Show Details**: Retrieves comprehensive information, including trailers and ratings, for movies and TV shows.
- **API Documentation**: Swagger API documentation is available for easy testing and understanding of the backend endpoints.
- **Environment Configuration**: Secure environment variable management using **dotenv**.

## <span style="font-size: 28px;">🧰</span> Technologies Used

- **Node.js**: JavaScript runtime for backend development.
- **Express**: Fast web framework for building the API.
- **MongoDB**: NoSQL database for managing user information.
- **JWT (JSON Web Tokens)**: For secure user authentication.
- **bcryptjs**: For hashing passwords.
- **Axios**: To interact with external APIs.
- **Swagger**: For API documentation.

## <span style="font-size: 28px;">📦</span> Installation & Setup

### Prerequisites

- **Node.js** and **npm** installed.
- A MongoDB instance or a cloud service like **MongoDB Atlas**.
- A valid **TMDb API key**.

### Steps

1. Clone this repository:
    ```bash
    git clone https://github.com/Sanjay-k-m/netflix-clone-backend.git
    cd netflix-clone-backend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Configure environment variables:
    Copy the `.env.example` file to create your `.env` file:
    ```bash
    cp .env.example .env
    ```

    In the `.env` file, add your MongoDB URI, JWT secret, and TMDb API key. The `PORT` can be set to your desired value:
    ```plaintext
    PORT=<your_port>         # Set your desired port, default is 5000
    MONGO_URI=mongodb+srv://<username>:<password>@cluster0.h4gw60o.mongodb.net/netflix_db?retryWrites=true&w=majority
    JWT_SECRET=mysecretkey
    NODE_ENV=development
    TMDB_API_KEY=<api_key>
    ```

4. Start the development server:
    ```bash
    npm run dev
    ```

    The backend will now run on [http://localhost:<your_port>](http://localhost:<your_port>).

## <span style="font-size: 28px;">🔧</span> Available Scripts

- `npm run dev`: Runs the development server with **nodemon** for auto-reloading.
- `npm run start`: Starts the production server.

## <span style="font-size: 28px;">📚</span> API Documentation

This project includes complete API documentation with **Swagger**. Once the server is running, access the Swagger interface at:
- [http://localhost:<your_port>/api-docs](http://localhost:<your_port>/api-docs)

## <span style="font-size: 28px;">🤝</span> Contributing

Contributions are welcome! If you find issues or have improvements, feel free to fork this repository and submit a pull request.

## <span style="font-size: 28px;">📧</span> Contact

- **Sanjay K M**: dev.sanjaykm@outlook.com
- **GitHub**: [https://github.com/Sanjay-k-m](https://github.com/Sanjay-k-m)
