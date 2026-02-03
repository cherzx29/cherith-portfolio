"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // script.js (simple carousel) - same logic, React-safe
    const track = document.getElementById("projTrack");
    const prev = document.getElementById("projPrev") as HTMLButtonElement | null;
    const next = document.getElementById("projNext") as HTMLButtonElement | null;
    if (!track || !prev || !next) return;

    const total = track.children.length;
    let i = 0;

    const render = () => {
      (track as HTMLElement).style.transform = `translateX(-${i * 100}%)`;
      prev.disabled = i === 0;
      next.disabled = i === total - 1;
    };

    prev.onclick = () => {
      if (i > 0) i--;
      render();
    };

    next.onclick = () => {
      if (i < total - 1) i++;
      render();
    };

    render();

    return () => {
      prev.onclick = null;
      next.onclick = null;
    };
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <header className="navbar">
        <div className="nav-left">Cherith Boya</div>

        <div className="nav-right">
          <nav className="nav-links">
            <a href="#home">Home</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#leadership">Leadership</a>
            <a href="#contact">Contact</a>
          </nav>

          <span className="nav-sep">|</span>

          <a
            className="nav-icon"
            href="https://github.com/cherzx29"
            target="_blank"
            rel="noopener"
            aria-label="GitHub"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/github.svg"
              alt="GitHub"
            />
          </a>

          <a
            className="nav-icon"
            href="https://www.linkedin.com/in/cherithboya/"
            target="_blank"
            rel="noopener"
            aria-label="LinkedIn"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg"
              alt="LinkedIn"
            />
          </a>
        </div>
      </header>

      {/* HOME / HERO */}
      <section id="home" className="hero-left">
        <div className="hero-wrap">
          {/* Profile photo circle */}
          <div className="pfp" title="Add your photo">
            <img
              src="/assets/me.jpg"
              alt="Cherith Boya"
              onError={(e) => {
                const img = e.currentTarget as HTMLImageElement;
                img.style.display = "none";
                img.parentElement?.classList.add("pfp-fallback");
              }}
            />
            <span className="pfp-fallback-text" aria-hidden="true">
              CB
            </span>
          </div>

          <div className="hero-main">
            <h1>Hello! I'm Cherith Boya,</h1>
            <div className="hero-card">
              <p className="hero-text">
                I am a second year Computer Engineering student at the University of Guelph who loves building, coding, and bringing
                ideas to life through technology. I’m currently excited to dive deeper into hardware and embedded systems, exploring
                robotics, sensors, and control-based projects. Feel free to check out my work and reach out about opportunities,
                collaborations, or anything tech-related!
              </p>

              <div className="hero-divider"></div>

              <p className="hero-text">
                Besides being a techie, I enjoy spending time with friends and family and creating meaningful memories. Music is a big part of my life, and I listen to all genres because it helps me connect with others. I also like staying active through basketball and working out, and I unwind with gaming. I’m a very social person who enjoys meeting new people and building connections.
              </p>
            </div>

            <div className="hero-buttons">
              <a className="pill contact-btn" href="#contact">
                <span className="icon" aria-hidden="true">
                  <svg className="pill-svg" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M4 6h16v12H4V6zm1.5 1.5v.2l6.9 5.1c.4.3.9.3 1.3 0l6.9-5.1v-.2H5.5zm13 9V9.2l-5.9 4.4c-1 .7-2.2.7-3.2 0L3.5 9.2v7.3h15z" />
                  </svg>
                </span>
                <span className="label">Contact</span>
                <span className="chev">↘</span>
              </a>

              <a
                className="pill resume-btn"
                href="/assets/Cherith%20Boya%20Resume%20(6).pdf"
                target="_blank"
                rel="noopener"
              >
                <span className="icon" aria-hidden="true">
                  <svg className="pill-svg" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 3v10.2l3.3-3.3 1.4 1.4-5.7 5.7-5.7-5.7 1.4-1.4 3.3 3.3V3h2zM5 19h14v2H5v-2z" />
                  </svg>
                </span>
                <span className="label">Download Resume</span>
                <span className="chev">↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="section">
        <h2>Experience</h2>

        <div className="exp-timeline">
          <article className="exp-item">
            <div className="exp-marker">
              <span className="exp-dot"></span>
              <span className="exp-line"></span>
            </div>

            <div className="exp-card">
              <div className="exp-logo" aria-hidden="true">
                <img src="/assets/Kumon.png" alt="Kumon Logo" className="exp-logo-img" />
              </div>

              <div className="exp-content">
                <div className="exp-top">
                  <div>
                    <h3 className="exp-role">Student Instructor Assistant</h3>
                    <p className="exp-company">Kumon Math and Reading Centre — Mississauga, ON</p>
                  </div>
                  <span className="exp-date">Sept 2021 – Feb 2023</span>
                </div>

                <ul className="exp-bullets">
                  <li>Supported high-volume sessions by coaching <strong>20+ students</strong> per shift, accelerating accuracy, confidence, and pace.</li>
                  <li>Diagnosed learning gaps quickly and adapted explanations to different learning styles.</li>
                  <li>Tracked performance and completion metrics to align instructors on progress and next steps.</li>
                  <li>Guided students through challenging concepts while maintaining a calm, motivating environment.</li>
                </ul>

                <div className="exp-tags">
                  <span className="tag">Technical Communication</span>
                  <span className="tag">Mentoring</span>
                  <span className="tag">Reliability</span>
                  <span className="tag">Time Management</span>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* PROJECTS (CAROUSEL) */}
      <section id="projects" className="section">
        <div className="proj-head">
          <h2>Projects</h2>

          <div className="proj-controls" aria-label="Project carousel controls">
            <button className="proj-arrow" id="projPrev" type="button" aria-label="Previous project">‹</button>
            <button className="proj-arrow" id="projNext" type="button" aria-label="Next project">›</button>
          </div>
        </div>

        <div className="proj-viewport" aria-label="Project carousel">
          <div className="proj-track" id="projTrack">
            <article className="proj-card">
              <div className="proj-media">
                <img
                  src="/assets/wheelchair.png"
                  alt="Project screenshot"
                  onError={(e) => {
                    const img = e.currentTarget as HTMLImageElement;
                    img.style.display = "none";
                    img.parentElement?.classList.add("proj-media-fallback");
                  }}
                />
                <span className="proj-date">Sept 2024 – Dec 2024</span>
              </div>

              <div className="proj-body">
                <h3 className="proj-title">Autonomous Mobility Systems Design</h3>
                <p className="proj-desc">
                  Led the design and delivery of an autonomous mobility system from end to end as a project lead for a five-membered
                  team; design of mechanical components on AutoCAD, programming of Arduino-based C++ control for motion, task execution,
                  and system integration within defined engineering constraints.
                </p>

                <div className="proj-tags">
                  <span className="tag tag-purple">C++</span>
                  <span className="tag tag-purple">Arduino UNO</span>
                  <span className="tag tag-purple">AutoCAD</span>
                  <span className="tag tag-purple">Meccano</span>
                </div>
              </div>
            </article>

            <article className="proj-card">
              <div className="proj-media">
                <img
                  src="/assets/Uni.png"
                  alt="Project screenshot"
                  onError={(e) => {
                    const img = e.currentTarget as HTMLImageElement;
                    img.style.display = "none";
                    img.parentElement?.classList.add("proj-media-fallback");
                  }}
                />
                <span className="proj-date">Jan  2025 – April 2025</span>
              </div>

              <div className="proj-body">
                <h3 className="proj-title">University Management System</h3>
                <p className="proj-desc">
                  This project was a University Management System that simulates how real academic systems work in schools, from student
                  registration to admin control. I developed the backend for both the student and admin modules, including secure login
                  and course management features. Completed as part of a 4-person team, this project earned a 100% final score.
                </p>

                <div className="proj-tags">
                  <span className="tag tag-purple">Java</span>
                  <span className="tag tag-purple">JavaFX</span>
                  <span className="tag tag-purple">OOP</span>
                </div>
              </div>
            </article>

            <article className="proj-card">
              <div className="proj-media">
                <img
                  src="/assets/cf.png"
                  alt="Project screenshot"
                  onError={(e) => {
                    const img = e.currentTarget as HTMLImageElement;
                    img.style.display = "none";
                    img.parentElement?.classList.add("proj-media-fallback");
                  }}
                />
                <span className="proj-date">Jan 2026 - Present</span>
              </div>

              <div className="proj-body">
                <h3 className="proj-title">Credit Card Fraud Detection</h3>
                <p className="proj-desc">
                  This project is a Credit Card Fraud Detection system built with machine learning to identify suspicious transactions.
                  I trained and tested multiple models to learn patterns from real financial data and predict potential fraud.
                  The final model balances catching fraud while minimizing false alarms for legitimate users.
                </p>

                <div className="proj-tags">
                  <span className="tag tag-purple">Python</span>
                  <span className="tag tag-purple">Panadas</span>
                  <span className="tag tag-purple">Numpy</span>
                  <span className="tag tag-purple">scikit-learn</span>
                  <span className="tag tag-purple">ML</span>
                </div>
              </div>
            </article>

            <article className="proj-card">
              <div className="proj-media">
                <img
                  src="/assets/casinoGame.png"
                  alt="Project screenshot"
                  onError={(e) => {
                    const img = e.currentTarget as HTMLImageElement;
                    img.style.display = "none";
                    img.parentElement?.classList.add("proj-media-fallback");
                  }}
                />
                <span className="proj-date">July 2025 – Aug 2025</span>
              </div>

              <div className="proj-body">
                <h3 className="proj-title">Lucky Queen Casino</h3>
                <p className="proj-desc">Lucky Queen Online Casino was a Java-based group project where I led the front-end development, designing the login system, main menu, and the Skyfall game interface. I also worked on a simple Python module for bet validation to support the overall game logic, combining user-focused design with structured system thinking.</p>

                <div className="proj-tags">
                  <span className="tag tag-purple">Java</span>
                  <span className="tag tag-purple">Java Swing</span>
                  <span className="tag tag-purple">OOP</span>
                  <span className="tag tag-purple">Python</span>
                </div>
              </div>
            </article>

            <article className="proj-card">
              <div className="proj-media">
                <img
                  src="/assets/port.png"
                  alt="Project screenshot"
                  onError={(e) => {
                    const img = e.currentTarget as HTMLImageElement;
                    img.style.display = "none";
                    img.parentElement?.classList.add("proj-media-fallback");
                  }}
                />
                <span className="proj-date">Jan 2026 – Present</span>
              </div>

              <div className="proj-body">
                <h3 className="proj-title">Personal Portfolio Website</h3>
                <p className="proj-desc">
                  The site you’re currently on is my custom-built portfolio showcasing my technical projects, leadership, and engineering journey. I designed and developed it using HTML, CSS, and JavaScript with a focus on responsiveness and professional presentation. It reflects both my software and hardware background. It's deployed through Vercel for fast and reliable access.
                </p>
                <div className="proj-tags">
                  <span className="tag tag-purple">TypeScript</span>
                  <span className="tag tag-purple">Next.js</span>
                  <span className="tag tag-purple">CSS</span>  
                  <span className="tag tag-purple">Vercel</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section id="leadership" className="section">
        <h2>Leadership</h2>

        <div className="exp-timeline">
          <article className="exp-item">
            <div className="exp-marker">
              <span className="exp-dot"></span>
              <span className="exp-line"></span>
            </div>

            <div className="exp-card">
              <div className="exp-logo" aria-hidden="true">
                <img src="/assets/ac.png" alt="Leadership logo" className="exp-logo-img" />
              </div>

              <div className="exp-content">
                <div className="exp-top">
                  <div>
                    <h3 className="exp-role">Flight Sergeant</h3>
                    <p className="exp-company">Royal Canadian Air Cadets - Mississauga, ON</p>
                  </div>
                  <span className="exp-date">Sept 2020 – June 2024</span>
                </div>

                <ul className="exp-bullets">
                  <li>Served four years in the Royal Canadian Air Cadets, developing advanced discipline, teamwork, and leadership through rigorous drill and aviation training.</li>
                  <li>Achieved the rank of Flight Sergeant, leading and mentoring an entire flight while ensuring accountability, morale, and performance standards.</li>
                  <li>Applied foundational knowledge of flight physics, aerodynamics, and aircraft systems to strengthen analytical and engineering-focused thinking.</li>
                  <li>Coordinated training activities and inspections, fostering clear communication, problem-solving, and organizational skills in high-responsibility settings.</li>
                </ul>

                <div className="exp-tags">
                  <span className="tag">Systems Thinking</span>
                  <span className="tag">Techincal Discipline</span>
                  <span className="tag">Problem Solving</span>
                  <span className="tag">Leadership</span>
                </div>
              </div>
            </div>
          </article>
        </div>

        <div className="exp-timeline">
          <article className="exp-item">
            <div className="exp-marker">
              <span className="exp-dot"></span>
              <span className="exp-line"></span>
            </div>

            <div className="exp-card">
              <div className="exp-logo" aria-hidden="true">
                <img src="/assets/kst.png" alt="Leadership logo" className="exp-logo-img" />
              </div>

              <div className="exp-content">
                <div className="exp-top">
                  <div>
                    <h3 className="exp-role">Youth Leader & MC</h3>
                    <p className="exp-company">Kannada Sangha Toronto — Guelph, ON</p>
                  </div>
                  <span className="exp-date">Sept 2020 – May 2024</span>
                </div>

                <ul className="exp-bullets">
                  <li>Served as Master of Ceremonies for major cultural events, engaging audiences of 500–1,000+ attendees with confident public speaking.</li>
                  <li>Coordinated event logistics, performers, and volunteer teams to ensure smooth execution of large-scale cultural showcases.</li>
                  <li>Led youth-focused initiatives within a 1,000+ member community, promoting inclusivity and cultural involvement.</li>
                  <li>Developed strong leadership, organization, and communication skills through planning and delivering high-impact community events.</li>
                </ul>

                <div className="exp-tags">
                  <span className="tag">Team Leadership</span>
                  <span className="tag">Communication</span>
                  <span className="tag">Organization</span>
                  <span className="tag">Teamwork</span>
                </div>
              </div>
            </div>
          </article>
        </div>

        <div className="exp-timeline">
          <article className="exp-item">
            <div className="exp-marker">
              <span className="exp-dot"></span>
              <span className="exp-line"></span>
            </div>

            <div className="exp-card">
              <div className="exp-logo" aria-hidden="true">
                <img src="/assets/ls.png" alt="Leadership logo" className="exp-logo-img" />
              </div>

              <div className="exp-content">
                <div className="exp-top">
                  <div>
                    <h3 className="exp-role">National Lifeguard</h3>
                    <p className="exp-company">Lifesaving Society — Brampton, ON</p>
                  </div>
                  <span className="exp-date">Sept 2023 – June 2024</span>
                </div>

                <ul className="exp-bullets">
                  <li>Completed Lifesaving Society certifications including Bronze Medallion and Bronze Cross, developing advanced water rescue, risk assessment, and emergency response skills.</li>
                  <li>Trained in Standard First Aid with CPR-C, applying structured safety protocols and rapid decision-making in high-pressure environments.</li>
                  <li>Built strong situational awareness and problem-solving abilities through rigorous lifeguard fitness, judgment, and rescue training.</li>
                  <li>Demonstrated responsibility, leadership, and teamwork by preparing for and meeting the professional standards required for National Lifeguard (NL) certification.</li>
                </ul>

                <div className="exp-tags">
                  <span className="tag">Risk assessment</span>
                  <span className="tag">Critical Decision-Making</span>
                  <span className="tag">Technical Discipline</span>
                  <span className="tag">Leadership</span>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* CONTACT (NEW LOOK) */}
      <section id="contact" className="section contact">
        <div className="contact-head">
          <h2 className="contact-title">
            Let's Build Something <span className="accent">Together</span>
          </h2>

          <div className="contact-underline" aria-hidden="true"></div>

          <p className="contact-lead">
            I enjoy working with people who are passionate about what they do. If you have an idea, want to collaborate, or just want
            to talk tech, reach out!
          </p>
        </div>

        <div className="contact-grid" aria-label="Contact options">
          {/* Coffee Chat */}
          <article className="contact-card contact-card--coffee">
            <h3 className="contact-card-title">Coffee Chat? <span aria-hidden="true">☕</span></h3>
            <p className="contact-card-text">
              Down for a quick chat about projects, internships, or tech. Hit me up!
            </p>
            <div className="contact-mini-tags" aria-hidden="true">
              <span className="mini-tag">Open to collabs</span>
              <span className="mini-tag">Oppurtunities</span>
            </div>
          </article>

          {/* Email */}
          <article className="contact-card contact-card--email">
            <h3 className="contact-card-title">Email</h3>
            <p className="contact-card-text">
              Best way to reach me for opportunities, questions, or anything professional.
            </p>
            <a className="contact-cta" href="mailto:cboya@uoguelph.ca">cboya@uoguelph.ca</a>
          </article>

          {/* LinkedIn */}
          <article className="contact-card contact-card--linkedin">
            <h3 className="contact-card-title">LinkedIn</h3>
            <p className="contact-card-text">
              If you prefer LinkedIn messages, connect with me and send a note.
            </p>
            <a className="contact-cta" href="https://www.linkedin.com/in/cherithboya/" target="_blank" rel="noopener">
              Message me on LinkedIn
            </a>
          </article>
        </div>
      </section>
    </>
  );
}
