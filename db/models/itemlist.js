var ItemListTable = sequelize.define('itemlist', {
  item: {
    type: Sequelize.STRING
  },
  owner: {
    type: Sequelize.STRING
  },
  oost: {
    type: Sequelize.STRING
  }
});


module.exports = ItemList;