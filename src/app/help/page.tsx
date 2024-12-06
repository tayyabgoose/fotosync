export default function Help() {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Help &amp; Feedback</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">
          Frequently Asked Questions (FAQs)
        </h2>
        <ul className="list-disc list-inside">
          <li className="mb-2">
            <strong>How do I create an account?</strong>
            <p>
              To create an account, click on the &quot;Sign Up&quot; button on
              the homepage and fill in the required information.
            </p>
          </li>
          <li className="mb-2">
            <strong>How can I upload photos?</strong>
            <p>
              Once logged in, navigate to your profile and click on the
              &quot;Upload&quot; button to add your photos.
            </p>
          </li>
          <li className="mb-2">
            <strong>What types of images can I upload?</strong>
            <p>
              You can upload any high-quality images that you own the rights to,
              including JPEG and PNG formats.
            </p>
          </li>
          <li className="mb-2">
            <strong>How do I report an issue?</strong>
            <p>
              If you encounter any issues, please use the feedback form below or
              contact our support team.
            </p>
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Feedback Form</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              placeholder="Your Name"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              placeholder="Your Email"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              rows={4}
              placeholder="Your feedback or question"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
        <p>
          If you need further assistance, feel free to reach out to our support
          team at{" "}
          <a
            href="mailto:support@fotosync.com"
            className="text-blue-500 hover:underline"
          >
            support@fotosync.com
          </a>
          .
        </p>
      </section>
    </div>
  );
}
