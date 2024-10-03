import React, { useState } from 'react';

const Customizer = () => {
  const [selectedColor, setSelectedColor] = useState('');
  const [uploadedImage, setUploadedImage] = useState(null);

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const handleImageUpload = (event) => {
    const image = event.target.files[0];
    setUploadedImage(image);
  };

  return (
    <div>
      <h1>Customize Your T-Shirt</h1>
      <div>
        <label>Select T-Shirt Color:</label>
        <select onChange={(e) => handleColorChange(e.target.value)}>
          <option value="">Select Color</option>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
        </select>
      </div>

      <div>
        <label>Upload Image:</label>
        <input type="file" accept="image/*" onChange={handleImageUpload} />
      </div>

      {selectedColor && (
        <div style={{ backgroundColor: selectedColor, width: '200px', height: '200px' }}>
          {uploadedImage && <img src={URL.createObjectURL(uploadedImage)} alt="Uploaded" style={{ maxWidth: '100%', maxHeight: '100%' }} />}
        </div>
      )}
    </div>
  );
};

export default Customizer;