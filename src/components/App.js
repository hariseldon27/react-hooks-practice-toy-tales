import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/toys')
    .then((r) => r.json())
    .then((toyData) => setToys(toyData))
  }, [])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function updateToyList(newlyAddedToy) {
    setToys([...toys, newlyAddedToy])
  }

  function handleDeleteToy(deletedToy){
      //creates a new empty array (updatedItems) then filters
      //by item whose id isn't the deleted item and then 
      //sets state with the new array of items that exist
      const updatedToys = toys.filter((toy) => toy.id !== deletedToy.id)
      setToys(updatedToys)
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm onUpdateToyList={updateToyList}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} onDeleteToy={handleDeleteToy}/>
    </>
  );
}

export default App;
