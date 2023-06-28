import { Router, Request, Response } from "express";
import Server from "../casses/server";

const router = Router();

/**
 * @description GET Messages Endpoint
 */
router.get("/messages", (req: Request, res: Response) => {
  res.json({
    ok: true,
    message: "all good",
  });
});

/**
 * @description POST Messages Endpoint
 */
router.post("/messages", (req: Request, res: Response) => {
  const body = req.body.body;
  const from = req.body.from;

  res.json({
    ok: true,
    body,
    from,
  });

  //   res.json({
  //     ok: true,
  //     body: body,
  //     from: from
  //   });
});

/**
 * @description POST ID Messages Endpoint
 */
router.post("/messages/:id", (req: Request, res: Response) => {
  const body = req.body.body;
  const from = req.body.from;
  const id = req.params.id;

  res.json({
    ok: true,
    body,
    from,
    id,
  });
});

export default router;
