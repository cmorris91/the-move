import React from "react";



export function Container({ fluid, children }) {
    return <div className={`container${fluid ? "-fluid" : ""}`}>{children}</div>
}


export function List({ children }) {
    return (
        <div>
            <ul className="list-group">{children}</ul>
        </div>
    );
}

export function ListItem({ children }) {
    return  <li className="list-group-item">{children}</li>;

}

