import React from "react";

function ToyCard( { toy, onDeleteToyClick, onLikeUpdate } ) {
  const {id, name, image, likes} = toy
  function handleDelete(){
    console.log(toy)
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => onDeleteToyClick(toy));
  }

  function handleLikeClick() {
    // console.log(likes.likes)
    let newLikes = (likes.likes + 1)
    // console.log(newLikes)
      fetch(`http://localhost:3001/toys/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          likes: newLikes,
        }),
      })
      .then((resp) => resp.json())
      .then((updatedToy) => onLikeUpdate(updatedToy))
    
  }
  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>likes Likes </p>
      <button className="like-btn" onClick={handleLikeClick}>Like {"<3"}</button>
      <button className="del-btn" onClick={handleDelete}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
