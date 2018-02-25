import React, { Component } from 'react';

class RecipeCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayClass: 'recipe-card fade-in'
    };
  }
  componentWillMount() {
    this.setState({ displayClass: 'recipe-card' });
  }

  render() {
    const { recipe } = this.props;

    const ingredients = recipe.ingredientLines.map(ingredient => (
      <li key={Math.random()}>{ingredient}</li>
    ));

    return (
      <div className={this.state.displayClass}>
        <div className="recipe-name">
          <h3>{recipe.label}</h3>
        </div>
        <div className="recipe-image">
          <img
            alt={recipe.label}
            src={recipe.image}
            style={{ borderRadius: '5px' }}
          />
        </div>
        <div className="ingredients">
          <ul>{ingredients}</ul>
        </div>
        <div>
          <a target="_blank" href={recipe.url}>
            See full recipe
          </a>
        </div>
      </div>
    );
  }
}

export default RecipeCard;
