import Link from 'next/link';

export default function Home() {
  return (
    <section className="bg-black text-white min-h-screen flex flex-col justify-center items-center px-6 lg:px-24">
      <h1 className="text-5xl font-bold mb-4 text-center">Welcome to SUCSEK STUDIO</h1>
      <p className="text-lg mb-8 text-center max-w-2xl">
        At SUCSEK STUDIO, I create user-centered digital experiences that are visually appealing and highly functional. 
        Explore my portfolio to see how I blend creativity with technology.
      </p>
      <Link href="/about">
          Learn More About Me
      </Link>
      <div className="mt-12">
        <h2 className="text-3xl font-semibold mb-4">Featured Projects</h2>
        <ul className="space-y-4">
          {/* Sample project links - replace with actual projects */}
          <li>
            <Link href="/projects/project1">
              Project 1: Furniture Store
            </Link>
          </li>
          <li>
            <Link href="/projects/project2">
              Project 2: UX Research
            </Link>
          </li>
          <li>
            <Link href="/projects/project3">
             Project 3: Web App Design
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
