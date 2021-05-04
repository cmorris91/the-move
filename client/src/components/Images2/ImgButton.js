import React from "react";

function ImgButton (props) {
    return (

    <div className="row imageBtn">
        <button type="button" className="button col" onClick={props.handleBtnClick}>See Photos</button>
    </div>
    )
}

export default ImgButton;