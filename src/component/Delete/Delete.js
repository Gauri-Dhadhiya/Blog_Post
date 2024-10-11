import React from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { deleteSingleBlog } from "../Redux/action/action";
import "./Style.css";

function Delete() {
  const { id } = useParams();
  

  const dispatch = useDispatch();

  return (
    <div className="section">
      <nav className="navbar">
        <h1 style={{ textAlign: "center", color: "white", paddingTop: "5px" }}>
          Blog Posts
        </h1>
      </nav>
      <div className="page">
        <b>Are you sure you want to delete</b>
        <div>
          <Link to="/">
            <button
              className="delete"
              onClick={() => dispatch(deleteSingleBlog({ id }))}
            >
              Delete
            </button>
            <button className="cancel">Cancel</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Delete;
