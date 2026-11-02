import RecipeCard from "./ RecipeCard";

export interface Recipe {
  id: number;
  title: string;
  image: string;
  author: string;
  time: number;
  cost: number;
  likes: number;
  category: string;
}

interface RecipeListProps {
  recipes: Recipe[];
  savedRecipes: number[];
  onSave: (id: number) => void;
  onView: (id: number) => void;
}

function RecipeList({
  recipes,
  savedRecipes,
  onSave,
  onView,
}: RecipeListProps) {
  if (recipes.length === 0) {
    return (
      <div className="rounded-3xl border border-[#E6E0D3] bg-white px-6 py-16 text-center">
        <span className="text-5xl">🔎</span>
        <h3 className="mt-5 text-xl font-black text-[#292D26]">
          دستوری پیدا نشد!
        </h3>
        <p className="mt-2 text-sm text-[#817F73]">
          عبارت جست‌وجو یا فیلترها را تغییر بده.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.id}
          title={recipe.title}
          image={recipe.image}
          author={recipe.author}
          time={recipe.time}
          cost={recipe.cost}
          likes={recipe.likes}
          category={recipe.category}
          isSaved={savedRecipes.includes(recipe.id)}
          onSave={() => onSave(recipe.id)}
          onView={() => onView(recipe.id)}
        />
      ))}
    </div>
  );
}

export default RecipeList;
