import { useEffect, useState } from "react";
import Course from "../courseinfo/Course";
import './Courses.css'

const Courses = ({handleSelectName, handleTotalPrice, handleCreditTime}) => {
    const [courses, setCourses] = useState([]);
    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/Coding655/course-registration-api/main/course%20reg%20api')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])
    return (
        <div className="md:w-2/3">
            <h1 className="text-2xl text-gray-400 font-medium">Total Course: {courses.length} </h1>
            <hr />
            <div className="card-container mt-6">
                
                {
                    courses.map(course => <Course handleCreditTime={handleCreditTime} handleTotalPrice={handleTotalPrice} key={course.id}  handleSelectName={handleSelectName}  course={course}></Course>)
                }
            </div>
        </div>
    );
};

export default Courses;