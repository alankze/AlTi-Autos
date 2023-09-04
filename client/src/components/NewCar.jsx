import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../axiosinstance';
function NewCar(props) {
  const navigate = useNavigate();

  const [car, setCar] = useState({
    brand: '',
    model: '',
    seats : '',
    nrOfDoors: '',
    vehicleCondition:'',
    fuelType:'',
    bodyType:'',
    firstRegistration:'',
    mileage:'',
    price:'',
    location:'',
    bodyColor:'',
    createdBy:'',
    image:'',

  });

  const submitHandler = async e => {
    e.preventDefault();
    const { brand, model, seats, nrOfDoors, vehicleCondition, fuelType, bodyType, firstRegistration, mileage, price, location, bodyColor, createdBy,image} = car;
    const formData = new FormData();
    formData.append('brand', brand);
    formData.append('model', model);
    formData.append('seats', seats);
    formData.append('nrOfDoors', nrOfDoors);
    formData.append('vehicleCondition', vehicleCondition);
    formData.append('fuelType', fuelType);
    formData.append('bodyType', bodyType);
    formData.append('firstRegistration', firstRegistration);
    formData.append('mileage', mileage);
    formData.append('price', price);
    formData.append('location', location);
    formData.append('bodyColor', bodyColor);
    formData.append('createdBy', createdBy);
    formData.append('image', image);
  
    axios
      .post(`${import.meta.env.VITE_SERVER_BASE_URL}/api/cars`, formData)
      .then(res => navigate('/'))
      .catch(e => console.log(e));
  };

  const changeHandler = e => {
    if (e.target.name === 'image') {
      setCar({ ...car, image: e.target.files[0] });
    } else {
      setCar({ ...car, [e.target.name]: e.target.value });
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="">Brand</label>
      <input type="text" name="brand" value={car.brand} onChange={changeHandler} />
      <label htmlFor="">Model</label>
      <input type="text" name="model" value={car.model} onChange={changeHandler} />
      <label htmlFor="">Seats</label>
      <input type="text" name="seats" value={car.seats} onChange={changeHandler} />
      <label htmlFor="">Nr Of Doors</label>
      <input type="text" name="nrOfDoors" value={car.nrOfDoors} onChange={changeHandler} />
      <label htmlFor="">Vehicle Condition</label>
      <input type="text" name="vehicleCondition" value={car.vehicleCondition} onChange={changeHandler} />
      <label htmlFor="">Fuel Type</label>
      <input type="text" name="fuelType" value={car.fuelType} onChange={changeHandler} />
      <label htmlFor="">Body Type</label>
      <input type="text" name="bodyType" value={car.bodyType} onChange={changeHandler} />
      <label htmlFor="">First Registration</label>
      <input type="text" name="firstRegistration" value={car.firstRegistration} onChange={changeHandler} />
      <label htmlFor="">Mileage</label>
      <input type="text" name="mileage" value={car.mileage} onChange={changeHandler} />
      <label htmlFor="">Price</label>
      <input type="text" name="price" value={car.price} onChange={changeHandler} />
      <label htmlFor="">Location</label>
      <input type="text" name="location" value={car.location} onChange={changeHandler} />
      <label htmlFor="">Body Color</label>
      <input type="text" name="bodyColor" value={car.bodyColor} onChange={changeHandler} />
      <label htmlFor="">CreatedBy</label>
      <input type="text" name="createdBy" value={car.createdBy} onChange={changeHandler} />
      <label htmlFor="">Image </label>
      <input type="file" name="image" onChange={changeHandler} accept="image/*" />
      <button>Add Car</button>
    </form>
  );
}

export default NewCar;
