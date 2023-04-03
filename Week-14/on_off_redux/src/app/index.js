import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { switchRoom } from "../Slices/flipSwitch";
export function Flip() {
  const isLightOn = useSelector((state) => state.flip.isLightOn);
  const dispatch = useDispatch();
  const lightedness = isLightOn ? "lit" : "dark";

  return (
    <div className={`room ${lightedness}`}>
      the room is {lightedness}
      <br />
      <button onClick={() => dispatch(switchRoom())}>flip</button>
    </div>
  );
}
