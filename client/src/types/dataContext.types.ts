import React from "react";
import { Data } from "./data.types";

export type DataContextType = {
  data: Data[];
  loading: boolean;
  loadData: () => Promise<void>;
};

export type DataContextProps = {
  children: React.ReactNode;
};
