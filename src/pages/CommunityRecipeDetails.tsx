
import { useParams, Link } from "react-router-dom";
import { ArrowRight, Clock, User, Heart, ChefHat } from "lucide-react";
import recipes from "../data/communityRecipes";

function CommunityRecipeDetails() {
  const { id } = useParams();

  const recipe = recipes.find((item) => item.id === Number(id));

  if (!recipe) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center bg-[#F7F3E8] px-5">
        <h2 className="text-2xl font-black text-[#292D26]">
          دستور غذا پیدا نشد!
        </h2>

        <Link
          to="/community"
          className="mt-5 rounded-xl bg-[#526B45] px-6 py-3 text-white"
        >
          بازگشت به انجمن
        </Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#F7F3E8] px-5 py-12">
      <div className="mx-auto max-w-6xl">

        <Link
          to="/community"
          className="mb-8 inline-flex items-center gap-2 font-bold text-[#526B45]"
        >
          <ArrowRight size={20} />
          بازگشت به دستورهای کاربران
        </Link>

        <div className="overflow-hidden rounded-3xl bg-white shadow-sm">

          <div className="grid md:grid-cols-2">

            <div className="h-[300px] md:h-full">
              <img
                src={recipe.image}
                alt={recipe.title}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="p-7 md:p-10">

              <span className="rounded-full bg-[#E98945]/10 px-4 py-2 text-sm font-bold text-[#E98945]">
                {recipe.category}
              </span>

              <h1 className="mt-6 text-3xl font-black text-[#292D26]">
                {recipe.title}
              </h1>

              <p className="mt-4 leading-8 text-[#817F73]">
                {recipe.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-5 text-sm text-[#817F73]">

                <div className="flex items-center gap-2">
                  <Clock size={19} className="text-[#E98945]" />
                  {recipe.time} دقیقه
                </div>

                <div className="flex items-center gap-2">
                  <User size={19} className="text-[#E98945]" />
                  {recipe.author}
                </div>

                <div className="flex items-center gap-2">
                  <Heart size={19} className="text-[#E98945]" />
                  {recipe.likes} پسند
                </div>

              </div>

              <div className="mt-8 rounded-2xl bg-[#F7F3E8] p-5">
                <p className="text-sm text-[#817F73]">
                  هزینه تقریبی تهیه
                </p>

                <p className="mt-2 text-2xl font-black text-[#526B45]">
                  {recipe.cost.toLocaleString("fa-IR")} تومان
                </p>
              </div>

            </div>
          </div>

          <div className="grid gap-10 border-t border-[#E6E0D3] p-7 md:grid-cols-2 md:p-10">

            <section>
              <h2 className="mb-6 flex items-center gap-3 text-2xl font-black text-[#292D26]">
                <ChefHat className="text-[#E98945]" />
                مواد اولیه
              </h2>

              <ul className="space-y-4">
                {recipe.ingredients.map((ingredient, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 rounded-xl bg-[#F7F3E8] p-4 text-[#292D26]"
                  >
                    <span className="h-2 w-2 rounded-full bg-[#E98945]" />
                    {ingredient}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="mb-6 flex items-center gap-3 text-2xl font-black text-[#292D26]">
                <ChefHat className="text-[#E98945]" />
                مراحل پخت
              </h2>

              <ol className="space-y-4">
                {recipe.instructions.map((step, index) => (
                  <li
                    key={index}
                    className="flex gap-4 rounded-xl bg-[#F7F3E8] p-4"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#526B45] font-bold text-white">
                      {index + 1}
                    </span>

                    <p className="leading-7 text-[#292D26]">
                      {step}
                    </p>
                  </li>
                ))}
              </ol>
            </section>

          </div>
        </div>
      </div>
    </main>
  );
}

export default CommunityRecipeDetails;
