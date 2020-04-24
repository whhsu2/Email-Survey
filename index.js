const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser')
const keys = require('./config/keys');
require('./models/User')
require('./services/passport');

mongoose.connect(keys.mongoURI, 
    {
        useNewUrlParser: true
    }).catch(err => {
        console.log(err);
    });

const app = express();

app.use(bodyParser.json())
app.use(
    cookieSession({
        // this cookie will last 30 days, the unit is milliseconds
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
);

// passport uses cookie to deal with authentication
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
require('./routes/billingRoute')(app);


if(process.env.NODE_ENV === 'production') {
    // Express will serve up production assets (ex: main.js, main.css)
    app.use(express.static('client/build'))

    // Express will serve up index.html file, if it doesn't recognize route
    const path = require('path');
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

// Development listen to port 5000. Deployment listen to env PORT
const PORT = process.env.PORT || 5000
app.listen(PORT);
