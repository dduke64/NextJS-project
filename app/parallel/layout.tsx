import { Suspense } from "react"

// slots are available as props in the layout
export const experimental_ppr = true

export default function DashboardLayout({
  children,
  users,
  revenue,
  notifications,
}: {
  children: React.ReactNode,
  users: React.ReactNode,
  revenue: React.ReactNode,
  notifications: React.ReactNode,
}) {
  return (
    <div>
      <div>{children}</div>
      <div>{users}</div>
      <div>{revenue}</div>
      <Suspense>
      <div>{notifications}</div>
      </Suspense>
    </div>
  );
}