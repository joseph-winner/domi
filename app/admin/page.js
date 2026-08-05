"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { Eye, EyeOff, AlertCircle } from "lucide-react";

export default function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const result = await login(email, password);

    if (result.success) {
      router.push("/admin/dashboard");
    } else {
      setError(result.error || "Invalid email or password");
    }

    setLoading(false);
  };

  return (
    <div
      className="min-h-screen lg:grid lg:grid-cols-2"
      style={{ background: "var(--paper)" }}
    >
      {/* Left — branded panel */}
      <div className="relative hidden overflow-hidden lg:block">
        <img
          src="/img/who-we-are.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#053759]/96 via-[#053759]/90 to-[#053759]/75" />
        {/* Decorative rings */}
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full border border-white/10" />
        <div className="pointer-events-none absolute -bottom-40 -right-4 h-80 w-80 rounded-full border border-white/10" />

        <div className="relative flex h-full flex-col justify-between p-12">
          <div className="flex items-center gap-3">
            <img
              src="/logos/doctors-mission-logo.svg"
              alt="Doctors on Mission International"
              className="h-10 w-10 object-contain"
            />
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
              DOMI Admin
            </span>
          </div>

          <div className="max-w-md">
            <h2 className="text-[2.5rem] font-semibold leading-[1.05] tracking-[-0.03em] text-white">
              Manage your missions,{" "}
              <span className="text-[color:var(--brand-secondary)]">
                stories and impact.
              </span>
            </h2>
            <p className="mt-5 text-[0.98rem] leading-relaxed text-white/70">
              Sign in to update content, publish reports and keep the Doctors on
              Mission story moving forward.
            </p>
          </div>

          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} Doctors On Mission International
          </p>
        </div>
      </div>

      {/* Right — login form */}
      <div className="flex min-h-screen items-center justify-center px-5 py-16 sm:px-8 lg:px-12">
        <div className="w-full max-w-sm">
          {/* Mobile logo */}
          <div className="mb-10 flex items-center gap-3 lg:hidden">
            <img
              src="/logos/doctors-mission-logo.svg"
              alt="Doctors on Mission International"
              className="h-9 w-9 object-contain"
            />
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--ink)]">
              DOMI Admin
            </span>
          </div>

          <h1 className="text-[2rem] font-semibold tracking-[-0.03em] !text-[color:var(--ink)]">
            Login
          </h1>
          <p className="mt-2 text-sm text-[color:var(--muted)]">
            Sign in to manage your website content.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            {error && (
              <div className="flex items-center gap-3 rounded-[12px] border border-rose-300 bg-rose-50 p-3.5 text-rose-700">
                <AlertCircle className="h-5 w-5 flex-shrink-0" />
                <p className="text-sm">{error}</p>
              </div>
            )}

            <div>
              <label
                htmlFor="email"
                className="mb-1.5 block text-sm font-medium !text-[color:var(--ink)]"
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-[12px] border border-[color:var(--line)] bg-[color:var(--paper)] px-4 py-3 text-sm !text-[color:var(--ink)] outline-none transition placeholder:text-[color:var(--muted)] focus:border-[color:var(--brand-primary)] focus:ring-4 focus:ring-[color:var(--brand-primary)]/12"
                placeholder="name@example.com"
                required
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="mb-1.5 block text-sm font-medium !text-[color:var(--ink)]"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-[12px] border border-[color:var(--line)] bg-[color:var(--paper)] px-4 py-3 pr-12 text-sm !text-[color:var(--ink)] outline-none transition placeholder:text-[color:var(--muted)] focus:border-[color:var(--brand-primary)] focus:ring-4 focus:ring-[color:var(--brand-primary)]/12"
                  placeholder="••••••••••"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[color:var(--muted)] transition hover:text-[color:var(--ink)]"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-[12px] bg-[color:var(--brand-primary)] py-3.5 text-sm font-semibold text-white transition hover:bg-[color:var(--brand-primary-600)] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Signing in...
                </span>
              ) : (
                "Login"
              )}
            </button>
          </form>

          <p className="mt-10 text-xs text-[color:var(--muted)] lg:hidden">
            © {new Date().getFullYear()} Doctors On Mission International
          </p>
        </div>
      </div>
    </div>
  );
}
