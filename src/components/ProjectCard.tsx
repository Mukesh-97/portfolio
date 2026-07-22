type Props = {
  title: string;
  description: string;
  tech: string[];
};

export default function ProjectCard({
  title,
  description,
  tech,
}: Props) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-cyan-400 transition">
      <h3 className="text-2xl font-bold">
        {title}
      </h3>

      <p className="text-slate-400 mt-4">
        {description}
      </p>

      <div className="flex flex-wrap gap-3 mt-6">
        {tech.map((item) => (
          <span
            key={item}
            className="px-3 py-1 bg-slate-800 rounded-lg text-sm"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}