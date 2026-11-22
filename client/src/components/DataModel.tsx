import api from "@/lib/api";
import Loader from "./Loader";
import React, { useState } from "react";
import { useData } from "@/context/DataContext";
import { MdDeleteOutline } from "react-icons/md";
import { DataModelProps } from "@/types/dataModel.types";

const DataModel = ({ reading, date, id }: DataModelProps) => {

  const [loading, setLoading] = useState<boolean>(false);
  const [openModel, setOpenModel] = useState<boolean>(false);

  const levelStyles = {
    "very low": "bg-red-600 text-white",
    low: "bg-orange-500 text-white",
    normal: "bg-green-500 text-white",
    "moderately high": "bg-yellow-400 text-yellow-900",
    high: "bg-orange-600 text-white",
    "very high": "bg-red-700 text-white",
  };

 const level = (reading: number) => {
  if (reading < 54) return "very low";
  if (reading <= 69) return "low";
  if (reading <= 99) return "normal";
  if (reading <= 125) return "moderately high";
  if (reading <= 180) return "high";
  return "very high";
};

const status = level(reading);

  const { loadData } = useData();

  const handleDelete = async (dataId: string) => {
    try {
      setLoading(true);
      await api.delete(`/data/delete/${dataId}`);
      loadData();
    } catch (error) {
      if (error instanceof Error) {
        console.error(`Error occurred: ${error.name}`);
      }
    } finally {
      setLoading(false);
    }
  };
  return (
    <article className="w-full flex items-center justify-between py-2 px-3 border-b border-b-gray-500">
      <div className="flex flex-col">
        <div className="flex items-center justify-start gap-2">
          <h2 className="text-xl font-bold">{reading}</h2>
          <span
            className={`px-2 py-0.5 rounded-full text-xs font-semibold ${levelStyles[status]}`}
          >
            {status}
          </span>
        </div>
        <p className="text-sm text-white/70">{new Date(date).toLocaleString()}</p>
      </div>
      <button
        className="bg-red-900 text-red-100 p-2 rounded-md active:scale-95 active:bg-red-800"
        onClick={() => handleDelete(id)}
      >
        {loading ? (
          <Loader size="sm" />
        ) : (
          <MdDeleteOutline className="text-2xl" />
        )}
      </button>
    </article>
  );
};

export default DataModel;
