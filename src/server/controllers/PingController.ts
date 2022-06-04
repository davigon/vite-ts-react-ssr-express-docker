import { Request, Response } from "express"

export class PingController {
  public static ping = async (_req: Request, res: Response) => {
    res.send("pong")
  }
}
