import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "../data.json";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const foundRecipe = data.find((r) => r.id === parseInt(id));
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) {
    return <div className="text-center mt-10 text-gray-400">Recipe not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-white mb-4">{recipe.title}</h1>
      <img
        src={recipe.image}
        alt={recipe.title}
        className="rounded-lg shadow-lg mb-6"
      />
      <p className="text-gray-300 mb-6">{recipe.summary}</p>

      {/* Ingredients Section */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-white mb-2">Ingredients</h2>
        <ul className="list-disc list-inside text-gray-300">
          {recipe.ingredients.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Instructions Section */}
      <div>
        <h2 className="text-2xl font-semibold text-white mb-2">Instructions</h2>
        <ol className="list-decimal list-inside text-gray-300 space-y-2">
          {recipe.instructions.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default RecipeDetail;
