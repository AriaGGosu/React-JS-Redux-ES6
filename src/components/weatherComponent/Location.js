import React , { Component } from "react";

const Location = (props) => {
    const { city } = props;
    return (
        <div>
            <h1>{ city }</h1>
        </div>
    )
}

export default Location;