import React from "react";

function ToyCard( { toy, onDeleteToyClick } ) {
  const {id, name, image, likes} = toy
  function handleDelete(){
    console.log(toy)
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => onDeleteToyClick(toy));
  }

  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button className="like-btn">Like {"<3"}</button>
      <button className="del-btn" onClick={handleDelete}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
