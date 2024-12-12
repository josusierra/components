// src/App.js
import React from 'react';
import { recipes } from './data.js';

export default function RecipeList() {
  return (
    <div>
      <h1>Recetas</h1>
      {recipes.map(recipe => (
        <div key={recipe.id}>
          <h2>{recipe.name}</h2>
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}


//export default App;
