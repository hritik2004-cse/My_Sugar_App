import { Router } from "express";
import { dataSchema } from "../dto/data.dto.js";
import verify from "../middleware/verify.middleware.js";
import { addData, allData, deleteData } from "../controller/data.controller.js";

const dataRouter: Router = Router();

dataRouter.get("/all", allData);
dataRouter.post("/add", verify(dataSchema), addData);
dataRouter.delete("/delete/:id", deleteData);

export default dataRouter;
