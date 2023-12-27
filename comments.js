// Create web server
const express = require('express');
const app = express();
const port = 3000;
// Create a router
const router = express.Router();
// Create a route
router.get('/', (req, res) => {
    res.send('Hello World!');
});
// Apply the route to the app
app.use('/', router);
// Start the server
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});



