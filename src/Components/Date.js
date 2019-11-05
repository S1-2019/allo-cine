import React from "react";

export default function Date(props) {
  return (
    <>
      <div className="Release">{props.intro}</div>
      <div className="DateInfo">{props.day}</div>
      <div className="Duration">{props.duration}</div>
    </>
  );
}
