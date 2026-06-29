const projectCards = [
  {
    title: "Target Account Research Report",
    description:
      "A buyer-focused account brief that identifies ICP fit, likely pain points, trigger events, and relevant outreach angles.",
    anchor: "#account-research",
  },
  {
    title: "5-Step Outbound Sequence",
    description:
      "A concise multi-touch sequence built for relevance, light personalization, and clear meeting conversion.",
    anchor: "#outbound-sequence",
  },
  {
    title: "Discovery Call Framework",
    description:
      "A structured question path for uncovering process gaps, business impact, urgency, and next steps.",
    anchor: "#discovery",
  },
  {
    title: "CRM / Pipeline Sample",
    description:
      "A clean example of pipeline thinking: stages, next actions, activity notes, and follow-up hygiene.",
    anchor: "#pipeline",
  },
];

const objections = [
  {
    objection: "We already use a CRM",
    response:
      "That makes sense. I am not assuming your CRM is the issue. I would be curious where the team still loses time today, such as manual follow-up, low reply rates, or visibility into rep activity.",
  },
  {
    objection: "No budget",
    response:
      "Understood. If budget is locked, it may still be useful to compare where pipeline creation is getting stuck and whether there is a business case for a future quarter.",
  },
  {
    objection: "Send me info",
    response:
      "Happy to. To make it relevant, should I send information around improving outbound productivity, conversion from meetings, or forecast visibility?",
  },
  {
    objection: "Not interested",
    response:
      "I understand. Before I close the loop, is that because this is not a priority right now, or because the current process is already working well?",
  },
  {
    objection: "Bad timing",
    response:
      "That is fair. When does the team typically revisit pipeline generation or sales process improvements? I can follow up closer to that window.",
  },
];

const tools = [
  "Salesforce Trailhead",
  "HubSpot Inbound",
  "Google Data Analytics",
  "Google Ads / Meta / GA4",
  "CRM organization",
  "LinkedIn Sales Navigator",
  "Google Sheets",
  "Prospect research",
  "Email sequencing",
];

function App() {
  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#home" aria-label="Ernesto Del Rey home">
          <span className="brand-mark">ED</span>
          <span>
            Ernesto Del Rey
            <small>SaaS SDR / BDR Candidate</small>
          </span>
        </a>
        <nav className="nav-links" aria-label="Primary navigation">
          <a href="#projects">Projects</a>
          <a href="#ramp-plan">Ramp Plan</a>
          <a href="#tools">Tools</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <p className="eyebrow">ENTRY-LEVEL SAAS SDR / BDR PORTFOLIO</p>
            <h1>Entry-Level SaaS SDR/BDR Candidate</h1>
            <p className="hero-subtitle">
              BBA Marketing • Buyer-Centric Prospecting • Salesforce Trailhead
            </p>
            <p className="hero-intro">
              I help sales teams research target accounts, understand buyer
              pain, create relevant outbound messaging, and build qualified
              pipeline with strong CRM habits and coachable execution.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#projects">
                View Sales Projects
              </a>
              <a className="button secondary" href="/resume.pdf" target="_blank" rel="noreferrer">
                Download Resume
              </a>
              <a className="button text" href="#contact">
                Contact Me
              </a>
            </div>
          </div>

          <aside className="profile-panel" aria-label="Candidate snapshot">
            <div className="sales-visual" aria-label="Sales workflow snapshot">
              <span className="panel-label">SDR Workflow</span>
              <div className="visual-row">
                <strong>Research</strong>
                <span style={{ width: "82%" }} />
              </div>
              <div className="visual-row">
                <strong>Outreach</strong>
                <span style={{ width: "68%" }} />
              </div>
              <div className="visual-row">
                <strong>Discovery</strong>
                <span style={{ width: "74%" }} />
              </div>
              <div className="visual-metrics">
                <p>
                  <b>ICP</b>
                  Account fit
                </p>
                <p>
                  <b>CTA</b>
                  Meeting booked
                </p>
                <p>
                  <b>CRM</b>
                  Next step logged
                </p>
              </div>
            </div>
            <div>
              <span className="panel-label">Target Role</span>
              <strong>Entry-Level SaaS SDR / BDR / Tech Sales</strong>
            </div>
            <div>
              <span className="panel-label">Education</span>
              <strong>BBA Marketing</strong>
              <p>University of Houston-Downtown</p>
            </div>
            <div>
              <span className="panel-label">Positioning</span>
              <p>
                Buyer research, prospecting, outbound messaging, discovery,
                CRM organization, coachability, and pipeline growth.
              </p>
            </div>
          </aside>
        </section>

        <section className="section" id="projects">
          <div className="section-heading">
            <p className="eyebrow">Sales Projects</p>
            <h2>Practical examples for an SDR workflow</h2>
            <p>
              These samples show how I would research accounts, build outreach,
              prepare discovery, and keep pipeline organized.
            </p>
          </div>
          <div className="project-grid">
            {projectCards.map((project) => (
              <a className="project-card" href={project.anchor} key={project.title}>
                <span>Project</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </a>
            ))}
          </div>
        </section>

        <section className="section split-section" id="account-research">
          <div className="section-heading">
            <p className="eyebrow">Target Account Research Report</p>
            <h2>Sample account: Gong</h2>
            <p>
              Example research brief for a revenue intelligence SaaS company
              targeting sales organizations with growing teams and inconsistent
              deal visibility.
            </p>
          </div>
          <div className="detail-grid">
            <InfoCard
              title="Ideal Customer Profile"
              items={[
                "B2B SaaS companies with 50-500 employees",
                "Sales teams with multiple AEs, SDRs, and frontline managers",
                "Teams using a CRM but lacking clear call, email, and deal insight",
              ]}
            />
            <InfoCard
              title="Target Buyer Personas"
              items={[
                "VP of Sales focused on pipeline quality and rep productivity",
                "Revenue Operations leader responsible for CRM hygiene and forecasting",
                "Sales Enablement manager coaching reps on discovery and messaging",
              ]}
            />
            <InfoCard
              title="Buyer Pain Points"
              items={[
                "Managers cannot see why qualified opportunities stall",
                "Coaching relies on anecdotal call feedback instead of patterns",
                "Forecast reviews take too long because activity context is scattered",
              ]}
            />
            <InfoCard
              title="Trigger Events"
              items={[
                "New VP Sales or RevOps hire",
                "Recent SDR or AE team expansion",
                "CRM migration, funding round, new market push, or missed pipeline target",
              ]}
            />
            <InfoCard
              title="Value Proposition"
              items={[
                "Give revenue teams clearer visibility into customer conversations",
                "Help managers coach from real buyer language and deal signals",
                "Improve consistency across discovery, follow-up, and forecasting",
              ]}
            />
            <InfoCard
              title="Sample Account Research Notes"
              items={[
                "Company is hiring SDRs and enterprise AEs, which may increase coaching needs",
                "Leadership posts frequently mention improving pipeline predictability",
                "Likely outreach angle: connect rep growth to the need for repeatable call coaching",
              ]}
            />
          </div>
        </section>

        <section className="section" id="outbound-sequence">
          <div className="section-heading">
            <p className="eyebrow">Mock Outbound Sequence</p>
            <h2>Five concise touches for a revenue leader</h2>
          </div>
          <div className="timeline">
            <SequenceItem
              day="Day 1"
              title="Cold email"
              body="Subject: Coaching visibility for a growing sales team. Hi Jordan, noticed your team is hiring AEs and SDRs. When teams grow quickly, managers often have less visibility into which conversations create qualified pipeline. Gong helps revenue leaders spot coaching themes from real calls and deal activity. Worth a quick conversation next week?"
            />
            <SequenceItem
              day="Day 2"
              title="LinkedIn connection message"
              body="Hi Jordan, saw your team is expanding sales headcount. I work on ideas around improving rep coaching and pipeline visibility for growing revenue teams. Open to connecting?"
            />
            <SequenceItem
              day="Day 4"
              title="Follow-up email"
              body="Hi Jordan, following up because team growth can make it harder to keep discovery quality consistent. If managers could quickly see which objections and buyer themes show up most often, would that be useful for coaching new reps?"
            />
            <SequenceItem
              day="Day 7"
              title="Voicemail script"
              body="Hi Jordan, this is Ernesto. I reached out because your sales hiring caught my attention, and Gong often helps growing teams improve coaching visibility and pipeline consistency. I will send a short email as well."
            />
            <SequenceItem
              day="Day 10"
              title="Breakup email"
              body="Hi Jordan, I have not been able to connect, so I will close the loop for now. If improving sales coaching visibility becomes a priority as the team grows, I would be glad to share a few relevant examples."
            />
          </div>
        </section>

        <section className="section split-section" id="discovery">
          <div className="section-heading">
            <p className="eyebrow">Discovery Call Framework</p>
            <h2>Questions that uncover pain, impact, and next steps</h2>
          </div>
          <div className="question-list">
            <QuestionGroup
              title="Current Process"
              questions={[
                "How does your team currently review rep conversations and deal progress?",
                "What tools or reports do managers use before pipeline reviews?",
              ]}
            />
            <QuestionGroup
              title="Pain"
              questions={[
                "Where does the current process create the most friction for managers or reps?",
                "What is hardest to diagnose when an opportunity stalls?",
              ]}
            />
            <QuestionGroup
              title="Impact"
              questions={[
                "How does that affect forecast accuracy, coaching time, or meeting conversion?",
                "What happens if the team keeps operating the same way for another quarter?",
              ]}
            />
            <QuestionGroup
              title="Urgency"
              questions={[
                "Why is this becoming a priority now?",
                "Are there upcoming team goals, hiring plans, or board expectations tied to this?",
              ]}
            />
            <QuestionGroup
              title="Decision Process"
              questions={[
                "Who else is usually involved in evaluating a tool like this?",
                "What would the team need to see to feel confident moving forward?",
              ]}
            />
            <QuestionGroup
              title="Next Steps"
              questions={[
                "If the conversation is useful, what would be the best next step?",
                "Would it make sense to include RevOps or Sales Enablement on a deeper demo?",
              ]}
            />
          </div>
        </section>

        <section className="section" id="objections">
          <div className="section-heading">
            <p className="eyebrow">Objection Handling</p>
            <h2>Calm responses that keep discovery moving</h2>
          </div>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Objection</th>
                  <th>Response</th>
                </tr>
              </thead>
              <tbody>
                {objections.map((item) => (
                  <tr key={item.objection}>
                    <td>{item.objection}</td>
                    <td>{item.response}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="section" id="ramp-plan">
          <div className="section-heading">
            <p className="eyebrow">30-60-90 Day SDR Ramp Plan</p>
            <h2>A practical ramp built around learning, activity, and feedback</h2>
          </div>
          <div className="ramp-grid">
            <RampCard
              period="First 30 Days"
              focus="Learn the market and operating rhythm"
              items={[
                "Learn product, ICP, personas, competitors, and qualification criteria",
                "Understand CRM workflow, activity expectations, and sales process",
                "Shadow discovery calls, demos, and outbound review sessions",
                "Build a personal talk track and objection response library",
              ]}
            />
            <RampCard
              period="Days 31-60"
              focus="Build outbound execution"
              items={[
                "Prospect daily into target accounts and document account notes",
                "Run outbound sequences with clean personalization and follow-up",
                "Practice mock calls, voicemail delivery, and objection handling",
                "Review messaging performance with manager feedback",
              ]}
            />
            <RampCard
              period="Days 61-90"
              focus="Create repeatable qualified pipeline"
              items={[
                "Maintain consistent activity across email, phone, LinkedIn, and CRM",
                "Book qualified meetings and improve conversion from reply to meeting",
                "Use data from replies, objections, and no-shows to refine messaging",
                "Prepare weekly pipeline review notes with next actions and blockers",
              ]}
            />
          </div>
        </section>

        <section className="section" id="pipeline">
          <div className="section-heading">
            <p className="eyebrow">CRM / Pipeline Sample</p>
            <h2>Simple pipeline hygiene example</h2>
          </div>
          <div className="pipeline-grid">
            <PipelineStage stage="Research" detail="ICP fit, persona, trigger event, outreach angle" />
            <PipelineStage stage="Contacted" detail="Sequence started, channel mix logged, next touch scheduled" />
            <PipelineStage stage="Engaged" detail="Reply received, pain area captured, meeting CTA tested" />
            <PipelineStage stage="Qualified Meeting" detail="Need, impact, timing, and stakeholder notes documented" />
          </div>
        </section>

        <section className="section tools-section" id="tools">
          <div className="section-heading">
            <p className="eyebrow">Certifications / Tools</p>
            <h2>Sales tools, learning, and data-driven support skills</h2>
            <p>
              Google Data Analytics is included as support for structured,
              data-driven sales thinking, not as the focus of this portfolio.
            </p>
          </div>
          <div className="tool-cloud">
            {tools.map((tool) => (
              <span key={tool}>{tool}</span>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div>
            <p className="eyebrow">Resume / Contact</p>
            <h2>Open to entry-level SaaS SDR, BDR, and tech sales roles</h2>
            <p>
              I am looking for a team where I can learn the product, execute a
              strong outbound process, take coaching seriously, and contribute
              to qualified pipeline growth.
            </p>
          </div>
          <div className="contact-card">
            <a className="button primary full-width" href="/resume.pdf" target="_blank" rel="noreferrer">
              Download Resume
            </a>
            <a href="mailto:ernstdelrey@gmail.com">
              Email: ernstdelrey@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/ernesto-del-rey" target="_blank" rel="noreferrer">
              LinkedIn: linkedin.com/in/ernesto-del-rey
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

function InfoCard({ title, items }: { title: string; items: string[] }) {
  return (
    <article className="info-card">
      <h3>{title}</h3>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
}

function SequenceItem({
  day,
  title,
  body,
}: {
  day: string;
  title: string;
  body: string;
}) {
  return (
    <article className="sequence-item">
      <div className="sequence-day">{day}</div>
      <div>
        <h3>{title}</h3>
        <p>{body}</p>
      </div>
    </article>
  );
}

function QuestionGroup({
  title,
  questions,
}: {
  title: string;
  questions: string[];
}) {
  return (
    <article className="question-card">
      <h3>{title}</h3>
      {questions.map((question) => (
        <p key={question}>{question}</p>
      ))}
    </article>
  );
}

function RampCard({
  period,
  focus,
  items,
}: {
  period: string;
  focus: string;
  items: string[];
}) {
  return (
    <article className="ramp-card">
      <span>{period}</span>
      <h3>{focus}</h3>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
}

function PipelineStage({ stage, detail }: { stage: string; detail: string }) {
  return (
    <article className="pipeline-stage">
      <span>{stage}</span>
      <p>{detail}</p>
    </article>
  );
}

export default App;
