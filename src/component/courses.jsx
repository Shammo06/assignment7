import './courses.css'
// eslint-disable-next-line react/prop-types
const Courses = ({courses, addinfo}) => {    
    // eslint-disable-next-line react/prop-types
    const {name, description, icon, price, credit} = courses;    
    
    return (
    <div className='card'>
        <img src={icon} alt="" />
        <h3>{name}</h3>
        <p>{description}</p>
        <div className='value'>
            <p>Price : {price}</p>
            <p>Credit: {credit}hr</p>
        </div>            
        <button onClick={()=> addinfo(name,price,credit)}>Select</button> 
    </div>
        
        
    );
};

export default Courses;