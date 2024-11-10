import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
  task: String,
  completed: Boolean,
});

const Todo = mongoose.model("Todo", TodoSchema);
export default Todo;
