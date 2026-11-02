
import { useState, type FormEvent } from "react";
import { Star, MessageCircle, Send, UserRound } from "lucide-react";

type Review = {
  id: number;
  name: string;
  rating: number;
  comment: string;
  date: string;
};

const initialReviews: Review[] = [
  {
    id: 1,
    name: "سارا محمدی",
    rating: 5,
    comment: "این دستور فوق‌العاده بود! خیلی راحت و خوشمزه شد.",
    date: "امروز",
  },
  {
    id: 2,
    name: "نگار احمدی",
    rating: 4,
    comment: "طعم خیلی خوبی داشت. حتماً دوباره درستش می‌کنم.",
    date: "دیروز",
  },
  {
    id: 3,
    name: "علی رضایی",
    rating: 5,
    comment: "مراحل پخت کاملاً واضح بود. ممنون از دستور خوبتون.",
    date: "۲ روز پیش",
  },
];

export default function RecipeReviews() {
  const [reviews, setReviews] = useState<Review[]>(initialReviews);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(5);
  const [error, setError] = useState("");

  const averageRating =
    reviews.length > 0
      ? reviews.reduce((total, review) => total + review.rating, 0) /
        reviews.length
      : 0;

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!name.trim() || !comment.trim()) {
      setError("لطفاً نام و متن دیدگاه را وارد کن.");
      return;
    }

    const newReview: Review = {
      id: Date.now(),
      name: name.trim(),
      rating,
      comment: comment.trim(),
      date: "همین الان",
    };

    setReviews((prev) => [newReview, ...prev]);
    setName("");
    setComment("");
    setRating(5);
    setError("");
  }

  return (
    <section
      dir="rtl"
      className="mt-12 rounded-3xl border border-[#E6E0D3] bg-white p-5 shadow-sm sm:p-8"
    >
      {/* Header */}
      <div className="mb-7 flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="mb-2 flex items-center gap-2">
            <MessageCircle className="text-[#526B45]" size={23} />
            <h2 className="text-xl font-black text-[#292D26]">
              نظرات کاربران
            </h2>
          </div>

          <p className="text-sm text-[#817F73]">
            تجربه خودت از این دستور غذا رو با بقیه به اشتراک بذار.
          </p>
        </div>

        {/* Rating summary */}
        <div className="rounded-2xl bg-[#F7F3E8] px-5 py-3 text-center">
          <div className="flex items-center justify-center gap-1 text-[#E98945]">
            <Star size={20} fill="currentColor" />
            <span className="text-xl font-black text-[#292D26]">
              {averageRating.toFixed(1)}
            </span>
          </div>

          <p className="mt-1 text-xs text-[#817F73]">
            {reviews.length} نظر ثبت‌شده
          </p>
        </div>
      </div>

      {/* Reviews list */}
      <div className="space-y-4">
        {reviews.map((review) => (
          <article
            key={review.id}
            className="rounded-2xl border border-[#E6E0D3] bg-[#F7F3E8]/40 p-4 transition hover:border-[#526B45]/40"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#526B45]/10 text-[#526B45]">
                  <UserRound size={20} />
                </div>

                <div>
                  <h3 className="text-sm font-bold text-[#292D26]">
                    {review.name}
                  </h3>
                  <p className="mt-1 text-xs text-[#817F73]">
                    {review.date}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    size={15}
                    className={
                      index < review.rating
                        ? "fill-[#E98945] text-[#E98945]"
                        : "text-[#D8D2C5]"
                    }
                  />
                ))}
              </div>
            </div>

            <p className="mt-4 text-sm leading-7 text-[#5F6258]">
              {review.comment}
            </p>
          </article>
        ))}

        {reviews.length === 0 && (
          <p className="rounded-2xl bg-[#F7F3E8] p-5 text-center text-sm text-[#817F73]">
            هنوز نظری ثبت نشده. اولین نفر باش!
          </p>
        )}
      </div>

      {/* Add review */}
      <div className="mt-8 border-t border-[#E6E0D3] pt-7">
        <h3 className="mb-5 text-lg font-black text-[#292D26]">
          دیدگاه خودت رو ثبت کن
        </h3>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="mb-2 block text-sm font-bold text-[#292D26]">
              نام شما
            </label>

            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="نام خودت رو وارد کن"
              className="w-full rounded-xl border border-[#E6E0D3] bg-[#F7F3E8]/50 px-4 py-3 text-sm outline-none transition focus:border-[#526B45] focus:ring-2 focus:ring-[#526B45]/10"
            />
          </div>

          <div>
            <label className="mb-3 block text-sm font-bold text-[#292D26]">
              امتیاز شما
            </label>

            <div className="flex items-center gap-2">
              {Array.from({ length: 5 }).map((_, index) => {
                const value = index + 1;

                return (
                  <button
                    key={value}
                    type="button"
                    onClick={() => setRating(value)}
                    aria-label={`امتیاز ${value} از ۵`}
                    className="transition hover:scale-110"
                  >
                    <Star
                      size={27}
                      className={
                        value <= rating
                          ? "fill-[#E98945] text-[#E98945]"
                          : "text-[#D8D2C5]"
                      }
                    />
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold text-[#292D26]">
              متن دیدگاه
            </label>

            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="نظرت درباره این دستور غذا چیه؟"
              rows={4}
              className="w-full resize-none rounded-xl border border-[#E6E0D3] bg-[#F7F3E8]/50 px-4 py-3 text-sm leading-7 outline-none transition focus:border-[#526B45] focus:ring-2 focus:ring-[#526B45]/10"
            />
          </div>

          {error && (
            <p className="text-sm text-red-600">{error}</p>
          )}

          <button
            type="submit"
            className="flex items-center justify-center gap-2 rounded-xl bg-[#526B45] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#405638] hover:shadow-lg"
          >
            <Send size={16} />
            ثبت دیدگاه
          </button>
        </form>
      </div>
    </section>
  );
}
