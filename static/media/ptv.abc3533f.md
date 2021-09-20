<div class="title">
Program for Torture Victims
</div>

[Program for Torture Victims (PTV)](https://ptvla.org/) aims to rebuild the lives of survivors of torture and persecution from over 70 countries. PTV does this by connecting survivors to resources and rehabilitation to help restore their health and dignity. 

Blueprint partnered with PTV to build a mobile application that caters towards asylum-seekers and refugees, assisting them in integrating with their host society. We collaborated on Figma to create prototypes and wireframes of a mobile application to assist asylum-seekers, as well as a web console for PTV staff and administrators to use.

Github Repositories: 

<Button className="blue" size="md" href="https://github.com/lablueprint/ptv-mobile-app">
    Mobile App
</Button>

<Button className="white" size="md" href="https://github.com/lablueprint/ptv-web-console">
    Web Console
</Button>

Figma Prototypes: 

<Button className="pink" size="md" href="https://www.figma.com/proto/oHCzpYSIl8qFp8lTkALOuK/PTV?node-id=577%3A4418&scaling=scale-down&viewport=-69%2C-297%2C0.07977807521820068">
    Mobile App
</Button>


<Button className="pink-outline" size="md" href="https://www.figma.com/proto/oHCzpYSIl8qFp8lTkALOuK/PTV?node-id=3637%3A0&scaling=scale-down-width&viewport=707%2C495%2C0.039171002805233">
    Web Console
</Button>

---
<div id="duration-table">

| Duration | Tools & Tech |
| - | - |
| January 2020 - February 2021 | React Native, React, Firebase, Material Design; Figma
 |

</div>

| Team Members | |
| - | - |
| **_Project Leads_** | Vincent Cheung (January 2020 - June 2020), Bill Liu (June 2020 - February 2021) |
| **_Designers_** | Vivian Nguyen, Yinyin Wen |
| **_Developers_** | Derek Chu, Bill Liu, Bianca Villamor, Ryan Tran, Helen Wang, Michael Shi, Solaine Zhao, Anan Wang, Ray Huang, Andrew Zeff |

# Background 
California is the asylum capital of the Americas. Every year, more than 75,000 human rights activists, war survivors, ethnic and religious minorities, gang/cartel victims, LGBT survivors, and other displaced immigrants flee violence in their home countries to resettle in California. These refugees uproot their lives and disrupt community and family ties to seek freedom and safety. Many arrive penniless having spent their life savings on a perilous journey to get to the US. Many are broken mentally and physically but aren’t eligible for health coverage or other benefits. Many refugees struggle with a new language, the challenges of a new country, and the bureaucracy of its systems.

Although there are several applications such as the [WIN app from Our Children LA](https://www.ourchildrenla.org/win-app/) and [Immigrant Guide](https://immigrantguide.org/), we found that they were difficult to navigate design-wise. Therefore, when designing PTV mobile application, we took into account accessibility and contrast levels, especially as our audience would come from a wide spectrum of demographics.

# Goal 
With technology becoming the bridge between humanity and social services, we collaborated with the nonprofit Program for Torture Victims to design and develop a mobile application that would help refugees and asylum-seekers find resources that would help them navigate a country they are still getting used to. We also have a goal to create a backend web console so that resources and features can be updated consistently throughout the years, or long-term.

*“How can we create an accessible, virtual haven for asylum-seekers and refugees to easily find resources in integrating themselves in their host community, as well as communicate with others in similar situations?”*

# Understand

## Communication with PTV

Throughout the duration of the project, our project lead constantly communicated with PTV to see which features they wanted to be included in the mobile application and web console, informing the team of changes and additions.

## Insights
- PTV wanted to see:
    - An Android/iOS mobile app with accompanying web console.
- The mobile app is the main product. The app centralizes three components: 
    1. A resource listings
    2. A communication channel via a forum
    3. An event board

The app will be used primarily by the clients of PTV in order to find resources, create posts on the forum, comment on posts on the forum, and see upcoming events.

The web console will be used exclusively by PTV staff and volunteers and will be available at a web URL. The web console contains all the features of the mobile app, but because it is used by PTV staff and volunteers, it gives greater control over the app. Resources can be created, updated and deleted; forum posts can be approved; the event board can be updated.

# Literature Reviews
We conducted a literature review in lieu of first-hand user interviews with PTV's user base in order to understand the context in which refugees arrive into their host communities. References include scholarly articles on best practices, ethnographic studies, and interviews with refugees.

These findings have been synthesized to develop a persona representing PTV's user base (refugees).

Three key issues in designing technology for refugees:
1. Access to services (health, education, employment)
    - Barriers to healthcare include:
        - Cost & transportation
    - Barriers to education include:
        - Gender
        - Child labor
        - Language
    - Barriers to employment include:
        - Government restrictions (ie. to blue collar jobs)
        - Language
        - Verifying qualifications
        - Limited legal aid
2. Integration into host communities
3. Journeying to safety
    - As refugees move across various countries, they rely on technology to communicate with their families
    - Barriers include insufficient telecom infrastructure

# Ideation
This application’s features compare to the WIN app and Immigrant Guide, however, it would also include a forum where users can talk to each other, and an events calendar where refugees and asylum-seekers can learn more about Program for Torture Victims and their events and programs directly.

## Features

- **Onboarding** — How do you use the application? What are you looking for?
- **Resources** — View resources in multi-level categories
- **Forum** — Answer each other’s questions, have discussions, share knowledge and information
- **Events** — View Program for Torture Victims’ events and associated events
- **Profile** — Higher level of anonymity as it is not a social media application, can choose from avatars

# Wireframes

Our designers created low-fidelity wireframes to lay out our features prior to creating high-fidelity prototypes.

![Mobile application forum flow](/PTV_Wireframes1.png)

Mobile application forum flow + lo-fi

![Mobile application forum flow](/PTV_Wireframes2.png)

Mobile application resources flow + lo-fi

![Mobile application forum flow](/PTV_Wireframes3.png)

Web console dashboard + forum lo-fi

# Usability Testing

We administered usability testing for the web console through Google Forms and recorded using OBS (open broadcasting software). Qualitative analysis using an affinity wall was carried out on Notion using Kanban boards.

![Usability Testing](/PTV_usability_testing.gif)

# Solution

Through our process, we were able to come up with a solution, the Program for Torture Victims mobile application and web console. Below is a design-focused layout of our application.

![Solution Overview](/PTV_solution.jpg)

![Webconsole](/PTV_solution2.jpg)

![Demo](/PTV_solution3.gif)
