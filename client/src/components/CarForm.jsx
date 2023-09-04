import React from 'react'

const CarForm = () => {
  return (
    <div>
        <form @submit.prevent="addCar">
            <label for="add">Add:</label>
            <input type="text" id="add" v-model="add" required>

            <label for="model">Model:</label>
            <input type="text" id="model" v-model="model" required>

            <label for="brand">Brand:</label>
            <input type="text" id="brand" v-model="brand" required>

            <label for="category">Category:</label>
            <input type="text" id="category" v-model="category" required>
            
            <label for="fuel">Fuel Type:</label>
            <input type="text" id="fuel" v-model="fuel" required>

        </form>
    </div>
  );
};

export default CarForm;