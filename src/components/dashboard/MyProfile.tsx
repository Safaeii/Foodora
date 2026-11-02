
import { useState } from "react";
import {
  Camera,
  UserRound,
  Mail,
  Phone,
  MapPin,
  CalendarDays,
  Edit3,
  Save,
  ChefHat,
} from "lucide-react";

function MyProfile() {
  const [isEditing, setIsEditing] = useState(false);

  const [profile, setProfile] = useState({
    name: "کاربر Foodora",
    email: "user@example.com",
    phone: "09120000000",
    city: "تهران",
    bio: "علاقه‌مند به آشپزی و امتحان کردن طعم‌های جدید",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="space-y-7">

      {/* Header */}
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h2 className="text-2xl font-black text-[#292D26]">
            پروفایل من
          </h2>
          <p className="mt-2 text-sm text-[#817F73]">
            اطلاعات شخصی و مشخصات حساب کاربری خودت رو مدیریت کن.
          </p>
        </div>

        <button
          onClick={() => setIsEditing(!isEditing)}
          className="flex items-center justify-center gap-2 rounded-xl bg-[#526B45] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#405638]"
        >
          {isEditing ? <Save size={18} /> : <Edit3 size={18} />}
          {isEditing ? "ذخیره تغییرات" : "ویرایش پروفایل"}
        </button>
      </div>

      {/* Profile Card */}
      <div className="overflow-hidden rounded-3xl border border-[#E6E0D3] bg-white">

        {/* Cover */}
        <div className="h-36 bg-gradient-to-l from-[#526B45] to-[#84996E]" />

        <div className="px-5 pb-7 sm:px-8">

          {/* Avatar */}
          <div className="-mt-14 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="relative flex size-28 items-center justify-center rounded-3xl border-4 border-white bg-[#F7F3E8] text-[#526B45] shadow-sm">
              <UserRound size={55} />

              <button
                type="button"
                title="تغییر تصویر پروفایل"
                className="absolute -bottom-2 -left-2 rounded-xl bg-[#526B45] p-2 text-white shadow"
              >
                <Camera size={17} />
              </button>
            </div>

            <div className="pb-2">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#526B45]/10 px-4 py-2 text-xs font-bold text-[#526B45]">
                <ChefHat size={16} />
                عضو Foodora
              </span>
            </div>
          </div>

          {/* Name */}
          <div className="mt-5">
            <h3 className="text-xl font-black text-[#292D26]">
              {profile.name}
            </h3>
            <p className="mt-2 text-sm text-[#817F73]">
              {profile.bio}
            </p>
          </div>

          <div className="my-7 border-t border-[#E6E0D3]" />

          {/* Profile Form */}
          <div>
            <h3 className="mb-6 text-lg font-black text-[#292D26]">
              اطلاعات شخصی
            </h3>

            <div className="grid gap-5 sm:grid-cols-2">

              {/* Name */}
              <div>
                <label className="mb-2 flex items-center gap-2 text-sm font-bold text-[#292D26]">
                  <UserRound size={17} className="text-[#526B45]" />
                  نام و نام خانوادگی
                </label>

                <input
                  name="name"
                  value={profile.name}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className="w-full rounded-xl border border-[#E6E0D3] bg-[#F7F3E8]/50 px-4 py-3 text-sm outline-none transition focus:border-[#526B45] disabled:cursor-default"
                />
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 flex items-center gap-2 text-sm font-bold text-[#292D26]">
                  <Mail size={17} className="text-[#526B45]" />
                  ایمیل
                </label>

                <input
                  name="email"
                  type="email"
                  value={profile.email}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className="w-full rounded-xl border border-[#E6E0D3] bg-[#F7F3E8]/50 px-4 py-3 text-sm outline-none transition focus:border-[#526B45] disabled:cursor-default"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="mb-2 flex items-center gap-2 text-sm font-bold text-[#292D26]">
                  <Phone size={17} className="text-[#526B45]" />
                  شماره تماس
                </label>

                <input
                  name="phone"
                  value={profile.phone}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className="w-full rounded-xl border border-[#E6E0D3] bg-[#F7F3E8]/50 px-4 py-3 text-sm outline-none transition focus:border-[#526B45] disabled:cursor-default"
                />
              </div>

              {/* City */}
              <div>
                <label className="mb-2 flex items-center gap-2 text-sm font-bold text-[#292D26]">
                  <MapPin size={17} className="text-[#526B45]" />
                  شهر
                </label>

                <input
                  name="city"
                  value={profile.city}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className="w-full rounded-xl border border-[#E6E0D3] bg-[#F7F3E8]/50 px-4 py-3 text-sm outline-none transition focus:border-[#526B45] disabled:cursor-default"
                />
              </div>

              {/* Bio */}
              <div className="sm:col-span-2">
                <label className="mb-2 block text-sm font-bold text-[#292D26]">
                  درباره من
                </label>

                <textarea
                  name="bio"
                  value={profile.bio}
                  onChange={handleChange}
                  disabled={!isEditing}
                  rows={4}
                  className="w-full resize-none rounded-xl border border-[#E6E0D3] bg-[#F7F3E8]/50 px-4 py-3 text-sm leading-7 outline-none transition focus:border-[#526B45] disabled:cursor-default"
                />
              </div>

            </div>

            {/* Account Info */}
            <div className="mt-8 rounded-2xl bg-[#F7F3E8] p-5">
              <div className="flex items-center gap-3">
                <CalendarDays size={21} className="text-[#526B45]" />
                <div>
                  <p className="text-sm font-bold text-[#292D26]">
                    عضویت در Foodora
                  </p>
                  <p className="mt-1 text-xs text-[#817F73]">
                    از اطلاعات نمونه استفاده می‌شود.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default MyProfile;
