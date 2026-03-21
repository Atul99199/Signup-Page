const express = require('express');
const router = express.Router();
const Todo = require('../Models/Todo');

// ➕ Add Todo
router.post('/', async (req, res) => {
  try {
    const { text, userId } = req.body;

    const newTodo = new Todo({ text, userId });
    await newTodo.save();

    res.json({ success: true, data: newTodo });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 📋 Get Todos
router.get('/:userId', async (req, res) => {
  try {
    const todos = await Todo.find({ userId: req.params.userId });
    res.json(todos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ❌ Delete Todo
router.delete('/:id', async (req, res) => {
  try {
    await Todo.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ Toggle Complete
router.put('/:id', async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    todo.completed = !todo.completed;
    await todo.save();

    res.json(todo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;