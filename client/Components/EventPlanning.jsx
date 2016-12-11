class EventPlanning extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: false
    };

    this.changeDisplay = this.changeDisplay.bind(this);
  }

  changeDisplay(e) {
    this.setState({
      tab: e.target.value
    });
  }

  render() {
    var view;
    if (this.state.tab === 'whatToBringBtn') {
      view = <WhatToBring featuredEvent={this.props.featuredEvent}/>;
    } else if (this.state.tab === 'activitiesBtn') {
      view = <Activities />;
    }
    return (
      <div>
        <h1>EVENT</h1>
        <div>Event: {this.props.featuredEvent.Name}</div>
        {view}
        <FeatureNavigation changeDisplay={this.changeDisplay} />
      </div>
    );
  }
}
window.EventPlanning = EventPlanning;

