function Section({ title, icon, children }) {
  return (
    <section>
      <header>
        <h2>{title}</h2>
        <img alt={title} src={icon} />
      </header>

      {children}
    </section>
  );
}

export default Section;
