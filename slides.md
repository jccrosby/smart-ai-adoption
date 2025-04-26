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


---
layout: intro
introImage: /images/john-crosby.jpg
bsky: jccrosby.com
---

# John Crosby

## Principal Engineer, Client Engineering @ MLB

<!--
- In a previous life I was a Professional Chef.
- I transitioned from restaurants to project managing for a 3D animation and web development company.
- That's where I caught the programming bug.
- Then started a web development and training consultancy and ran that for just over a decade.
- Then I joined MLB and have been working in the MLB.tv and streaming space.
- This is my 11th season at MLB.
- All that is to say, I think my non-traditional background has provided me a good foundation for assessing and dealing with changes and how those changes can effect and be best integrated into organizations and teams.
-->

---
layout: new-section
sectionImage: /images/smart-vs-fomo-chatgpt.png
imageWidth: 512
imageHeight: 341
---

# Navigating AI for Teams

## Smart Adoption vs. Blind FOMO

<!--
Navigating AI for Teams

Smart Adoption vs. Blind FOMO

1. There is a lot of fear mongering out there
   1. AI is going to take all the jobs!
   2. AI won’t take your job—but someone using it smarter will.
2. But, the pressure to "do something with AI" is real.
3. And the reality is that AI is a tool, not a magic wand.
4. Just like any other tool, the key is to understand it and adopt it wisely, not blindly.
5. That's my hope for this talk - to provide a simple way navigate the changes that AI is introducing, avoid the pitfalls, and make better informed decisions.
-->

---
layout: image
image: /images/ai-landscape.png
---

<div class="bg-[#fff]/70 p-10 rounded-lg text-red-500 text-7xl text-align-center">The Current Landscape</div>

<!--
The Current Landscape

1. Questions
   1. Who here
      1. ...leads an entire company or group of many teams?
      2. ...leads multiple teams?
      3. ...leads a single team?
   2. How many of you have said or heard some form of "we need to do something with AI"?
2. We're experiencing rapid changes due to AI advancements
   1. Especially around LLMs and generative AI.
   2. There are already lots of experiments using AI tools in many different ways.
3. The truth is regardless of the number of teams you're part of or leading, we're all going to have to deal with the changes that AI is bringing.
4. People and teams may feel overwhelmed by the hype and the sheer volume of advancements, news, and available tools.
-->

---
layout: center
---

# The Dual Edge: Hype vs. Opportunity

## The pressure to "do something with AI" can lead to rushed decisions & poor outcomes

<!--
The Dual Edge: Hype vs. Opportunity

The pressure to "do something with AI" can lead to rushed decisions & poor outcomes

1. AI offers opportunities like
   1. Enhanced productivity
   2. Better quality
   3. Faster cycles or higher velocity
   4. More innovation more often
2. There are risks and pitfalls we need to be aware of
   1. not having a plan
   2. Lack of clear goals
   3. No coherent strategy
   4. FOMO
3. The challenge is to navigate the landscape smartly, so we can harness those opportunities and avoid the pitfalls.
-->

---
layout: center
---

# Smart Adoption vs. Blind FOMO

## The Core Difference

<!--
1. Smart Adoption:
   1. Involves learning and planning before any significant investment
   2. What does that mean? It means
      1. Being deliberate
      2. Being strategic
      3. Focusing on identifying and solving specific problems
      4. Creating measurable results so you know when you've succeeded (and when you haven't)
      5. Then assessing those results and iterating
2. Blind FOMO
   1. Often skips learning and planning
   2. Reactive
   3. Technology-centric
   4. Driven by hype rather than a specific problem
   5. Doesn't measure and you can't clearly assess the results

Which leads me to my first tenet...
-->

---
layout: statement
---

<div class="text-center text-7xl text-red-500 font-bold">The implementation of AI matters more than its mere adoption.</div>

<!--
**The implementation of AI matters more than its mere adoption.**
-->

---
layout: new-section
sectionImage: /images/core-principles.jpeg
---

# Core Principles of Effective AI Adoption

## Foundational Principals to Smart Adoption

<!--
Core Principles of Effective AI Adoption

Foundational Principals to Smart Adoption

- There are 6 core principles that are the foundation for effective AI adoption.
-->

---
layout: default
---

# Six Core Principles

1. **Strategic Alignment:** Define _why_ before _what_.
2. **Data Readiness & Governance:** Poor data leads to failure.
3. **Skills & Culture:** Learning, experimentation, critical assessment, and sharing are key.
4. **Technology & Infrastructure:** The right tools in the right place.
5. **Ethics & Responsibility:** Fairness, transparency, privacy, security
6. **Iterative Approach:** Short feedback loops and continuous learning.

<!--
Six Core Principles

1. Strategic Alignment: You're looking to solve specific problems and those problems must be aligned with your business goals.
   1. You need to know the _why_ before _what_.
2. Data Readiness & Governance: You need data quality, accessibility, security, and governance because poor data leads to failure.
   1. Basically,  Garbage in equals garbage out.
3. Skills & Culture: AI adoption is going to require technical skills and a supportive culture.
   1. A supportIve culture that encourages experimentation, learning, and sharing.
   2. If A that doesn't already exists, it can be difficult to foster, but it's well work the effort.
4. Technology & Infrastructure: You're going to need to select the right tools that are compatible with existing workflows.
5. Ethics & Responsibility: You're going to need to make sure ethical considerations are in place from the beginning.
   1. Fairness, transparency, privacy, security
   2. Be willing to update and adjust where and when it makes sense
6. An Iterative Approach: You know you're solving specific problems, and you'll start with small pilots.
   1. Then learn from those pilots and introduce the successful ones.
   2. Basically you're looking for short feedback cycles and continuous learning.

Keeping these principles in mind is going ot help focus the efforts and make informed decisions.
-->


---
layout: new-section
sectionImage: /images/LEAP-cycle.png
---

# The L.E.A.P. Framework

## An Iterative Process for Smart Adoption


<!--
The L.E.A.P. Framework

1. The six core principles, lead me to the framework I'd like ot share - LEAP
2. It's "four-ish" steps that
   1. Focus on maximizing value while mitigating risks.
   2. Encourage iterative progress and critical evaluation.
   3. Emphasize measurement and learning from _successes_ AND _failures_.
   4. And provides a sustainable and flexible process that can
      1. Be applied at any level of an organization
      2. Adapted to fit specific needs.

In short, It's a structured, repeatable way to help navigate AI adoption.

Let's break down the specific steps.
-->

---
layout: two-cols-header
---

# 1. LEARN

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

<!--
- Step Number 1 - Learn: You'll need to understand AI capabilities and limitations relative to your goals.

Which means you're going to need to:

 1. Identify pain points in your process, problems you need to solve, etc.
 2. Looking for AI tools and advancements that could be used to solve those problems.
 3. Assess team skills
 4. Evaluate the data you have and data you think you need
 5. Consider ethical and security implications
 6. And finally you need ot define goals for experiments
    1. Specific
    2. Measurable
    3. Achievable
    4. Relevant
    5. Time-bound

Once you done all that you should have:

1. Prioritized use cases
2. Assessment of your readiness
3. And defined success metrics

- The goal is to identify those specific areas where AI can add value.
- This step is where you're
  - Understanding the your specific landscape
  - and creating your plan
-->

---
layout: two-cols-header
---

# 2. EXPERIMENT

## Focus on small-scale, controlled pilots.

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
- User feedback.
- Lessons learned.

<!--
- Step Number 2 - Time to experiment
- This is where you put your plan into action and
- Focus on those small-scale, controlled pilots to test your assumptions and hypotheses

So you're going to:

1. Select a low-risk pilot project
2. Choose the AI tool, model etc. that you've identified
3. Develop and execute your prototype or limited integration
4. Gather quantitative and qualitative feedback based on your goals

So the output here is:

1. Working prototype
2. Performance data and metrics
3. User feedback in the forms of surveys and/or interviews
4. You might even generate some lessons learned

- The goal here is to gather the information that you need to validate your assumptions about this experiment.
-->

---
layout: two-cols-header
---

# 3. ASSESS

## Critically evaluate outcomes to make better decisions.

::left::

# Activities

- Evaluate results against your goals.
- Analyze the benefits vs. costs
- Assess impact on workflow, quality, productivity, satisfaction.
- Identify challenges and risks.
- Review ethical and security concerns.
- Make a clear **Go/No-Go** decision.

::right::

# Output

- A more refined understanding of requirements and the results.
- An assessment report.
- A clear decision.

<!--
- Step Number 3 - Assess is where you will
  - take a step back and
  - evaluate the results and outcomes and make your informed decisions.

When assessing your results you're:

1. Looking at the results relative the goals
2. Analyzing benefits vs. costs (ROI)
3. Assessing the impact on the things that matter - workflow, quality, productivity, satisfaction, etc.
4. Identifying challenges and risks
5. Reviewing ethical and security concerns
6. Then finally based on all of that you're going to make a clear **Go/No-Go** decision

All of this should lead to

1. A better understanding of requirements and the results.
2. Probably useful reports
3. A clear decision on that experiment

- It boils down to this - you're assessing if AI is adding value and if it is worth scaling or not.
- Which then means you have a decision to make...
-->

---
layout: default
---

<h1 class="absolute left-4 pl-30">PIVOT</h1>
<h1 class="absolute right-6 pr-30">PROPAGATE</h1>

<!--
- That decision is the "P" in LEAP
  - Pivot
  - Propagate
  - and why I said it's "four-ish" steps.
-->
---
layout: two-cols-header
---

# 4. PIVOT

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

<!--
Step 4 - PIVOT

- If the experiment didn't work how you expected or it was just an outright failure, you're going to pivot.
- It's not bad, it's expected and good that you now get to learn from failure and use that to inform your next steps.

Those next steps are::

1. Analyze failure and gather feedback.
2. Adjust goals, assumptions, tools, or methods based on insights you've gained.
3. Reassess readiness and risks.
4. Iterate on the experiment in some way or move to a brand new experiment.

Output:

1. Revised or new  experiment plan based on what you've learned.
2. Updated goals.

Now, it's back to the beginning of the cycle to start another iteration.

If you're not Pivoting, you're Propagating...
-->

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

::right::

# Output
- A useable AI solution.
- Maintenance & governance structures.
- Ongoing monitoring plan.
- Up-skilled team.

<!--
- Step Number 4 - Propagate: Strategically scale successful AI applications.

- If you're propagating, your experiment was a success!
- Now you get to scale that success across your team and/or organization.

What does that mean?

1. You're going to need a roadmap to rollout the successful experiment. That roadmap should include:`
   1. Any changes you need to make to infrastructure and tooling
   2. Training programs
   3. Updated or new governance policies and monitoring processes

So you'll end up with:

1. A useable AI solution
2. A process for maintaining and governing
3. A plan for monitoring and maintaining
4. An up-skilled team/organization

- The goal is to make sure the AI solution you're putting in place is sustainable and effective.

Regardless of a Pivot or Propagate, there's something else that needs happen. Which means its time for the second tenet...
-->

---
layout: center
---

<div class="text-red-500 text-6xl">Share what you've learned from the successes and failures.</div>

<!--
- Sharing is an essential part of expanding the benefits of any effort like this.
- Also, it can happen at any stage of the process. It doesn't just have to be after the last step.
-->

---
layout: new-section
sectionImage: /images/exec-fomo.png
---

# Story time:

# Blind FOMO

## Cursor: AI Tooling For Coding

<!--
Analogy - Blind FOMO

Cursor: AI Tooling For Coding

1. Alright, story time.
2. This is a little contrived but I did that to protect the innocent - this story does have reality based origins.
3. We received messaging something alone the lines of "Use Cursor to be more productive! We want to see it increase teams velocity."
1. Cursor is a generative AI tool for code - "The AI Code Editor - Built to make you extraordinarily productive, Cursor is the best way to code with AI." is their tag line.
2. The team was told to "check it out".
3. There was no clear goal or understanding of what anyone was supposed to do or how.
4. The InfoSec team hadn't evaluated or approved it.
5. Legal hadn't looked at it or approved it.
6. There was no training or onboarding.
7. There wasn't a budget for it. It was basically use the free trial and see what happens.
8. This might have also been presented on March 5th.
   1. Spring Training started on February 20th
   2. Opening Day was March 27th.
   3. So basically during one of the busiest times of the year for everyone involved.
9.  Let's say this was presented to 30 engineers across multiple teams and different concerns.
10. Which means this ended up being 30 isolated "experiments" going on at once with
    1.  No clear goals
    2.  No way to know what should be measured or how to measure it
    3.  No timeline to deliver results
11. It basically turned into a subjective and unbounded "some like it, some don't"

Not very effective or efficient.
-->

---
layout: default
---

# The Cursor "Experiment"

- **Skipped Learn:** Vague goal, focused on tech over specific problems, and ignored readiness
- **Skipped Experiment/Assess:** We had no clear goals, no way to measure success, and no understanding of the risks
- **Failed Pivot/Propagate:** Resulted in chaos, inconsistent usage, wasted resources and time, potential security and IP issues, no way to measure impact

<!--
So, that experiment was a failure, but not because of the tool. Because of the process or lack of process.

If we apply LEAP to what happened:

- **Skipped Learn:**
  - Vague goal ("increase velocity")
  - Focused on tech (GenAI) over specific problems
  - Ignored readiness (knowledge, skills, codebase, IP)
- **We weren't able to Experiment or Assess because:**
  - We had no clear goals
  - No way to measure success
  - and there was zero understanding of the risks
- **Pivot or Propagate - based on what?:**
  - The "experiment" if you can call it that resulted in chaos
  - Inconsistent experimentation and usage
  - Wasted resources and time
  - Potential security and intellectual property (IP) issues
  - No way to measure impact

The experiment failed to provide any real value. I'm sure some enjoyed checking out a new tool, but it really ended up being a waste of time and effort.
-->

---
layout: new-section
sectionImage: /images/five-questions-chatgpt.png
---

# Smart AI Adoption: How to Evaluate AI for Your Team

## Five Questions to Ask

<!--
- Part of the Learn step is to research and evaluate AI tools.
- The following are five questions to use when evaluating AI tools.
-->

---
layout: new-section
sectionImage: /images/Q1-Solve-real-problems-gemini.jpeg
---

# Question 1:

# Does it solve a **real problem**, or is it just "cool"?

<!--
Question 1 - Does it solve a **real problem**, or is it just "cool"?

- **LEAP - Learn:** Identify bottlenecks or pain points and potential AI solutions.
- **Aligns with Strategic Alignment:** make sure it addresses a specific bottleneck or pain point you've identified.
- **Red Flag:** Vague use cases with no clear, tangible problems.
-->

---
layout: new-section
sectionImage: /images/Q2-Efficiency-quality-matrix-chatgpt.png
---

# Question 2:
# How does it impact **efficiency vs. quality**?

<!--
Question 2 - How does it impact **efficiency vs. quality**?

**Quality vs. Efficiency:** Matrix to evaluate the trade-offs between efficiency and quality.

- **LEAP - Assess:** You're holistically evaluating the impact on workflows, processes as it relates to quality & accuracy.
- **Be aware of the trade-offs:** Focusing on speed alone can hide quality costs.
- **Red Flag:** Overemphasis on speed alone without considering accuracy.
  - This reminds me of "Vibe coding"
  - If you're not familiar with what that is or have a strong opinion, let's talk about it later.
-->


---
layout: new-section
sectionImage: /images/Q3-Risks.png
---

# Question 3:

# What are the **risks**?

<!--
Question 3 - What are the **risks**?

- **LEAP - Learn & Assess:**
  - Proactively consider risks and evaluate the ethical posture
- **Integrate Ethics & Responsibility:**
  - Consider potential biases
  - Security vulnerabilities
  - Ethical implications for the tools and any applied use cases
- **Red Flags:**
  - Unverified or biased data
  - Weak security
  - Lack of ethical guidelines
-->


---
layout: new-section
sectionImage: /images/Q4-Verification.jpeg
---

# Question 4:

# Can we **trust the outputs**?

<!--
Question 4 - Can we **trust the outputs**?

- **LEAP - Experiment & Assess:**
  - Gather data and feedback on the reliability of AI outputs.
  - Assess for accuracy and validity.
- **Emphasize Verification:**
  - Understand AI's decision-making process
  - What are the mechanisms to verify its results.
- **Red Flags:**
  - Limited testing
  - Black-box models
  - No verification process
-->

---
layout: new-section
sectionImage: /images/Q5-Workflows.png
---

# Question 5:

# How does it fit with our **existing workflows**?

<!--
Question 5 - How does it fit with out **existing workflows**?

- **Learn & Propagate:**
  - Identify how the AI solution integrates with existing processes.
  - So when you are rolling it out or need to pivot you're not creating more work.
- **Technology & Infrastructure:**
  - Ensure compatibility and minimize disruption.
- **Red Flags:**
  - Inadequate training
  - Lack understanding of IT/operational readiness
  - Major workflow disruption
-->

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
- Weak security and privacy protocols
- No ethical guidelines
- Black-box models with no explanation
- Inadequate user training
- Lack of operational readiness
- No mechanism for verification
- Limited testing
- Major workflow disruption

<!--
All together now, here are some red flags to watch for when evaluating AI tools:

you want to make sure:
- You can measure what you need to
- Ethical guidelines are being followed
- There aren't major workflow disruptions
- Security and privacy is being accounted for
- etc...

Red Flags to Watch For

- Hype-driven adoption
- Vague use cases
- Overemphasis on speed alone
- No clear KPIs
- Hidden quality costs
- Unverified data sources
- Weak security protocols
- No ethical guidelines
- Black-box models with no explanation
- Inadequate user training
- Lack of operational readiness
- No mechanism for verification
- Limited testing
- Major workflow disruption
-->

---
layout: new-section
sectionImage: /images/Practical-AI-Use-Cases.png
---

# Practical AI Use Cases

## Leveraging AI Across Concerns

<!--
- I've gathered a few use cases across different concerns.
- These are just a few examples of how I've seen AI used in different areas.
- I've attempted to align them with the LEAP framework.
-->

---
layout: default
---

# AI in Requirements Engineering

- NLP/LLMs for eliciting, analyzing, and validating requirements.
- Generating user stories and initial system models.
- **LEAP:**
  - **Learn:** Analyze requirements for ambiguity using NLP.
  - **Experiment:** Use NLP to analyze a small set of user stories.
  - **Assess:** Gather feedback on improved clarity.
  - **Propagate:** Scale use of validated NLP tools.

<!--
AI in Requirements Engineering

- Natural language processing and LLMs to generate, analyze, and validate requirements.
- This can be as simple as generating user stories or using AI to generate full-blown system models.
- **LEAP:**
  - **Learn:** We've identified that we'd like to analyze requirements for ambiguity using NLP.
  - **Experiment:** Use NLP to analyze a small set of user stories.
  - **Assess:** Gather feedback on improved clarity.
  - **Propagate:** Scale use of validated NLP tools. Distribute the tools to whoever needs them for this process.
    - We'll also want to consider training and onboarding etc.
-->

---
layout: default
---

# AI-Assisted Code

- Tools like GitHub Copilot, Cursor, Gemini Code Assist, Amazon Q, and Claude Code.
- Capabilities: code generation, explanation, refactoring suggestions, bug fixes and identification.
- **LEAP:**
  - **Learn:** Research tools and their security implications.
  - **Experiment:** Pilot with a small team on specific tasks.
  - **Assess:** Evaluate code quality and developer productivity.
  - **Propagate:** Roll out with training and best practices.

<!--
- Tools like GitHub Copilot, Cursor, Gemini Code Assist, Amazon Q, and Claude Code.
- Capabilities: code generation, explanation, refactoring suggestions, bug fixes and identification.
- **LEAP:**
  - **Learn:** Research tools and their security implications.
  - **Experiment:** Pilot with a small team on specific tasks.
  - **Assess:** Evaluate code quality and developer productivity.
  - **Propagate:** Roll out with training and best practices.
-->

---
layout: default
---

# AI-Driven QA

- LLMs and specialized models for generating unit, integration, and end-to-end tests.
- AI for GUI testing, fuzz testing, visual regression, bug detection, chaos testing.
- **LEAP:**
  - **Learn:** Identify repetitive testing tasks.
  - **Experiment:** Use AI to generate tests for non-critical components.
  - **Assess:** Measure code coverage and effort required.
  - **Propagate:** Integrate successful techniques into QA workflows.

<!--
AI-Driven QA

- LLMs and specialized models for generating unit, integration, and end-to-end tests.
- AI for GUI testing, fuzz testing, visual regression, bug detection.
- **LEAP:**
  - **Learn:** Identify repetitive testing tasks.
  - **Experiment:** Use AI to generate tests for non-critical components.
  - **Assess:** Measure code coverage and effort required.
  - **Propagate:** Integrate successful techniques into QA workflows.
-->

---
layout: default
---

# AI in DevOps

- Automation of CI/CD, intelligent monitoring, anomaly detection, predictive failure analysis.
- **LEAP:**
  - **Learn:** Identify manual DevOps bottlenecks.
  - **Experiment:** Automate a deployment or set of deployments.
  - **Assess:** Measure impact on deployment time and reliability.
  - **Propagate:** Expand automation across more services.

<!--
AI in DevOps

- Automation of CI/CD pipelines, intelligent monitoring, anomaly detection, predictive failure analysis.
- **LEAP:**
  - **Learn:** Identify manual DevOps bottlenecks.
  - **Experiment:** Automate a deployment or set of deployments.
  - **Assess:** Measure impact on deployment time and reliability.
  - **Propagate:** Expand automation across more services.
-->

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

<!--
AI-Assisted Project Management and Reporting

- AI for task prioritization, resource allocation, and risk management.
- Automated reporting and status updates.
- **LEAP:**
  - **Learn:** Identify repetitive reporting tasks.
  - **Experiment:** Use AI to generate reports for a small project.
  - **Assess:** Measure time saved and accuracy.
  - **Propagate:** Integrate successful techniques into PM workflows.
-->

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

<!--
AI for Security Analysis

- Enhanced threat detection, log analysis, vulnerability assessment, automated Security Operations Center (SOC) tasks.
- AI tools for code vulnerability scanning.
- **LEAP:**
  - **Learn:** Research AI-powered security tools.
  - **Experiment:** Run Static Application Security Testing (SAST) tools on a feature branch.
  - **Assess:** Analyze false positive/negative rates.
  - **Propagate:** Integrate validated tools into the DevSecOps pipeline.
-->

---
layout: center
---

# Communicating AI Strategy to Leadership

## Emphasize Value and the Risk Management

<!--
Communicating AI Strategy to Leadership

Emphasize Value, Risk Management, and the LEAP Framework

- Using a framework like LEAP to demonstrate a structured approach to AI adoption allows you to
  - Highlight the importance of risk management and ethical considerations.
  - Focus on the value AI can bring to the organization.
  - Emphasize the iterative nature of the process and the value of learning from both successes and failures.
-->

---
layout: center
---

# Conclusion & Takeaways

## Embrace AI Thoughtfully and Strategically

<!--
Conclusion & Key Takeaways

Embrace AI Thoughtfully and Strategically

- Integrating AI into and organization or team requires careful consideration and planning.
- The LEAP framework provides a structured approach for AI adoption.
  - It's a simple, practical, repeatable process
  - **Learn** before acting.
  - **Experiment** in a controlled manner.
  - **Assess** results critically.
  - **Pivot** when necessary or **Propagate** those successful initiatives sustainably.
-->


---
layout: default
---

# Call to Action

- Move beyond passive observation of AI.
- **Initiate a LEAP cycle ->** start by identifying a pressing challenge.
- Research potential AI solutions.
- Define a clear goal for a small experiment.
- Embrace the learning process and iterate.
- Chart a course for smart AI adoption that delivers real value.

## And Again, **SHARE** your successes and failures!

<!--
Call to Action

- Move beyond passive observation of AI.
- and **Start a LEAP cycle ->** by identify a pressing challenge.
- Find potential AI solution.
- Define a clear goal for a small experiment.
- Embrace the learning process and iterate.
- This will help to chart a course for smart AI adoption that delivers real value.

**And Again, SHARE your successes and failures!**
-->

---
layout: end
bsky: jccrosby.com
email: john@hellocrosby.com
github: https://github.com/jccrosby/smart-ai-adoption
---

<div class="text-8xl font-bold">Thank You!</div>
