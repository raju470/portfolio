import { personalInfo } from "../data/portfolio";
import { SectionHeading } from "./Skills";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6">
      <div className="max-w-2xl mx-auto text-center">
        <SectionHeading title="Get In Touch" subtitle="Let's work together" />

        <p className="text-gray-400 mt-6 mb-10 text-base leading-relaxed">
          I'm open to new opportunities, collaborations, or just a friendly chat
          about tech. Feel free to reach out.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={`mailto:${personalInfo.email}`}
            className="w-full sm:w-auto flex items-center gap-3 px-4 sm:px-6 py-4 bg-gray-900 border border-gray-800 hover:border-violet-600 rounded-xl text-gray-300 hover:text-violet-400 transition-colors group"
          >
            <svg className="w-5 h-5 text-violet-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="text-sm break-all text-left">{personalInfo.email}</span>
          </a>

          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center gap-3 px-4 sm:px-6 py-4 bg-gray-900 border border-gray-800 hover:border-violet-600 rounded-xl text-gray-300 hover:text-violet-400 transition-colors group"
          >
            <svg className="w-5 h-5 text-violet-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            <span className="text-sm break-all text-left">linkedin.com/in/raju-kumar-shah</span>
          </a>
        </div>

        <p className="text-gray-600 text-sm mt-16">
          Crafted with ❤️ by a full-stack engineer who's shipped production code across Node.js, React, and cloud platforms since 2019.
        </p>
      </div>
    </section>
  );
}
