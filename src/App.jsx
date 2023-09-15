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
      <h1>Course Registration</h1>
      <div className='course-card'>
      {
      courses.map(courses=><Courses key={courses.name} courses={courses}></Courses>)
      }
      </div>
    </>
  )
}

export default App
