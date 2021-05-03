import React from 'react';

class ImageUpload extends React.Component {
  constructor(props){
     super(props);
     this.state = {}
   }
  showWidget = () => {
    
    let widget = window.cloudinary.createUploadWidget({ 
       cloudName: `dy1duzvrr`,
       uploadPreset: `the-move`,
       cropping: true}, 
    (error, result) => {
      if (!error && result && result.event === "success") { 
      this.props.updateImageState(result.info.url); 
    }});
    widget.open()
  }
  render() {
    return (<div className='photo-input'>
            <h1 className="input-title">Add Photos of your experience!</h1>
           <button className="button" onClick={this.showWidget}>Upload Photos</button>
           </div>
    );
  }
}
export default ImageUpload;
