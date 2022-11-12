import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import { isAuthenticated } from '../auth/helper'
import Base from '../core/Base'
import { getCourses,deleteCourse } from './helper/adminapicall'

export default function ManageCourse() {
    const [course, setCouerse] = useState([])
    console.log(course);
    const {user, token} = isAuthenticated()

    const preload = () =>{
        getCourses().then(data=>{
            if (data.error){
                console.log(data.error);
            }else{
                setCouerse(data)
            }
        })
    }

    useEffect(() => {
        preload();
    }, [])
    
    const deleteThisCourse = courseId =>{
        deleteCourse(courseId,isAuthenticated().data.user._id,isAuthenticated().data.accessToken).then(data =>{
            if (data.error){
                console.log(data.error);
            }else{
                preload();
            }
        })
    }

  return (
    <Base title="Welcome admin" description="Manage products here">
      <h2 className="mb-4">All Courses:</h2>
      <Link className="btn btn-info" to={`/admin/dashboard`}>
        <span className="">Admin Home</span>
      </Link>
      <div className="row">
        <div className="col-12">
          <h2 className="text-center text-white my-3">Total 3 products</h2>
          {course.map((course,index)=>{
            return(<div key={index} className="row text-center mb-2 ">
            <div className="col-4">
              <h3 className="text-white text-left">{course.courseName}</h3>
            </div>
            <div className="col-4">
              <Link
                className="btn btn-success"
                to={`/admin/course/update/courseId`}
              >
                <span className="">Update</span>
              </Link>
            </div>
            <div className="col-4">
              <button onClick={()=>{deleteThisCourse(course._id)}} className="btn btn-danger">
                Delete
              </button>
            </div>
          </div>
            )
          })}
        </div>
      </div>
    </Base>
  )
}
