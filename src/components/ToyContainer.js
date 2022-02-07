import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer( { toys } ) {
  return (
    <div id="toy-collection">
      {toys.map((individualToy) => (
        <ToyCard 
        key={individualToy.id} 
        name={individualToy.name} 
        image={individualToy.image} 
        likes={individualToy.likes}/>
      ))}
      </div>
  );
}

export default ToyContainer;
