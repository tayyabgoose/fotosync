import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="flex flex-col items-center text-center p-8">
      <section className="mt-20">
        <h2 className="text-4xl font-bold">Share Your Moments</h2>
        <p className="mt-4 mb-4 text-lg text-gray-600">
          Join our community of photographers and share your beautiful moments
          with the world.
        </p>
        <Link
          href="/signup"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg"
        >
          Get Started
        </Link>
      </section>

      <section className="mt-20 max-w-4xl">
        <h3 className="text-3xl font-semibold">Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="bg-white p-4 rounded-lg shadow">
            <h4 className="font-bold">Easy Uploads</h4>
            <p className="text-gray-600">
              Upload your photos effortlessly and manage your gallery.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h4 className="font-bold">Community Engagement</h4>
            <p className="text-gray-600">
              Connect with other photographers and share your work.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h4 className="font-bold">High-Quality Images</h4>
            <p className="text-gray-600">
              Share and discover high-quality images for your projects.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
