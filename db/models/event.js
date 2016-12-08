var Sequelize = require('sequelize');

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

module.exports = Event;