import Link from "next/link";

export default function NotFound() {
  return (
    <section className="pageSection">
      <div className="pageContainer">
        <h1 className="pageTitle">Page non trouvée</h1>

        <p className="pageText">
          Désolé, la page demandée n'existe pas ou a été déplacée.
        </p>

        <Link href="/" className="notFoundLink">
          Retour à l'accueil
        </Link>
      </div>
    </section>
  );
}