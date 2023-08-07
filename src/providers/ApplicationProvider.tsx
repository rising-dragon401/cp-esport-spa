import React, { createContext, useContext, useState } from "react";
import { ApplicationContextType } from "./types";
import { defaultApplicationValues, errorLabels } from "@/constants";
import { validEmail, validPhoneNumber } from "@/utils/helpers";

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

  const [applicationErrors, setApplicationErrors] = useState<
    Record<string, string>
  >({});

  const validateApplicationValues = (name: string, value: string) => {
    let newErrors = Object.assign(applicationErrors);
    const labels: Record<string, string> = errorLabels;
    newErrors[name] = "";
    if (!String(value).trim() && labels[name]) {
      newErrors[name] = `This field is required.`;
    } else if (name === "emailAddress") {
      newErrors[name] = validEmail(value);
    } else if (name === "phoneNumber") {
      newErrors[name] = validPhoneNumber(value);
    }
    setApplicationErrors((prev) => ({ ...prev, ...newErrors }));
  };

  const hasApplicationError = () => {
    let isError = false;
    const labels: Record<string, string> = errorLabels;
    Object.entries(applicationErrors).forEach(([key, value]) => {
      if (value && labels[key]) isError = true;
    });
    return isError;
  };

  const value: ApplicationContextType = {
    applicationValues,
    setApplicationValues,
    applicationErrors,
    validateApplicationValues,
    hasApplicationError,
  };

  return (
    <ApplicationContext.Provider value={value}>
      {children}
    </ApplicationContext.Provider>
  );
}
