import Data from "../model/app.model.js";
import type { dataDto } from "../dto/data.dto.js";

const addDataService = async (data: dataDto) => {
  const result = await Data.create({ reading: data.reading });
  return result;
};

const allDataService = async () => {
  const data = await Data.find().sort({ createdAt: -1 });
  return data;
};

const deleteDataService = async (id: string) => {
  const result = await Data.findByIdAndDelete(id);
  return result;
};

export { addDataService, allDataService, deleteDataService };
