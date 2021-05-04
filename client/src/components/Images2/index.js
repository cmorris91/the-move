import React from "react";
import {Image} from "semantic-ui-react" 

function Images2(props){
console.log("images2",props.images)
    return(
        
        <div className="event-images row">
             {props.images?props.images.map(image =>(
                <Image style={{height: "min-content"}} className="images-array col-md-6 "  key={image} src={image} size='small' centered />)):<div />}
        </div>
    
    )
}









export default Images2;