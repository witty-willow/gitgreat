class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: false
    }
  }

  changeDisplay() {
    console.log('hit');
    this.setState({
      tab: true
    });
  }

  render() {
    return (<div>
              <h1>EVENT</h1>
              <div>Display Tab Below Stuff Here</div>
              {this.state.tab ? <WhatToBring /> : null}
              <FeatureNavigation changeDisplay={this.changeDisplay.bind(this)} />
            </div>);
  }
}
window.App = App;

