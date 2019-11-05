import React from "react";

export default function Director(props) {
  return (
    <>
      <div className="De">{props.intro}</div>
      <div className="Nom">{props.name}</div>
    </>
  );
}
