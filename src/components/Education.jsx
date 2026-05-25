import { education } from "../data/portfolio";
import { SectionHeading } from "./Skills";

export default function Education() {
  return (
    <section id="education" className="py-24 px-4 sm:px-6 bg-gray-900/40">
      <div className="max-w-4xl mx-auto">
        <SectionHeading title="Education" subtitle="Academic background" />

        <div className="mt-12 flex flex-col gap-6">
          {education.map((edu, idx) => (
            <div
              key={idx}
              className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-violet-700 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div>
                <h3 className="text-white font-semibold text-base mb-1">{edu.degree}</h3>
                <p className="text-violet-400 text-sm">{edu.institution}</p>
              </div>
              <div className="text-left sm:text-right shrink-0">
                <p className="text-gray-300 text-sm font-medium">{edu.period}</p>
                <p className="text-violet-300 text-sm font-semibold mt-1">{edu.score}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
