---
# You can also start simply with 'default'
theme: seriph
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: https://baseball-covers.netlify.app
# some information about your slides (markdown enabled)
title: AI for Teams - Smart Adoption Not Blind FOMO
info: |
  AI won’t take your job—but someone using it smarter will. Don’t fall for the hype or the FOMO. This talk gives you the tools to evaluate AI, adopt it wisely, and build a practical rubric for making smart AI decisions—for you, your career, and your team.
author: John Crosby
# apply unocss classes to the current slide
class: text-center
# https://sli.dev/features/drawing
drawings:
  persist: false
fonts:
  sans: Lora
  serif: Roboto Slab
  mono: Fira Code
# slide transition: https://sli.dev/guide/animations.html#slide-transitions
transition: slide-left
# enable MDC Syntax: https://sli.dev/features/mdc
mdc: true
---

# AI for Teams - Smart Adoption Not Blind FOMO

### John Crosby • Principal Engineer, Client Engineering • MLB

<a href="mailto:john@hellocrosby.com">john@hellocrosby.com</a>

<a href="https://bsky.app/profile/jcc.bsky.social" target="_blank">@jcc.bsky.social</a>

<div class="abs-br m-6 text-xl">
  <a href="https://github.com/jcrosby/smart-ai-adoption" target="_blank" class="slidev-icon-btn">
    <carbon:logo-github />
  </a>
</div>

<!--
# AI for Teams - Smart Adoption Not Blind FOMO
-->

---
layout: intro
---

# Introduction (5 min)

- Hook: “AI won’t take your job—but someone using it smarter will.”
- Quick audience check: Who has experimented with AI? Who feels overwhelmed by the AI hype?
- The AI landscape: Why everyone is talking about it and why FOMO isn’t a strategy.

<!--
- Hook: “AI won’t take your job—but someone using it smarter will.”
- Quick audience check:
  - Who has experimented with AI?
  - Who feels overwhelmed by the AI hype?
  - Who is dealing with "AI FOMO" i.e. "We need to do AI now!"?
- The AI landscape: Why everyone is talking about it and why FOMO isn’t a strategy.
-->

---
layout: section
---

# The Myths & Misconceptions of AI

---
layout: default
---

- What AI **is** and **isn’t** (brief overview of LLMs, generative AI, automation)
- Common myths:
  - “AI will do everything for you.”
  - “AI is a silver bullet that makes work faster and easier.”
  - “AI will replace software engineers.”
  - “If we don’t adopt AI now, we’ll fall behind.”
- Reality check: AI **augments**, not replaces—unless you don’t learn how to use it.

<!--
- What AI **is** and **isn’t** (brief overview of LLMs, generative AI, automation)
- Common myths:
  - “AI will do everything for you.”
  - “AI is a silver bullet that makes work faster and easier.”
  - “AI will replace software engineers.”
  - “If we don’t adopt AI now, we’ll fall behind.”
- Reality check: AI **augments**, not replaces—unless you don’t learn how to use it.
-->

---
layout: section
---

# Smart AI Adoption: How to Evaluate AI for Your Team

---
layout: default
---

# The **AI Evaluation Rubric**: Five questions every team should ask

1. Does this AI tool solve a real problem, or is it just “cool”?
2. How does it impact efficiency vs. quality?
3. What are the risks (bias, security, ethics)?
4. Can we trust the outputs?
5. How does it fit into our existing workflows?

<!--
- AI beyond engineering: AI’s role in **product, design, and development**
- The **AI Evaluation Rubric**: Questions every team should ask:
  - Does this AI tool solve a real problem, or is it just “cool”?
  - How does it impact efficiency vs. quality?
  - What are the risks (bias, security, ethics)?
  - Can we trust the outputs?
  - How does it fit into our existing workflows?
- **Red flags to watch for** in AI adoption.
-->

---
layout: default
---

# Does this AI tool solve a real problem, or is it just ‘cool’?

- **Key Considerations:**
  - Clearly identify the problem or opportunity the AI is meant to address.
  - Determine measurable success criteria (e.g., reduced customer wait times, improved detection rates).
  - Collaborate with internal stakeholders to confirm the value and relevance of the identified problem.
- **Red Flags:**
  - **Vague Use Cases:** If no one can articulate the specific problem it solves, it’s likely a distraction rather than a solution.
  - **Hype-Driven Adoption:** If the primary reason for adoption is “everyone else is doing it,” there’s a risk the AI may not produce real benefits.
  - **No Clear KPIs:** Teams lack metrics or performance indicators to track the AI’s impact, making it difficult to judge success or failure.

---
layout: default
---

# How does it impact efficiency vs. quality?

- **Key Considerations:**
  - Understand whether the AI accelerates workflows (e.g., automated data entry) or if it can genuinely enhance quality (e.g., better predictions or improved insights).
  - Evaluate the trade-offs: speeding up a process could cause quality issues if the AI isn’t properly calibrated.
- **Red Flags:**
  - **Overemphasis on Speed Alone:** If all discussions revolve around making processes faster, without considering accuracy or quality, the final outputs may suffer.
  - **Hidden Quality Costs:** If small declines in quality or accuracy aren’t caught in early tests, they can escalate into bigger problems once fully deployed.

---
layout: default
---

# What are the risks (bias, security, ethics)?

- **Key Considerations:**
  - Assess known data biases or algorithmic blind spots that might lead to unfair outcomes.
  - Ensure the tool meets privacy and security standards, especially when handling sensitive information.
  - Evaluate the ethical implications: Does the AI’s operation comply with legal standards and organizational values?
- **Red Flags:**
  - **Unverified Data Sources:** If the training data comes from unknown or dubious sources, you risk inheriting bias or infringing on data privacy.
  - **Weak Security Protocols:** A lack of clarity about how data is stored or how breaches are prevented indicates potential vulnerabilities.
  - **No Ethical Guidelines:** If there’s no framework for addressing potential ethical dilemmas—such as algorithmic discrimination—this can lead to reputational harm and legal complications.

---
layout: default
---

# Can we trust the outputs?

- **Key Considerations:**
  - Validate accuracy through testing, pilot programs, or external audits.
  - Look into the AI’s “explainability” features: can the system provide insight into how it arrived at certain decisions?
  - Implement ongoing performance monitoring and include human oversight in critical decision points.
- **Red Flags:**
  - **Black-Box Models with No Explanation:** If the model’s decisions are completely opaque, it’s harder to debug errors or identify bias.
  - **No Mechanism for Verification:** If the team can’t systematically check or reproduce results, trust and accountability become major concerns.
  - **Limited Testing:** Rolling out AI without a thorough pilot phase can lead to untracked or unanticipated errors in production.

---
layout: default
---

# How does it fit into our existing workflows?

- **Key Considerations:**
  - Determine if current systems need to be modified or replaced to support the AI tool.
  - Engage with frontline users early to identify potential frictions or training needs.
  - Plan for ongoing technical support and updates.
- **Red Flags:**
  - **Major Workflow Disruption:** If introducing the AI requires a complete overhaul of systems and processes, user adoption may falter and productivity could suffer in the transition.
  - **Inadequate User Training:** Even the best AI solutions fail if end users aren’t properly trained or incentivized to use them.
  - **Lack of IT/Operations Readiness:** If there’s no clear path for integration, including server capacity, software compatibility, or data management, implementation will stall.

---
layout: section
---

# Red Flags to Watch For

---
layout: default
---

# Real Problem vs. “Cool Factor"

1. **Vague Use Cases:** No one can articulate a clear, tangible problem the AI will solve.
2. **Hype-Driven Adoption:** The primary motive is “everyone else is doing it,” rather than solving a real need.
3. **No Clear KPIs:** Teams lack measurable indicators for success (e.g., efficiency gains, error reduction).

---
layout: default
---

# Efficiency vs. Quality

1. **Overemphasis on Speed Alone:** All focus is on faster processes, with little consideration for accuracy or effectiveness.
2. **Hidden Quality Costs:** Small lapses in quality go unnoticed during early testing and can escalate after deployment.

---
layout: default
---

# Risks (Bias, Security, Ethics)

1. **Unverified Data Sources:** Training data origins are unclear, raising concerns about accuracy or bias.
2. **Weak Security Protocols:** No transparent plan for preventing data breaches or securing sensitive information.
3. **No Ethical Guidelines:** No framework to address potential algorithmic discrimination or misuse of the tool.

---
layout: default
---

# Trust in Outputs

1. **Black-Box Models with No Explanation:** The AI’s decision-making process is opaque, making it hard to diagnose errors or biases.
2. **No Mechanism for Verification:** There’s no systematic way to check or replicate results for accuracy.
3. **Limited Testing:** The tool is rolled out broadly with minimal piloting or staged deployment.

---
layout: default
---

# Fit Into Existing Workflows

1. **Major Workflow Disruption:** Implementation requires an overhaul of current systems, risking low user adoption and productivity dips.
1. **Inadequate User Training:** End users or frontline teams are not sufficiently prepared to integrate AI into their daily tasks.
1. **Lack of IT/Operations Readiness:** No clear plan for data management, software compatibility, or ongoing maintenance and support.

---
layout: section
---

# Distilling the Rubric

## The LEAP Framework

---
layout: center
---

# LEARN

1. Gain a realistic view of AI’s capabilities and limitations.
2. Understand basic AI concepts (e.g., machine learning, natural language processing, data requirements).
3. Educate team members on where AI genuinely excels and where human expertise remains critical.

---
layout: center
---

# EVALUATE

1. Conduct a thorough needs assessment to verify the AI solution’s alignment with real-world problems.
2. Examine vendors or in-house solutions using the five critical questions outlined above.
3. Weigh the costs of adoption against the expected benefits; consider pilot programs to gather early evidence of effectiveness.

---
layout: center
---

# APPLY

1. Integrate the chosen AI tool into workflows with clear accountability measures and performance tracking.
2. Monitor for unintended consequences (e.g., new security risks, emerging biases) and iterate quickly.
3. Share best practices and lessons learned across teams to expand responsible AI adoption.

---
layout: center
---

# PRACTICE

1. Refine and iterate: Treat AI adoption as an ongoing, iterative process rather than a one-time event.
2. Evaluate performance regularly: Gather user feedback and track KPIs to adjust configurations or training data.
3. Encourage continuous learning: Keep the team updated on new AI developments, tools, and methods to maintain a forward-thinking approach.

---
layout: section
---

# Practical AI Use Cases for Teams

---
layout: default
---

- **Product Managers**: Research, decision-making, roadmap planning
- **Designers**: User research, automation, accessibility improvements
- **Developers**: AI pair programming, debugging, automation
- How cross-functional teams can work together to **leverage AI without breaking workflows**

<!--
- **Product Managers**: Research, decision-making, roadmap planning
- **Designers**: User research, automation, accessibility improvements
- **Developers**: AI pair programming, debugging, automation
- How cross-functional teams can work together to **leverage AI without breaking workflows**
-->

---
layout: default
---

# Communicating AI Strategy to Leadership

- How to push back against **"We need AI because everyone else is using it!"**
- Framing AI as a tool, not a trend: Speaking the language of leadership
- Realistic expectations: AI as an **incremental improvement**, not a revolution overnight

<!--
- How to push back against **"We need AI because everyone else is using it!"**
- Framing AI as a tool, not a trend: Speaking the language of leadership
- Realistic expectations: AI as an **incremental improvement**, not a revolution overnight
-->

---
layout: default
---

# Conclusion & Key Takeaways

- AI is a tool—**how you use it determines its value**
- Smart adoption beats blind FOMO **every time**
- **Final rubric reminder:** Learn, evaluate, apply **(in that order!)**
- Q&A

<!--
- AI is a tool—**how you use it determines its value**
- Smart adoption beats blind FOMO **every time**
- **Final rubric reminder:** Learn, evaluate, apply **(in that order!)**
- Q&A
-->
