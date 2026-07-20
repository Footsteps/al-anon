function LegalPage({ title, children }) {
  return (
    <main className="legal-page" id="main-content" tabIndex={-1}>
      <section className="section-card border legal-card">
        <h2>{title}</h2>
        {children}
      </section>
    </main>
  );
}

export default LegalPage;