import React from 'react';
import {Panel, Container, Form, Button} from 'react-bootstrap';

class Bulletin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: 'test',
      message: 'test message',
      posts: []
    }
    this.handleMessageChange = this.handleMessageChange.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
    this.postBulletin = this.postBulletin.bind(this);
    this.getBulletins = this.getBulletins.bind(this);
  }

  componentDidMount() {
    this.getBulletins();
  }

  getBulletins() {
    $.ajax({  
      url: '/bulletinPosts',
      type: 'GET',
      contentType: 'application/json',
      // processData: false, // tells jQuery not to process data
      // contentType: false, // tells jQuery not to set contentType
      success: (data) => {
        console.log('got events!: ', data);
        this.setState({posts: data});
      }
    })
  }

  handleUserChange(event) {
    this.setState({
      user: event.target.value
    });
  }

  handleMessageChange(event) {
    this.setState({
      message: event.target.value
    });
   console.log(this.state);
  }

  postBulletin(event) {
    event.preventDefault();

    var bulletinData = {
      user: this.state.user,
      message: this.state.message,
      event: this.props.featuredEvent
    }
    
    var successHandler = function() {
      console.log('successhandler called');
      this.getBulletins();
    }.bind(this);

    console.log('props:', this.props);
    $.ajax({  
      url: '/bulletin',
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify(bulletinData),
      // processData: false, // tells jQuery not to process data
      // contentType: false, // tells jQuery not to set contentType
      success: (data) => {
        console.log('post request successful and saved to db!', data);  
        successHandler();
      }
    });
  }

  render() {
    return (
      <div id="bulletin" className="container">
        <Panel header='Event News & Discussion'>
          <Form className="bringForm" onSubmit={this.postBulletin}>
            <label>
              User:
            <input type='text' name='owner'
              onChange={this.handleUserChange}
            />
            </label>
            <label>
              Message:
              <input type='text' name='item'
                onChange={this.handleMessageChange}
              />
            </label>
            <Button type="submit" value="Submit">
              Submit
            </Button>
          </Form>
          <br />
          <br /> 
            {this.state.posts.map(function(post) {
                return (
                  <div>
                    <h4>{post.user}</h4>
                    <p>{post.text}</p>
                  </div>
                )
              } 
            )}      
        </Panel>
      </div>);
  }
}

module.exports = Bulletin;