import './courses.css'
const Courses = ({courses}) => {
    
    const {name, description, icon, price, credit} = courses;
    console.log(courses)
    console.log(name)
    return (
        <div className='card'>
            <img className='' src={icon} alt="" />
            <h5>{name}</h5>
            <p className=''>{description}</p>
            <p>Price : {price}</p>
            <p>Credit: {credit}hr</p>
            <button>Select</button>            
        </div>
    );
};

export default Courses;