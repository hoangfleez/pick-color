/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import { useState } from "react";

export default function PickColor({ value = "#FFFFFF" }) {
  const [color, setColor] = useState(value);
  const picker_ID = `color-picker${Date.now()}`;

  const handleChange = (e) => {
    setColor(e.target.value);
  };

  useEffect(() => {
    setColor(value);
  }, [value]);

  return (
    <section className="flex gap-3">
      <div className="relative">
        <section className="w-10 h-10">
          <label htmlFor={picker_ID}>
            <div
              style={{ backgroundColor: color, borderRadius: "50%" }}
              className="w-10 h-10 absolute  "
            />
            <div
              style={{ backgroundColor: color, borderRadius: "50%" }}
              className="w-10 h-10  opacity-50 "
            />
          </label>
          <input
            type={"color"}
            id={picker_ID}
            className={"h-0 w-0 opacity-0"}
            onChange={handleChange}
          />
        </section>
      </div>
      <div className="flex flex-col">
        <div>Coler</div>
        <div>{color}</div>
      </div>
    </section>
  );
}
