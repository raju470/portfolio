import { skills } from "../data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading title="Skills" subtitle="Technologies I work with" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {skills.map((group) => (
            <div
              key={group.category}
              className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-violet-700 transition-colors"
            >
              <h3 className="text-violet-400 text-xs font-semibold tracking-widest uppercase mb-4">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full border border-gray-700"
                  >
                    {item}
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

export function SectionHeading({ title, subtitle }) {
  return (
    <div className="text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">{title}</h2>
      {subtitle && <p className="text-gray-500 mt-2 text-base">{subtitle}</p>}
    </div>
  );
}
