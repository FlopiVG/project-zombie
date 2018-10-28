import { createServer } from "http";
import * as next from "next";

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev, dir: "client" });
const handle = app.getRequestHandler();

const boostrap = async () => {
  await app.prepare();
  createServer(handle).listen(3000, err => {
    if (err) throw err;
    console.log("> Ready on http://localhost:3000");
  });
};

boostrap();
