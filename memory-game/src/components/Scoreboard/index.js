import React from "react";

function Scoreboard(props) {
    return (
        <div className="scoreboard">
            <p className="text-center badge badge-primary">Score: {props.score}</p>
        </div>
    );
}

export default Scoreboard;