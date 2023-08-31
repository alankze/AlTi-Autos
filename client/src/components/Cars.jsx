import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from '../axiosInstance';
const Cars = () => {
  const [cars, setCars] = useState(null); // cars array from backend
  useEffect(() => {
    axios
      .get(`/api/cars`)
      .then(res => setCars(res.data))
      .catch(e => console.log(e));
  }, []);

  return (
    <div>
      <h2>Car List</h2>
      <ul>
        {cars &&
          cars.map(car => (
            <li key={car._id}>
              <Link to={`/cars/${car._id}`}>
                {car.brand} 
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Cars;
