import type { Request, Response } from "express";
import type { dataDto } from "../dto/data.dto.js";
import {
  addDataService,
  allDataService,
  deleteDataService,
} from "../service/data.service.js";

const addData = async (req: Request, res: Response) => {
  try {
    const body = req.body as dataDto;
    const result = await addDataService(body);
    return res.status(201).json({
      success: true,
      message: "Data added successfully",
      data: result,
    });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({
        success: false,
        message: "Internal server error",
        error: error.message,
      });
    }
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

const allData = async (req: Request, res: Response) => {
  try {
    const data = await allDataService();
    return res.status(200).json({
      success: true,
      message: "Data fetched successfully",
      data: data,
    });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({
        success: false,
        message: "Internal server error",
        error: error.message,
      });
    }
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

const deleteData = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    console.log("[DELETE] Received delete request for id:", id);
    if (!id || typeof id !== "string") {
      return res
        .status(400)
        .json({ success: false, message: "ID is required" });
    }
    const cleanId = id.trim();
    const data = await deleteDataService(cleanId);
    if (!data) {
      return res
        .status(404)
        .json({ success: false, message: "Data not found" });
    }
    return res.status(200).json({
      success: true,
      message: "Data deleted successfully",
      data: data,
    });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({
        success: false,
        message: "Internal server error",
        error: error.message,
      });
    }
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

export { addData, allData, deleteData };
