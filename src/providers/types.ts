import { ApplicationValues } from "@/components/types";

export type ApplicationContextType = {
  applicationValues: ApplicationValues;
  setApplicationValues: React.Dispatch<React.SetStateAction<ApplicationValues>>;
};

export type Option = {
  label: string;
  value: string;
};
