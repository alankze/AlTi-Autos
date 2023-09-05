import { useState, useEffect } from 'react';
import axios from '../axiosinstance';
import { Link } from 'react-router-dom';
import  Carousel  from './Carousel';
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
        <p key={car?._id}>
          <Link to={`/cars/${car?._id}`}>{car?.brand}</Link>
        </p>
      ))}
    </div>
  );
}

export default Cars;

