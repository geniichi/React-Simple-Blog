import "./Createpage.css"
import { useState } from "react";

const Createpage = ({ feed, setFeed }) => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleSubmit = (e) => {
      e.preventDefault();
      if (!title || !content) {
        alert("Please input text");
        return;
      }
      const newPost = {
        id: feed.length + 1,
        title,
        content
      };
      setFeed([...feed, newPost]);
      setTitle("");
      setContent("");
    };

    return (
      <form className="m-5 d-flex justify-content-center flex-column">
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Title</label>
          <input
            type="text"
            className="form-control mb-5"
            id="exampleFormControlInput1"
            placeholder="input title here"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">Description</label>
          <textarea
            className="form-control mb-5"
            id="exampleFormControlTextarea1"
            rows="3"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    );
  };

export default Createpage;
