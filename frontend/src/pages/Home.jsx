import React, { useEffect, useState } from "react";
import { handleSuccess } from "../utils";
import { ToastContainer } from "react-toastify";

function Home() {
  const [loggedInUser, setLoggedInUser] = useState("");
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  const userId = localStorage.getItem("name");

  useEffect(() => {
    setLoggedInUser(localStorage.getItem("name"));
    fetchTodos();
  }, []);

  // 📋 Fetch Todos
  const fetchTodos = async () => {
    try {
      const res = await fetch(`https://signup-page-v2h4.vercel.app/todos/${userId}`);
      const data = await res.json();
      setTodos(data);
    } catch (err) {
      console.log(err);
    }
  };

  const addTodo = async () => {
    if (!text) return;

    try {
      await fetch("https://signup-page-v2h4.vercel.app/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text, userId }),
      });

      setText("");
      fetchTodos();
    } catch (err) {
      console.log(err);
    }
  };

  const deleteTodo = async (id) => {
    await fetch(`https://signup-page-v2h4.vercel.app/${id}`, {
      method: "DELETE",
    });

    fetchTodos();
  };

  const toggleTodo = async (id) => {
    await fetch(`https://signup-page-v2h4.vercel.app/${id}`, {
      method: "PUT",
    });

    fetchTodos();
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("name");

    handleSuccess("User Logged out");

    window.location.href = "/login";
  };

  return (
    <div className="homediv">
      <h1>Welcome {loggedInUser}</h1>

      {/* ➕ Add Todo */}
      <input
        className="todoinput"
        type="text"
        placeholder="Enter task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className="addbutton" onClick={addTodo}>
        Add
      </button>

      <ul>
        {todos.map((todo) => (
          <li key={todo._id}>
            <div>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo._id)}
              />

              <span
                className="todotext"
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                  color : todo.completed ? "gray":"black",
                  marginLeft: "10px",
                }}
              >
                {todo.text}
              </span>
            </div>

            <button
              className="deletebutton"
              onClick={() => deleteTodo(todo._id)}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>

      <button className="logoutbutton" onClick={handleLogout}>Logout</button>

      <ToastContainer />
    </div>
  );
}

export default Home;
