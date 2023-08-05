<div class="title">
Friends of the Children
</div>

<Button className="blue" size="md" href="https://github.com/lablueprint/friends-of-the-children/">
    Github Repository
</Button>


<Button className="white" size="md" href="https://www.figma.com/file/LOaE5OE8xoEOhHYaHS1dJx/FOTC-Design?type=design&node-id=2306%3A4761&mode=design&t=HXtHjm01HXclbVng-1">
    Figma Prototype
</Button>

---
<div id="duration-table">

| Duration | Tools & Tech |
| - | - |
| November 2022 - September 2023 (11 months) | Figma, React, Firebase, nodeJS, AWS, EX, git, VS Code |

</div>

| Team Members | |
| - | - |
| **_Project Leads_** | Jerry Xu, Sarah Chang |
| **_Designers_** | Angela Ling, Deya Raghavan, Darlene Kabigting |
| **_Developers_** | Daniel Kao, Erin Kwon, Galen Heuer, Helen Wang, Avnish Sengupta, Joyce Chen, Ayub Ali, Grace Ma, Ken Fukuyama |

# Background 

Friends of the Children-Los Angeles is a nonprofit organization that pairs underserved youth with a paid, professional mentor called a Friend.
They support their youth through a long-term relationship from as early as age 4 through high school graduation - 12+ years, no matter what.

# The Problem & Challenge

***How might you design a user-friendly and streamlined communication system for Friends of the Children to improve collaboration and information sharing between mentors, administrators, and caregivers, while ensuring ease of navigation and access to relevant resources?***

# The Solution

We propose creating **a web application that serves as an all encompassing, centralized resource bank for caregivers which includes modules with links and resources, calendar with upcoming events, and text/email system for reminders and announcements**. Friends of the Children administration will have an interface to add and delete modules, add and delete calendar events, and send mass email announcements. This website will further Friends of the Children-Los Angeles’s goal in aiding underserved youth such as those in foster care, supporting caregivers in their two-generation approach, and raising awareness for the mental health of youth! As such, we keep the following considerations in mind for the extent of this project:

- **Accessibility and ease-of-use.** The website must be easily navigable and accessible for mentors and caregivers on the external side. On the internal side, the app should allow for efficient management of mentor/mentee pages and easy admin management of modules (even big size files).
- **Prioritizing usability and upkeep by FOTC after handoff.** FOTC has one person as an IT Manager, so designing a flexible and thoroughly debugged system is critical to ensuring the apps enduring usefulness.

To achieve this, we propose a web application with these primary features:

1. A **module display** that enables admin to add or edit modules, mentors and caregivers to view and access resources in each module. 
2. A **calendar system** for admin to add and view events, and mentors and caregivers to view events.
3. **Message Wall / Email + Text system** allows Admin to make announcements, post them on a message wall, and make sure mentors and caregivers are notified via email or text.

# Process
![Process](https://raw.githubusercontent.com/lablueprint/website/case-studies/src/app/assets/images/projects/FOTC/fotc-process.png)

# Research

## Competitive Analysis

Since the main feature of our app is the module system, we conducted an analysis of five competitors which offer services similar to that of FOTC’s desired module system: Blackboard, Google Classroom, Canvas, Notion, and Google Drive. We were then able to identify commonalities between them which suggested features we should incorporate in our own product, as well as things that stood out and that we’d like to avoid doing.

✏️ **Teacher / Admin Part**

![Competitive Analysis - Teacher/Admin Part](https://raw.githubusercontent.com/lablueprint/website/case-studies/src/app/assets/images/projects/FOTC/fotc-comp-analysis-teacher-admin.png)


👩‍🎓 **Student Part**

![Competitive Analysis - Student Part](https://raw.githubusercontent.com/lablueprint/website/case-studies/src/app/assets/images/projects/FOTC/fotc-comp-analysis-student.png)

### *Key Takeaways from Competitive Analysis*

![Competitive Analysis - Key Takeaways](https://raw.githubusercontent.com/lablueprint/website/case-studies/src/app/assets/images/projects/FOTC/fotc-comp-analysis-key-takeaways.png)

## User Interviews

We conducted interviews with five FOTC members including admin (Program Director, Family Engagement Assistant), mentors, and caregivers.

- *Asked about what kind of inconveniences occur when teaching and what organization system would be preferred*
- *Showed a few lo-fi screens for feedback / evaluate tech familiarity / understand what resources are needed to operate*

![User Interviews](https://raw.githubusercontent.com/lablueprint/website/case-studies/src/app/assets/images/projects/FOTC/fotc-user-interviews.png)

![User Interviews - Zoom Call 1](https://raw.githubusercontent.com/lablueprint/website/case-studies/src/app/assets/images/projects/FOTC/fotc-user-interviews-zoom-1.png)

![User Interviews - Zoom Call 2](https://raw.githubusercontent.com/lablueprint/website/case-studies/src/app/assets/images/projects/FOTC/fotc-user-interviews-zoom-2.png)

![User Interviews - Zoom Call 3](https://raw.githubusercontent.com/lablueprint/website/case-studies/src/app/assets/images/projects/FOTC/fotc-user-interviews-zoom-3.png)

## Insights

Lastly, we synthesized our findings from both the competitive audit and the preliminary user interviews to identify valuable insights.

- Event details get spread through word of mouth / posted on the website
    - People often forget about event dates and details as they rely on emails
- No way to prioritize upcoming imminent messages / announcements
    - Hard to access upcoming FOTC events
- No mass uploading of resources from admin
    - Constantly producing flyers and sending them individually is a hassle
- Disorganization in files makes resources hard to find
- Mass communication is complicated through email
    - No easy direct link of communication between admin and mentors

## Key Takeaways / Iterated Final Solutions
![User Interviews - Key Takeaways](https://raw.githubusercontent.com/lablueprint/website/case-studies/src/app/assets/images/projects/FOTC/fotc-user-interviews-key-takeaways.png)

# Ideation

## User Flow

![Ideation - Admin User Flow](https://raw.githubusercontent.com/lablueprint/website/case-studies/src/app/assets/images/projects/FOTC/fotc-ideation-user-flow-admin.png)

![Ideation - Mentor User Flow](https://raw.githubusercontent.com/lablueprint/website/case-studies/src/app/assets/images/projects/FOTC/fotc-ideation-user-flow-mentor.png)

**Admin**

- Can add or remove modules / folders / files
- Can access all pages including calendar, resources, message, profile
- Can access all events uploaded by any admin user

**Mentor**

- Can view new modules / folders / files
- Can access all pages including calendar, resources, messages but cannot edit or add new
- Can remove or edit profile

**Caregiver**

- Can view new modules / folders / files
- Can access all pages including calendar, resources, messages but cannot edit or add new
- Can remove or edit profile

## Low-Fidelity Mockups

<table float="center">
    <tbody>
        <tr>
            <td width="50%" colspan=2>
                <img src="https://raw.githubusercontent.com/lablueprint/website/case-studies/src/app/assets/images/projects/FOTC/fotc-lofi-signup.png" alt="Low-Fidelity Mockups - Sign Up">
            </td>
            <td width="50%" colspan=2>
                <img src="https://raw.githubusercontent.com/lablueprint/website/case-studies/src/app/assets/images/projects/FOTC/fotc-lofi-calendar.png" alt="Low-Fidelity Mockups - Calendar">
            </td>
        </tr>
        <tr>
            <td width="50%" colspan=2>
                <img src="https://raw.githubusercontent.com/lablueprint/website/case-studies/src/app/assets/images/projects/FOTC/fotc-lofi-announcements.png" alt="Low-Fidelity Mockups - Announcements">
            </td>
            <td width="50%" colspan=2>
                <img src="https://raw.githubusercontent.com/lablueprint/website/case-studies/src/app/assets/images/projects/FOTC/fotc-lofi-images.png" alt="Low-Fidelity Mockups - Images">
            </td>
        </tr>
        <tr>
            <td width="25%" ></td>
            <td width="50%" colspan=2>
                <img src="https://raw.githubusercontent.com/lablueprint/website/case-studies/src/app/assets/images/projects/FOTC/fotc-lofi-resources.png" alt="Low-Fidelity Mockups - Resources">
            </td>
            <td width="25%" ></td>
        </tr>
    </tbody>
</table>

## Mid-Fidelity Prototypes

<table float="center">
    <tbody>
        <tr>
            <td width="50%" colspan=2>
                <img src="https://raw.githubusercontent.com/lablueprint/website/case-studies/src/app/assets/images/projects/FOTC/fotc-midfi-my-mentees.png" alt="Mid-Fidelity Prototypes - Mentee Summary">
            </td>
            <td width="50%" colspan=2>
                <img src="https://raw.githubusercontent.com/lablueprint/website/case-studies/src/app/assets/images/projects/FOTC/fotc-midfi-announcements.png" alt="Mid-Fidelity Prototypes - Announcements">
            </td>
        </tr>
        <tr>
            <td width="50%" colspan=2>
                <img src="https://raw.githubusercontent.com/lablueprint/website/case-studies/src/app/assets/images/projects/FOTC/fotc-midfi-profile.png" alt="Mid-Fidelity Prototypes - Mentor Profile">
            </td>
            <td width="50%" colspan=2>
                <img src="https://raw.githubusercontent.com/lablueprint/website/case-studies/src/app/assets/images/projects/FOTC/fotc-midfi-mentee-profile.png" alt="Mid-Fidelity Prototypes - Mentee Profile">
            </td>
        </tr>
        <tr>
            <td width="50%" colspan=2>
                <img src="https://raw.githubusercontent.com/lablueprint/website/case-studies/src/app/assets/images/projects/FOTC/fotc-midfi-resources.png" alt="Mid-Fidelity Prototypes - Resources">
            </td>
            <td width="50%" colspan=2>
                <img src="https://raw.githubusercontent.com/lablueprint/website/case-studies/src/app/assets/images/projects/FOTC/fotc-midfi-requests.png" alt="Mid-Fidelity Prototypes - Requests">
            </td>
        </tr>
        <tr>
            <td width="25%" ></td>
            <td width="50%" colspan=2>
                <img src="https://raw.githubusercontent.com/lablueprint/website/case-studies/src/app/assets/images/projects/FOTC/fotc-midfi-calendar.png" alt="Mid-Fidelity Prototypes - Calendar">
            </td>
            <td width="25%" ></td>
        </tr>
    </tbody>
</table>

## Usability Testing

To gather feedback and gain insights on the initial app design, we performed usability tests involving five users affiliated with Friends of the Children. In general, the participants found the new app user-friendly. Although there were instances of confusion regarding specific features, the users expressed that the app was relatively simple to understand and navigate.

Users also pointed out significant issues that needed to be implemented:

- Notification System
- Mentors should also be able to post resources on the main page
- Safety & privacy issue -> Media release check
- Not intuitive features
- Name change from “Mentors and Mentees” -> “Friends and Youth”

We iterated our hifi designs and made design decisions based on the feedback.

![Usability Testing - Iterations / Design Decisions 1](https://raw.githubusercontent.com/lablueprint/website/case-studies/src/app/assets/images/projects/FOTC/fotc-usabilitytesting-designdecisions-1.png)

![Usability Testing - Iterations / Design Decisions 2](https://raw.githubusercontent.com/lablueprint/website/case-studies/src/app/assets/images/projects/FOTC/fotc-usabilitytesting-designdecisions-2.png)

![Usability Testing - Iterations / Design Decisions 3](https://raw.githubusercontent.com/lablueprint/website/case-studies/src/app/assets/images/projects/FOTC/fotc-usabilitytesting-designdecisions-3.png)

![Usability Testing - Iterations / Design Decisions 4](https://raw.githubusercontent.com/lablueprint/website/case-studies/src/app/assets/images/projects/FOTC/fotc-usabilitytesting-designdecisions-4.png)

![Usability Testing - Iterations / Design Decisions 5](https://raw.githubusercontent.com/lablueprint/website/case-studies/src/app/assets/images/projects/FOTC/fotc-usabilitytesting-designdecisions-5.png)

# Final Designs

### Sign Up

Sign up and log in as an admin, mentor, or caregiver based on the region.

![Final Designs - Sign Up](https://raw.githubusercontent.com/lablueprint/website/case-studies/src/app/assets/images/projects/FOTC/fotc-finaldesigns-signup.gif)

### Resources / Modules 

Browse dozens of resources. Click, upload, and customize.

![Final Designs - Resources/Modules](https://raw.githubusercontent.com/lablueprint/website/case-studies/src/app/assets/images/projects/FOTC/fotc-finaldesigns-resources.gif)

### Calendar

Manage event details in one place and export to your own calendar to never forget!

![Final Designs - Calendar](https://raw.githubusercontent.com/lablueprint/website/case-studies/src/app/assets/images/projects/FOTC/fotc-finaldesigns-calendar.gif)

### New User Sign-Up Requests

Approve new users and delete unnecessary accounts to ensure only FOTC members sign up.

![Final Designs - New User Sign-Up Requests](https://raw.githubusercontent.com/lablueprint/website/case-studies/src/app/assets/images/projects/FOTC/fotc-finaldesigns-newusersignuprequests.gif)

### Notices / Message Wall

Have all your messages and announcements compiled in one place instead of manually checking all the emails.

![Final Designs - Notices/Message Wall](https://raw.githubusercontent.com/lablueprint/website/case-studies/src/app/assets/images/projects/FOTC/fotc-finaldesigns-notices.gif)


### Design System

<table float="center">
    <tbody>
        <tr>
            <td width="79%">
                <img src="https://raw.githubusercontent.com/lablueprint/website/case-studies/src/app/assets/images/projects/FOTC/fotc-designsystem-1.png" alt="Design System - Colors and Typography">
            </td>
            <td width="21%" style="vertical-align: top;" >
                <img src="https://raw.githubusercontent.com/lablueprint/website/case-studies/src/app/assets/images/projects/FOTC/fotc-designsystem-2.png" alt="Design System - FOTC Logo">
            </td>
        </tr>
    </tbody>
</table>


# Next Steps

As of July 2023, we are actively preparing for the launch of our web app, scheduled for Summer 2023. Our development team is currently focused on refining the visual presentation, deploying, and finalizing the handoff to FOTC. Given additional time, our designers would have conducted extra interviews and usability tests to gather further feedback from actual users. Additionally, we would have dedicated time to enhance the overall cohesiveness of the website's interface across all screens.