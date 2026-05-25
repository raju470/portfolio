import { experience } from "../data/portfolio";
import { SectionHeading } from "./Skills";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 bg-gray-900/40">
      <div className="max-w-4xl mx-auto">
        <SectionHeading title="Experience" subtitle="My professional journey" />

        <div className="mt-12 relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-800 ml-1.75 hidden sm:block" />

          <div className="flex flex-col gap-10">
            {experience.map((job, idx) => (
              <div key={idx} className="sm:pl-10 relative">
                {/* Dot */}
                <div className="hidden sm:block absolute left-0 top-1 w-4 h-4 rounded-full bg-violet-600 border-2 border-gray-950 shadow-md shadow-violet-900/50" />

                <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-violet-700 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                    <h3 className="text-white font-semibold text-lg">{job.role}</h3>
                    <span className="text-xs text-violet-400 font-medium sm:whitespace-nowrap">{job.period}</span>
                  </div>
                  <p className="text-violet-500 text-sm font-medium mb-4">{job.company}</p>
                  <ul className="space-y-2">
                    {job.points.map((point, i) => (
                      <li key={i} className="text-gray-400 text-sm flex gap-2">
                        <span className="text-violet-500 mt-0.5 shrink-0">▸</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
