class EventPlanning extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: false
    }
  }

  changeDisplay(e) {
    // console.log('hit');
    // console.log('e here:', e.target.value);
    this.setState({
      tab: e.target.value
    });
  }

  render() {
    console.log(this.props.featuredEvent);
    return (<div>
              <h1>EVENT</h1>
              <div>Display Event: {this.props.featuredEvent.Name}</div>
              {this.state.tab === 'whatToBringBtn' ? <WhatToBring /> : null}
              {this.state.tab === 'activitiesBtn' ? <Activities /> : null}
              <FeatureNavigation changeDisplay={this.changeDisplay.bind(this)} />
            </div>);
  }
}
window.EventPlanning = EventPlanning;

