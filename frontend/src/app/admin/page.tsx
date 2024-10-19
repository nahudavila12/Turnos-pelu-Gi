// app/admin/page.tsx
"use client";

import AdminDashboard from "@/components/admin-dashboard/admin-dashboard";



export default function AdminView() {
  return (
    <div className="min-h-screen bg-gray-100">
      <AdminDashboard />
    </div>
  );
}
