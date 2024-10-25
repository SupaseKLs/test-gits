import Link from 'next/link';

export default function Contact() {
  return (
    <section className="bg-black text-white min-h-screen py-16 px-6 lg:px-24">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">Get in Touch</h1>
        <p className="text-lg leading-relaxed mb-8 text-center">
          I’d love to hear from you! Whether you have a question, want to discuss a project, or just want to connect, feel free to reach out.
        </p>
        
        <form className="bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-semibold mb-2">Name</label>
            <input
              type="text"
              id="name"
              className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-semibold mb-2">Email</label>
            <input
              type="email"
              id="email"
              className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-semibold mb-2">Message</label>
            <textarea
              id="message"
              rows="4"
              className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition duration-300"
          >
            Send Message
          </button>
        </form>

        <div className="mt-8 text-center">
          <Link href="/">
            <span className="text-blue-500 hover:underline cursor-pointer">
              Back to Home
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
