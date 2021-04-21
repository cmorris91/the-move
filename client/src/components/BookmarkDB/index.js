import React from "react";
import { Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'


export function SaveBookmarkBtn(props) {
  return (
    <Button {...props} className="btn btn-success">
      {props.name}
    </Button>
  );
}
