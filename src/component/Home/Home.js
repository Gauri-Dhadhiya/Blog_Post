import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { readSingleBlog } from "../Redux/action/action";
import "./Style.css";

const Home = () => {
  const [blog, setBlogs] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const allData = useSelector((state) => {
    if (state) {
      return state.blogDetails;
    }
  });

  const onAddNewPostClick = () => {
    navigate("/create");
  };
  useEffect(() => {
    setBlogs(allData);
  }, [allData]);
  return (
    <>
      <nav className="navbar">
        <button onClick={onAddNewPostClick} className="add">
          New Post
        </button>
        <h1 style={{ textAlign: "center", color: "white", paddingTop: "5px" }}>
          Blog Posts
        </h1>
      </nav>

      <div className="container">
        <table>
          <tbody>
            {blog?.map((item) => (
              <tr key={item.id}>
                <Link
                  className="link"
                  to={`/read/${item.id}`}
                  onClick={() => dispatch(readSingleBlog({ id: item.id }))}
                  variant="success"
                >
                  {" "}
                  <td className="table-data">{item.catagories}</td>
                </Link>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Home;
