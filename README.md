# basic-express-server


[deployment](https://basic-express-server-jdeitawi.herokuapp.com/)


[PR](https://github.com/jdeitawimostafa/basic-express-server/pull/1)


Setup
.env requirements
PORT - 3000
Running the app
npm start
Endpoint: /status
Returns Object

{
 name:hihuseein,
port:3000,
}


Tests
404 on a bad route
404 on a bad method
500 if no name in the query string
200 if the name is in the query string
given an name in the query string, the output object is correct
Unit Tests: npm run test
Lint Tests: npm run lint
