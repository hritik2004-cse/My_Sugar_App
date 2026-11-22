"use client";

import DataModel from "@/components/DataModel";
import { DataProvider, useData } from "@/context/DataContext";
import { PiEyedropperSampleFill } from "react-icons/pi";

const HomePageContent = () => {
  const { loading, data } = useData();

  return (
    <>
      {loading ? (
        <div className=""></div>
      ) : (
        <div className="h-full w-full">
          {data.length === 0 ? (
            <div className="h-[80vh] w-full flex items-center justify-center">
              <div className="flex flex-col justify-center items-center">
                <PiEyedropperSampleFill className="text-4xl text-foreground/70" />
                <p className="text-foreground/70 text-base">No readings yet.</p>
                <p className="text-foreground/40 text-sm">
                  Click &ldquo;Add&rdquo; to log your first sugar reading.
                </p>
              </div>
            </div>
          ) : (
            <div className="w-full h-full gap-4 text-foreground grid grid-cols-1 scrollbar-none">
              {data.map((data) => {
                return (
                  <DataModel
                    key={data._id}
                    reading={data.reading}
                    id={data._id}
                    date={data.date}
                  />
                );
              })}
            </div>
          )}
        </div>
      )}
    </>
  );
};

const HomePage = () => {
  return (
    <DataProvider>
      <HomePageContent />
    </DataProvider>
  );
};

export default HomePage;
