const passport = require('passport')

module.exports = (app) => {
// The app responds with request to the path /auth/google
    app.get(
        '/auth/google', 
        passport.authenticate('google', {
        scope:['profile', 'email']
        })
    );

    app.get('/auth/google/callback', passport.authenticate('google'));

    app.get('/api/logout', (req, res) => {
        req.logout();
        res.send(req.user); 
    });

    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    });
}

