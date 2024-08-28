<div class="title">
IDONTMIND
</div>

<Button className="blue" size="md" href="https://github.com/lablueprint/idontmind">
    Github Repository
</Button>

<Button className="white" size="md" href="https://www.figma.com/design/Goc2z8Dh48YCUURW6mFG5q/Designs?node-id=3982-4643&t=wKMObvP0eElFAxvc-0">
    Figma Prototype
</Button>

---

<div id="duration-table">

| Duration                       | Tools & Tech                                                             |
| ------------------------------ | ------------------------------------------------------------------------ |
| November 2023 - September 2024 | Figma, React Native, Node.js, Express.js, Git, Google Apps, AWS, MongoDB |

</div>

| Team Members        |                                                                                                                     |
| ------------------- | ------------------------------------------------------------------------------------------------------------------- |
| **_Project Leads_** | Aaron Shi, Jeff Lu                                                                                                  |
| **_Designers_**     | Daniel Ogura, Diya Indoliya, Kimberly Nguyen                                                                        |
| **_Developers_**    | Alan Nguyen, Angela Tan, Antonio Cosio, Chancellor Richey, Fiona Peng, Jerry Xu, Joyce Chen, Kenneth Wan, Nicole Ju |

# Background

IDONTMIND is a nonprofit organization with a mission to inspire open conversations about mental health and to provide free resources, education, and encouragement for anyone who needs it. Launched in 2017 by actor Chris Wood, the campaign aims to destigmatize mental illness by promoting acceptance and support. Through partnerships with mental health organizations and celebrity endorsements, IDONTMIND raises awareness and funds to support mental health initiatives, leveraging its platform to empower individuals to speak openly about their mental health experiences.

# The Challenge

> _How might we create a way for IDONTMIND to engage interactively with their community in a way that provides resources and support in a personal and empowering way?_

# Solution

Our solution is a mobile companion app designed to support holistic wellness and mental health. This app provides a safe, non-judgmental space for users to reflect on their well-being through regular check-ins and journal prompts. By compiling personalized mental health resources and trend analyses based on gathered responses, the app aims to foster a supportive environment that feels like catching up with a good friend—one who’s well-versed in psychology! The ultimate goal is to encourage users to spend less time on the app and more time engaging positively with the real world, feeling healthier and more confident. As such, we keep the following considerations in mind for the extent of this project:

- **Accessibility and ease-of-use.** The app must be intuitive and user-friendly to ensure that users can easily navigate and engage with its features.
- **Personalization and user empowerment.** The app should offer tailored resources and insights that empower users to take control of their mental health and well-being.
- **Encouraging real-world engagement.** Features should be designed to motivate users to apply their reflections and insights to their everyday lives, promoting overall well-being.

To achieve this, we propose a mobile application with these primary features:

1. **Holistic wellness check-ins and journal prompts** that provide a safe space for users to reflect on their mental health.
2. **Personalized mental health resources** that compile tailored advice and support based on user responses.
3. **Trend analyses** that offer insights into users' mental health patterns over time.

# Process

![Process](https://raw.githubusercontent.com/lablueprint/website/case-studies/src/app/assets/images/projects/IDM/idm_process.png)

# Research

## Competitive Analysis

For the duration of one week, we conducted an analysis of eight competitors that offer services similar to our proposed mobile companion app: DailyBean, Evidation, Health, How We Feel, MindDoc, Moodlight, Reflectly, and stoic. This analysis helped us identify commonalities that suggested features to incorporate in our product, as well as aspects to avoid.

![Competitive Analysis](https://raw.githubusercontent.com/lablueprint/website/case-studies/src/app/assets/images/projects/IDM/idm_comp_analysis.png)

## User Interviews

We conducted interviews with four members of IDONTMIND’s Youth Impact Team, who specialize in promoting mental health awareness in terms of digital outreach.

## Affinity Mapping

Lastly, we synthesized our findings from both the competitive audit and the preliminary user interviews to identify common themes and trends. The result was this web of ideas:

![Affinity Mapping](https://raw.githubusercontent.com/lablueprint/website/case-studies/src/app/assets/images/projects/IDM/idm_affinity_mapping.png)

## Key Takeaways

1. Social media has a myriad of negative impacts on mental health, but it’s also the primary way that people currently engage with IDONTMIND.
2. People generally turn to human interactions for emotional needs. However, these support systems aren’t always immediately available.
3. An app that makes itself as small as possible is both less addictive and more easily integrable into a daily routine.

## User Personas

To further synthesize our research findings and allow the team to more effectively empathize with our users, we created personas to humanize the various mental health needs people might have coming into the app.

![User Personas](https://raw.githubusercontent.com/lablueprint/website/case-studies/src/app/assets/images/projects/IDM/idm_user_personas.png)

# Ideation

## User Flow

Before diving into designing, we created some information architecture to guide the structure of the app and how its proposed features would interact with each other.

![User Flow](https://raw.githubusercontent.com/lablueprint/website/case-studies/src/app/assets/images/projects/IDM/idm_userflow.png)

Armed with our research findings, we ideated potential features that would provide solutions to users’ pain points. At this stage, the goal was simply to come up with as many ideas as possible, without considering their feasibility.

- **Account Setup and Daily Check-Ins:**
  - After account creation and logging in, users start with **daily check-ins** that taper off as emotional regulation improves, featuring **multiple choice/scale** questions managed by IDM, with a goal of 10 questions per check-in.
- **Personalized Content:**
  - Includes resources from IDM’s website and Instagram, like **Ask A Therapist** entries and personal stories, tailored based on daily check-ins.
- **Journals:**
  - Offers one daily prompt and access to past entries, with details subject to change.
- **Content Library:**
  - Contains all IDM website content (articles, tips, etc.) for browsing.
- **Trends:**
  - Displays metrics over time, allowing users to switch between short-term and long-term views, with content generated based on these trends.
- **Crisis:**
  - Provides a compilation of emergency resources (phone numbers, websites), which might be scrapped if demand is low.
- **Options:**
  - Allows enabling/disabling of push notifications and specific content that could be triggering.

## Low-Fidelity Mockups

After some preliminary research, we established a guiding vision to start designing mockups for our core features: daily check-ins, personalized content, and user profiles.

These rough sketches were created to illustrate the content and functionality of each screen, rather than their final design.

![Low-Fidelity Mockups](https://raw.githubusercontent.com/lablueprint/website/case-studies/src/app/assets/images/projects/IDM/idm_lofi.png)

## Mid-Fidelity Prototypes

Next, we started to formulate our design system to decide on the colors, typography, and other design elements that we wanted our product to ultimately look like. Here are some of the explorations that came along the way!

![Mid-Fidelity Prototypes](https://raw.githubusercontent.com/lablueprint/website/case-studies/src/app/assets/images/projects/IDM/idm_midfi.png)

## Usability Testing

We provided a working prototype and conducted usability tests with the same members from the Youth Impact Team along with 2 other members of IDONTMIND to gain insight and feedback on the preliminary design of the app.

![Usability Testing](https://raw.githubusercontent.com/lablueprint/website/case-studies/src/app/assets/images/projects/IDM/idm_usabilitytesting.png)

Interviewees cited that the new app was intuitive, easy-to-use, and engaging. Whilst there were some points of confusion for certain features, the users explained that they felt the app was easy to learn.

Users also pointed out specific design aspects to adjust, such as the sizing and placement of certain buttons.

In response to the feedback, we properly adjusted our prototype while maintaining the core of the original high-fidelity design.

# Final Designs

## Onboarding

![Onboarding](https://raw.githubusercontent.com/lablueprint/website/case-studies/src/app/assets/images/projects/IDM/idm_onboarding.mov)

## Check-Ins

![Check-Ins](https://raw.githubusercontent.com/lablueprint/website/case-studies/src/app/assets/images/projects/IDM/idm_check-ins.mov)

## Find Help

![Find Help](https://raw.githubusercontent.com/lablueprint/website/case-studies/src/app/assets/images/projects/IDM/idm_find-help.mov)

## Content

![Content](https://raw.githubusercontent.com/lablueprint/website/case-studies/src/app/assets/images/projects/IDM/idm_content.mov)

## Journal

![Journal](https://raw.githubusercontent.com/lablueprint/website/case-studies/src/app/assets/images/projects/IDM/idm_journal.mov)

## Trends

![Trends](https://raw.githubusercontent.com/lablueprint/website/case-studies/src/app/assets/images/projects/IDM/idm_trends.mov)

## Options

![Options](https://raw.githubusercontent.com/lablueprint/website/case-studies/src/app/assets/images/projects/IDM/idm_options.mov)

## Design System

![Design System](https://raw.githubusercontent.com/lablueprint/website/case-studies/src/app/assets/images/projects/IDM/idm_designsystem.png)

# Next Steps

Our mobile app is set to launch in Summer 2024! As of now (June 2024), we are focused on finalizing the development and styling.

If we had more time, the designers would have liked to conduct additional interviews and usability tests to gather more insights from real users. We would have also invested time in creating a more seamless experience across all screens of the app. However, we are incredibly grateful and proud of this project and look forward to delivering the final product to IDONTMIND!

![Next Steps](https://raw.githubusercontent.com/lablueprint/website/case-studies/src/app/assets/images/projects/IDM/idm_nextsteps.png)
