import React from "react";
import './Box.css'

const Box = (props) => {
    console.log("props in Box component:", props)
    return (
        <div className="box">
            <h1>{props.title}</h1>
            <img className="item-img" src={props.item && props.item.img} />
            <h2>Win</h2>
        </div>
    )

}

export default Box;