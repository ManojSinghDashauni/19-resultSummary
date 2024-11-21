import React from "react";

export const Card = () => {
  return (
    <div className="card">
      <h3 className="heading--3">Your Result</h3>
      <div className="card__circle">
        <h1 className="heading--1">76</h1>
        <h4 className="heading--4">of 100</h4>
      </div>
      <h2 className="heading--2">Great</h2>
      <p className="paragraph">
        You scored higher than 65% of the people who have taken these tests.{" "}
      </p>
    </div>
  );
};
