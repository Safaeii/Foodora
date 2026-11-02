
import { useState, type ChangeEvent, type FormEvent } from "react";
import { Link } from "react-router-dom";
import {
  ChefHat,
  Mail,
  LockKeyhole,
  Eye,
  EyeOff,
  ArrowLeft,
  Utensils,
  Sparkles,
} from "lucide-react";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError("");
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      setError("لطفاً تمام فیلدها را تکمیل کن.");
      return;
    }

    if (formData.password.length < 8) {
      setError("رمز عبور باید حداقل ۸ کاراکتر باشد.");
      return;
    }

    setError("فرم ورود آماده است؛ اتصال به سیستم ورود در مرحله بعد انجام می‌شود.");
  }

  return (
    <main
      dir="rtl"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#263D32] px-4 py-8 sm:px-6"
    >
      {/* Background gradients */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-[400px] w-[400px] rounded-full bg-[#E98945]/50 blur-[110px]" />
      <div className="pointer-events-none absolute -bottom-40 -left-32 h-[430px] w-[430px] rounded-full bg-[#8AA878]/40 blur-[120px]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#E7B96D]/20 blur-[100px]" />

      {/* Decorative circles */}
      <div className="pointer-events-none absolute right-[12%] top-[15%] h-16 w-16 rounded-full border border-white/10" />
      <div className="pointer-events-none absolute bottom-[15%] left-[12%] h-24 w-24 rounded-full border border-white/10" />

      <div className="relative z-10 grid w-full max-w-5xl items-center gap-8 lg:grid-cols-2">

        {/* Brand section */}
        <section className="hidden text-white lg:block">
          <div className="mb-9 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/30 bg-white/15 shadow-lg backdrop-blur-xl">
              <ChefHat size={27} />
            </div>
            <span className="text-2xl font-black tracking-tight">
              Foodora
            </span>
          </div>

          <div className="mb-7 max-w-lg">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs text-white/90 backdrop-blur-md">
              <Sparkles size={15} className="text-[#FFC58C]" />
              دنیای طعم‌های متفاوت
            </span>

            <h1 className="text-4xl font-black leading-[1.5]">
              آشپزی کن،
              <br />
              <span className="text-[#FFC58C]">الهام بگیر</span>
              <br />
              و به اشتراک بذار.
            </h1>

            <p className="mt-5 max-w-md text-sm leading-8 text-white/70">
              به جامعه آشپزهای Foodora بپیوند و دستورهای خوشمزه‌ات
              رو با آدم‌هایی که عاشق آشپزی هستن به اشتراک بذار.
            </p>
          </div>

          <div className="flex items-center gap-3 text-sm text-white/70">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/20 bg-white/10">
              <Utensils size={17} />
            </div>
            <span>یک جامعه، هزاران طعم متفاوت</span>
          </div>
        </section>

        {/* Glass login card */}
        <section className="mx-auto w-full max-w-[400px] rounded-[28px] border border-white/25 bg-white/[0.13] p-6 shadow-[0_25px_80px_rgba(0,0,0,0.25)] backdrop-blur-2xl sm:p-8">

          {/* Mobile logo */}
          <div className="mb-6 flex items-center justify-center gap-3 lg:hidden">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/30 bg-white/15 text-white backdrop-blur-xl">
              <ChefHat size={23} />
            </div>
            <span className="text-xl font-black text-white">Foodora</span>
          </div>

          <div className="mb-7 text-center">
            <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/30 bg-white/15 text-[#FFD0A6] shadow-lg backdrop-blur-xl">
              <ChefHat size={25} />
            </span>

            <h2 className="mb-2 text-2xl font-black text-white">
              خوش برگشتی!
            </h2>

            <p className="text-xs leading-6 text-white/65">
              برای ورود به دنیای Foodora اطلاعاتت رو وارد کن.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">

            {/* Email */}
            <div>
              <label className="mb-2 block text-xs font-bold text-white/90">
                آدرس ایمیل
              </label>

              <div className="relative">
                <Mail
                  size={17}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60"
                />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="example@email.com"
                  className="h-12 w-full rounded-xl border border-white/20 bg-white/10 pr-11 pl-4 text-sm text-white outline-none transition placeholder:text-white/40 focus:border-[#FFC58C] focus:bg-white/15 focus:ring-4 focus:ring-[#FFC58C]/15"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <div className="mb-2 flex items-center justify-between">
                <label className="text-xs font-bold text-white/90">
                  رمز عبور
                </label>

                <Link
                  to="/forgot-password"
                  className="text-[11px] font-bold text-[#FFC58C] transition hover:text-white"
                >
                  فراموشی رمز؟
                </Link>
              </div>

              <div className="relative">
                <LockKeyhole
                  size={17}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60"
                />

                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="رمز عبور خود را وارد کنید"
                  className="h-12 w-full rounded-xl border border-white/20 bg-white/10 pr-11 pl-11 text-sm text-white outline-none transition placeholder:text-white/40 focus:border-[#FFC58C] focus:bg-white/15 focus:ring-4 focus:ring-[#FFC58C]/15"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60 transition hover:text-[#FFC58C]"
                  aria-label={showPassword ? "مخفی کردن رمز" : "نمایش رمز"}
                >
                  {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
                </button>
              </div>
            </div>

            {error && (
              <p className="rounded-xl border border-white/15 bg-white/10 px-3 py-2 text-xs leading-6 text-white">
                {error}
              </p>
            )}

            {/* Login button */}
            <button
              type="submit"
              className="group flex h-12 w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-l from-[#F2A15D] to-[#E4773B] text-sm font-black text-white shadow-lg shadow-[#E98945]/25 transition duration-300 hover:-translate-y-0.5 hover:from-[#F6AE72] hover:to-[#E98945] hover:shadow-xl"
            >
              ورود به حساب کاربری
              <ArrowLeft
                size={17}
                className="transition group-hover:-translate-x-1"
              />
            </button>
          </form>

          <div className="my-6 flex items-center gap-3">
            <div className="h-px flex-1 bg-white/20" />
            <span className="text-[11px] text-white/55">
              هنوز عضو Foodora نیستی؟
            </span>
            <div className="h-px flex-1 bg-white/20" />
          </div>

          <Link
            to="/register"
            className="flex h-12 w-full items-center justify-center rounded-xl border border-white/30 bg-white/10 text-sm font-bold text-white backdrop-blur-md transition hover:bg-white/20"
          >
            ساخت حساب کاربری
          </Link>

          <p className="mt-6 text-center text-[11px] text-white/45">
            © Foodora - دنیای خوشمزه‌ها
          </p>
        </section>
      </div>
    </main>
  );
}
