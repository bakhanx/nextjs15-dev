import Form from 'next/form'
import { redirect } from 'next/navigation'

const redirectPage = async () => {
  "use server"
  redirect("/page1")
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <main className="flex flex-col items-center gap-12">
          {/* Hero Section */}
          <div className="text-center">
            <h1 className="mb-4 text-4xl font-bold text-gray-900 sm:text-5xl">
              Welcome to Our Platform
            </h1>
            <p className="text-lg text-gray-600">
              Discover amazing features and start your journey today
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid w-full max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: 'Feature 1', color: 'bg-blue-500' },
              { title: 'Feature 2', color: 'bg-green-500' },
              { title: 'Feature 3', color: 'bg-red-500' },
              { title: 'Feature 4', color: 'bg-yellow-500' }
            ].map((item, index) => (
              <div
                key={index}
                className={`${item.color} rounded-lg p-6 text-white transition-transform hover:scale-105`}
              >
                <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>
                <p className="text-sm opacity-90">
                  Description of the feature goes here
                </p>
              </div>
            ))}
          </div>

          {/* Search Form */}
          <div className="w-full max-w-md">
            <Form action={redirectPage} className="flex gap-2">
              <input
                name="query"
                className="flex-1 rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
                placeholder="Search..."
              />
              <button
                type="submit"
                className="rounded-lg bg-blue-600 px-6 py-2 text-white transition-colors hover:bg-blue-700"
              >
                Search
              </button>
            </Form>
          </div>
        </main>
      </div>
    </div>
  )
}
