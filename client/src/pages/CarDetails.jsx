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
      {book && (
        <>
          <Link to={`/cars/${id}/update`}>Update Car</Link>
          <button onClick={handleDelete}>Delete Car</button>
        </>
      )}
    </div>
  );
};

export default CarDetails;
