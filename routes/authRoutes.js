const passport = require('passport');

module.exports = app => {
  //sending auth request to google with the scoope
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );
  
  //if I obtained the grant i redirect to /api/current_user
  app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/login'}), (req, res) =>{
    res.redirect('/api/current_user');
  });

  //route to logout
  app.get('/api/logout', (req, res) => {
    req.logout();
    res.send(req.user);
  });

  //just seeing user info
  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
};