import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./Style.css";
function Read() {
  const [like, setLike] = useState(null);
  const [likeActive, setLikeActive] = useState(false);
  const { id } = useParams();
  const [singleBlog, setSingleBlog] = useState(null);
  const history = useNavigate();
  const singleBlogs = useSelector((state) => {
    if (state) return state.blogDetails;
  });
  useEffect(() => {
    const singleBlog = singleBlogs.find((item) => item.id === Number(id));
    setSingleBlog(singleBlog);
  }, [id, singleBlogs]);

  const onButtonSubmit = () => {
    history("/Home");
  };

  function likef() {
    if (likeActive) {
      setLikeActive(false);
    } else {
      setLikeActive(true);
      setLike(like + 1);
    }
  }
  return (
    <div className="section">
      <div className="navbar">
        <button className="homebutton" onClick={onButtonSubmit}>
          <i className="bi bi-arrow-left"> Back</i>
        </button>
        <button className="like-btn" onClick={likef}>
          <i class="bi bi-hand-thumbs-up-fill">Like{like}</i>
        </button>
        <Link to={`/edit/${singleBlog?.id}`}>
          {" "}
          <button className="edit-btn">Edit</button>{" "}
        </Link>
        <Link to={`/delete/${singleBlog?.id}`}>
          {" "}
          <button className="delete-btn">Delete</button>{" "}
        </Link>
      </div>

      <div className="container">
        <div className="content">
          <p>{singleBlog?.content}</p>
        </div>
      </div>
    </div>
  );
}

export default Read;
