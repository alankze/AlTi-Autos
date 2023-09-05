import { useState, useEffect } from 'react';
import axios from '../axiosinstance';
import { useParams, useNavigate, Link } from 'react-router-dom';

function CarDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [car, setCar] = useState(null);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_SERVER_BASE_URL}/api/cars/${id}`)
      .then(res => setCar(res.data))
      .catch(e => console.log(e));
  }, [id]);
  const handleDelete = () => {
    axios
      .delete(`${import.meta.env.VITE_SERVER_BASE_URL}/api/cars/${id}`)
      .then(res => navigate('/'))
      .catch(e => console.log(e));
  };
  return (
    <div>
      <h2>{car?.brand}</h2>
      <p>{car?.location}</p>
      <img src={car?.image}/>

      <button onClick={handleDelete}>Delete Car</button>
    </div>
  );
}

export default CarDetails;