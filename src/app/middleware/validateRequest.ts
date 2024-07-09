import { NextFunction, Request, Response } from 'express'
import { AnyZodObject } from 'zod'

const validateRequest = (Schema: AnyZodObject) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      Schema.parseAsync({
        body: req.body
      })
    } catch (error: any) {
      res.status(400).json({
        error: error.message
      })
      return next()
    }
  }
}

export default validateRequest
