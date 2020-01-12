const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send({ hello: "morris"});
});

// Development listen to port 5000. Deployment listen to env PORT
const PORT = process.env.PORT || 5000
app.listen(PORT);