
'use client';

import { FormEvent, useState } from 'react';

const services = [
  { n: '01', title: 'EV Charging Infrastructure', text: 'Complete site execution from survey, power planning and civil works to charger installation, commissioning and O&M.' },
  { n: '02', title: 'AC & DC Charger Installation', text: 'Installation and commissioning for AC, DC fast and fleet charging applications.' },
  { n: '03', title: 'Civil & Electrical EPC', text: 'RCC foundations, trenching, paver work, cable routes, electrical works and site development.' },
  { n: '04', title: 'LT / HT Panel & Power', text: 'LT/HT panels, DBs, transformers, protection, cable laying, termination and earthing systems.' },
  { n: '05', title: 'EV Canopy & Parking Shed', text: 'MS structural fabrication, roofing, ACP fascia, EV canopies and car parking sheds.' },
  { n: '06', title: 'Factory Shed & Fabrication', text: 'Industrial sheds, steel structures, fabrication and erection for commercial and industrial sites.' },
  { n: '07', title: 'Solar & Electrical Infrastructure', text: 'Solar and electrical infrastructure solutions for commercial and industrial requirements.' },
  { n: '08', title: 'Charger Sales & Supply', text: 'AC/DC EV chargers and project accessories with supply support for charging hubs and businesses.' },
  { n: '09', title: 'Testing, Commissioning & O&M', text: 'Testing, commissioning, preventive maintenance, troubleshooting and ongoing support.' },
];

const capabilities = [
  ['EV Charging Hubs', 'AC & DC chargers • Canopy • Electrical infrastructure', '01'],
  ['Bus Depot Infrastructure', 'Charging hub • Civil • Power • Distribution', '02'],
  ['EV Charging Canopy', 'Design • Fabrication • Roofing • Installation', '03'],
  ['Car Parking Shed', 'MS structure • Fabrication • Site installation', '04'],
  ['Factory Shed', 'Industrial steel • Fabrication • Erection', '05'],
  ['Charger Supply', 'AC • DC • Accessories • Project supply', '06'],
];

const process = [
  ['01', 'Requirement', 'BOQ, site details, charger and project scope review.'],
  ['02', 'Site Survey', 'Civil, electrical and power infrastructure assessment.'],
  ['03', 'Engineering', 'Execution planning, drawings, BOQ and material planning.'],
  ['04', 'Execution', 'Civil, electrical, fabrication and charger installation.'],
  ['05', 'Commissioning', 'Testing, energisation, handover and documentation.'],
  ['06', 'O&M', 'Maintenance and operational support after commissioning.'],
];

export default function Home() {
  const [sent, setSent] = useState(false);

  function submitForm(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get('name') || '');
    const company = String(data.get('company') || '');
    const phone = String(data.get('phone') || '');
    const requirement = String(data.get('requirement') || '');
    const message = String(data.get('message') || '');
    const text = `Hello MCS, I have a project enquiry.%0A%0AName: ${encodeURIComponent(name)}%0ACompany: ${encodeURIComponent(company)}%0AMobile: ${encodeURIComponent(phone)}%0ARequirement: ${encodeURIComponent(requirement)}%0ADetails: ${encodeURIComponent(message)}`;
    window.open(`https://wa.me/917654174373?text=${text}`, '_blank', 'noopener,noreferrer');
    setSent(true);
    e.currentTarget.reset();
  }

  return (
    <main>
      <header className="nav">
        <a className="brand" href="#home" aria-label="MCS home"><img src="/mcs-logo.jpg" alt="Modern Communication System" /></a>
        <nav><a href="#about">About</a><a href="#services">Services</a><a href="#capabilities">Capabilities</a><a href="#process">Process</a><a href="#contact">Contact</a></nav>
        <a className="navCta" href="#contact">Get a Quote <span>↗</span></a>
      </header>

      <section id="home" className="hero">
        <div className="heroVisual" />
        <div className="heroShade" />
        <div className="heroGrid" />
        <div className="heroCopy">
          <div className="kicker">MODERN COMMUNICATION SYSTEM · INDIA</div>
          <h1>THE INFRASTRUCTURE<br /><em>BEHIND EV CHARGING.</em></h1>
          <p>End-to-end EV Charging Infrastructure & EPC — from power connection and civil works to charger installation, canopy, commissioning and O&amp;M.</p>
          <div className="heroActions"><a className="btn primary" href="#contact">Discuss Your Project <span>↗</span></a><a className="btn ghost" href="#services">Explore Services</a></div>
          <div className="heroTrust"><span>2,500+ EV projects</span><i /> <span>Pan-India execution</span><i /> <span>Engineering • EPC • O&amp;M</span></div>
        </div>
      </section>

      <section className="stats">
        <div><strong>2,500+</strong><span>EV PROJECTS<br />EXECUTED</span></div>
        <div><strong>3</strong><span>BUS DEPOT<br />HUBS READY</span></div>
        <div><strong>5</strong><span>4-WHEELER<br />CHARGING HUBS</span></div>
        <div><strong>INDIA</strong><span>STRONG EXECUTION<br />NETWORK</span></div>
      </section>

      <section id="about" className="section about">
        <div className="sectionTag">01 / ABOUT MCS</div>
        <div className="aboutContent"><h2>One partner for the complete project.</h2><p>MCS is an India-based EV Charging Infrastructure & EPC company combining civil, electrical, fabrication and charger execution capabilities. We work with clients, fleet operators, businesses and project partners to turn site requirements into ready-to-operate infrastructure.</p><div className="aboutPills"><span>EV Infrastructure</span><span>Electrical EPC</span><span>Civil Works</span><span>Fabrication</span><span>Charger Supply</span><span>O&amp;M</span></div></div>
      </section>

      <section id="services" className="section servicesSection">
        <div className="sectionIntro"><div><div className="sectionTag">02 / SERVICES</div><h2>Everything required to build the site.</h2></div><p>From the first survey to final commissioning, MCS can coordinate the complete execution scope.</p></div>
        <div className="serviceGrid">{services.map((s) => <article className="serviceCard" key={s.n}><span className="serviceNo">{s.n}</span><h3>{s.title}</h3><p>{s.text}</p><a href="#contact">Discuss scope <span>↗</span></a></article>)}</div>
      </section>

      <section id="capabilities" className="section capabilitySection">
        <div className="sectionIntro"><div><div className="sectionTag">03 / CAPABILITIES</div><h2>Built for real-world projects.</h2></div><p>EV, electrical, civil and industrial execution under one roof.</p></div>
        <div className="capGrid">{capabilities.map(([title, text, no]) => <article className="capCard" key={title}><div className="capTop"><span>{no}</span><span>↗</span></div><div><h3>{title}</h3><p>{text}</p></div></article>)}</div>
      </section>

      <section id="process" className="section processSection">
        <div className="sectionIntro"><div><div className="sectionTag">04 / EXECUTION</div><h2>From requirement to handover.</h2></div><p>A practical execution flow designed for commercial and industrial projects.</p></div>
        <div className="processGrid">{process.map(([no, title, text]) => <div className="processItem" key={no}><span>{no}</span><h3>{title}</h3><p>{text}</p></div>)}</div>
      </section>

      <section className="cta"><div><div className="sectionTag">HAVE A PROJECT?</div><h2>Send the BOQ. Let&apos;s discuss the execution.</h2><p>Share your BOQ, target price, site requirement or charger requirement with MCS.</p></div><a className="btn primary" href="#contact">Start an Enquiry <span>↗</span></a></section>

      <section id="contact" className="section contactSection">
        <div className="contactIntro"><div className="sectionTag">05 / CONTACT</div><h2>Let&apos;s talk about your project.</h2><p>Tell us what you need — EV charging infrastructure, charger supply, canopy, parking shed, factory shed, electrical EPC or O&amp;M.</p><div className="contactList"><a href="tel:+917654174373"><small>PHONE</small><strong>+91 7654174373</strong></a><a href="mailto:info@mcsystem.in"><small>EMAIL</small><strong>info@mcsystem.in</strong></a><a href="https://wa.me/917654174373" target="_blank" rel="noreferrer"><small>WHATSAPP</small><strong>Chat with MCS ↗</strong></a></div></div>
        <form className="contactForm" onSubmit={submitForm}><div className="formTitle">Project Enquiry</div><div className="formRow"><input name="name" placeholder="Your name *" required /><input name="company" placeholder="Company name" /></div><div className="formRow"><input name="phone" placeholder="Mobile number *" required /><select name="requirement" defaultValue="EV Charging Infrastructure"><option>EV Charging Infrastructure</option><option>AC / DC Charger Supply</option><option>EV Canopy / Parking Shed</option><option>Factory Shed / Fabrication</option><option>Solar / Electrical EPC</option><option>O&amp;M / Maintenance</option></select></div><textarea name="message" rows={5} placeholder="Project location, BOQ, quantity or requirement..." /><button className="btn primary" type="submit">Send Enquiry on WhatsApp <span>↗</span></button>{sent && <div className="formNote">WhatsApp opened with your enquiry details.</div>}</form>
      </section>

      <footer><div className="footerMain"><img src="/mcs-logo.jpg" alt="MCS" /><div><strong>MODERN COMMUNICATION SYSTEM</strong><span>End-to-End EV Charging Infrastructure | Electrical | Civil | EPC | O&amp;M</span></div></div><div className="footerRight"><a href="mailto:info@mcsystem.in">info@mcsystem.in</a><a href="tel:+917654174373">+91 7654174373</a><span>mcsystem.in</span></div><div className="copyright">© {new Date().getFullYear()} Modern Communication System. All rights reserved.</div></footer>
      <a className="whatsapp" href="https://wa.me/917654174373" target="_blank" rel="noreferrer" aria-label="WhatsApp MCS">WA</a>
    </main>
  );
}
