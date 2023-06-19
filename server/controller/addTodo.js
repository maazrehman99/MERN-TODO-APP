import todo from "../model/todo.js";

export const addTodo = async (req, res) => {
  try {
    const newTodo = await todo.create({
      data: req.body.data,
      createdAt: Date.now(),
    });
    await newTodo.save();
    return res.status(200).json(newTodo);
  } catch (err) {
    return res.status(500).json(err.message);
  }
};

export const getTodos = async (req, res) => {
  try {
    const todos = await todo.find({}).sort({ createdAt: -1 });
    return res.status(200).json(todos);
  } catch (err) {
    return res.status(500).json(err.message);
  }
};
export const toggleTodoDone = async (req, res) => {
  try {
    const todoRef = await todo.findById(req.params.id);
    const todo = await todoRef.findAndUpdate(
      {
        _id: req.params.id,
      },
      {
        done: !todoRef.done,
      }
    );
    await todo.save();
  } catch (err) {
    return res.status(500).json(err.message);
  }
};
