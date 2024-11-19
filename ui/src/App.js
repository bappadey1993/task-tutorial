import React, { useState, useEffect } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { AddTaskForm } from "./components/AddTaskForm";
import { Task } from "./components/Task";
import axios from "axios";
import { API_URL } from "./utils";
import Students from "./pages/Students/Students";
import CreateStudent from "./pages/Students/CreateStudent";
import Student from "./pages/Students/Student";
import UpdateStudent from "./pages/Students/UpdateStudent";
import Home from "./pages/home/Home";
import $ from 'jquery';
import Header from "./pages/home/Header";
import Login from "./pages/login/Login";
import Register from "./pages/login/Register";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function App() {
  // const [tasks, setTasks] = useState([]);

  // const tasks = {
  //   id: 1,
  //   name: "bappa",
  //   completed: false
  // }

  // const fetchTasks = async () => {
  //   try {
  //     const { data } = await axios.get(API_URL);

  //     setTasks(data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  useEffect(() => {
    // fetchTasks();
  }, []);

  return (
    // <ThemeProvider theme={darkTheme}>
    //   <CssBaseline />
    //   <AddTaskForm fetchTasks={fetchTasks} />
    //   {tasks.map((task) => (
    //     <Task task={task} key={task.id} fetchTasks={fetchTasks} />
    //   ))}
    // </ThemeProvider>
    <>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/student" element={<Students />}></Route>
          <Route path="/create-student" element={<CreateStudent />}></Route>
          <Route path="/student/:id" element={<Student />}></Route>
          <Route path="/student-edit/:id" element={<UpdateStudent />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>

        </Routes>
      </BrowserRouter>
    </>
    
  );
}
