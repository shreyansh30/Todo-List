import './App.css';
import Header from './MyComponents/Header.js';
import Footer from './MyComponents/Footer.js';
import Todos from './MyComponents/Todos.js';
import AddTodo from './MyComponents/AddTodo.js';
import About from './MyComponents/About.js';
import React, { useState, useEffect } from 'react';
import {
  HashRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null){
    initTodo = [];
  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode(prev => !prev);

  const [todos, setTodos] = useState(initTodo);

  const onDelete = (todo) => {
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
  };

  const addTodo = (title,desc) => {
    let sno;
    if (todos.length===0) {
      sno = 0;
    }
    else{
      sno = todos[todos.length-1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    };

    setTodos([...todos,myTodo]);  
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Flex column layout for sticky footer
  return (
    <div className={darkMode ? "dark-mode" : "light-mode"} style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column"
    }}>
      <Router>
        <Header 
          title="Todos List" 
          searchBar={false}
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
        />
        {/* Main content area with bottom margin for footer spacing */}
        <div style={{ flex: 1 }}>
          <Routes>
            <Route exact path="/" element={
              <div style={{ marginBottom: "50px" }}>
                <AddTodo addTodo={addTodo}/>
                <Todos todos={todos} onDelete={onDelete}/>
              </div>
            }/>
            <Route exact path="/about" element={
              <div style={{ marginBottom: "50px" }}>
                <About />
              </div>
            }/>
          </Routes>
        </div>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;