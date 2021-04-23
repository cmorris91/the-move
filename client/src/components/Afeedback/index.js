import React from "react";
import { List, ListItem } from "../List";


function Afeedback(props){
  let idklol=props.allfeedback

return(
  <div>
  <h1 className="text-center">List of Events</h1>
  <List>
  {props.allfeedback ? props.allfeedback.map(event => (
    <ListItem key={event}>
        
          <strong>
              {event}
          </strong>
        
    </ListItem>

  )):<div></div>
}
  </List>
</div>
)
}
export default Afeedback