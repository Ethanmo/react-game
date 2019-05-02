import React from "react";
import "./style.css"

function Gameblock(props) {


    return (
        <img 
            className="gameblock"
            imgid={props.id} 
            src={props.img} 
            alt={props.id} 
            data-picked={false}
            style={{width: 230,
                  height: 230}}
            onClick={props.onClick}
        />
    )

}

export default Gameblock;