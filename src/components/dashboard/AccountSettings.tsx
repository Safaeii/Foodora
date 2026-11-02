
import { useState } from "react";
import {
  Bell,
  Moon,
  Sun,
  ShieldCheck,
  LockKeyhole,
  Globe,
  Eye,
  Mail,
  Smartphone,
  UserRound,
  Save,
  LogOut,
  ChevronLeft,
    ChefHat,
} from "lucide-react";

function AccountSettings() {
  const [notifications, setNotifications] = useState({
    email: true,
    likes: true,
    comments: false,
    updates: true,
  });

  const [privacy, setPrivacy] = useState({
    publicProfile: true,
    showRecipes: true,
    showActivity: false,
  });

  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState("fa");
  const [saved, setSaved] = useState(false);

  const toggleNotification = (key: keyof typeof notifications) => {
    setNotifications((previous) => ({
      ...previous,
      [key]: !previous[key],
    }));
    setSaved(false);
  };

  const togglePrivacy = (key: keyof typeof privacy) => {
    setPrivacy((previous) => ({
      ...previous,
      [key]: !previous[key],
    }));
    setSaved(false);
  };

  const Toggle = ({
    checked,
    onChange,
  }: {
    checked: boolean;
    onChange: () => void;
  }) => (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={onChange}
      className={`relative h-6 w-11 shrink-0 rounded-full transition ${
        checked ? "bg-[#526B45]" : "bg-[#D8D4CA]"
      }`}
    >
      <span
        className={`absolute top-1 size-4 rounded-full bg-white shadow transition-all ${
          checked ? "right-1" : "right-6"
        }`}
      />
    </button>
  );

  const SettingRow = ({
    icon: Icon,
    title,
    description,
    checked,
    onChange,
  }: {
    icon: React.ElementType;
    title: string;
    description: string;
    checked: boolean;
    onChange: () => void;
  }) => (
    <div className="flex items-center justify-between gap-4 border-b border-[#E6E0D3] py-5 last:border-0">
      <div className="flex min-w-0 items-center gap-3">
        <div className="rounded-xl bg-[#F7F3E8] p-3 text-[#526B45]">
          <Icon size={20} />
        </div>

        <div>
          <h4 className="text-sm font-bold text-[#292D26]">
            {title}
          </h4>
          <p className="mt-1 text-xs leading-6 text-[#817F73]">
            {description}
          </p>
        </div>
      </div>

      <Toggle checked={checked} onChange={onChange} />
    </div>
  );

  return (
    <section className="space-y-7">

      {/* Header */}
      <div>
        <h2 className="text-2xl font-black text-[#292D26]">
          تنظیمات حساب
        </h2>
        <p className="mt-2 text-sm text-[#817F73]">
          تنظیمات حساب کاربری و تجربه استفاده از Foodora رو مدیریت کن.
        </p>
      </div>

      {/* Notifications */}
      <div className="rounded-3xl border border-[#E6E0D3] bg-white p-5 sm:p-7">
        <div className="mb-2 flex items-center gap-3">
          <div className="rounded-xl bg-[#526B45]/10 p-3 text-[#526B45]">
            <Bell size={22} />
          </div>

          <div>
            <h3 className="font-black text-[#292D26]">
              اعلان‌ها
            </h3>
            <p className="mt-1 text-xs text-[#817F73]">
              مشخص کن چه اعلان‌هایی دریافت کنی.
            </p>
          </div>
        </div>

        <SettingRow
          icon={Mail}
          title="اعلان‌های ایمیلی"
          description="دریافت اخبار و اطلاعیه‌ها از طریق ایمیل"
          checked={notifications.email}
          onChange={() => toggleNotification("email")}
        />

        <SettingRow
          icon={Bell}
          title="پسندهای جدید"
          description="وقتی کسی دستور غذات رو می‌پسنده."
          checked={notifications.likes}
          onChange={() => toggleNotification("likes")}
        />

        <SettingRow
          icon={UserRound}
          title="دیدگاه‌های جدید"
          description="وقتی کسی برای دستور غذات نظر می‌ذاره."
          checked={notifications.comments}
          onChange={() => toggleNotification("comments")}
        />

        <SettingRow
          icon={Smartphone}
          title="به‌روزرسانی‌های Foodora"
          description="اطلاع از امکانات و قابلیت‌های جدید سایت"
          checked={notifications.updates}
          onChange={() => toggleNotification("updates")}
        />
      </div>

      {/* Appearance */}
      <div className="rounded-3xl border border-[#E6E0D3] bg-white p-5 sm:p-7">
        <div className="mb-5 flex items-center gap-3">
          <div className="rounded-xl bg-[#E98945]/10 p-3 text-[#E98945]">
            <Sun size={22} />
          </div>

          <div>
            <h3 className="font-black text-[#292D26]">
              ظاهر و زبان
            </h3>
            <p className="mt-1 text-xs text-[#817F73]">
              نحوه نمایش سایت رو شخصی‌سازی کن.
            </p>
          </div>
        </div>

        {/* Dark Mode */}
        <div className="flex items-center justify-between gap-4 border-b border-[#E6E0D3] py-5">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-[#F7F3E8] p-3 text-[#526B45]">
              {darkMode ? <Moon size={20} /> : <Sun size={20} />}
            </div>

            <div>
              <h4 className="text-sm font-bold text-[#292D26]">
                حالت تاریک
              </h4>
              <p className="mt-1 text-xs text-[#817F73]">
                تغییر ظاهر سایت به حالت تاریک
              </p>
            </div>
          </div>

          <Toggle
            checked={darkMode}
            onChange={() => {
              setDarkMode(!darkMode);
              setSaved(false);
            }}
          />
        </div>

        {/* Language */}
        <div className="flex flex-col justify-between gap-4 py-5 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-[#F7F3E8] p-3 text-[#526B45]">
              <Globe size={20} />
            </div>

            <div>
              <h4 className="text-sm font-bold text-[#292D26]">
                زبان سایت
              </h4>
              <p className="mt-1 text-xs text-[#817F73]">
                زبان مورد علاقه خودت رو انتخاب کن.
              </p>
            </div>
          </div>

          <select
            value={language}
            onChange={(e) => {
              setLanguage(e.target.value);
              setSaved(false);
            }}
            className="rounded-xl border border-[#E6E0D3] bg-white px-4 py-3 text-sm text-[#292D26] outline-none focus:border-[#526B45]"
          >
            <option value="fa">فارسی</option>
            <option value="en">English</option>
          </select>
        </div>
      </div>

      {/* Privacy */}
      <div className="rounded-3xl border border-[#E6E0D3] bg-white p-5 sm:p-7">
        <div className="mb-2 flex items-center gap-3">
          <div className="rounded-xl bg-blue-50 p-3 text-blue-600">
            <ShieldCheck size={22} />
          </div>

          <div>
            <h3 className="font-black text-[#292D26]">
              حریم خصوصی
            </h3>
            <p className="mt-1 text-xs text-[#817F73]">
              مشخص کن دیگران چه اطلاعاتی از تو ببینن.
            </p>
          </div>
        </div>

        <SettingRow
          icon={Eye}
          title="پروفایل عمومی"
          description="سایر کاربران بتونن پروفایلت رو مشاهده کنن."
          checked={privacy.publicProfile}
          onChange={() => togglePrivacy("publicProfile")}
        />

        <SettingRow
          icon={ChefHat}
          title="نمایش دستورهای غذا"
          description="دستورهای منتشرشده تو برای دیگران قابل مشاهده باشن."
          checked={privacy.showRecipes}
          onChange={() => togglePrivacy("showRecipes")}
        />

        <SettingRow
          icon={UserRound}
          title="نمایش فعالیت‌ها"
          description="فعالیت‌های اخیرت در پروفایلت نمایش داده بشه."
          checked={privacy.showActivity}
          onChange={() => togglePrivacy("showActivity")}
        />
      </div>

      {/* Security */}
      <div className="rounded-3xl border border-[#E6E0D3] bg-white p-5 sm:p-7">
        <div className="mb-5 flex items-center gap-3">
          <div className="rounded-xl bg-orange-50 p-3 text-orange-600">
            <LockKeyhole size={22} />
          </div>

          <div>
            <h3 className="font-black text-[#292D26]">
              امنیت حساب
            </h3>
            <p className="mt-1 text-xs text-[#817F73]">
              مدیریت امنیت و دسترسی حساب کاربری.
            </p>
          </div>
        </div>

        <button
          type="button"
          className="flex w-full items-center justify-between rounded-xl bg-[#F7F3E8] p-4 text-right transition hover:bg-[#EAE5D8]"
        >
          <div>
            <h4 className="text-sm font-bold text-[#292D26]">
              تغییر رمز عبور
            </h4>
            <p className="mt-1 text-xs text-[#817F73]">
              مدیریت رمز عبور حساب
            </p>
          </div>

          <ChevronLeft size={20} className="text-[#526B45]" />
        </button>
      </div>

      {/* Save */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-[#817F73]">
          تغییرات فعلاً فقط در همین صفحه نگهداری می‌شن.
        </p>

        <button
          type="button"
          onClick={() => setSaved(true)}
          className="flex items-center justify-center gap-2 rounded-xl bg-[#526B45] px-7 py-3 font-bold text-white transition hover:bg-[#405638]"
        >
          <Save size={18} />
          ذخیره تنظیمات
        </button>
      </div>

      {saved && (
        <div className="rounded-xl border border-[#526B45]/20 bg-[#526B45]/10 p-4 text-center text-sm font-bold text-[#526B45]">
          تنظیمات در این صفحه اعمال شدند.
        </div>
      )}

      {/* Logout */}
      <div className="rounded-2xl border border-red-100 bg-white p-5">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h3 className="font-bold text-[#292D26]">
              خروج از حساب
            </h3>
            <p className="mt-2 text-xs text-[#817F73]">
              خروج از حساب کاربری Foodora
            </p>
          </div>

          <button
            type="button"
            className="flex items-center gap-2 rounded-xl bg-red-50 px-4 py-3 text-sm font-bold text-red-500 transition hover:bg-red-100"
          >
            <LogOut size={18} />
            خروج
          </button>
        </div>
      </div>

    </section>
  );
}

export default AccountSettings;

