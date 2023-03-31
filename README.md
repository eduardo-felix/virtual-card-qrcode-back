# API Readme

This is a simple RESTful API built using Node.js and Express framework. The purpose of this API is to register users, generate QR codes based on user's data and retrieve user's information.

Application deployment: https://virtual-card-qrcode.netlify.app/

Front end repositorie of the application: https://github.com/eduardo-felix/virtual-card-qrcode

Setup
Before running the API, it is necessary to create a PostgreSQL database and a table. Use the following SQL command to create the users table:

```javascript
    CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    linkedin TEXT NOT NULL,
    github TEXT NOT NULL
);
```

After creating the database and the table, create a .env file with the following variables:

```javascript
DB_HOST=
DB_USER=
DB_PASSWORD=
DB_DATABASE=
PORT=

//Base URL to generate the Qrcode
BASE_URL=

```

Then, install the dependencies:

```javascript
npm install
```

Finally, start the server:

```javascript
npm start
```

**ENDPOINTS**

**POST /register**

This endpoint is used to register a user and generate a QR Code. The request body must contain the attributes as in the example.

Request example:

```javascript
{
    "name": "Your Name",
    "linkedin": "https://www.linkedin.com/in/yourlinkedin/",
    "github": "https://github.com/yourgithub"
}
```

If the user is successfully registered, the API will return a JSON object containing the user's QR code data URI.

Response example:

```javascript
{
	"qrcode": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmc.........."
}
```

**GET /:id/:name**

This endpoint is used to retrieve a user's information. It receives the user's ID and name as parameters and returns a JSON object containing the user's name, linkedin and github.

Request example:

```javascript
http://localhost:5000/4/username

```

Response example:

```javascript
{
	"id": 4,
	"name": "username",
	"linkedin": "https://www.linkedin.com/in/username/",
	"github": "https://github.com/username"
}
```
