class WhatToBring extends React.Component {
  constructor(props) {
    super(props);
  }

  fetchTable() {
    console.log('hit fetchtable');
  }

  render() {
    this.fetchTable();
    return (
      <div>What To Bring Page Here
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Cost</th>
              <th>Owner</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>{}</th>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}