import React from 'react';

class ImageUpload extends React.Component {
  constructor(props){
     super(props);
     this.state = {}
   }
  showWidget = () => {
    
    let widget = window.cloudinary.createUploadWidget({ 
       cloudName: `dy1duzvrr`,
       uploadPreset: `the-move`}, 
    (error, result) => {
      if (!error && result && result.event === "success") { 
      this.props.updateImageState(result.info.url); 
    }});
    widget.open()
  }
  render() {
    return (<div className='photo-input'>
            <h2>Add Photos of your experience!</h2>
           <button className="button" onClick={this.showWidget}> Add Photos Here </button>
           </div>
    );
  }
}
export default ImageUpload;
