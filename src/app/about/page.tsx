export default function About() {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">About FotoSync</h1>
      <p className="text-lg mb-6">
        FotoSync serves as a photo sharing platform where photographers can showcase their work and users can access high-quality, legally-usable images for various creative projects. 
        It aims to streamline the process of finding and sharing visual content, fostering collaboration between content creators.
      </p>
      
      <h2 className="text-2xl font-semibold mb-2">Scope of Project</h2>
      <ul className="list-disc list-inside mb-6">
        <li>User authentication and profile management</li>
        <li>Photo upload, management, and organization</li>
        <li>Search and discovery features</li>
        <li>Analytics and user engagement tracking</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">Group Members</h2>
      <ul className="list-disc list-inside">
        <li>
          <a href="https://tayyab.dev/" className="text-blue-500 hover:underline">Muhammad Tayyab 21L-7686</a>
        </li>
        <li>
          <a href="https://github.com/haziqali86" className="text-blue-500 hover:underline">Haziq Ali 21L-5484</a>
        </li>
      </ul>
    </div>
  );
}
