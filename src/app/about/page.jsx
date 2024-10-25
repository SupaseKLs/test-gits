import React from 'react';

const About = () => {
  return (
    <section className="bg-black text-white min-h-screen py-16 px-6 lg:px-24">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-center">About SUCSEK STUDIO</h2>
        <p className="text-lg leading-relaxed mb-8">
          Welcome to SUCSEK STUDIO, a space where creativity meets functionality. Founded by Supasek, 
          SUCSEK STUDIO is dedicated to crafting digital experiences that are not only visually stunning but also user-centered.
          Here, I blend my expertise in UX/UI design and front-end development to build intuitive and impactful designs.
        </p>
        <p className="text-lg leading-relaxed mb-8">
          With a passion for bringing ideas to life, I’m committed to creating solutions that engage, 
          inspire, and solve real problems for users. From conceptualization to pixel-perfect execution, 
          SUCSEK STUDIO is here to turn visions into reality.
        </p>
        <div className="mt-12 text-center">
          <a href="#projects" className="inline-block bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300">
            View My Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
