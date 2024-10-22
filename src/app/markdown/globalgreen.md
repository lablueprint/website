<div class="title">
Global Green
</div>

<Button className="blue" size="md" href="https://github.com/lablueprint/global-green">
    Github Repository
</Button>

<Button className="white" size="md" href="https://www.figma.com/proto/7VJGQZ6DtZMLHUbfsPbGQF/Designs?node-id=3510-27769&t=HmALp58rywfRDvZt-1">
    Figma Prototype
</Button>

---

<div id="duration-table">

| Duration                    | Tools & Tech          |
| --------------------------- | --------------------- |
| November 2023 - August 2024 | Next.js, MongoDB, AWS |

</div>

| Team Members        |                                                                                                                          |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| **_Project Leads_** | Ryan Yeo, Isaac Wen                                                                                                      |
| **_Designers_**     | Amy Zhang, Chizi Oranu, Jimmy Tang, Juliet Zhang                                                                         |
| **_Developers_**    | Chinenye Eneh, Daniel Chang, Diya Baliga, Victoira Choi, Mario Peng Lee, Megan Tieu, Ryan Kim, James He, Solia Valentine |

# Background

Global Green is a nationwide organization that aims to raise awareness about effective solutions to environmental issues while promoting scalable and sustainable approaches for widespread adoption.

# The Challenge

Currently, Global Green offers a wide range of solutions and resources for sustainable education. However, they struggle with maintaining engagement among the general public and encouraging actionable eco-friendly practices. How can we improve the way the public engages with Global Green’s curriculum and integrates sustainable habits into their lives?

# Solution

To achieve this, we proposed an educational web application with these primary features:

1. **Courses and modules** that educate users on topics like ocean pollution and recycling.
2. **Gamified quizzes** that test comprehension, enhance content retention, and boost learning engagement.
3. **Challenges and rewards** that incentivize users to engage actively with the website and complete the entire curriculum.
4. **An interactive map** that allows users to locate Sustainability Labs and partner resorts across the globe.

# Research

## Competitive Analysis

The overarching goal of our web application was to create an educational platform to encourage sustainable practices, so we began by conducting an analysis of seven competitors with similar features that encourage learning. Specifically, we looked at Drops, Quizlet, Khan Academy, Duolingo, LinkedIn Learning, Brilliant, and Quizizz. Through this competitive analysis, we examined course organization, quiz structure, points and rewards systems, and challenges and missions.

One aspect we particularly looked at was gamification as creating an interactive platform was one of our key goals.

## Surveys

Through a survey sent out via Google Forms, we were able to understand our user demographic on a larger scale. We started with assessing our potential audience’s relationship with sustainable practices and education. We then surveyed the strengths and weaknesses of common educational platforms as well as the learning styles users found the most helpful. Alongside this information, we gained insight on what gamified features held the most value amongst users. Demographics were also collected through this survey.

## User Interviews

As we hoped to target a large range of audiences, we interviewed participants from varying demographics, from high school and college students to current educators. We aimed to gain more insight into users’ consumption habits and tested early low-fidelity design interactions.

## Key Takeaways / Iterated Final Solutions

- Explicit progress-tracking is a feature that has motivated users to regularly engage with learning platforms in the past.
- People appreciate creative aspects of gamification, but want the core interactions to be simple and intuitive.
- While taking quizzes, users prefer to find out what they get wrong immediately rather than at the end. They also tend to dislike long quizzes that require significant time to complete.

# Ideation

**Key Design Decisions**

<table float="center">
    <tbody>
        <tr>
            <td>
                <img src="https://raw.githubusercontent.com/lablueprint/website/master/src/app/assets/images/projects/GlobalGreen/gg_keydesigndecisions0.png" alt="Key Design Decisions - start of course" width="1" height="200">
            </td>
            <td>
                <img src="https://raw.githubusercontent.com/lablueprint/website/master/src/app/assets/images/projects/GlobalGreen/gg_keydesigndecisions1.png" alt="Key Design Decisions - end of course" width="1" height="200">
            </td>
        </tr>
    </tbody>
</table>

**Roadmap Navigation**

![Roadmap Navigation](https://raw.githubusercontent.com/lablueprint/website/master/src/app/assets/images/projects/GlobalGreen/gg_navigation.png)

**Garden**

![Roadmap Navigation](https://raw.githubusercontent.com/lablueprint/website/master/src/app/assets/images/projects/GlobalGreen/gg_garden.png)

**Lesson Content + Quiz**

<table float="center">
    <tbody>
        <tr>
            <td width="50%" >
                <img src="https://raw.githubusercontent.com/lablueprint/website/master/src/app/assets/images/projects/GlobalGreen/gg_lesson.png" alt="Lesson Content">
            </td>
            <td width="50%" >
                <img src="https://raw.githubusercontent.com/lablueprint/website/master/src/app/assets/images/projects/GlobalGreen/gg_quiz.png" alt="Quiz Content">
            </td>
        </tr>
    </tbody>
</table>

**Branding**

<table float="center">
    <tbody>
        <tr>
            <td width="50%" >
                <img src="https://raw.githubusercontent.com/lablueprint/website/master/src/app/assets/images/projects/GlobalGreen/gg_branding0.png" alt="Branding Design 1">
            </td>
            <td width="50%" >
                <img src="https://raw.githubusercontent.com/lablueprint/website/master/src/app/assets/images/projects/GlobalGreen/gg_branding1.png" alt="Branding Design 2">
            </td>
        </tr>
        <tr>
            <td width="50%" >
                <img src="https://raw.githubusercontent.com/lablueprint/website/master/src/app/assets/images/projects/GlobalGreen/gg_branding2.png" alt="Branding Design 3">
            </td>
            <td width="50%" >
                <img src="https://raw.githubusercontent.com/lablueprint/website/master/src/app/assets/images/projects/GlobalGreen/gg_branding3.png" alt="Branding Design 4">
            </td>
        </tr>
    </tbody>
</table>

## Usability Testing

To further refine the designs we conducted usability tests, using the feedback and insights gained from the interviews to find potential areas of improvement within our designs. While participants generally liked the designs of the platform, there were many areas where visual clarity and usability could be improved. A few examples are shown below.

**Navigation**

![Navigation](https://raw.githubusercontent.com/lablueprint/website/master/src/app/assets/images/projects/GlobalGreen/gg_navigation.png)

Users found it confusing when attempting to navigate between the course roadmap and lessons. To fix this, we removed the table of contents and added a back arrow, putting further emphasis and importance on the need to navigate back to the roadmap to move between lessons.

**Challenges**

![Challenges](https://raw.githubusercontent.com/lablueprint/website/master/src/app/assets/images/projects/GlobalGreen/gg_challenges.png)

Users also found it hard to recognize certain areas of the platform due to visual clarity. One example of this is on the challenges page, where participants expressed difficulty telling apart an uncompleted challenge versus a completed one. To fix this, additional color was added to the finished cards, along with a change in opacity within uncompleted ones.

# Final Designs

**Login Flow**

Users can create a new account or sign in to an existing account.

![Login Flow Gif](https://raw.githubusercontent.com/lablueprint/website/master/src/app/assets/images/projects/GlobalGreen/gg_loginflow.gif)

**Garden Flow**

When users finish a course, they earn points. They can use these points to buy accessories and backgrounds in the Store to decorate their Garden.

![Garden Flow Gif](https://raw.githubusercontent.com/lablueprint/website/master/src/app/assets/images/projects/GlobalGreen/gg_gardenflow.gif)

**Quiz Flow**

Quizzes test users’ understanding of the course content in a fun, engaging way. A variety of question types appear, including multiple choice, true/false, matching, and select all.

![Quiz Flow Gif](https://raw.githubusercontent.com/lablueprint/website/master/src/app/assets/images/projects/GlobalGreen/gg_quizflow.gif)

**Final Quiz Flow**

At the end of every course, users take a final quiz. Here we see an example quiz and congratulations screen.

![Final Quiz Flow](https://raw.githubusercontent.com/lablueprint/website/master/src/app/assets/images/projects/GlobalGreen/gg_finalquizflow.gif)

**Profile Flow**

Users can view certificates they’ve earned and their current course progress, as well as logistical tasks such as changing passwords and deleting accounts.

![Profile Flow](https://raw.githubusercontent.com/lablueprint/website/master/src/app/assets/images/projects/GlobalGreen/gg_profileflow.gif)

**Challenges**

Upon completing a task mentioned on this page, the user earns a challenges badge, as marked by the colorful cards here.

![Challenges](https://raw.githubusercontent.com/lablueprint/website/master/src/app/assets/images/projects/GlobalGreen/gg_challenges.gif)

**Lesson Flow**

Courses utilize a variety of media formats and questions to engage the learner.

![Lesson Flow](https://raw.githubusercontent.com/lablueprint/website/master/src/app/assets/images/projects/GlobalGreen/gg_lessonflow.gif)

# Next Steps

We are currently cleaning up development and are excited to announce that after months of hard work, the website is set to launch in Fall 2024! Given more time, the designers would have liked to integrate more custom animations and user interactions, while the developers would have liked to improve responsiveness on different screen sizes.
