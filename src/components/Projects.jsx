import Skills from "./Skill";

const Projects = () => {
  const projects = [
    {
      title: "Goods Transporter",
      discription:
        "Transport goods from one place to another with ease and through your phone.",
      link: "link",
      skills: ["SQL", "React", ".Net"],
    },
    {
      title: "Goods Transporter",
      discription:
        "Transport goods from one place to another with ease and through your phone.",
      link: "link",
      skills: ["SQL", "React", ".Net"],
    },
    {
      title: "Goods Transporter",
      discription:
        "Transport goods from one place to another with ease and through your phone.",
      link: "link",
      skills: ["SQL", "React", ".Net"],
    },
  ];
  return (
    <>
      <section id="projects">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="mb-2 text-3xl font-bold text-slate-900 dark:text-slate-100">
            Projects
          </h2>
          <p className="mb-10 max-w-2xl text-slate-600 dark:text-slate-400">
            Selected work from class projects and side experiments.
          </p>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {
                projects.map((p, index) => {
                    return(
                        <article key={index} className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-slate-700 dark:bg-slate-800">
                            <img src="/1.jpg" alt="project image" className="aspect-video transition duration-300 group-hover:scale-105"/>
                            <div className="flex flex-1 flex-col p-6">
                                <h3 className="mb-2 text-xl font-semibold text-slate-900 transition group-hover:text-blue-600 dark:text-slate-100 dark:group-hover:text-blue-400">
                                    {p.title}
                                </h3>
                                <p className="mb-4 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                                    {p.discription}
                                </p>
                                <ul className="mb-4 flex flex-wrap gap-2">
                                    {p.skills.map((skills, ind) =>{
                                        return(
                                            <li key={ind} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200">{skills}</li>
                                        )
                                    })}
                                </ul>
                                <a href="" className="text-sm font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">View project →</a>
                            </div>
                        </article>
                    )
                })
            }
          </div>
        </div>
      </section>
    </>
  );
};
export default Projects;
