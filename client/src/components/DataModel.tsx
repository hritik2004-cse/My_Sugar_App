import api from "@/lib/api";
import { MdDeleteOutline } from "react-icons/md";
import { DataModelProps } from "@/types/dataModel.types";
import React, { useState } from "react";

const DataModel = ({ reading, date, id, loadData }: DataModelProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [openModel, setOpenModel] = useState<boolean>(false);
  
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
        <h2 className="text-xl font-bold">{reading}</h2>
        <p className="text-sm text-white/70">{new Date(date).toDateString()}</p>
      </div>
      <button
        className="bg-red-900 text-red-100 p-2 rounded-md active:scale-95 active:bg-red-800"
        onClick={() => handleDelete(id)}
      >
        <MdDeleteOutline className="text-2xl" />
      </button>
    </article>
  );
};

export default DataModel;
