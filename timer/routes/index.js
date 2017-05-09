module.exports = function (app) {
  app.get('/', function (req, res) {
    res.redirect('/timer');
  });
  app.use('/timer', require('./timer'));
  app.use('/managePage', require('./managePage'));

};
