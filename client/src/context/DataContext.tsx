"use client";

import api from "@/lib/api";
import { Data } from "@/types/data.types";
import { createContext, useContext, useEffect, useState } from "react";
import { DataContextProps, DataContextType } from "@/types/dataContext.types";

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider = ({ children }: DataContextProps) => {
  const [data, setData] = useState<Data[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const loadData = async () => {
    try {
      setLoading(true);
      const response = await api.get("/data/all");
      setData(response.data.data);
    } catch (error) {
      if (error instanceof Error) {
        console.error(`Error occurred: ${error.name}`);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <DataContext.Provider value={{ data, loading, loadData }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
};
