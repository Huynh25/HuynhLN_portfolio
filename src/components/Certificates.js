// components/Certificates.js
import { ExternalLink } from 'lucide-react';

function Certificates() {
  const certificates = [
    { title: "Software Development Lifecycle", issuer: "Coursera", certificates:"https://coursera.org/share/1d80537d2d45a3d152c0d32374d30072"},
    { title: "User Experience Research and Design", issuer: "Coursera", certificates:"https://coursera.org/share/1c129002e9e2a8bafc06c482059bb3cb"},
    { title: "Project Management Principles and Practices", issuer: "Codecademy", certificates:"https://coursera.org/share/225cd287dfb4e1937daccab57b76cba7"},
    { title: "Computer Communications", issuer: "Coursera", certificates:"https://coursera.org/share/440d2b8aba9f690dbef1deb708caa953"},
    { title: "CertNexus Certified Ethical Emerging Technologist", issuer: "Coursera", certificates:"https://coursera.org/share/92f1e4258fdf49c00414af71feb8a304"},

  ];

  return (
    <section id="certificate">
      <h2>Certificates</h2>
      <div className="certificates-grid">
        {certificates.map((cert, idx) => (
          <div key={idx} className="cert-card">
            <h3>{cert.title}</h3>
            <p className="issuer">{cert.issuer}</p>
            <a className="cert-link-btn" href={cert.certificates} target="_blank" rel="noopener noreferrer">
              <ExternalLink size={18} />
              View Certificate
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certificates;
