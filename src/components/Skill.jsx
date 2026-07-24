const Skills = () => {
  const skills = [
    {
      title: "Frontend",
      discription: "React.js, Redux Toolkit, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS",
    },
    {
      title: "Backend",
      discription: "C#, .NET / .NET Core, Web API, Entity Framework, Java, RESTful APIs",
    },
    {
      title: "Databases",
      discription: "SQL Server, SQL, Relational Database Design, CRUD Operations",
    },
    {
      title: "Quality & Security",
      discription: "JWT Authentication, SonarQube, xUnit, Unit Testing, Serilog",
    },
    {
      title: "Engineering Concepts",
      discription: "OOP, Data Structures & Algorithms, Software Architecture, MVC Pattern",
    },
    {
      title: "Tools & Process",
      discription: "Git, GitHub, Agile / Scrum, Code Reviews, Vite",
    },
  ];
  return (
    <section id="skills" className="bg-white py-20 dark:bg-slate-900">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="mb-2 text-3xl font-bold text-slate-900 dark:text-slate-100">
          Skills
        </h2>
        <p className="mb-10 max-w-2xl text-slate-600 dark:text-slate-400">
          Tools I use to design, build, and ship full stack applications.
        </p>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {
                skills.map((s, index) => {
                    return(
                        <article key={index} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
                            <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-slate-100">{s.title}</h3>
                            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">{s.discription}</p>
                        </article>
                    )
                })
            }
        </div>
      </div>
    </section>
  );
};
export default Skills;
