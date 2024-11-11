import ENDPOINTS from "../src/constants/apiEndpoints.mjs";

let users = {
    "user1@hcmut.edu.vn": "demo"
};

const accessTokens = [
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkFkbWluIFVzZXIiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3MzEzMDQ4MzAsImV4cCI6MTczMTMwODQzMH0.WQn3OxxO1oAroct0cHZ0Wbg5eBRFekUCwCIqtsNeo",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI5ODc2NTQzMjEwIiwibmFtZSI6IlJlZ3VsYXIgVXNlciIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzMxMzA0ODMwLCJleHAiOjE3MzEzMDY2MzB9.hFFRKxroFyKZqFKsqALa1oszSN27kZFIlK1J74wWk",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlfa2V5IjoiYXBpXzEyMzQ1Iiwic2NvcGUiOlsicmVhZCIsIndyaXRlIl0sImlhdCI6MTczMTMwNDgzMCwiZXhwIjoxNzMxMzkxMjMwfQ.YiORChNUjSj1crIj6XHFdB1ztQNR1Soc44Er1om8Q",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzZXJ2aWNlIjoiYmFja2dyb3VuZC1wcm9jZXNzb3IiLCJwZXJtaXNzaW9ucyI6WyJwcm9jZXNzOnJlYWQiLCJwcm9jZXNzOndyaXRlIl0sImlhdCI6MTczMTMwNDgzMCwiZXhwIjoxNzMxMzQ4MDMwfQ.9umJ5C66sjMncaUOaBLcZqjZ6CYP6Syi8k51wghTYyI"
];

export default [
    {
        pattern: "/api" + ENDPOINTS.AUTH.LOGIN,
        method: 'POST',
        handle: (req, res) => {
            let { email, password } = req.body;
            if (users[email] === password) {
                res.statusCode = 200;
                res.end(JSON.stringify({
                    status: 'success',
                    message: 'Login successful!',
                    data: {
                        token: accessTokens[Math.floor(Math.random() * accessTokens.length)]
                    }
                }));
            } else {
                res.statusCode = 401;
                res.end(JSON.stringify({
                    status: 'error',
                    message: 'Invalid credentials!'
                }));
            }
        }
    },
    {
        pattern: ENDPOINTS.AUTH.REGISTER,
        method: 'POST',
        handle: (req, res) => {
            res.statusCode = 500;
            res.end(JSON.stringify({
                status: 'error',
                message: 'Registration failed!'
            }));
        }
    }
];