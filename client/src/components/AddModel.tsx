"use client";

import { SubmitEventHandler } from "react";

interface AddModelProps {
  onClose: () => void;
}

const submitHandler: SubmitEventHandler<HTMLFormElement> = (e) => {
  e.preventDefault();
  try {
    
  } catch (error) {
    
  }
};

const AddModel = ({ onClose }: AddModelProps) => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
      onClick={onClose}
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
          <button className="bg-accent-primary hover:brightness-125 transition px-5 py-2 rounded-md text-sm font-semibold text-foreground">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddModel;
