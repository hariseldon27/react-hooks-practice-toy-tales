import React, { useState } from "react";

function ToyForm( { onUpdateToyList } ) {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    likes: ""
  })


  function handleFormInput(event) {
    console.log(event.target.value)
    const name = event.target.name
    let value = event.target.value
    setFormData({...formData, [name]: value})
  }

  function handleAddNewToy(event){
    event.preventDefault()
    const newToyToAdd = {
      name: formData.name,
      image: formData.image,
      likes: formData.likes
    }
    fetch("http://localhost:3001/toys", {
      method: "POST",
      headers: { "Content-Type": "application/json",},
      body: JSON.stringify(newToyToAdd),
    })
    .then((resp) => resp.json())
    .then((newlyAddedToy) => onUpdateToyList(newlyAddedToy)
    )}
    
  
  return (
    <div className="container">
      <form className="add-toy-form">
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          onChange={handleFormInput}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          onChange={handleFormInput}

        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
          onClick={handleAddNewToy}

        />
      </form>
    </div>
  );
}

export default ToyForm;
