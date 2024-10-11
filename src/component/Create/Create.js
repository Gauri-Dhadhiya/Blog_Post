import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createSingleBlog } from "../Redux/action/action";
import { useNavigate } from "react-router-dom";
import "./Style.css";

const Create = () => {
  const [value, setValue] = useState({});
  const history = useNavigate();
  const dispatch = useDispatch();
  const handleBlur = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
      id: Math.floor(Math.random() * 1000),
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (value ) {
      dispatch(
        createSingleBlog({
          value,
        })
      );
    }
    history("/");
  };

  const onButtonSubmit = () => {
    history("/Home");
  };
  const isSubmitDisabled = !value.title || !value.catagories || !value.content;

  return (
    <>
      <nav className="navbar">
        <button className="homebutton" onClick={onButtonSubmit}>
          <i className="bi bi-arrow-left"> Back</i>
        </button>
        <h1 style={{ textAlign: "center", color: "white", paddingTop: "5px" }}>
          Blog Posts
        </h1>
      </nav>

      <form className="back" autoComplete="off" onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          type="text"
          name="title"
          placeholder="Enter blog title"
          onChange={handleBlur}
          style={{ marginBottom: "15px" }}
        />

        <label>Catagories</label>
        <input
          type="text"
          name="catagories"
          placeholder="Enter blog category"
          onChange={handleBlur}
          style={{ marginBottom: "15px" }}
        />

        <label>Content</label>
        <input
          type="textarea"
          className="textarea"
          name="content"
          placeholder="Enter content"
          onChange={handleBlur}
          style={{ marginBottom: "15px" }}
        />

        <div className="button-container">
          <button disabled={isSubmitDisabled} className="submit">
            Submit
          </button>
          <button type="reset" className="reset">
            Reset
          </button>
        </div>
      </form>
    </>
  );
};

export default Create;
