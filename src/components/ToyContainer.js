import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer( { toys, onDeleteToy, onLikeUpdate} ) {
  return (
    <div id="toy-collection">
      {toys.map((individualToy) => (
        <ToyCard 
        key={individualToy.id} 
        toy={individualToy}
        onDeleteToyClick={onDeleteToy}
        onLikeUpdate={onLikeUpdate}/>
      ))}
      </div>
  );
}

export default ToyContainer;
