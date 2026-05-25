import { personalInfo } from "../data/portfolio";
import mypicImg from "../assets/mypic.png";

export default function Hero() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 pt-20 sm:pt-16"
    >
      <div className="max-w-3xl mx-auto text-center">
        {/* Avatar placeholder */}
        <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-linear-to-br from-violet-600 to-indigo-600 p-0.5 mx-auto mb-6 shadow-lg shadow-violet-900/40">
          <img
            src={mypicImg}
            alt="Raju Kumar"
            className="h-full w-full rounded-full object-cover object-top"
          />
        </div>

        <p className="text-violet-400 text-sm font-semibold tracking-widest uppercase mb-3">
          {personalInfo.title}
        </p>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
          {personalInfo.name}
        </h1>

        <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-10">
          {personalInfo.summary}
        </p>

        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4 justify-center">
          <a
            href="#contact"
            className="w-full sm:w-auto px-6 py-3 bg-violet-600 hover:bg-violet-500 text-white text-sm rounded-lg font-semibold transition-colors shadow-lg shadow-violet-900/30"
          >
            Get in touch
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3 border border-gray-700 hover:border-violet-500 text-gray-200 hover:text-violet-400 text-sm rounded-lg font-semibold transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="#projects"
            className="w-full sm:w-auto px-6 py-3 border border-gray-700 hover:border-violet-500 text-gray-200 hover:text-violet-400 text-sm rounded-lg font-semibold transition-colors"
          >
            View Projects
          </a>
        </div>
      </div>
    </section>
  );
}
