import { projects } from "../data/portfolio";
import { SectionHeading } from "./Skills";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading title="Projects" subtitle="Things I've built" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-gray-900 border border-gray-800 rounded-xl p-6 flex flex-col hover:border-violet-700 hover:-translate-y-1 transition-all duration-200"
            >
              <h3 className="text-white font-semibold text-base mb-3">{project.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-3 flex-1">{project.description}</p>
              {project.highlights && (
                <p className="text-violet-400 text-xs mb-4 font-medium">
                  ✦ {project.highlights}
                </p>
              )}
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 bg-violet-950/60 text-violet-300 text-xs rounded border border-violet-800/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
