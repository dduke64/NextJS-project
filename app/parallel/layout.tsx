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
    <div className="flex text-center flex-col w-lg">
        <div className="flex w-full">
      <div className="w-1/2 m-6 p-6 bg-base-300 border-base-300 text-base-content rounded">{users}</div>
      <div className="w-1/2 m-6 p-6 bg-base-300 border-base-300 text-base-content rounded">{revenue}</div>
      </div>
      <Suspense>
      <div className="w-lg mx-6 p-6 bg-primary-content border-base-300 text-base-content rounded">{notifications}</div>
      </Suspense>
    </div>
  );
}