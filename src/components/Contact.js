// components/Contact.js
import { Github, Linkedin, Mail, MapPin, Send } from 'lucide-react';

function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'huynhln03@gmail.com',
      link: 'mailto:huynhln03@gmail.com'
    },
    {
      icon: MapPin,
      title: 'Location',
      content: 'Can Tho, Vietnam',
      link: '#'
    },
    {
      icon: Github,
      title: 'Github',
      content: 'Huynh25',
      link: 'https://github.com/Huynh25'
    }
  ];

  const socialLinks = [
    { icon: Linkedin, url: 'https://www.linkedin.com/in/huynh-le-87b617296/' },
    { icon: Github, url: 'https://github.com/Huynh25' }
  ];

  return (
    <section id="contact">
      <div className="section-heading">
        <p className="eyebrow">Contact</p>
        <h2>Have a frontend role, product idea, or interface that needs care?</h2>
      </div>

      <div className="contact-cards">
        {contactInfo.map((info, idx) => {
          const Icon = info.icon;
          return (
            <a
              key={idx}
              href={info.link}
              className="contact-card"
              target={info.link.startsWith('http') ? '_blank' : '_self'}
              rel="noopener noreferrer"
            >
              <Icon className="contact-icon" size={40} strokeWidth={1.5} />
              <h3>{info.title}</h3>
              <p>{info.content}</p>
            </a>
          );
        })}
      </div>

      <div className="contact-social">
        {socialLinks.map((social, idx) => {
          const Icon = social.icon;
          return (
            <a
              key={idx}
              href={social.url}
              className="social-icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon size={32} strokeWidth={1.5} />
            </a>
          );
        })}
      </div>
      <a href="mailto:huynhln03@gmail.com" className="cta-button primary-action contact-cta">
        <Send size={18} strokeWidth={1.8} /> Send email
      </a>
    </section>
  );
}

export default Contact;
