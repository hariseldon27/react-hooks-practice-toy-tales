import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer( { toys, onDeleteToy } ) {
  return (
    <div id="toy-collection">
      {toys.map((individualToy) => (
        <ToyCard 
        key={individualToy.id} 
        toy={individualToy}
        onDeleteToyClick={onDeleteToy}/>
      ))}
      </div>
  );
}

export default ToyContainer;
