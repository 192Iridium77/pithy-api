import { Elysia } from "elysia";

new Elysia()
  .get("/", () => "Hello World")
  .get("/json", () => ({
    hello: "world",
  }))
  .listen(3001);
