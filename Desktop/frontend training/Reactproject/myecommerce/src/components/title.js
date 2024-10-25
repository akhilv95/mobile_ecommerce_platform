import React from "react";

export default function Title({ name, head }) {
  return (
    <div className="row">
      <div className="col-10 mx-auto my-2 text-center text-title">
      <h1 style={{ textTransform: 'uppercase' }}>{name} {head}</h1>
      </div>
    </div>
  );
}
