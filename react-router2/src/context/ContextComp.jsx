import React, { createContext } from "react";
//  context를 통해서 데이터를 전달하기 위해 createContext사용

// state를 담아서 전달
export const StateContext = createContext(null);
// set을 담아서 전달
export const SetContext = React.createContext(null);

