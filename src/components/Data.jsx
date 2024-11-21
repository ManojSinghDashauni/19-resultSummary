import React from "react";
import data from "../data.json";
import Button from "./Button";

const Data = () => {
  return (
    <div className="data">
      <h3 className="heading--3">Summary</h3>
      {data.map((item) => {
        let bg = item.bg;
        let colour = item.color;
        return (
          <div key={item.id} className="data__tab" style={{ background: bg }}>
            <div className="data__img--box">
              <img className="data__img" src={item.icon} alt={item.category} />
              <h4 className="heading--4" style={{ color: colour }}>
                {item.category}{" "}
              </h4>
            </div>
            <h4 className="heading--4">
              {item.score}{" "}
              <span style={{ color: "hsl(224, 30%, 27%)" }}>/ 100</span>{" "}
            </h4>
          </div>
        );
      })}
      <Button />
    </div>
  );
};

export default Data;
