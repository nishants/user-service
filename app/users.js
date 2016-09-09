module.exports = function(app){
  app.post('/users/create', function(request, response) {
    var user = {
      id    : Math.random(),
      mail  : request.body.mail
    };

    response.json(user);
  });
};