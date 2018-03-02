import React from 'react';
import TransitionedRecipeCard from '../RecipeCard/RecipeCard';
import Spinner from '../..//../components/Spinner/Spinner';
import './Recipes.css';

const Recipes = ({ hits, isLoading }) => {
  const recipeCards = hits.map((hit: {}) => (
    <TransitionedRecipeCard
      key={Math.random()}
      recipe={hit.recipe}
      hitsLength={hits.length}
    />
  ));

  return (
    <div className="recipes">
      <div className="title">
        <h2>Recipes{''}</h2>
      </div>
      {isLoading ? <Spinner /> : false}
      <div className="results">{recipeCards}</div>
    </div>
  );
};

export default Recipes;
