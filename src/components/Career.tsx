import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box glass-panel" style={{ padding: '20px', marginBottom: '20px' }}>
            <div className="career-info-in">
              <div className="career-role">
                <h4>Founder</h4>
                <h5>AquaPure (Startup Initiative)</h5>
              </div>
              <h3>2025-Present</h3>
            </div>
            <p>
              Eco-friendly brand building, product design & marketing initiatives.
            </p>
          </div>
          <div className="career-info-box glass-panel" style={{ padding: '20px', marginBottom: '20px' }}>
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full-Stack Intern</h4>
                <h5>Zidio, Ceeras IT Services, CodeAlpha</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Built REST APIs, improved response time, fixed vulnerabilities, and implemented ML pipelines.
            </p>
          </div>
          <div className="career-info-box glass-panel" style={{ padding: '20px', marginBottom: '20px' }}>
            <div className="career-info-in">
              <div className="career-role">
                <h4>Founder - Startup Initiatives</h4>
                <h5>ShadowBlock AI, WorkNest</h5>
              </div>
              <h3>2025-Present</h3>
            </div>
            <p>
              Building ShadowBlock AI (AI moderation) and WorkNest (student gig platform). Hands-on with AI integration.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
