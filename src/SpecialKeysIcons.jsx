import React from "react";
import SpaceBar from "../assets/space_bar.svg";
import CapsLock from "../assets/capslock.svg";
import Ctrl from "../assets/ctrl.svg";
import Enter from "../assets/enter.svg";
import Shift from "../assets/shift.svg";

const SpecialKeysIcons = ({ specialKey }) => {
  return {
    Space: <SpaceBar />,
    CapsLock: <CapsLock />,
    ControlRight: <Ctrl />,
    ControlLeft: <Ctrl />,
    Enter: <Enter />,
    ShiftLeft: <Shift />,
    ShiftRight: <Shift />,
  }[specialKey];
};

export default SpecialKeysIcons;
