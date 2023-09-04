import React from 'react'

const Upload Photo = () => {
  return (
    <div>
        <label for="photo">Upload Photo:</label>
        <input type="file" id="photo" @change="handleFileUpload" accept="image/*">
    </div>
  );
};

export default Upload Photo;