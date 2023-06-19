import express from "express";
import { addTodo, getTodos, toggleTodoDone } from "../controller/addTodo.js";

const route = express.Router();

route.post("/todos", addTodo);
route.get("/todos", getTodos);
route.get("/todos/:id", toggleTodoDone);

export default route;
