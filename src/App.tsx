type CTA = {
  label: string;
  href: string;
  variant: 'primary' | 'secondary';
  ariaLabel: string;
};

type HowStep = {
  id: string;
  title: string;
  description: string;
};

const primaryCTA: CTA = {
  label: 'Join the beta',
  href: '#beta',
  variant: 'primary',
  ariaLabel: 'Join the prsm beta waitlist',
};

const secondaryCTA: CTA = {
  label: 'Watch overview',
  href: 'https://example.com/overview',
  variant: 'secondary',
  ariaLabel: 'Watch the prsm overview video',
};

const heroHeadlineOptions = [
  'Schedule smarter. Nurture every relationship.',
  'Your AI chief of staff for meetings and follow-through.',
];

const problemOldWay = [
  '7+ emails just to find a time',
  'Double-bookings and timezone headaches',
  'Lost context about why you’re meeting',
  'No-shows and zero preparation',
];

const problemPrsmWay = [
  'One sentence. Done. 30 seconds of your time.',
  'Smart conflict detection & alternatives',
  'Context-aware briefs & agendas',
  'Intelligent follow-ups & reminders',
  'Make time for the people who matter most',
];

const featureCards = [
  {
    id: 'scheduling',
    title: 'Effortless Scheduling',
    subtitle: 'Let prsm handle the back-and-forth',
    bullets: [
      'Propose meeting times instantly based on preferences and availability',
      'Detect conflicts and suggest alternatives automatically',
      'Send polished confirmations and reschedules in your voice',
    ],
  },
  {
    id: 'prep',
    title: 'Meeting Prep & Context',
    subtitle: 'Walk into every conversation ready',
    bullets: [
      'Auto-generated briefs with agendas, background, and talking points',
      'Context from prior meetings, notes, and contact data',
      'Quick review so every meeting is purposeful',
    ],
  },
  {
    id: 'followup',
    title: 'Actionable Follow-ups',
    subtitle: 'Nothing slips through the cracks',
    bullets: [
      'Capture decisions, tasks, and owners across meetings',
      'Track action items and manage follow ups',
      'Timely nudges to ensure accountability and closure',
    ],
  },
  {
    id: 'intelligence',
    title: 'Relationship Intelligence',
    subtitle: 'Know your network inside out',
    bullets: [
      'Timeline of past interactions and open items',
      'Important notes and context for each contact',
      'Summaries and intelligent insights for each relationship',
    ],
  },
];

const howItWorks: HowStep[] = [
  {
    id: 'connect',
    title: 'Connect',
    description: 'Connect your tools: Google Calendar to start',
  },
  {
    id: 'collaborate',
    title: 'Collaborate',
    description: 'Collaborate with prsm: plan, prep, and recap meetings',
  },
  {
    id: 'confirm',
    title: 'Confirm',
    description: 'Confirm commitments: send polished follow-ups, trigger tasks, and monitor completion automatically.',
  },
];

function CTAButton({ label, href, variant, ariaLabel }: CTA) {
  return (
    <a className={`button ${variant}`} href={href} aria-label={ariaLabel}>
      {label}
    </a>
  );
}

function SectionTitle({ label, headline, description }: { label?: string; headline: string; description: string }) {
  return (
    <div className="section-title" aria-label={`${label} section`}>
      <div>
        {label ? <span className="badge">{label}</span> : null}
        <h2>{headline}</h2>
      </div>
      <p>{description}</p>
    </div>
  );
}

function App() {
  return (
    <>
      <header>
        <nav aria-label="Primary">
          <a href="#top" aria-label="prsm home">
            <strong>prsm</strong>
          </a>
          <div className="nav-links" aria-label="Section navigation">
            <a href="#features">Features</a>
            <a href="#how-it-works">How it works</a>
            <a href="#beta">Early access</a>
            <CTAButton {...primaryCTA} />
          </div>
        </nav>
      </header>
      <main id="top">
        <section className="section hero" aria-label="Hero">
          <div className="container hero-content">
            <div className="hero-copy">
              <span className="badge">AI-powered relationship assistant</span>
              <h1>{heroHeadlineOptions[0]}</h1>
              <p>
              We built prsm to handle the logistics of your network so you can focus on building stronger relationships.
              </p>
              <div className="hero-badges" role="list" aria-label="Key differentiators">
                <span className="hero-badge">Effortless scheduling & conflict resolution</span>
                <span className="hero-badge">Google calendar integration</span>
                <span className="hero-badge">Context-aware meeting preparation</span>
                <span className="hero-badge">Intelligent follow-ups & reminders</span>
              </div>
              <div className="cta-row" role="group" aria-label="Primary calls to action">
                <CTAButton {...primaryCTA} />
                <CTAButton {...secondaryCTA} />
              </div>
            </div>
            <div className="hero-visual" aria-hidden="true">
              <figure className="mockup-card" role="group" aria-label="Scheduling card mockup">
                <div className="card-header">
                  <div>
                    <span className="card-tag">Today</span>
                    <h3>Brief the Seed Partners call</h3>
                  </div>
                  <span aria-hidden="true">🟢</span>
                </div>
                <p>Prep deck, confirm attendees, slot 45 min between 2-5 PM PT.</p>
                <div className="progress" aria-hidden="true">
                  <span style={{ width: '68%' }} />
                </div>
                <div className="metric-row">
                  <div className="metric">
                    <strong>3 recommended windows</strong>
                    <span>Coordinated across time zones</span>
                  </div>
                  <div className="metric">
                    <strong>4 prep files</strong>
                    <span>Shared with host + investors</span>
                  </div>
                </div>
              </figure>
              <figure className="mockup-card secondary" role="group" aria-label="Mobile recap mockup">
                <div className="card-header">
                  <div>
                    <span className="card-tag">Recap</span>
                    <h3>Growth sync with Mosaic</h3>
                  </div>
                  <span aria-hidden="true">✨</span>
                </div>
                <ul className="card-list">
                  <li>
                    <strong>Decisions</strong>
                    <span>Launch pilot with enterprise tier in Q3.</span>
                  </li>
                  <li>
                    <strong>Action items</strong>
                    <span>Marco to send updated pricing grid by Friday.</span>
                  </li>
                  <li>
                    <strong>Follow-up</strong>
                    <span>prsm will remind you 24h before deadline.</span>
                  </li>
                </ul>
                <div className="metric-row">
                  <div className="metric light">
                    <strong>Auto-sent to Slack</strong>
                    <span>#leadership-ops</span>
                  </div>
                </div>
              </figure>
            </div>
          </div>
        </section>

        <section className="section" id="problem" aria-label="Problem and solution">
          <div className="container">
            <SectionTitle
              headline="Scheduling is broken."
              description="Endless back-and-forth emails, double-bookings, and lost context make it impossible to stay on top of your network. Critical decisions, next steps, and follow-ups slip through the cracks, resulting in missed opportunities."
            />
            <div className="grid col-2">
              <div className="card problem-card" aria-label="The old way">
                <h3>The old way</h3>
                <ul className="card-list">
                  {problemOldWay.map((item) => (
                    <li key={item}>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="result-inline">
                  <span className="badge">Result</span>
                  <p>Missed opportunities &amp; wasted time</p>
                </div>
              </div>
              <div className="card problem-card" aria-label="The prsm way">
                <h3>The prsm way</h3>
                <ul className="card-list">
                  {problemPrsmWay.map((item) => (
                    <li key={item}>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="result-inline">
                  <span className="badge">Result</span>
                  <p>Save hours, stay connected, and make every meeting count.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section features-section" id="features" aria-label="Feature highlights">
          <div className="container">
            <div className="features-header">
              <span className="badge">Features</span>
            </div>
            <div className="feature-grid">
              {featureCards.map((feature) => (
                <article key={feature.id} className="feature-card" aria-labelledby={`${feature.id}-title`}>
                  <h3 id={`${feature.id}-title`}>{feature.title}</h3>
                  <p>{feature.subtitle}</p>
                  <ul>
                    {feature.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section alt" id="how-it-works" aria-label="How it works">
          <div className="container">
            <SectionTitle
              label="How it works"
              headline="Connect → Collaborate → Confirm"
              description="A simple flow that turns relationship logistics into momentum."
            />
            <div className="timeline">
              {howItWorks.map((step, index) => (
                <div key={step.id} className="step-card" aria-labelledby={`${step.id}-title`}>
                  <div className="step-index">Step {index + 1}</div>
                  <h3 id={`${step.id}-title`}>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="beta" aria-label="Beta waitlist">
          <div className="container final-cta">
            <div>
              <span className="badge">Early access</span>
              <h2>Join the TestFlight to get early access to prsm</h2>
              <p>
                Get early access, share feedback, and help shape the future of scheduling and relationship management.
              </p>
              <div className="cta-row">
                <CTAButton {...primaryCTA} label="Early access / TestFlight" ariaLabel="Request early access to prsm TestFlight" />
              </div>
            </div>
            <form
              className="form"
              aria-label="Beta waitlist form"
              method="post"
              action="https://hooks.zapier.com/hooks/catch/25891585/uwdl65q/"
            >
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="you@example.com"
                autoComplete="email"
                required
              />
              <span className="microcopy">We only use your email for beta onboarding updates.</span>
              <button type="submit" className="button primary" aria-label="Submit your early access request">
                Request early access
              </button>
            </form>
          </div>
        </section>
      </main>
      <footer>
        © {new Date().getFullYear()} prsm. Helping busy people build stronger relationships, one meeting at a time.
      </footer>
    </>
  );
}

export default App;
