import { ApplicationValues } from "@/components/types";

export type ApplicationContextType = {
  applicationValues: ApplicationValues;
  setApplicationValues: React.Dispatch<React.SetStateAction<ApplicationValues>>;
  applicationErrors: Record<string, string>;
  validateApplicationValues: (name: string, value: string) => void;
  hasApplicationError: () => boolean;
};

export type Option = {
  label: string;
  value: string;
};
