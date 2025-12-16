import { checkAuth } from "@/actions/auth";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const isAuthenticated = await checkAuth();

  if (!isAuthenticated) {
    redirect("/login");
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="border-4 border-dashed border-gray-200 rounded-lg h-96 flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-gray-900">
                Welcome to your Dashboard
              </h2>
              <p className="mt-2 text-gray-600">
                This is a simple dashboard page.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
