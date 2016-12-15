var Sequelize = require('sequelize');
var mysql = require('mysql');

var sequelize = new Sequelize('gitgreat', 'root', '', {
  host: 'localhost', dialect: 'mysql'
});

mysql.createConnection({
  user: root,
  password: null,
  database: 'gitgreat'
});


var EventTable = sequelize.define('events', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING
  },
  where: {
    type: Sequelize.STRING
  },
  when: {
    type: Sequelize.DATE
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

var PhotosTable = sequelize.define('photos', {
 url: {
   type: Sequelize.STRING
 }
});

var ReminderTable = sequelize.define('reminders', {
  phoneNumber: {
    type: Sequelize.STRING
  },
  msg: {
    type: Sequelize.STRING
  },
  when: {
    type: Sequelize.DATE
  },
});

var UsersTable = sequelize.define('users', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  username: {
    type: Sequelize.STRING
  },
  password: {
    type: Sequelize.STRING
  },
});



//Create associations such that ItemListTable and ReminderTable contain eventId
ItemListTable.belongsTo(EventTable);
ReminderTable.belongsTo(EventTable);
UsersTable.belongsToMany(EventTable, {through: 'UsersTableEventTable'});
EventTable.belongsToMany(UsersTable, {through: 'UsersTableEventTable'});

sequelize
  .authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.');
  })
  .catch(function (err) {
    console.log('Unable to connect to the database:', err);
  });



sequelize.sync()
  .then(function(err) {console.log('It worked!')}, function(err) {console.log('Error occured', err)});

module.exports.PhotosTable = PhotosTable;
module.exports.EventTable = EventTable;
module.exports.ItemListTable = ItemListTable;    
module.exports.ReminderTable = ReminderTable;
module.exports.UsersTable = UsersTable;