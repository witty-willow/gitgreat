class WhatToBring extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemList: [{item: 'mashed potatoes', cost: '20', owner: 'Jenn'}],
      currentItem: null,
      currentOwner: null,
      currentCost: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleItemChange = this.handleItemChange.bind(this);
    this.handleCostChange = this.handleCostChange.bind(this);
    this.handleOwnerChange = this.handleOwnerChange.bind(this);
    this.fetchItems = this.fetchItems.bind(this);
  }
  componentDidMount() {
    this.fetchItems();
  }

  fetchItems() {
    var eventParam = this.props.featuredEvent.name.split(' ').join('_');
    var successHandler = function(data) {
      this.setState({itemList: data});
    };
    $.ajax({
      method: 'GET',
      url: '/itemList?eventName=' + eventParam,
      success: successHandler.bind(this)
    });
  }

  handleSubmit(event) {
    var item = {
      item: this.state.currentItem,
      cost: this.state.currentCost,
      owner: this.state.currentOwner
    };
    var successHandler = function(data) {
      this.fetchItems();
    };
    var eventParam = this.props.featuredEvent.name.split(' ').join('_');
    console.log('/itemList?eventName=' + eventParam);
    $.ajax({
      method: 'POST',
      url: '/itemList?eventName=' + eventParam,
      data: JSON.stringify(item),
      contentType: 'application/json',
      success: successHandler.bind(this)
    });
    event.preventDefault();
  }

  handleItemChange(event) {
    this.setState({
      currentItem: event.target.value
    });
  }

  handleOwnerChange(event) {
    this.setState({
      currentOwner: event.target.value
    });
  }

  handleCostChange(event) {
    this.setState({
      currentCost: event.target.value
    });
  }

  render() {
    return (
      <div>What To Bring Page
        <form onSubmit={this.handleSubmit}>
          <label>
            Item: 
            <input type='text' name='item' 
              onChange={this.handleItemChange}
            />
          </label>
          <label>
            Cost: 
            <input type='text' name='cost' 
              onChange={this.handleCostChange}
            />
          </label>
          <label>
            Owner:
          <input type='text' name='owner' 
            onChange={this.handleOwnerChange}
          />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Cost</th>
              <th>Owner</th>
            </tr>
          </thead>
          <tbody>
            {this.state.itemList.map( (item) => 
              <tr>
                <th>{item.item}</th>
                <th>{item.cost}</th>
                <th>{item.owner}</th>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}