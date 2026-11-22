import type { Request, Response, NextFunction } from "express";
import z, { type ZodType } from "zod";

const verify = (schema: ZodType) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body);
    if (!result.success) {
      res.status(400).json({
        success: false,
        message: "Zod validation error",
        error: z.treeifyError(result.error),
      });
      return;
    }
    req.body = result.data;
    next();
  };
};

export default verify;
