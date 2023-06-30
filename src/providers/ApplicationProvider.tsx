import React, { createContext, useContext, useState } from "react";
import { ApplicationContextType } from "./types";
import { defaultApplicationValues } from "@/constants";

const ApplicationContext = createContext<ApplicationContextType | null>(null);

export function useApplicationContext() {
  return useContext(ApplicationContext);
}

type Props = {
  children: any;
};

export function ApplicationProvider({ children }: Props) {
  const [applicationValues, setApplicationValues] = useState(
    defaultApplicationValues
  );

  const value: ApplicationContextType = {
    applicationValues,
    setApplicationValues,
  };

  return (
    <ApplicationContext.Provider value={value}>
      {children}
    </ApplicationContext.Provider>
  );
}
