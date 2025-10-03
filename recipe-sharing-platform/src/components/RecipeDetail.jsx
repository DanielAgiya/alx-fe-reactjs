import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch("/src/data.json")
      .then((response) => response.json())
      .then((data) => {
        const foundRecipe = data.find((item) => item.id === parseInt(id));
        setRecipe(foundRecipe);
      })
      .catch((error) => console.error("Error loading recipe:", error));
  }, [id]);

  if (!recipe) {
    return <p className="text-center mt-10 text-gray-600">Loading...</p>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link
        to="/"
        className="inline-block mb-6 text-blue-500 hover:underline"
      >
        ← Back to Home
      </Link>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {recipe.title}
          </h1>
          <p className="text-gray-700 mb-6">{recipe.summary}</p>

          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li>Ingredient 1</li>
              <li>Ingredient 2</li>
              <li>Ingredient 3</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Instructions</h2>
            <ol className="list-decimal pl-6 space-y-2 text-gray-700">
              <li>Step 1: Do this...</li>
              <li>Step 2: Do that...</li>
              <li>Step 3: Finish up!</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetail;
