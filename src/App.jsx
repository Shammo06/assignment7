import './App.css'
import Courses from './component/courses'
import {useEffect} from "react";
import {useState} from "react";



function App() {
  const [courses, setCourses]= useState([])
  const [remain, setRemain] = useState(20);
  const [count, setCount] = useState(0);
  const [course, setCourse] = useState([]);
  const [sum, setSum] = useState(0);
      useEffect(()=>{
      fetch('course.json')
      .then(res => res.json())
      .then(data => setCourses(data))

  })
  const addinfo = (name,price,credit) =>{
    if ((remain-credit)>-1){
      setRemain(remain-credit)
      setCount(count+credit)
    }
    else{
      toast.success('This is a success toast!', {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 3000, 
      })
       
    } 

    setSum(sum+price)
    const newcourse=[...course,name]
    setCourse(newcourse)

  }
  return (
    <>
      <h1 className='title'>Course Registration</h1>
      <div className='container'>
        <div className='course-card'>
        {
        courses.map(courses=><Courses key={courses.name} addinfo={addinfo} courses={courses}></Courses>)
        }
        </div>
        
        <div className='reg-info'>
          <h3 className='course-rem'>Credit Hour Remaining {remain} hr</h3>
          <hr></hr>
          <p>
            <h2>Course Name</h2>
            <ol>
              {course.map(course=><li>{course}</li>)}
            </ol>
          </p>
          <hr></hr>
          <h4>Total Credit Hour : {count}</h4>
          <hr></hr>
          <h4>Total Price : {sum} USD</h4>
        </div>
        
      </div>
   
    </>
  )
}

export default App
