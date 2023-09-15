import './courses.css'
const Courses = ({courses}) => {
    
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
            <button>Select</button> 
        </div>
    );
};

export default Courses;