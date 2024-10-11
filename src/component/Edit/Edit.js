import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { updateSingleBlog } from "../Redux/action/action";
import "./Style.css";

const Edit = () => {
  const history = useNavigate();
  const dispatch = useDispatch();
  const [blogs, setBlogs] = React.useState([]);
  const updatedBlog = useSelector((state) => {
    return state.blogDetails;
  });
  useEffect(() => {
    setBlogs(updatedBlog);
  }, [updatedBlog]);
  const { id } = useParams();
  const [updateValue, setUpdateValue] = useState({});
  useEffect(() => {
    if (blogs) {
      const findBlog = blogs.find((item) => item.id === Number(id));
      if (findBlog) {
        setUpdateValue(findBlog);
      }
    }
  }, [id, blogs]);
  const handleChange = (e) => {
    if (updateValue) {
      setUpdateValue({
        ...updateValue,
        [e.target.name]: e.target.value,
      });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (updateValue) {
      dispatch(updateSingleBlog({ data: updateValue }));
    }
    history("/");
  };
  const onButtonSubmit = () => {
    history("/Home");
  };
  return (
    <>
      <nav className="navbar">
        <button className="homebutton" onClick={onButtonSubmit}>
        <i className="bi bi-arrow-left"> Back</i>
        </button>
        <h1 style={{ textAlign: "center", color: "white", paddingTop: 5 }}>
          Blog Posts
        </h1>
      </nav>
      <form className="back" autoComplete="off" onSubmit={handleSubmit}>
        <div className="blogpost">
          <label>Title</label>
          <input
            type="text"
            name="title"
            placeholder="Enter blog title"
            value={updateValue?.title}
            onChange={handleChange}
          />
        </div>
        <div className="blogpost">
          <label>Catagories</label>
          <input
            type="text"
            name="catagories"
            placeholder="Enter blog category"
            value={updateValue?.catagories}
            onChange={handleChange}
          />
        </div>
        <div className="blogpost">
          <label>Content</label>
          <input
            type="textarea"
            className="textarea"
            name="content"
            placeholder="Enter content"
            value={updateValue?.content}
            onChange={handleChange}
          />
        </div>
        <div className="entervalue">
          <button className="submit">Submit</button>
        </div>
      </form>
    </>
  );
};

export default Edit;
