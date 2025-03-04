import React from "react";

function Character(props) {
  return (
    <div className="character">
      <p>id: {props.id}</p>
      <p>name: {props.name}</p>
      <p>status {props.status}</p>
      <p>species {props.species}</p>
      <p>type {props.type}</p>
      <img src={props.image} alt="" />
    </div>
  );
}

export default Character;
