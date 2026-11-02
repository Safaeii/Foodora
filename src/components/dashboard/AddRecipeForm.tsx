
import { X, ImagePlus, Clock, Users, ChefHat } from "lucide-react";

interface AddRecipeFormProps {
  onClose: () => void;
}

function AddRecipeForm({ onClose }: AddRecipeFormProps) {
  return (
    <div className="rounded-3xl border border-[#E6E0D3] bg-white p-5 sm:p-8">

      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-black text-[#292D26]">
            افزودن دستور جدید
          </h2>
          <p className="mt-2 text-sm text-[#817F73]">
            دستور غذای خوشمزه خودت رو با دیگران به اشتراک بذار.
          </p>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="rounded-xl bg-[#F7F3E8] p-2 text-[#817F73] transition hover:text-red-500"
        >
          <X size={21} />
        </button>
      </div>

      <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>

        {/* Image */}
        <div>
          <label className="mb-3 block text-sm font-bold text-[#292D26]">
            تصویر غذا
          </label>

          <label className="flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-[#E6E0D3] bg-[#F7F3E8]/50 p-10 transition hover:border-[#526B45]">
            <ImagePlus size={38} className="mb-3 text-[#526B45]" />

            <span className="text-sm font-bold text-[#526B45]">
              انتخاب تصویر غذا
            </span>

            <span className="mt-2 text-xs text-[#817F73]">
              تصویر JPG یا PNG
            </span>

            <input
              type="file"
              accept="image/png,image/jpeg"
              className="hidden"
            />
          </label>
        </div>

        {/* Name */}
        <div>
          <label className="mb-2 block text-sm font-bold text-[#292D26]">
            نام غذا
          </label>

          <input
            type="text"
            placeholder="مثلاً پاستا آلفردو"
            className="w-full rounded-xl border border-[#E6E0D3] px-4 py-3 text-sm outline-none transition focus:border-[#526B45]"
          />
        </div>

        {/* Description */}
        <div>
          <label className="mb-2 block text-sm font-bold text-[#292D26]">
            توضیحات غذا
          </label>

          <textarea
            rows={4}
            placeholder="درباره غذات توضیح بده..."
            className="w-full resize-none rounded-xl border border-[#E6E0D3] px-4 py-3 text-sm outline-none transition focus:border-[#526B45]"
          />
        </div>

        {/* Category */}
        <div>
          <label className="mb-2 block text-sm font-bold text-[#292D26]">
            دسته‌بندی غذا
          </label>

          <select
            defaultValue=""
            className="w-full rounded-xl border border-[#E6E0D3] bg-white px-4 py-3 text-sm outline-none focus:border-[#526B45]"
          >
            <option value="" disabled>
              انتخاب دسته‌بندی
            </option>
            <option value="breakfast">صبحانه</option>
            <option value="lunch">ناهار</option>
            <option value="dinner">شام</option>
            <option value="dessert">دسر</option>
            <option value="snack">میان‌وعده</option>
            <option value="drink">نوشیدنی</option>
          </select>
        </div>

        {/* Time & Servings */}
        <div className="grid gap-5 sm:grid-cols-2">

          <div>
            <label className="mb-2 flex items-center gap-2 text-sm font-bold text-[#292D26]">
              <Clock size={17} className="text-[#526B45]" />
              زمان آماده‌سازی
            </label>

            <input
              type="number"
              min="1"
              placeholder="مثلاً ۳۰ دقیقه"
              className="w-full rounded-xl border border-[#E6E0D3] px-4 py-3 text-sm outline-none focus:border-[#526B45]"
            />
          </div>

          <div>
            <label className="mb-2 flex items-center gap-2 text-sm font-bold text-[#292D26]">
              <Users size={17} className="text-[#526B45]" />
              تعداد نفرات
            </label>

            <input
              type="number"
              min="1"
              placeholder="مثلاً ۲ نفر"
              className="w-full rounded-xl border border-[#E6E0D3] px-4 py-3 text-sm outline-none focus:border-[#526B45]"
            />
          </div>

        </div>

        {/* Ingredients */}
        <div>
          <label className="mb-2 block text-sm font-bold text-[#292D26]">
            مواد اولیه
          </label>

          <textarea
            rows={4}
            placeholder={"مثلاً:\n۲ عدد تخم مرغ\n۱ لیوان شیر\n۲ پیمانه آرد"}
            className="w-full resize-none rounded-xl border border-[#E6E0D3] px-4 py-3 text-sm leading-7 outline-none focus:border-[#526B45]"
          />
        </div>

        {/* Instructions */}
        <div>
          <label className="mb-2 flex items-center gap-2 text-sm font-bold text-[#292D26]">
            <ChefHat size={18} className="text-[#526B45]" />
            مراحل پخت
          </label>

          <textarea
            rows={5}
            placeholder={"مراحل آماده‌سازی و پخت غذا رو بنویس..."}
            className="w-full resize-none rounded-xl border border-[#E6E0D3] px-4 py-3 text-sm leading-7 outline-none focus:border-[#526B45]"
          />
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap justify-end gap-3 border-t border-[#E6E0D3] pt-6">

          <button
            type="button"
            onClick={onClose}
            className="rounded-xl border border-[#E6E0D3] px-6 py-3 text-sm font-bold text-[#817F73] transition hover:bg-[#F7F3E8]"
          >
            انصراف
          </button>

          <button
            type="submit"
            className="rounded-xl bg-[#526B45] px-7 py-3 text-sm font-bold text-white transition hover:bg-[#405638]"
          >
            ثبت دستور
          </button>

        </div>
      </form>
    </div>
  );
}

export default AddRecipeForm;
