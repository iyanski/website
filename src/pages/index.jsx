import * as React from "react"
import { useEffect } from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const IndexPage = () => {
  useEffect(() => {
    // Current year
    const yearElement = document.getElementById('year');
    if (yearElement) {
      yearElement.textContent = new Date().getFullYear();
    }
  }, []);

  return (
  <Layout>
      <main>
        <section className={styles.hero}>
          <div className={`${styles.container} ${styles.inner}`}>
            <div>
              <span className={styles.eyebrow}>
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 3l2.3 4.7L20 9l-4 3.9.9 5.6L12 16.8 7.1 18.5 8 12.9 4 9l5.7-1.3L12 3z" stroke="currentColor" strokeWidth="1.2"/></svg>
                Systems that make work flow
              </span>
              <h1>I connect tools, data, and teams so startups scale with less friction.</h1>
              <p className={styles.lead}>I build clean, reliable automations and integrations that simplify operations and unlock growth. Thoughtful design. Human-centered systems. Real business impact.</p>
              <div className={styles.heroCta}>
                <a className={styles.btn} href="https://calendly.com/your-username" target="_blank" rel="noopener noreferrer">Book a call</a>
                <a className={`${styles.btn} ${styles.secondary}`} href="#process">See my approach</a>
              </div>

              <div className={styles.heroCard} role="region" aria-label="Highlights">
                <div className={styles.muted}>What I focus on</div>
                <div className={`${styles.grid} ${styles.cols3} ${styles.metrics}`}>
                  <div className={styles.metric}>
                    <div className="num">Ops & Growth</div>
                    <div className="label">Integrations & data flow</div>
                  </div>
                  <div className={styles.metric}>
                    <div className="num">Automation</div>
                    <div className="label">APIs, retries, logging</div>
                  </div>
                  <div className={styles.metric}>
                    <div className="num">UX & Clarity</div>
                    <div className="label">Simple, scalable design</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className={styles.card}>
                <span className={styles.pill}>Featured</span>
                <h3>FSM × Zoho Desk × THD Service Channel</h3>
                <p>Built a robust Node.js integration syncing visits, notes, and attachments with retries, structured logging (Logz.io/GCP), and human-readable error comments.</p>
                <p className={styles.helper}>Result: 100% transfer accuracy in testing, clear audit trails, and faster resolution time.</p>
              </div>
              <div className={styles.grid} style={{marginTop:'12px'}}>
                <div className={styles.card}>
                  <h3>Giftees</h3>
                  <p>Time-bound promotional gift cards driving off-peak sales with local discovery.</p>
                </div>
                <div className={styles.card}>
                  <h3>TapForCare</h3>
                  <p>Scheduling, multi-timezone booking, and calendar sync for diabetes care specialists.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.trust} aria-label="Trusted by">
          <div className={styles.container}>
            <div className={styles.muted} style={{marginBottom:'8px'}}>Trusted by founders and teams at</div>
            <div className={styles.trustLogos} aria-hidden="true">
              <div className="logoBox">Startup A</div>
              <div className="logoBox">HealthTech</div>
              <div className="logoBox">Retail Ops</div>
              <div className="logoBox">AI Tools</div>
              <div className="logoBox">GovPilot</div>
              <div className="logoBox">FinOps</div>
            </div>
          </div>
        </section>

        <section id="work">
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Selected Work</h2>
            <p className={styles.sectionSub}>A few projects that show how I blend systems thinking, automation, and clear UX.</p>
            <div className={`${styles.grid} ${styles.cols3}`}>
              <article className={styles.card}>
                <span className={styles.pill}>System Integration</span>
                <h3>Field Ops to Service Channel Sync</h3>
                <p>End-to-end data sync (visits, notes, attachments), resilient retries, rate-limit handling, and private error comments for quick triage.</p>
              </article>
              <article className={styles.card}>
                <span className={styles.pill}>Product</span>
                <h3>Giftees — Off‑Peak Growth</h3>
                <p>Time-window gift cards to boost low-traffic hours; merchant search by recipient location for higher redemption rates.</p>
              </article>
              <article className={styles.card}>
                <span className={styles.pill}>Platform</span>
                <h3>TapForCare — Care Scheduling</h3>
                <p>Self-serve booking, recurring availability, calendar sync, and cross-timezone support with notifications and 24‑hour rules.</p>
              </article>
              <article className={styles.card}>
                <span className={styles.pill}>Marketplace</span>
                <h3>Amoma Care</h3>
                <p>Two-sided marketplace foundation for care workers and customers with subscription monetization.</p>
              </article>
                <article className={styles.card}>
                  <span className={styles.pill}>Rapid Prototyping</span>
                  <h3>SportsScience</h3>
                  <p>Sports performance analytics platform to optimize athlete training and injury prevention for professional teams and individual athletes.</p>
                </article>
              <article className={styles.card}>
                <span className={styles.pill}>Product</span>
                <h3>SportsOS</h3>
                <p>A multi-tenant, white-label sports event OS for corporate organizations to run corporate leagues and tournaments covering registration → scheduling → officiating → scoring → media → analytics.</p>
              </article>
            </div>
          </div>
        </section>

        <section id="services">
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>How I help</h2>
            <p className={styles.sectionSub}>Flexible engagements — from quick integrations to end‑to‑end systems.</p>
            <div className={`${styles.grid} ${styles.cols3}`}>
              <div className={styles.card}>
                <h3>Systems & Automation</h3>
                <p>Integrations, workflows, and data pipelines that remove manual work and reduce errors.</p>
                <p className={styles.helper}>Stack: Node.js, Ruby, APIs, webhooks, GCP logging.</p>
              </div>
              <div className={styles.card}>
                <h3>Integration Architecture</h3>
                <p>Design for scale, reliability, and clarity. Error handling, retries, monitoring, and audit trails.</p>
              </div>
              <div className={styles.card}>
                <h3>Growth & RevOps</h3>
                <p>CRM + marketing ops that create clean handoffs, faster cycles, and measurable ROI.</p>
              </div>
              <div className={styles.card}>
                <h3>Product & UX</h3>
                <p>Simple flows, crisp microcopy, and human‑centered automation.</p>
              </div>
              <div className={styles.card}>
                <h3>Advisory</h3>
                <p>Technical strategy, roadmaps, and hands-on guidance for founders and ops leaders.</p>
              </div>
              <div className={styles.card}>
                <h3>Workshops</h3>
                <p>Map your systems, find bottlenecks, and design a plan to scale — in a focused session.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="process">
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>My approach</h2>
            <p className={styles.sectionSub}>A simple framework that keeps projects clear, fast, and resilient.</p>
            <div className={styles.timeline}>
              <div className={styles.step}>
                <div className={styles.stepNumber}>1</div>
                <div className={styles.stepContent}>
                  <h4>Understand the system</h4>
                  <p>Map people, tools, and data. Define success and choose the smallest meaningful win.</p>
                </div>
              </div>
              <div className={styles.step}>
                <div className={styles.stepNumber}>2</div>
                <div className={styles.stepContent}>
                  <h4>Design for flow</h4>
                  <p>Sketch ideal paths. Prioritize clarity, scalability, and maintainability.</p>
                </div>
              </div>
              <div className={styles.step}>
                <div className={styles.stepNumber}>3</div>
                <div className={styles.stepContent}>
                  <h4>Build with intention</h4>
                  <p>Modular code. Resilient error handling. Observability from day one.</p>
                </div>
              </div>
              <div className={styles.step}>
                <div className={styles.stepNumber}>4</div>
                <div className={styles.stepContent}>
                  <h4>Test real scenarios</h4>
                  <p>Edge cases, sandboxes, rate limits, and data integrity checks.</p>
                </div>
              </div>
              <div className={styles.step}>
                <div className={styles.stepNumber}>5</div>
                <div className={styles.stepContent}>
                  <h4>Deploy & monitor</h4>
                  <p>Phased rollout, logging (Logz.io/GCP), alerts, and user feedback channels.</p>
                </div>
              </div>
              <div className={styles.step}>
                <div className={styles.stepNumber}>6</div>
                <div className={styles.stepContent}>
                  <h4>Iterate & evolve</h4>
                  <p>Review metrics and feedback, automate more, refactor as the business grows.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <section id="writing">
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Notes & writing</h2>
            <p className={styles.sectionSub}>Short, practical ideas on systems, ops, and growth.</p>
            <div className={`${styles.grid} ${styles.cols3}`}>
              <article className={styles.card}>
                <h3>Automation ≠ opacity</h3>
                <p>Why every workflow needs human-readable logs, alerts, and a way to intervene.</p>
              </article>
              <article className={styles.card}>
                <h3>Choosing the smallest win</h3>
                <p>How to find a fast, high-impact starting point without re-architecting everything.</p>
              </article>
              <article className={styles.card}>
                <h3>APIs that fail gracefully</h3>
                <p>Retries, backoff, idempotency keys, and when to tell a human.</p>
              </article>
            </div>
    </div>
        </section> */}

        <section id="contact">
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Let's build something that flows</h2>
            <p className={styles.sectionSub}>Tell me about your system, the pain points, and the outcome you want.</p>
            <div className={`${styles.grid}`}>
              <div className={styles.contactCard}>
                <h3>Fit & next steps</h3>
                <ul>
                  <li>30‑min discovery call</li>
                  <li>One‑page plan with options</li>
                  <li>Kickoff within 1–2 weeks</li>
    </ul>
                <p className={styles.helper}>Europe/London timezone • Remote‑first</p>
                <div style={{marginTop:'12px'}}>
                <a className={styles.btn} href="https://calendly.com/your-username" target="_blank" rel="noopener noreferrer">Book a call</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className={`${styles.container} ${styles.footGrid}`}>
          <div>© <span id="year"></span> iantusil. All rights reserved.</div>
          <div>
            <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/iyanski" className={styles.muted}>LinkedIn</a> ·
            <a rel="noreferrer" target="_blank" href="https://github.com/iyanski" className={styles.muted}>GitHub</a> ·
            <a rel="noreferrer" target="_blank" href="https://x.com/iyanski" className={styles.muted}>X</a>
          </div>
        </div>
      </footer>
  </Layout>
)
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => (
  <>
    <Seo 
      title="IanTusil — Systems that make work flow"
      description="I build systems that connect tools, data, and teams so work flows naturally. I help startups grow faster through thoughtful automation and clean design."
    />
    <meta name="theme-color" content="#0f172a" />
    <meta property="og:title" content="IanTusil — Systems that make work flow" />
    <meta property="og:description" content="I build systems that connect tools, data, and teams so work flows naturally." />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="https://dummyimage.com/1200x630/0f172a/ffffff&text=IanTusil" />
    <meta property="og:url" content="https://example.com" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="IanTusil — Systems that make work flow" />
    <meta name="twitter:description" content="I help startups grow faster through thoughtful automation and clean design." />
    <meta name="twitter:image" content="https://dummyimage.com/1200x630/0f172a/ffffff&text=IanTusil" />
    <link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' rx='16' fill='%230f172a'/%3E%3Ctext x='50' y='58' font-size='54' text-anchor='middle' fill='white' font-family='Arial, Helvetica, sans-serif'%3EN%3C/text%3E%3C/svg%3E" />
    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "IanTusil",
        "description": "Builder of systems that connect tools, data, and teams to make work flow naturally.",
        "url": "https://iantusil.com",
        "sameAs": [
          "https://www.linkedin.com/in/iyanski",
          "https://github.com/iyanski",
          "https://x.com/iyanski"
        ],
        "jobTitle": "Systems & Automation Engineer",
        "worksFor": { "@type": "Organization", "name": "OrcaSoft" }
      })}
    </script>
  </>
)

export default IndexPage


