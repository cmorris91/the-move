import React from "react";
import { List, ListItem } from "../List";


function Afeedback(props){
  let idklol=props.allfeedback

return(
  <div className="feedback-box">
  <h1 className="text-center">What People Are Saying</h1>
  <div>
  {props.allfeedback ? props.allfeedback.map(event => (
    <p className="feedback-list" key={event}> 
          <strong>
              "{event}"
          </strong>
      </p>

  )):<div></div>
}
  </div>
</div>
)
}
export default Afeedback