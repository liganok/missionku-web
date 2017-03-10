import Express from 'express';

let app = Express();
app.set('port', process.env.PORT || 3000);

app.use(function (req, res) {
  res.send('hello');
});

app.listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});

