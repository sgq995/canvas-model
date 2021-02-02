import './Section.css';

function Section({ title, icon, children }) {
  return (
    <section className="Section">
      <header className="Section__header">
        <h2 className="Section__title">{title}</h2>
        <img className="Section__icon" alt={title} src={icon} />
      </header>

      <article className="Section__content">
        {children}
      </article>
    </section>
  );
}

export default Section;
