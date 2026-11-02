
import { useParams, Link } from "react-router-dom";
import { ArrowRight, Clock, User, Heart, ChefHat } from "lucide-react";

const recipes = [
  {
    id: 1,
    title: "پاستا آلفردو",
    image: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?w=1000",
    author: "سارا محمدی",
    time: 25,
    cost: 180000,
    likes: 120,
    category: "غذای اصلی",
    description: "یک پاستای خامه‌ای و خوشمزه با سس آلفردو که به‌راحتی در خانه آماده می‌شود.",
    ingredients: [
      "پاستا: ۲۰۰ گرم",
      "خامه: ۱۰۰ گرم",
      "قارچ: ۱۵۰ گرم",
      "سیر: ۲ حبه",
      "کره: ۳۰ گرم",
      "پنیر پارمزان: ۵۰ گرم",
      "نمک و فلفل: به مقدار لازم",
    ],
    instructions: [
      "ابتدا پاستا را در آب جوش و کمی نمک بپزید.",
      "کره را در تابه ذوب کنید و سیر خردشده را اضافه کنید.",
      "قارچ‌ها را اضافه کرده و تفت دهید.",
      "خامه و پنیر پارمزان را اضافه کنید و هم بزنید.",
      "پاستای پخته‌شده را به سس اضافه کنید.",
      "مواد را مخلوط کرده و پس از چند دقیقه سرو کنید.",
    ],
  },
  {
    id: 2,
    title: "سالاد سزار",
    image: "https://images.unsplash.com/photo-1551248429-40975aa4de74?w=1000",
    author: "نگار رضایی",
    time: 15,
    cost: 95000,
    likes: 85,
    category: "سالم",
    description: "سالادی خوشمزه و سبک با کاهو، نان تست و سس مخصوص.",
    ingredients: [
      "کاهو: یک عدد",
      "نان تست: ۲ عدد",
      "پنیر پارمزان: ۳۰ گرم",
      "مرغ پخته: ۱۵۰ گرم",
      "سس سزار: به مقدار لازم",
    ],
    instructions: [
      "کاهو را بشویید و خرد کنید.",
      "نان تست را به شکل مکعبی برش دهید و برشته کنید.",
      "مرغ پخته را خرد کنید.",
      "تمام مواد را داخل ظرف بریزید.",
      "سس سزار و پنیر پارمزان را اضافه کنید و مخلوط کنید.",
    ],
  },
  {
    id: 3,
    title: "پیتزای خانگی",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=1000",
    author: "مریم احمدی",
    time: 40,
    cost: 140000,
    likes: 210,
    category: "غذای اصلی",
    description: "پیتزای خانگی با پنیر کش‌دار و مواد دلخواه.",
    ingredients: [
      "خمیر پیتزا: یک عدد",
      "پنیر پیتزا: ۱۵۰ گرم",
      "قارچ: ۱۰۰ گرم",
      "فلفل دلمه‌ای: یک عدد",
      "سس گوجه: به مقدار لازم",
    ],
    instructions: [
      "خمیر پیتزا را داخل سینی قرار دهید.",
      "سس گوجه را روی خمیر پخش کنید.",
      "قارچ و فلفل دلمه‌ای خردشده را اضافه کنید.",
      "پنیر پیتزا را روی مواد بریزید.",
      "در فر از قبل گرم‌شده بپزید تا پنیر آب شود و خمیر طلایی شود.",
    ],
  },
  {
    id: 4,
    title: "پنکیک موزی",
    image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=1000",
    author: "الناز کریمی",
    time: 10,
    cost: 45000,
    likes: 65,
    category: "صبحانه",
    description: "پنکیک نرم و خوشمزه با طعم موز برای یک صبحانه دلچسب.",
    ingredients: [
      "موز: یک عدد",
      "تخم‌مرغ: یک عدد",
      "آرد: نصف پیمانه",
      "شیر: نصف پیمانه",
      "بکینگ‌پودر: نصف قاشق چای‌خوری",
    ],
    instructions: [
      "موز را با چنگال له کنید.",
      "تخم‌مرغ و شیر را اضافه کنید.",
      "آرد و بکینگ‌پودر را اضافه کرده و مخلوط کنید.",
      "مقداری از مایه را در تابه نچسب بریزید.",
      "هر دو طرف پنکیک را بپزید تا طلایی شود.",
    ],
  },
  {
    id: 5,
    title: "برگر خانگی",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1000",
    author: "علی رضایی",
    time: 30,
    cost: 110000,
    likes: 175,
    category: "غذای اصلی",
    description: "برگر خانگی خوشمزه با نان تازه و مخلفات دلخواه.",
    ingredients: [
      "گوشت چرخ‌کرده: ۲۰۰ گرم",
      "نان برگر: یک عدد",
      "پنیر ورقه‌ای: یک عدد",
      "گوجه و کاهو: به مقدار لازم",
      "نمک و فلفل: به مقدار لازم",
    ],
    instructions: [
      "گوشت را با نمک و فلفل مخلوط کنید.",
      "گوشت را به شکل برگر فرم دهید.",
      "برگر را در تابه بپزید تا کاملاً مغزپخت شود.",
      "پنیر را روی برگر قرار دهید.",
      "برگر را همراه نان و مخلفات سرو کنید.",
    ],
  },
  {
    id: 6,
    title: "اسموتی توت‌فرنگی",
    image: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=1000",
    author: "هانیه موسوی",
    time: 5,
    cost: 35000,
    likes: 95,
    category: "نوشیدنی",
    description: "یک نوشیدنی خنک و خوش‌طعم با توت‌فرنگی تازه.",
    ingredients: [
      "توت‌فرنگی: یک پیمانه",
      "شیر: یک لیوان",
      "موز: یک عدد",
      "عسل: یک قاشق غذاخوری",
    ],
    instructions: [
      "توت‌فرنگی‌ها را بشویید.",
      "موز را خرد کنید.",
      "تمام مواد را داخل مخلوط‌کن بریزید.",
      "مواد را مخلوط کنید تا یکدست شود.",
      "اسموتی را خنک سرو کنید.",
    ],
  },
];

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
