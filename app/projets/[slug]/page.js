import Link from "next/link";
import { notFound } from "next/navigation";
import projectsData from "../../../data/projects.json";

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const project = projectsData.find((project) => project.slug === slug);

  if (!project) {
    return {
      title: "Projet non trouvé",
      description: "Ce projet n'existe pas ou n'est plus disponible.",
    };
  }

  return {
    title: project.title,
    description: project.shortDescription,
    openGraph: {
      title: project.title,
      description: project.shortDescription,
      type: "article",
    },
  };
}

export default async function ProjectDetail({ params }) {
  const { slug } = await params;

  const project = projectsData.find((project) => project.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <section className="pageSection">
      <div className="pageContainer">
        <Link href="/projets" className="backLink">
          ← Retour aux projets
        </Link>

        <div className="projectDetailHeader">
          <span className="projectCategory">{project.category}</span>
          <span className="projectStatus">{project.status}</span>
        </div>

        <h1 className="pageTitle">{project.title}</h1>

        <p className="pageText">{project.longDescription}</p>

        <div className="projectTags detailTags">
          {project.tags.map((tag) => (
            <span key={tag} className="projectTag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}