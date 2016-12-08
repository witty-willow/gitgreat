var Sequelize = require('sequelize');
// var Event = require('./models/event.js');
// var ItemList = require('./models/itemlist.js');


var sequelize = new Sequelize('database', 'username', null, 
  { dialect: 'sqlite', storage: './db.sqlite' });

var EventTable = Sequelize.define('event', {
  name: {
    type: Sequelize.STRING
  },
  where: {
    type: Sequelize.STRING
  },
  when: {
    type: Sequelize.STRING
  }
});

var ItemListTable = sequelize.define('itemlist', {
  item: {
    type: Sequelize.STRING
  },
  owner: {
    type: Sequelize.STRING
  },
  cost: {
    type: Sequelize.STRING
  }
});

// test the connection, works!
sequelize
  .authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.');
  })
  .catch(function (err) {
    console.log('Unable to connect to the database:', err);
  });

module.exports = EventTable;
module.exports = ItemListTable;