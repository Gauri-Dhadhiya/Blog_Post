import React, { createContext, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './component/Home/Home';
import Read from './component/Read/Read';
import Create from './component/Create/Create';
import Edit from './component/Edit/Edit';
import Delete from './component/Delete/Delete'

export const UserContext = createContext();

function App() {
  const blogDetails = [
    {
      id: 1,
        title: "React",
        catagories: "this is the best react post",
        content: "React is a JavaScript library for building user interfaces. React is used to build single-page applications. React allows us to create reusable UI components.",
    },
    {
      id: 2,
        name: "Redux",
        catagories: "this is best redux post",
        content: "Getting Started with Redux Redux is a predictable state container for JavaScript apps. It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test.",
    }
  ];
  const [ blog ,setBlogs ] = useState(blogDetails);

  return (
    
    <UserContext.Provider value = {{blog,setBlogs}}>
    <Router>
    <Routes>
    <Route path="/" element={<Home />} />  
    <Route path="/home" element={<Home />} />  
    <Route path="/create" element={<Create />}/>  
    <Route path="/read/:id" element={<Read />} /> 
    <Route path="/edit/:id" element={<Edit />}/> 
    <Route path="/delete/:id" element={<Delete />} />
    </Routes>
    </Router>
   </UserContext.Provider>
  );
}

export default App;
