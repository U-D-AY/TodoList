import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import todoRoutes from "./routes/todos.js";
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// MongoDB Connection with async/await
const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/todolist", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};

connectDB();

// Use routes
app.use("/todos", todoRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
