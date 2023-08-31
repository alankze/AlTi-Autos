import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from '../axiosInstance';
const CarDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [book, setCar] = useState(null); // book object from backend
  useEffect(() => {
    axios
      .get(`/api/cars/${id}`)
      .then(res => setBook(res.data))
      .catch(e => setError(e.response?.data?.message));
  }, []);
  const handleDelete = () => {
    axios
      .delete(`/api/cars/${id}`)
      .then(res => navigate('/'))
      .catch(e => console.log(e));
  };
  return (
    <div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {book && (
        <>
         
          <Link to={`/cars/${id}/update`}>Update Book</Link>
          <button onClick={handleDelete}>Delete Book</button>
        </>
      )}
    </div>
  );
};

export default CarDetails;
