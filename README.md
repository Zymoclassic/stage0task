# Userdata API - Express.js

This is a simple user API built using Express.js that returns basic information, including the current datetime in ISO format.

## Features
- Returns an email address
- Provides the current datetime in `YYYY-MM-DDTHH:mm:ssZ` format (UTC)
- Includes a GitHub URL with angle brackets

## Technologies Used
- Node.js
- Express.js
- CORS (for cross-origin resource sharing)

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/zymoclassic/stage0task.git
   ```
2. Navigate to the project directory:
   ```sh
   cd stage0task
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Create a `.env` file (optional) and specify the `PORT`:
   ```sh
   PORT=5000
   ```

## Usage

1. Start the server:
   ```sh
   npm start
   ```
   or (if using nodemon for development)
   ```sh
   npm run dev
   ```
2. Access the API at:
   ```sh
   http://localhost:5000/
   ```

## API Response
The API returns a JSON response with the following format:
```json
{
  "email": "awopejumoses@gmail.com",
  "current_datetime": "2025-02-03T09:30:00.000Z",
  "github_url": "<https://github.com/zymoclassic/stage0task>"
}
```

## Deployment
API live link:
- [Vercel](https://userdata-eta.vercel.app)


## License
This project is licensed under the ISC License.

## Author
**Awopeju Kolawole Moses**