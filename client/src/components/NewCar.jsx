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
    // console.log(car)
    // const { brand, model, seats, nrOfDoors, vehicleCondition, fuelType, bodyType, firstRegistration, mileage, price, location, bodyColor, createdBy,image} = car;
    // const formData = new FormData();
    // formData.append('brand', brand);
    // formData.append('model', model);
    // formData.append('seats', seats);
    // formData.append('nrOfDoors', nrOfDoors);
    // formData.append('vehicleCondition', vehicleCondition);
    // formData.append('fuelType', fuelType);
    // formData.append('bodyType', bodyType);
    // formData.append('firstRegistration', firstRegistration);
    // formData.append('mileage', mileage);
    // formData.append('price', price);
    // formData.append('location', location);
    // formData.append('bodyColor', bodyColor);
    // formData.append('createdBy', createdBy);
    // formData.append('image', image);
    axios
      .post(`/api/cars`, car)
      .then(res =>navigate("/"))
      .catch(e => console.log(e));
  };

  const changeHandler = e => {
      console.log(e.target.name)
      setCar({ ...car, [e.target.name]: e.target.value });
    
  };

  return (
    <form onSubmit={submitHandler} encType='application/x-www-form-urlencoded' class="bg-slate-500 shadow-md rounded px-8 pt-6 pb-8 mb-4 grid grid-rows-4 grid-flow-col gap-4">
      <label htmlFor="" class="block text-gray-700 text-sm font-bold text-white mb-2" for="Brand">Brand</label>
      <input type="text" class="shadow appearance-none border rounded w-30 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="brand" value={car.brand} onChange={changeHandler} />
      <label htmlFor="" class="block text-gray-700 text-sm font-bold text-white mb-2">Model</label>
      <input type="text" class="shadow appearance-none border rounded w-30 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="model" value={car.model} onChange={changeHandler} />
      <label htmlFor="" class="block text-gray-700 text-sm font-bold text-white mb-2">Seats</label>
      <input type="text" class="shadow appearance-none border rounded w-30 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="seats" value={car.seats} onChange={changeHandler} />
      <label htmlFor="" class="block text-gray-700 text-sm font-bold text-white mb-2">Nr Of Doors</label>
      <input type="text" class="shadow appearance-none border rounded w-30 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="nrOfDoors" value={car.nrOfDoors} onChange={changeHandler} />
      <label htmlFor="" class="block text-gray-700 text-sm font-bold text-white mb-2">Vehicle Condition</label>
      <input type="text" class="shadow appearance-none border rounded w-30 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="vehicleCondition" value={car.vehicleCondition} onChange={changeHandler} />
      <label htmlFor="" class="block text-gray-700 text-sm font-bold text-white mb-2">Fuel Type</label>
      <input type="text" class="shadow appearance-none border rounded w-30 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="fuelType" value={car.fuelType} onChange={changeHandler} />
      <label htmlFor="" class="block text-gray-700 text-sm font-bold text-white mb-2">Body Type</label>
      <input type="text" class="shadow appearance-none border rounded w-30 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="bodyType" value={car.bodyType} onChange={changeHandler} />
      <label htmlFor="" class="block text-gray-700 text-sm font-bold text-white mb-2">First Registration</label>
      <input type="text" class="shadow appearance-none border rounded w-30 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="firstRegistration" value={car.firstRegistration} onChange={changeHandler} />
      <label htmlFor="" class="block text-gray-700 text-sm font-bold text-white mb-2">Mileage</label>
      <input type="text" class="shadow appearance-none border rounded w-30 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="mileage" value={car.mileage} onChange={changeHandler} />
      <label htmlFor="" class="block text-gray-700 text-sm font-bold text-white mb-2">Price</label>
      <input type="text" class="shadow appearance-none border rounded w-30 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="price" value={car.price} onChange={changeHandler} />
      <label htmlFor="" class="block text-gray-700 text-sm font-bold text-white mb-2">Location</label>
      <input type="text" class="shadow appearance-none border rounded w-30 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="location" value={car.location} onChange={changeHandler} />
      <label htmlFor="" class="block text-gray-700 text-sm font-bold text-white mb-2">Body Color</label>
      <input type="text" class="shadow appearance-none border rounded w-30 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="bodyColor" value={car.bodyColor} onChange={changeHandler} />
      <label htmlFor="" class="block text-gray-700 text-sm font-bold text-white mb-2">CreatedBy</label>
      <input type="text" class="shadow appearance-none border rounded w-30 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="createdBy" value={car.createdBy} onChange={changeHandler} />
      <label htmlFor="" class="block text-gray-700 text-sm font-bold text-white mb-2">Image </label>
      <input type="text" class="shadow appearance-none border rounded w-30 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="image" onChange={changeHandler}  />
      <button class="bg-blue-900 hover:bg-amber-500 text-white font-bold  px-4 rounded focus:outline-none focus:shadow-outline">Add Car</button>
      
    </form>
      
  );
}

export default NewCar;
