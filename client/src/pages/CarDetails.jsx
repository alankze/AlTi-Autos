import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "../axiosInstance";
const CarDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [car, setCar] = useState(null); // book object from backend
  useEffect(() => {
    axios
      .get(`/api/cars/${id}`)
      .then((res) => setCar(res.data))
      .catch((e) => setError(e.response?.data?.message));
  }, []);
  const handleDelete = () => {
    axios
      .delete(`/api/cars/${id}`)
      .then((res) => navigate("/"))
      .catch((e) => console.log(e));
  };
  return (
    <div>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {car && (
        <>
          <h2>{car.brand}</h2>
          <p>Model: {car.model}</p>
          <p>Seats: {car.seats}</p>
          <p>Number of Doors: {car.nrOfDoors}</p>
          <p>Vehicle Condition: {car.vehicleCondition}</p>
          <p>Fuel Type: {car.fuelType}</p>
          <p>Body Type: {car.bodyType}</p>
          <p>First Registration: {car.firstRegistration}</p>
          <p>Mileage: {car.mileage}</p>
          <p>Price: {car.price}</p>
          <p>Location: {car.location}</p>
          <p>Body Color: {car.bodyColor}</p>
          <p></p>
          <Link to={`/cars/${id}/update`}>Update Car</Link>
          <button onClick={handleDelete}>Delete Car</button>
        </>
      )}
    </div>
  );
};

export default CarDetails;
