import React from 'react';
import {Panel, Container} from 'react-bootstrap';

class Bulletin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bulletinPosts: []
    }
  }


  render() {
    return (
      <div id="bulletin" className="container">
        <Panel header='Information'>
          Panel content
        </Panel>
      </div>);
  }
}

module.exports = Bulletin;