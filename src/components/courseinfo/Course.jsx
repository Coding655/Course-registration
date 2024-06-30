import { FaDollarSign } from "react-icons/fa6";
import { FaBookDead } from "react-icons/fa";
const Course = ({course,handleSelectName, handleTotalPrice, handleCreditTime}) => {
    const {image, course_name,course_description,price,course_time} = course
    return (
        <div className="border p-2">
            <img className="w-[300px]" src={image} alt="" />
            <div>
                <h1 className="text-2xl font-medium mb-3 text-gray-400">{course_name}</h1>
                <p><small>{course_description}</small></p>
            </div>

            <div className="flex justify-between items-center mt-8">
                    <button onClick={()=> handleTotalPrice(price)}><FaDollarSign></FaDollarSign></button>
                    <p className="font-medium">Price: {price}</p>
                    <button onClick={()=> handleCreditTime(course_time)}><big className=""><FaBookDead></FaBookDead></big></button>
                    <p  className="ml-2 font-medium">Credit: {course_time}</p>
            </div>
            <br />
            <br />
            <button onClick={()=> handleSelectName(course)} className="bg-blue-400 px-2 rounded font-bold text-white w-9/12 ml-7 ">select</button>
        </div>
    );
};

export default Course;