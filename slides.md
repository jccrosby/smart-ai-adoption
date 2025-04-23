---
# You can also start simply with 'default'
theme: ./theme
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
exportFilename: smart-ai-adoption
# enable MDC Syntax: https://sli.dev/features/mdc
mdc: false
colorSchema: auto
---

# AI for Teams - Smart Adoption Not Blind FOMO

<!--
# AI for Teams - Smart Adoption Not Blind FOMO
-->

---
layout: intro
introImage: /images/john-crosby.jpg
bsky: jcc
---

# John Crosby

## Principal Engineer, Client Engineering @ MLB

---
layout: new-section
sectionImage: /images/smart-vs-fomo-chatgpt.png
imageWidth: 512
imageHeight: 341
---

# Navigating the AI Wave in Software Development

## Smart Adoption vs. Blind FOMO

---
layout: default
image: /images/ai-landscape.png
---

# The Current Landscape

1. The software development world is experiencing rapid change due to AI advancements - especially in with LLMs and generative AI.
2. Many developers and organizations are experimenting with or using AI tools in their workflows.
3. Applications span the Software Development Life Cycle, from coding to deployment.
4. Teams may feel overwhelmed by the hype and the sheer volume of available tools.
5. The pressure to "do something with AI" can lead to rushed decisions and poor outcomes.
6. The challenge is to navigate this landscape wisely, avoiding the pitfalls of blind FOMO while harnessing the potential of AI.

---
layout: default
---

# The Dual Edge: Opportunity vs. Hype

- **Opportunity:** AI offers benefits like enhanced productivity, improved code quality, faster development cycles, and potential for innovation.
- **Risk:** AI project failure rates remain high due to flawed adoption strategies.
- **Common Pitfalls:**
  - Lack of clear goals, no coherent strategy, neglecting data readiness, and "Blind FOMO".
  - Pressure to "do something with AI" can exacerbate these issues.

---
layout: default
---

# Smart Adoption vs. Blind FOMO: The Core Difference

- **Smart Adoption:** Deliberate, strategic approach focused on solving specific problems and achieving measurable improvements. Involves learning and assessment before significant investment.
- **Blind FOMO:** Reactive, technology-centric adoption driven by hype rather than a specific problem. Often skips crucial learning and assessment.
- **How AI is adopted is more critical than whether it is adopted.**

---
layout: new-section
sectionImage: /images/LEAP-cycle.png
imageWidth: 512
imageHeight: 512
---

# The LEAP Framework: A Structured Approach

## Learn -> Experiment -> Assess -> Pivot/Propagate

---
layout: default
---

# LEAP
- Designed to guide teams through AI adoption wisely.
- Focused on maximizing value while mitigating risks.
- Encourages a shift from reactive FOMO to proactive, strategic adoption.
- Emphasizes iterative progress and critical evaluation.
- Provides a sustainable and effective structure for AI efforts.

---
layout: new-section
sectionImage: /images/core-principles.jpeg
---

# Core Principles of Effective AI Adoption

## Foundational Principals to Smart Adoption & LEAP

---
layout: default
---

# Six Core Principles

- **Strategic:** AI initiatives must solve specific problems aligned with business goals. Define _why_ before _what_.
- **Data Readiness & Governance:** Strong data quality, accessibility, security, and governance are essential. Poor data leads to failure.
- **Skills & Culture:** Requires technical skills and a supportive culture encouraging experimentation, sharing, and learning.
- **Technology & Infrastructure:** Select the right tools compatible with existing workflows.
- **Ethics & Responsibility:** Integrate ethical considerations (fairness, transparency, privacy, security) from the start.
- **Iterative Approach:** Start with small pilots, learn, then scale those successful experiments.

---
layout: new-section
---

# The LEAP Framework for Teams

## Actionable Steps for Smart Adoption


<!--
- Time to dive in to each of the LEAP steps. The first being Learn.
-->

---
layout: two-cols-header
---

# LEARN

## Understand AI capabilities and limitations

::left::

# Activities

- Research AI tools and advancements.
- Identify pain points in your process.
- Assess team skills.
- Evaluate data availability and quality.
- Consider ethical and security implications.
- Define **SMART** goals for experiments.

::right::

# Output

- Prioritized use cases.
- Readiness assessment.
- Defined success metrics.


---
layout: two-cols-header
---

# EXPERIMENT

## Focus on small-scale, controlled pilots to test hypotheses.

::left::
# Activities
- Select a low-risk pilot project.
- Choose specific AI tool/model.
- Develop and execute a prototype or limited integration.
- Gather quantitative and qualitative feedback.

::right::

# Output

- Working prototype.
- Performance data.
- Developer feedback.
- Lessons learned.

## Make sure to **share** your results and lessons learned.


---
layout: statement
---

# **Experimenting** and **sharing** is a large part of expanding the usage and benefits of AI

---
layout: two-cols-header
---

# ASSESS

## Evaluation experiment outcomes rigorously to make informed decisions.

::left::

# Activities

- Evaluate results against SMART goals.
- Analyze ROI (benefits vs. costs).
- Assess impact on workflow, quality, productivity, satisfaction.
- Identify technical challenges and risks.
- Review ethical and security posture.
- Make a clear **GO/NO-GO/PIVOT** decision.

::right::

# Output

- Refined understanding of requirements and the results.
- An assessment report.
- A Clear decision.

---
layout: default
---

<h1 class="absolute left-4 pl-30">PIVOT</h1>
<h1 class="absolute right-6 pr-30">PROPAGATE</h1>

---
layout: two-cols-header
---

# PIVOT

## If the experiment fails or needs adjustment

::left::

# Activities
- Analyze failure points and gather feedback.
- Adjust goals, tools, or methods based on insights.
- Reassess readiness and risks.
- Iterate on the experiment with a new focus or move to another experiment.

::right::

# Output
- Revised experiment plan.
- Updated goals.
- A new approach to testing.

---
layout: two-cols-header
---

# PROPAGATE

## Strategically scale successful AI applications.

::left::

# Activities
  - Develop a detailed rollout roadmap.
  - Identify infrastructure and tooling changes.
  - Create and execute training programs.
  - Establish governance policies and monitoring.
  - Implement change management practices.
  - Continuously monitor performance and ethical implications.

::right::

# Output
- A useable AI solution.
- Maintenance & governance structures.
- Ongoing monitoring plan.
- Up-skilled team.

---
layout: new-section
sectionImage: /images/exec-fomo.png
---

# Analogy - Blind FOMO

## Mandated Generative AI for Code

---
layout: default
---

# Blind FOMO - Skipped LEAP Steps

- **Skipped Learn:** Vague goal ("increase velocity"), ignored readiness (skills, codebase, IP), focused on tech (GenAI) over specific problems.
- **Skipped Experiment/Assess:** Underestimated verification needs, overlooked accuracy and security risks, ignored domain/context limitations.
- **Failed Pivot/Propagate:** Resulted in chaos, inconsistent adoption, decreased productivity, potential security issues, no way to measure impact.

---
layout: new-section
sectionImage: /images/five-questions-chatgpt.png
---

# Smart AI Adoption: How to Evaluate AI for Your Team

## Five Questions to Ask

---
layout: new-section
sectionImage: /images/Q1-Solve-real-problems-gemini.jpeg
---

# Question 1: Does this AI tool solve a **real problem**, or is it just ‘cool’?

- **Aligns with Strategic Alignment:** Ensure the AI addresses a specific bottleneck or pain point.
- **Red Flag:** Vague use cases with no clear, tangible problem.
- **LEAP - Learn:** Identify team bottlenecks and potential AI solutions.

---
layout: new-section
sectionImage: /images/Q2-Efficiency-quality-matrix-chatgpt.png
---

# Question 2: How does it impact **efficiency vs. quality**?

- **Weigh the trade-offs:** Focus solely on speed can hide quality costs.
- **Red Flag:** Overemphasis on speed alone without considering accuracy.
- **LEAP - Assess:** Analyze the impact on workflow and code quality.


---
layout: new-section
sectionImage: /images/Q3-Risks.png
#imageWidth: 1024
#imageHeight: 1536
---

# Question 3: What are the **risks**?


- Bias, Security, Ethics.
- **Integrate Ethics & Responsibility:** Consider potential biases, security vulnerabilities, and ethical implications.
- **Red Flags:** Unverified data, weak security, no ethical guidelines.
- **LEAP - Learn & Assess:** Proactively consider risks and evaluate the ethical posture.


---
layout: new-section
sectionImage: /images/Q4-Verification.jpeg
---

# Question 4: Can we **trust the outputs**?

- **Emphasize Verification:** Understand AI's decision-making process and have mechanisms to verify its results.
- **Red Flags:** Black-box models, no verification process, limited testing.
- **LEAP - Experiment & Assess:** Gather data and feedback on the reliability of AI outputs.

---
layout: new-section
sectionImage: /images/Q5-Workflows.png
---

# Question 5: How does it fit into our **existing workflows**?

- **Technology & Infrastructure:** Ensure compatibility and minimize disruption.
- **Red Flags:** Major workflow disruption, inadequate training, lack of IT/operations readiness.
- **Propagate:** Roll out the changes or pivot to a new experiment.

---
layout: image-right
image: /images/red-flags-gemini.jpeg
---

## Red Flags to Watch For

- Hype-driven adoption
- Vague use cases
- Overemphasis on speed alone
- No clear KPIs
- Hidden quality costs
- Unverified data sources
- Weak security protocols
- No ethical guidelines
- Black-box models with no explanation
- Lack of operational readiness
- No mechanism for verification
- Limited testing
- Major workflow disruption
- Inadequate user training

---
layout: new-section
---

# Practical AI Use Cases for Teams

## Leveraging AI Across Concerns

---
layout: default
---

# AI in Requirements Engineering (RE)

- NLP/LLMs for eliciting, analyzing, and validating requirements.
- Generating user stories and initial system models.
- **LEAP:**
  - **Learn:** Analyze requirements for ambiguity using NLP.
  - **Experiment:** Use NLP to analyze a small set of user stories.
  - **Assess:** Gather feedback on improved clarity.
  - **Propagate:** Scale use of validated NLP tools.

---
layout: default
---

# AI-Assisted Code

- Tools like GitHub Copilot, Gemini Code Assist, Amazon Q, & Claude Code.
- Capabilities: code generation, explanation, refactoring suggestions, bug identification.
- **LEAP:**
  - **Learn:** Research tools and their security implications.
  - **Experiment:** Pilot with a small team on specific tasks.
  - **Assess:** Evaluate code quality and developer productivity.
  - **Propagate:** Roll out with training and best practices.

---
layout: default
---

# AI-Driven QA

- LLMs and specialized models for generating unit, integration, and end-to-end tests.
- AI for GUI testing, fuzz testing, visual regression, bug detection.
- **LEAP:**
  - **Learn:** Identify repetitive testing tasks.
  - **Experiment:** Use AI to generate tests for non-critical components.
  - **Assess:** Measure code coverage and effort required.
  - **Propagate:** Integrate successful techniques into QA workflows.

---
layout: default
---

# AI in DevOps

- Automation of CI/CD, intelligent monitoring, anomaly detection, predictive failure analysis.
- MLOps platforms for managing ML pipelines.
- **LEAP:**
  - **Learn:** Identify manual DevOps bottlenecks.
  - **Experiment:** Automate deployment of a microservice.
  - **Assess:** Measure impact on deployment time and reliability.
  - **Propagate:** Expand automation across more services.

---
layout: default
---

# AI-Assisted Project Management and Reporting

- AI for task prioritization, resource allocation, and risk management.
- Automated reporting and status updates.
- **LEAP:**
  - **Learn:** Identify repetitive reporting tasks.
  - **Experiment:** Use AI to generate reports for a small project.
  - **Assess:** Measure time saved and accuracy.
  - **Propagate:** Integrate successful techniques into PM workflows.

---
layout: default
---

# AI for Security Analysis

- Enhanced threat detection, log analysis, vulnerability assessment, automated Security Operations Center (SOC) tasks.
- AI tools for code vulnerability scanning.
- **LEAP:**
  - **Learn:** Research AI-powered security tools.
  - **Experiment:** Run Static Application Security Testing (SAST) tools on a feature branch.
  - **Assess:** Analyze false positive/negative rates.
  - **Propagate:** Integrate validated tools into the DevSecOps pipeline.

---
layout: new-section
---

# Communicating AI Strategy to Leadership

## Emphasize Value, Risk Management, and the LEAP Framework

---
layout: cover
---

# Conclusion & Key Takeaways

## Embrace AI Thoughtfully and Strategically

---
layout: default
---

# Key Principles for Smart Integration

- **Strategic Alignment:** Solve real problems with clear goals.
- **Iterative Experimentation:** Start small and gather evidence.
- **Rigorous Assessment:** Evaluate benefits and risks objectively.
- **Focus on Value:** Prioritize tangible improvements.
- **Continuous Learning:** Adapt to the evolving AI landscape.

---
layout: default
---

# The Value of LEAP

- A simple, practical, repeatable process for wise AI adoption.
- **Learn** before acting.
- **Experiment** in a controlled manner.
- **Assess** results critically.
- **Pivot** when necessary.
- **Propagate** successful initiatives sustainably.

## Don't forget to **share** your results and lessons learned.

---
layout: default
---

# Call to Action

- Move beyond passive observation of AI.
- **Initiate a 'Learn' cycle ->** Identify a pressing team challenge.
- Research potential AI solutions.
- Define a clear goal for a small experiment.
- Start the LEAP cycle and embrace the learning process.
- Chart a course for wise AI adoption that delivers real value.

## Share your successes and failures!

---
layout: end
bsky: jcc
email: john@hellocrosby.com
github: https://github.com/jcrosby/smart-ai-adoption
---

# Thank You!

<!--
<div class="m-6 text-2xl">
  <a href="https://github.com/jcrosby/smart-ai-adoption" target="_blank" class="slidev-icon-btn">
    <carbon:logo-github />
  </a>
</div>
-->
