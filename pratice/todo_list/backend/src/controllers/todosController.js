import { Todo } from "../models/todoModel.js";
const init = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch tasks", error: error.message });
  }
};
// Create Todo
const createTodo = async (req, res) => {
  const { task } = req.body;
  try {
    await Todo.create({ task });
    res.json({ message: "Task is Created Done" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Task is not Created Done", error: error.message });
  }
};
const deleteTodo = async (req, res) => {
  const { taskId } = req.params;
  Todo.findByIdAndUpdate(taskId, { isActive: false })
    .then(() => {
      res.json({ ms: "Task is Deleted Done" });
    })
    .catch(() => {
      res.json({ ms: "Task is not Deleted" });
    });
};
const toggleTaskActiveStatus = async (req, res) => {
  const { taskId } = req.params;
  const task = await Todo.findById(taskId);
  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }
  task.isCompleted = !task.isCompleted;
  await task.save();
  res.json({ message: "Task status is toggled successfully" });
  // Todo.findByIdAndUpdate(taskId, { isActive: !isActive })
  //   .then(() => {
  //     res.json({ ms: "Task is Deleted Done" });
  //   })
  //   .catch(() => {
  //     res.json({ ms: "Task is not Deleted" });
  //   });
};
export { init, createTodo, deleteTodo, toggleTaskActiveStatus };
