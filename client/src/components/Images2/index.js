import React, {useEffect, useState}from "react";
import {Image} from "semantic-ui-react" 
function Images2(props){

console.log("images2",props.images)


    return(
        <div className="row">
             {props.images?props.images.map(image =>(
                <Image style={{height: "min-content"}} className="images-array col"  key={image} src={image} size='medium' centered />)):<div />}
        </div>
    )
}









export default Images2;