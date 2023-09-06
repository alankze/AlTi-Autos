import { useState, useEffect } from 'react';
import axios from '../axiosinstance';
import { useParams, useNavigate, Link } from 'react-router-dom';

function CarDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [car, setCar] = useState(null);
  useEffect(() => {
    axios
      .get(`/api/cars/${id}`)
      .then(res => setCar(res.data))
      .catch(e => console.log(e));
  }, [id]);
  const handleDelete = () => {
    axios
      .delete(`/api/cars/${id}`)
      .then(res => navigate('/'))
      .catch(e => console.log(e));
  };
  return (
    <div>
      <h2>{car?.brand}</h2>
      <p>{car?.model}</p>
      <p>{car?.seats}</p>
       <p>{car?.nrOfDoors}</p>
      <p>{car?.vehicleCondition}</p>
      <p>{car?.fuelType}</p>
      <p>{car?.bodyType}</p>
      <p>{car?.firstRegistration}</p>
      <p>{car?.mileage}</p>
      <p>{car?.price}</p>
      <p>{car?.location}</p>
      <p>{car?.bodyColor}</p>
      {/* <h3>{car?.createdBy}</h3> */}

      <img src={car?.image}/> 

      <button onClick={handleDelete}>Delete Car</button>
    </div>
  );
}

export default CarDetails;