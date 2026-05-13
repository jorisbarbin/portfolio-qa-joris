import Link from "next/link";
import formationsData from "../../data/formations.json";

export default function Formation() {
  return (
    <section className="pageSection">
      <div className="pageContainer">
        <h1 className="pageTitle">Formation</h1>
        <p className="pageText">
          Voici ce que j'apprends dans la formation Testeur Logiciel chez OpenClassrooms.
          Elle me permet de développer des compétences en test logiciel,
          développement web, analyse fonctionnelle, automatisation, Git, GitHub,
          API, JavaScript, React et Next.js.
        </p>
        <div className="formationsGrid">
          {formationsData.map((formation) => (
          <Link
            href={`/formation/${formation.slug}`}
            key={formation.id}
            className="formationsCard"
          >
              <div className="formationsCardHeader">
                <span className="formationsCategory">{formation.category}</span>
                <span className="formationsStatus">{formation.status}</span>
              </div>

              <h2>{formation.title}</h2>

              <p>{formation.shortDescription}</p>

              <div className="formationsTags">
                {formation.tags.map((tag) => (
                  <span key={tag} className="formationsTag">
                    {tag}
                  </span>
                ))}
              </div>
          <span className="formationsLink">Voir le détail</span>

        </Link>
          ))}
        </div>
      </div>
    </section>
  );
}