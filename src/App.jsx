import './App.css'
import Courses from './component/courses'
import {useEffect} from "react";
import {useState} from "react";

function App() {
  const [courses, setCourses]= useState([])
    useEffect(()=>{
      fetch('course.json')
      .then(res => res.json())
      .then(data => setCourses(data))

  })
  return (
    <>
      <h1 className='title'>Course Registration</h1>
      <div className='container'>
        <div className='course-card'>
        {
        courses.map(courses=><Courses key={courses.name} courses={courses}></Courses>)
        }
        </div>
        <div className='reg-info'>
          <h3 className='course-rem'>Credit Hour Remaining 7 hr</h3>
          <p>
            <h3>Course Name</h3>
            <ol>
              <li></li>
            </ol>
          </p>
          <h6>Total Credit Hour : 13</h6>
          <h6>Total Price : 48000 USD</h6>
        </div>
      </div>
   
    </>
  )
}

export default App
