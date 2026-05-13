import Link from "next/link";
import { notFound } from "next/navigation";
import formationsData from "../../../data/formations.json";

export default async function FormationDetail({ params }) {
  const { slug } = await params;

  const formation = formationsData.find((formation) => formation.slug === slug);

  if (!formation) {
    notFound();
  }

  return (
    <section className="pageSection">
      <div className="pageContainer">
        <Link href="/formation" className="backLink">
          ← Retour aux formations
        </Link>

        <div className="formationsDetailHeader">
          <span className="formationsCategory">{formation.category}</span>
          <span className="formationsStatus">{formation.status}</span>
        </div>

        <h1 className="pageTitle">{formation.title}</h1>
        <p className="pageText">{formation.longDescription}</p>

        <div className="formationsTags detailTags">
          {formation.tags.map((tag) => (
            <span key={tag} className="formationsTag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export function generateStaticParams() {
  return formationsData.map((formation) => ({
    slug: formation.slug,
  }));
}