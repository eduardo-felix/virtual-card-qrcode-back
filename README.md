# API Readme

This is a simple RESTful API built using Node.js and Express framework. The purpose of this API is to register users, generate QR codes based on user's data and retrieve user's information.

Application deployment: https://virtual-card-qrcode.netlify.app/

Front end repositorie of the application: https://github.com/eduardo-felix/virtual-card-qrcode

Setup
Before running the API, it is necessary to create a .env file with the following variables:

```javascript
PORT=
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

This endpoint is used to register a user and generate a QR Code. The request body must contain the following attributes:

```javascript
{
    "name": "Your Name",
    "linkedin": "https://www.linkedin.com/in/yourlinkedin/",
    "github": "https://github.com/yourgithub"
}
```

If the user is successfully registered, the API will return a JSON object containing the user's QR code data URI.

**GET /:id/:name**

This endpoint is used to retrieve a user's information. It receives the user's ID and name as parameters and returns a JSON object containing the user's name, linkedin and github.
