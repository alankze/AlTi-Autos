import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
function Cars() {
  const [Cars, setCars] = useState([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_SERVER_BASE_URL}/api/cars`)
      .then(res => setCars(res.data))
      .catch(e => console.log(e));
  }, []);

  return (
    <div>
      {Cars.map(Cars => (
        <p key={Cars._id}>
          <Link to={`/cars/${Cars._id}`}>{Cars.name}</Link>
        </p>
      ))}
    </div>
  );
}

export default Cars;

