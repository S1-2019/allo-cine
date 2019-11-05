import React from "react";

export default function Category(props) {
  return (
    <>
      <div className="Category">{props.intro}</div>
      <div className="Genre">{props.name}</div>
    </>
  );
}
