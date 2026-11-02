
import { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (formData.password.length < 8) {
      setError("رمز عبور باید حداقل ۸ کاراکتر باشد.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("رمز عبور و تکرار آن یکسان نیستند.");
      return;
    }

    setError("فرم ثبت‌نام آماده است. اتصال به سیستم ثبت‌نام را در مرحله بعد انجام می‌دهیم.");
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#F7F3E8] px-5 py-12">

      <div className="w-full max-w-md rounded-3xl border border-[#E6E0D3] bg-white p-7 shadow-lg sm:p-10">

        <div className="mb-8 text-center">
          <Link to="/" className="text-3xl font-black text-[#526B45]">
            Foodora<span className="text-[#E98945]">.</span>
          </Link>

          <h1 className="mt-6 text-2xl font-black text-[#292D26]">
            به خانواده فودورا بپیوند!
          </h1>

          <p className="mt-3 text-sm leading-7 text-[#817F73]">
            حساب کاربری خودت رو بساز و دنیای آشپزی رو کشف کن.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">

          <div>
            <label className="mb-2 block text-sm font-bold text-[#292D26]">
              نام و نام خانوادگی
            </label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="نام خودت رو وارد کن"
              required
              className="w-full rounded-xl border border-[#E6E0D3] bg-[#F7F3E8]/50 px-4 py-3 outline-none transition focus:border-[#526B45] focus:ring-2 focus:ring-[#526B45]/10"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold text-[#292D26]">
              ایمیل
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@email.com"
              required
              className="w-full rounded-xl border border-[#E6E0D3] bg-[#F7F3E8]/50 px-4 py-3 outline-none transition focus:border-[#526B45] focus:ring-2 focus:ring-[#526B45]/10"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold text-[#292D26]">
              رمز عبور
            </label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="حداقل ۸ کاراکتر"
                required
                className="w-full rounded-xl border border-[#E6E0D3] bg-[#F7F3E8]/50 px-4 py-3 pl-16 outline-none transition focus:border-[#526B45] focus:ring-2 focus:ring-[#526B45]/10"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-sm font-semibold text-[#526B45]"
              >
                {showPassword ? "مخفی کردن" : "نمایش"}
              </button>
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold text-[#292D26]">
              تکرار رمز عبور
            </label>

            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="رمز عبور را دوباره وارد کن"
                required
                className="w-full rounded-xl border border-[#E6E0D3] bg-[#F7F3E8]/50 px-4 py-3 pl-16 outline-none transition focus:border-[#526B45] focus:ring-2 focus:ring-[#526B45]/10"
              />

              <button
                type="button"
                onClick={() =>
                  setShowConfirmPassword(!showConfirmPassword)
                }
                className="absolute left-4 top-1/2 -translate-y-1/2 text-sm font-semibold text-[#526B45]"
              >
                {showConfirmPassword ? "مخفی کردن" : "نمایش"}
              </button>
            </div>
          </div>

          {error && (
            <p className="rounded-xl bg-[#E98945]/10 p-3 text-sm leading-7 text-[#B85C38]">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="w-full rounded-xl bg-[#526B45] py-3.5 font-bold text-white transition hover:bg-[#405638] hover:shadow-lg"
          >
            ساخت حساب کاربری
          </button>

        </form>

        <div className="mt-7 border-t border-[#E6E0D3] pt-6 text-center">
          <p className="text-sm text-[#817F73]">
            قبلاً حساب ساختی؟
            <Link
              to="/login"
              className="mr-2 font-bold text-[#526B45] transition hover:text-[#E98945]"
            >
              وارد شو
            </Link>
          </p>
        </div>

      </div>
    </main>
  );
}

export default Register;
