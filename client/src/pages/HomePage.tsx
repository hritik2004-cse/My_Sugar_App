"use client";

import DataModel from "@/components/DataModel";
import api from "@/lib/api";
import { Data } from "@/types/data.types";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [data, setData] = useState<Data[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const loadData = async () => {
    try {
      setLoading(true);
      const response = await api.get("data/all");
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
    <>
      {loading ? (
        <div className=""></div>
      ) : (
        <div className="h-full w-full">
          {data.length === 0 ? (
            <div className="h-full w-full flex items-center justify-center">
              <p className="text-foreground/40 text-sm">
                No readings yet. Click &ldquo;Add&rdquo; to log your first sugar
                reading.
              </p>
            </div>
          ) : (
            <div className="w-full h-full gap-4 text-foreground grid grid-cols-1">
              {data.map((data) => {
                return (
                  <DataModel
                    loadData={loadData}
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

export default HomePage;
