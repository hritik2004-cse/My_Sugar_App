"use client";

import api from "@/lib/api";
import { useData } from "@/context/DataContext";
import { AddModelProps } from "@/types/addModel.types";
import { ChangeEvent, SubmitEventHandler, useState } from "react";

const AddModel = ({ onClose }: AddModelProps) => {
  const { loadData } = useData();
  const [reading, setReading] = useState(0);
  const submitHandler: SubmitEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    try {
      await api.post("/data/add", { reading: reading });
      loadData();
      onClose();
    } catch (error) {
      if (error instanceof Error) {
        console.error(`Error occurred: ${error.name}`);
      }
    }
  };

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (!isNaN(value)) {
      setReading(value);
    }
  };
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
    >
      <form
        className="bg-accent-secondary border border-white/10 rounded-xl p-6 w-[90%] max-w-sm shadow-2xl flex flex-col gap-4"
        onSubmit={submitHandler}
      >
        <h2 className="text-lg font-semibold text-foreground">Sugar Reading</h2>

        <div className="flex flex-col gap-1">
          <label className="text-sm text-foreground/60">Reading (mg/dL):</label>
          <input
            type="number"
            placeholder="e.g. 120"
            defaultValue={reading}
            onChange={changeHandler}
            className="bg-accent-primary border border-white/10 rounded-md px-4 py-2 text-foreground placeholder:text-foreground/30 focus:outline-none focus:ring-1 focus:ring-white/20"
          />
        </div>

        <div className="flex gap-3 justify-end mt-2">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-md text-sm text-foreground/50 hover:text-foreground transition"
          >
            Cancel
          </button>
          <button
            className="bg-accent-primary hover:brightness-125 transition px-5 py-2 rounded-md text-sm font-semibold text-foreground"
            type="submit"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddModel;
