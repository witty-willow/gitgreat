const express = require('express');
const path = require('path');
const parser = require('body-parser');
const db = require('../db');
const EventTable = require('../db/index.js');
//

const app = express();

app.use(parser.json());
app.use(express.static('public'));


// Links to database controllers
// const newEvent = path.join(__dirname, '../db/event.js');
// const itemList = path.join(__dirname, '../db/itemlist.js');

const dbModels = require('../db/index.js');

// Adds events from eventTable to database, using database method 'eventTable'
app.post('/eventTable', function(req, res, next) {
  dbModels.EventTable
    .create({name: JSON.stringify(req.body.name),
            where: JSON.stringify(req.body.where),
            when: JSON.stringify(req.body.when)})
    .save()
    .then(function(event) {
      console.log(event);
    })
    .catch(function(err) {
      console.log('Error: ', err);
    })
}); 

app.get('/eventTable', function(req, res, next) {
  dbModels.EventTable.getAll()
  .then(function(resp) {
    console.log('Got Events: ', resp);
  });
});

app.post('/itemList', function(req, res, next) {
  dbModels.ItemListTable
    .create({item: JSON.stringify(req.body.item),
             owner: JSON.stringify(req.body.owner),
             cost: JSON.stringify(req.body.cost)})
    .save()
    .then(function(item) {
      console.log(item)
    }).catch(function(err) {
      console.log('Error: ', err);
    })
});
app.get('/itemList', function(req, res, next) {
  dbModels.ItemListTable.getAll()
  .then(function(resp) {
    console.log('Got Items: ', resp);
  })
});


app.listen(3000, function() {
  console.log('Server is listening on port 3000');
})

module.exports = app;

// dbModels.EventTable
//   .create({name: 'Tim',//JSON.stringify(req.body.name),
//           where: 'Hotpot',//JSON.stringify(req.body.where),
//           when: '8PM'})//JSON.stringify(req.body.when)})
//   .then(function(event) {
//     console.log('event!!!!!!!!!', event);
//   })
//   .catch(function(err) {
//     console.log('Hotpot Error: ', err);
//   })



