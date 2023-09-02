import { createContext, useContext, useState } from "react";

import useBillLogic from "./useBillLogic";

const CalcContext = createContext();

export const useCalcContext = () => {
  return useContext(CalcContext);
};

export const CalcProvider = ({ children }) => {
  const billLogic = useBillLogic();

  return (
    <CalcContext.Provider value={billLogic}>{children}</CalcContext.Provider>
  );
};
