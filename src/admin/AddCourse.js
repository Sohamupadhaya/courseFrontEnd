import React, { useState } from "react";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../auth/helper";
import Base from "../core/Base";
import { createCourse } from "./helper/adminapicall";

export default function AddCourse() {
  const [name, setName] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [selectFile, setselectFile] = useState({
    pfile:""
  });
  const [selectImage, setselectImage] = useState({
    ifile:""
  });
  const [initialValue, setInitialValue] = useState({
    courseName: "",
    description: "",
    outcome: "",
    category: "",
    createdBy: "",
    pdf:"",
    "thumbnail":""
  });

  const { data, token } = isAuthenticated();
  const goBack = () => (
    <div className="mt-5 mb-2">
      <Link
        className="btn btn-sm btn-info md-3 "
        to="/admin/dashboard"
      >
        Admin Home
      </Link>
    </div>
  );
  const fileChangedHandler = (event, type) => {
    event.preventDefault();
    if (type === "image") {
        setselectImage(event.target.files[0]);
    } else {
      setselectFile(event.target.files[0]);
    }
  };
  const handleChange = (event) => {
    setError("");
    event.preventDefault();
    console.log(event.target.name, event.target.value);
    setInitialValue({
      ...initialValue,
      [event.target.name]: event.target.value,
    });
  };
  const onSubmit = (event) => {
    event.preventDefault();
    setError("");
    setSuccess(false);
    const formData = new FormData();
    formData.append("file", selectFile.pfile);
    formData.append("file", selectImage.ifile);
    formData.append("courseName", initialValue.courseName);
    formData.append("description", initialValue.description);
    formData.append("outcome", initialValue.outcome);
    formData.append("category", initialValue.category);
    formData.append("createdBy", initialValue.createdBy);

    //backend request fired
    createCourse(data.user._id, token, formData).then((data) => {
      if (data.error) {
        setError({ ...error, error: data.error, success: false });
      } else {
        setError("");
        setSuccess(true);
      }
    });
  };

  const myCategoryForm = () => (
    <form>
      <div className="form-group">
        <p className="lead">Enter the Course Name</p>
        <input
          type="text"
          className="form-control my-3"
          onChange={handleChange}
          value={initialValue.courseName}
          name="courseName"
          autoFocus
          required
          placeholder="Course Name"
        />

        <p className="lead">Enter the Description</p>
        <input
          type="text"
          className="form-control my-3"
          onChange={handleChange}
          value={initialValue.description}
          name="description"
          autoFocus
          required
          placeholder="description"
        />

        <p className="lead">Enter the Outcome</p>
        <input
          type="text"
          className="form-control my-3"
          onChange={handleChange}
          value={initialValue.outcome}
          name="outcome"
          autoFocus
          required
          placeholder="Outcome"
        />
        <p className="lead">Enter the Category</p>
        <input
          type="text"
          className="form-control my-3"
          onChange={handleChange}
          value={initialValue.category}
          name="category"
          autoFocus
          required
          placeholder="Category"
        />
        <p className="lead">Enter the Created By</p>
        <input
          type="text"
          className="form-control my-3"
          onChange={handleChange}
          value={initialValue.createdBy}
          name="createdBy"
          autoFocus
          required
          placeholder="Created By"
        />
        <p className="lead">Enter the Thumnail</p>
        <input
          type="file"
          className="form-control my-3"
          onChange={(e)=>fileChangedHandler(e,'image')}
          value={initialValue.thumbnail}
          name="ifile"
          autoFocus
          required
          placeholder="Created By"
        />
        <p className="lead">Enter the PDF</p>
        <input
          type="file"
          className="form-control my-3"
          onChange={(e)=>fileChangedHandler(e,'pdf')}
          value={initialValue.pdf}
          name="pfile"
          autoFocus
          required
          placeholder="Created By"
        />
        <button onClick={onSubmit} className="btn btn-outline-info">
          Create Category
        </button>
      </div>
    </form>
  );

  return (
    <Base
      title="Add Course"
      description="This page is to Add the courses"
      className="container bg-info p-4"
    >
      <div className="row bg-white rounded">
        <div className="col-md-8 offset-md-2">
          {myCategoryForm()}
          {goBack()}
        </div>
      </div>
    </Base>
  );
}
