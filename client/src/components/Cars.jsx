import { useState, useEffect } from 'react';
import axios from '../axiosinstance';
import { Link } from 'react-router-dom';
import  Carousel  from './Carousel';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCar } from '@fortawesome/free-solid-svg-icons';


function Cars() {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_SERVER_BASE_URL}/api/cars`)
      .then(res => setCars(res.data))
      .catch(e => console.log(e));
  }, []);

  return (
    <div>
         <Carousel/>
         {cars.map(car => (
     
      
          <>
          <div className='text-amber-500'>
          
            <p key={car?._id}>
            {/* <FontAwesomeIcon icon={faCar} className="text-2xl color-white" /> */}
            <Link to={`/cars/${car?._id}`}>{car?.brand}</Link>
            </p>
         </div>
         </>
     
    
    
        
    ))} 
    </div>
    )
}

export default Cars;

