const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose')
const keys = require('../config/keys')

const User = mongoose.model('users')

// user id, is the user documentation id in MongoDb
// serialize user id and turn it into a cookie (generate the identifying piece of info)
passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id)
        .then(user => {
            done(null, user);
        });
});

passport.use(
    new GoogleStrategy(
        {
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback',
        proxy: true
        }, 
        (accessToken, refreshToken, profile, done) => {
            User.findOne({googleId: profile.id}).then((existingUser) => {
                if (existingUser) {
                    // we already have a record with the given ID
                    done(null, existingUser);
                } else {
                    // this is an asynchronous action, so we call then
                    new User({googleId: profile.id})
                    .save()
                    .then(user => {
                        done(null, user);
                    });
                }
            })  
        }
    )
);
