import { AuthProvider } from "@/context/AuthContext";

export const metadata = {
  title: "Admin Dashboard - Doctors On Mission International",
  description:
    "Content management system for Doctors On Mission International website",
};

export default function AdminLayout({ children }) {
  return <AuthProvider>{children}</AuthProvider>;
}
