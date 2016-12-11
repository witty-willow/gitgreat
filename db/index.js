var Sequelize = require('sequelize');
var mysql = require('mysql');

mysql.createConnection({
  user: root,
  password: null,
  database: 'gitgreat'
});

var sequelize = new Sequelize('gitgreat', 'root', '', {
  host: 'localhost', dialect: 'mysql'
});

var EventTable = sequelize.define('events', {
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

var ItemListTable = sequelize.define('itemlists', {
  item: {
    type: Sequelize.STRING
  },
  owner: {
    type: Sequelize.STRING
  },
  cost: {
    type: Sequelize.STRING
  },
});

ItemListTable.belongsTo(EventTable);

// test the connection, works!
sequelize
  .authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.');
  })
  .catch(function (err) {
    console.log('Unable to connect to the database:', err);
  });

module.exports.EventTable = EventTable;
module.exports.ItemListTable = ItemListTable;    