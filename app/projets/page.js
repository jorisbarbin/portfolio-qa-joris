import Link from "next/link";
import projectsData from "../../data/projects.json";

export const metadata = {
  title: "Projets",
  description:
    "Découvrez les projets réalisés par Joris Barbin pendant sa formation de testeur logiciel : HTML, CSS, JavaScript, API, React, Next.js et tests fonctionnels.",
};

export default function Projets() {
  return (
    <section className="pageSection">
      <div className="pageContainer">
        <h1 className="pageTitle">Mes projets</h1>

        <p className="pageText">
          Voici une sélection de projets réalisés pendant ma formation, autour du
          test logiciel, du développement web, de JavaScript, React, Next.js et
          des outils QA.
        </p>

        <div className="projectsGrid">
          {projectsData.map((project) => (
            <Link
              href={`/projets/${project.slug}`}
              key={project.id}
              className="projectCard"
            >
              <div className="projectCardHeader">
                <span className="projectCategory">{project.category}</span>
                <span className="projectStatus">{project.status}</span>
              </div>

              <h2>{project.title}</h2>

              <p>{project.shortDescription}</p>

              <div className="projectTags">
                {project.tags.map((tag) => (
                  <span key={tag} className="projectTag">
                    {tag}
                  </span>
                ))}
              </div>

              <span className="projectLink">Voir le détail</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}