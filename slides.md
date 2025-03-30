---
# You can also start simply with 'default'
theme: seriph
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
mdc: true
---

# AI for Teams - Smart Adoption Not Blind FOMO

### John Crosby

#### Principal Engineer, Client Engineering

#### MLB

<div class="abs-br m-6 text-xl">
  <a href="https://github.com/jcrosby/smart-ai-adoption" target="_blank" class="slidev-icon-btn">
    <carbon:logo-github />
  </a>
</div>

<!--
# AI for Teams - Smart Adoption Not Blind FOMO
-->

---
layout: cover
background: /images/smart-vs-fomo-chatgpt.png
---

# AI won’t take your job — someone using it smarter will.

<!--
- Hook: “AI won’t take your job — someone using it smarter will.”
- Quick audience check:
  - Who has experimented with AI?
  - Who feels overwhelmed by the AI hype?
  - Who is dealing with "AI FOMO" i.e. "We need to do AI now!"?
- The AI landscape: Why everyone is talking about it and why FOMO isn’t a strategy.

## Script

Thank you all for being here today. I'm John Crosby, Principal Engineer in Client Engineering at MLB, and I'm speaking today from my personal experience and perspective, not representing my employer.

Let me start with something that might hit close to home: AI won't take your job — but someone using it smarter might.

Quick show of hands:
Who here has experimented with AI tools like ChatGPT, Claude, or GitHub Copilot? [Pause]
Who feels a bit overwhelmed by all the AI hype? [Pause]
And who's dealing with that 'AI FOMO' at work - that pressure that 'We need to do AI now or we'll fall behind!'?

That last sentiment is exactly what we'll be addressing today. In the next 30-45 minutes, I want to share a framework for thoughtful AI adoption that focuses on real value rather than jumping on trends. Because in this landscape of rapid AI development, FOMO isn't a strategy - intelligence is.
-->

---
layout: cover
background: /images/myths-misconceptions-chatgpt.png
---

# AI Myths & Misconceptions

<!--
- What AI **is** and **isn’t** (brief overview of LLMs, generative AI, automation)
- Common myths:
  - “AI will do everything for you.”
  - “AI is a silver bullet that makes work faster and easier.”
  - “AI will replace software engineers.”
  - “If we don’t adopt AI now, we’ll fall behind.”
- Reality check: AI **augments**, not replaces—unless you don’t learn how to use it.

## Script

Before we dive into evaluation frameworks, let's clarify what AI actually is and isn't. When I say 'AI' today, I'm primarily talking about large language models like GPT-4 or Claude, generative AI tools like DALL-E or Midjourney, and various automation tools that leverage machine learning.

There are several myths that have emerged about AI:

- Myth #1: 'AI will do everything for you.' The reality is AI is a tool, not a replacement for human judgment.
- Myth #2: 'AI is a silver bullet that makes work faster and easier.' Sometimes it does! But sometimes it creates new challenges or even slows processes down.
- Myth #3: 'AI will replace software engineers.' This is one I hear a lot in our industry. AI can write code, but it can't understand business contexts, user needs, or system architectures the way humans do.
- Myth #4: 'If we don't adopt AI now, we'll fall behind.' This fear drives a lot of poor decision-making.

The reality is that AI augments human capabilities - it doesn't replace them. Unless, of course, you don't learn how to use it effectively. And that's what we're here to talk about today.
-->

---
layout: image-right
image: /images/five-questions-chatgpt.png
---

# Smart AI Adoption: How to Evaluate AI for Your Team

## Five questions to ask

<!--
1. Does this AI tool solve a real problem, or is it just “cool”?
2. How does it impact efficiency vs. quality?
3. What are the risks (bias, security, ethics)?
4. Can we trust the outputs?
5. How does it fit into our existing workflows?

## Script

So how do we cut through the hype and determine if AI actually makes sense for our teams? I've developed a framework of five critical questions that every team should ask before adopting an AI tool. We'll explore each of these in detail.
-->

---
layout: image-right
image: /images/solve-real-problems-gemini.jpeg
---

# Does this AI tool solve a real problem, or is it just ‘cool’?

<!--
- **Key Considerations:**
  - Clearly identify the problem or opportunity the AI is meant to address.
  - Determine measurable success criteria (e.g., reduced customer wait times, improved detection rates).
  - Collaborate with internal stakeholders to confirm the value and relevance of the identified problem.

## Script

Question 1: Real Problem vs. "Cool Factor" - "The first question is fundamental: Does this AI tool solve a real problem, or is it just 'cool'?
This seems obvious, but it's surprising how many AI initiatives start with the technology rather than the problem.

For meaningful adoption, you need to:

- Clearly identify a specific problem or opportunity the AI will address
- Define measurable success criteria - how will you know if it's working?
- Get buy-in from stakeholders who will actually use the tool to confirm it's addressing a genuine need

Without anchoring to a real problem, AI adoption often becomes a vanity project that eventually gets abandoned.
-->

---
layout: image-right
image: /images/efficiency-quality-matrix-chatgpt.png
---

# How does it impact efficiency vs. quality?

<!--
- **Key Considerations:**
  - Understand whether the AI accelerates workflows (e.g., automated data entry) or if it can genuinely enhance quality (e.g., better predictions or improved insights).
  - Evaluate the trade-offs: speeding up a process could cause quality issues if the AI isn’t properly calibrated.

## Script

Question 2: Efficiency vs. Quality: The second question addresses the impact: How does this AI tool affect efficiency versus quality?

Some AI tools primarily accelerate workflows - like automating data entry or content generation. Others might enhance quality through better predictions or insights.
The key consideration here is understanding the tradeoffs. Speeding up a process could introduce quality issues if the AI isn't properly calibrated. Conversely, focusing too much on quality improvements might make processes slower.

Your team needs to be clear about which dimension matters most for your specific use case and how you'll measure both dimensions.
-->

---
layout: center
---

# What are the risks (bias, security, ethics)?

<!--
- **Key Considerations:**
  - Assess known data biases or algorithmic blind spots that might lead to unfair outcomes.
  - Ensure the tool meets privacy and security standards, especially when handling sensitive information.
  - Evaluate the ethical implications: Does the AI’s operation comply with legal standards and organizational values?

## Script

The third question concerns risk: What are the potential risks around bias, security, and ethics?

All AI systems come with inherent risks:

- They may perpetuate or amplify biases present in their training data
- They introduce new security and privacy considerations, especially when handling sensitive information
- They raise ethical questions about transparency, fairness, and responsibility

Your evaluation should include a thorough assessment of these dimensions. What biases might exist in the data? How secure is your data when processed by the AI? What ethical guardrails need to be in place?

The goal isn't to eliminate all risk, but to understand and mitigate it appropriately.
-->

---
layout: center
---

# Can we trust the outputs?

<!--
- **Key Considerations:**
  - Validate accuracy through testing, pilot programs, or external audits.
  - Look into the AI’s “explainability” features: can the system provide insight into how it arrived at certain decisions?
  - Implement ongoing performance monitoring and include human oversight in critical decision points.

## Script

The fourth question is about trust: Can we trust the outputs of this AI system?

Trust is earned, not given - even with AI. Your evaluation should include:

- Validation of accuracy through rigorous testing
- Consideration of the AI's 'explainability' - can it show how it arrived at a particular result?
- Implementation of ongoing monitoring and human oversight for critical decisions

Without established trust, teams will either blindly follow AI recommendations (potentially leading to errors) or ignore them entirely (wasting the investment).
-->

---
layout: center
---

# How does it fit into our existing workflows?

<!--
- **Key Considerations:**
  - Determine if current systems need to be modified or replaced to support the AI tool.
  - Engage with frontline users early to identify potential frictions or training needs.
  - Plan for ongoing technical support and updates.

## Script

The final question addresses practical implementation: How does this AI tool fit into our existing workflows?
Even the most powerful AI is useless if it doesn't integrate well with how your team actually works.

Consider:

- What systems will need to be modified or replaced?
- How will frontline users interact with the tool day-to-day?
- What ongoing technical support and updates will be needed?

Early engagement with the users who will be working with the AI is crucial here. They'll quickly identify potential friction points or training needs that might not be obvious from a high-level view.
-->

---
layout: cover
background: /images/red-flags-gemini.jpeg
---

# Red Flags to Watch For

<!--
## Script

Let's talk about some specific red flags that indicate an AI solution might be driven more by hype than value.
-->

---
layout: center
---

# Real Problem vs. “Cool Factor"

<!--
1. **Vague Use Cases:** No one can articulate a clear, tangible problem the AI will solve.
2. **Hype-Driven Adoption:** The primary motive is “everyone else is doing it,” rather than solving a real need.
3. **No Clear KPIs:** Teams lack measurable indicators for success (e.g., efficiency gains, error reduction).

## Script

First, watch out for vague use cases. If no one can articulate a clear, tangible problem the AI will solve, that's a major warning sign.

Second, be wary of hype-driven adoption where the primary motivator is 'everyone else is doing it' rather than solving a specific need.

Finally, if there are no clear KPIs for measuring success, how will you know if the AI is actually delivering value? Without measurable indicators like efficiency gains or error reduction, you're essentially flying blind.
-->

---
layout: center
---

# Efficiency vs. Quality

<!--
>
1. **Overemphasis on Speed Alone:** All focus is on faster processes, with little consideration for accuracy or effectiveness.
2. **Hidden Quality Costs:** Small lapses in quality go unnoticed during early testing and can escalate after deployment.

## Script

Overemphasis on speed alone. If the focus is solely on faster processes without considering accuracy or effectiveness, that's a problem.

Hidden quality costs. Small lapses in quality might go unnoticed during early testing, but they can escalate into major issues after deployment. If the AI isn't properly calibrated, you could end up with a faster process that produces subpar results.
-->

---
layout: center
---

# Risks (Bias, Security, Ethics)

<!--
1. **Unverified Data Sources:** Training data origins are unclear, raising concerns about accuracy or bias.
2. **Weak Security Protocols:** No transparent plan for preventing data breaches or securing sensitive information.
3. **No Ethical Guidelines:** No framework to address potential algorithmic discrimination or misuse of the tool.

## Script

Unverified data sources. If the origins of the training data are unclear, it raises concerns about accuracy or bias.

Weak security protocols. If there's no transparent plan for preventing data breaches or securing sensitive information, that's a major risk.

Absence of ethical guidelines. If there's no framework to address potential algorithmic discrimination or misuse of the tool, you're opening yourself up to significant risks.
-->

---
layout: center
---

# Trust in Outputs

<!--
1. **Black-Box Models with No Explanation:** The AI’s decision-making process is opaque, making it hard to diagnose errors or biases.
2. **No Mechanism for Verification:** There’s no systematic way to check or replicate results for accuracy.
3. **Limited Testing:** The tool is rolled out broadly with minimal piloting or staged deployment.

## Script

Black-box models with no explanation. If the AI's decision-making process is opaque, it makes it hard to diagnose errors or biases.

Lack of mechanisms for verification. If there's no systematic way to check or replicate results for accuracy, you're setting yourself up for failure.

Limited testing. If the tool is rolled out broadly with minimal piloting or staged deployment, you're risking major issues down the line.
-->

---
layout: center
---

# Does it Fit Into Existing Workflows

<!--
1. **Major Workflow Disruption:** Implementation requires an overhaul of current systems, risking low user adoption and productivity dips.
1. **Inadequate User Training:** End users or frontline teams are not sufficiently prepared to integrate AI into their daily tasks.
1. **Lack of IT/Operations Readiness:** No clear plan for data management, software compatibility, or ongoing maintenance and support.

## Script

Major workflow disruption. If the implementation requires an overhaul of current systems, it risks low user adoption and productivity dips.

Inadequate user training. If end users or frontline teams are not sufficiently prepared to integrate AI into their daily tasks, you're setting yourself up for failure.

Lack of IT/operations readiness. If there's no clear plan for data management, software compatibility, or ongoing maintenance and support, you're opening yourself up to significant risks.

- These red flags should be taken seriously. If you see one or more of these in your evaluation, it's time to pause and reassess.
- AI can be speeding things up, but at what cost? It's it doing bad things more quickly?
-->

---
layout: image-right
image: /images/leap-framework-chatgpt.png
---

# AI Evaluation <br/> The LEAP Framework

<!--
- Distilling the Rubric into four key repeatable steps:
  1. Learn
  2. Evaluate
  3. Apply
  4. Practice

## Script

Now let's pull everything together into a repeatable framework you can use with your teams. I call it the LEAP framework:

- Learn
- Evaluate
- Apply
- Practice

This gives you a structured approach to AI adoption that avoids the pitfalls of FOMO-driven decisions.
-->

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
layout: cover
---

# Practical AI Use Cases for Teams

<!--
- **Product Managers**: Research, decision-making, roadmap planning
- **Designers**: User research, automation, accessibility improvements
- **Developers**: AI pair programming, debugging, automation
- How cross-functional teams can work together to **leverage AI without breaking workflows**

## Script

Let's get practical and look at some specific ways different roles on your teams might leverage AI effectively.

- For Product Managers, AI can enhance research, support data-driven decision-making, and assist with roadmap planning. Imagine using an AI to analyze customer feedback at scale or to simulate different feature prioritization scenarios.
- For Designers, AI tools can accelerate user research, automate repetitive tasks, and improve accessibility features. Tools like generative design assistants can help explore more design variations faster.
- For Developers, AI pair programming tools like GitHub Copilot can suggest code completions, help with debugging, and automate routine coding tasks.

The key for cross-functional teams is finding integration points where AI can enhance collaboration without disrupting established workflows. For example, using AI to generate and refine acceptance criteria that all roles can align around.
-->

---
layout: cover
---

# Communicating AI Strategy to Leadership

<!--
- How to push back against **"We need AI because everyone else is using it!"**
- Framing AI as a tool, not a trend: Speaking the language of leadership
- Realistic expectations: AI as an **incremental improvement**, not a revolution overnight

## Script

One of the biggest challenges in smart AI adoption is communicating effectively with leadership, especially when they're experiencing their own version of AI FOMO.

When leaders say 'We need AI because everyone else is using it!' you need a strategy to redirect that energy. Focus the conversation on specific business problems and how AI might address them, rather than AI for its own sake.

Frame AI as a tool, not a trend. Speak the language of leadership by connecting AI initiatives to metrics that matter: revenue growth, cost reduction, improved customer satisfaction, or risk mitigation.

Set realistic expectations. AI typically delivers incremental improvements, not overnight revolutions. Help leadership understand that the most successful AI implementations start small, prove value, and then scale gradually.
-->

---
layout: cover
---

# Conclusion & Key Takeaways

<!--
- AI is a tool—**how you use it determines its value**
- Smart adoption beats blind FOMO **every time**
- **Final rubric reminder:
  - Ask the questions!
  - ** Learn, evaluate, apply (in that order!)**

## Script

To wrap up today's session:

- AI is just a tool—how you use it determines its value. The most sophisticated AI in the world won't help if it's solving the wrong problem or creating more issues than it addresses.
- Smart, thoughtful adoption beats blind FOMO every time. The teams that win with AI aren't necessarily the first movers—they're the ones who implement with purpose and clarity.

Remember the framework we've discussed today:

- Ask the five critical questions
- Watch for red flags
- Follow the LEAP process: Learn, Evaluate, Apply, Practice

Thank you for your time today. I'm happy to take questions and discuss specific AI challenges you might be facing in your organizations.
-->

---
layout: cover
---

# Thank You!

<!--
I really do appreciate your time and attention. And I hope you found this session valuable.
If you have questions, feedback, or just want to discuss AI in general, please feel free to reach out to me via BlueSky or email.
-->
