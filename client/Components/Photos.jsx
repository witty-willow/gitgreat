import React from 'react';
import {Grid, Row, Col, Table} from 'react-bootstrap';

class Photos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photoUrls: []
    }

  }
  componentWillMount() {
    this.displayPhotos();
  }

  displayPhotos() {
    // // ajax get request from server with correct route
    //     // remember to make a new route
    var photoLinks = []
    $.get('/displayImages', function(data) {
      data.forEach(function(el) {
        photoLinks.push(el.url);
      });
      this.setState({
        photoUrls: photoLinks
      });
    }.bind(this));
  }
  uploadFile(e) {
    e.preventDefault();
    var formData = new FormData();
    var files = $('input[type=file]')[0].files[0];

    formData.append('imageFile', files);
    $.ajax({
      url: '/uploadImage',
      type: 'POST',
      data: formData,
      processData: false, // tells jQuery not to process data
      contentType: false, // tells jQuery not to set contentType
      success: setTimeout(function() {
        this.displayPhotos();
        console.log('wait');
      }.bind(this), 2000)
    });
  }
  render() {
    
    return (
      <Grid>
        <div>Photos Tab Stuff Here
          <form method="post" encType="multipart/form-data" id="uploadForm">
            <input type="file" id="imageUpload" accept="image/*" multiple /><br/>
            <input type="submit" value="submit" onClick={(e) => this.uploadFile(e)}/>
          </form>
          {this.state.photoUrls.map(link => <img className="photos" src={link} />)}
        </div>
      </Grid>
    );
  }
}

module.exports = Photos;