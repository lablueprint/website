<div class="title">
TransCanWork
</div>

<Button className="blue" size="md" href="https://github.com/lablueprint/trans-can-work">
    Github Repository
</Button>


<Button className="white" size="md" href="https://www.figma.com/file/HO4VQYdryLderi4NSzh4qz/TCW-Designs?type=design&node-id=53097%3A27693&mode=design&t=UDnmn1XvZHiQ1g7l-1">
    Figma Prototype
</Button>

---
<div id="duration-table">

| Duration | Tools & Tech |
| - | - |
| November 2022 - September 2023 (11 months) | Figma, React, Firebase |

</div>

| Team Members | |
| - | - |
| **_Project Leads_** | Nasser Elhajjoui, Solia Valentine (November 2022 - June 2023); Aaron Shi, Alan Nguyen, Jeff Lu (June 2023 - September 2023) |
| **_Designers_** | Jeff Lu, Jiyeon Han, Megan Tieu |
| **_Developers_** | Aaron Shi, Alan Nguyen, Angela Hao, Dan Lee, Diya Baliga, Jiamin Xu, Kaylee Tran, Kevin Antony, Ryan Yeo |

# Background

TransCanWork is a nonprofit organization providing resources and support for TGI (trans, gender diverse, & intersex) job seekers, as well as the training and certification of employers that hire them. Since their founding in 2016, they provided over 500 employers around the country with training to create comfortable work environments for TGI workers, have helped connect over 2,500 job seekers to positions, and now support 200-800 job seekers at any given moment.

# The Challenge

***How might we represent the job-hunting process in a way that is fun and interactive way for jobseekers, while also being standardized and manageable for their navigators?***

# Solution

Our solution is a web app that allows job seekers to keep track of milestones and next steps in an interactive and visually-appealing map and allows TCW to easily monitor the progress of their clients. TCW does not currently have a system for monitoring jobseekers and there is no external-facing app for jobseekers to monitor their progress as everything is stored on an internal spreadsheet currently! As such, we keep the following considerations in mind for the extent of this project:

- **Accessibility and ease-of-use.** The website must be easily navigable and accessible for jobseekers on the external side. On the internal side, the app should allow for efficient management of jobseekers by navigators and easy admin management of the system.
- **Prioritizing usability and upkeep by TCW.** TCW does not have any developers or designers on staff, so designing a flexible and thoroughly debugged system is critical to ensuring the apps enduring usefulness.

To achieve this, we propose a web application with these primary features:

1. A **milestone map** that allows users to view their completed and pending jobseeker milestones.
2. A **profile system** with logins for jobseekers, navigators, and administrators.
3. **Admin management capabilities** to monitor and maintain the app.
    
# Process
![Process](https://raw.githubusercontent.com/lablueprint/website/case-studies/src/app/assets/images/projects/TCW/tcw-process.png)

# Research

## Competitive Analysis

We conducted an analysis of three competitors which offer services similar to that of TCW’s: JibberJobber, Youth@Work, and Job Search Journey. We were then able to identify commonalities between the sites which suggested features we should incorporate in our own product, as well as things that stood out and that we’d like to avoid doing.

![Competitive Analysis](https://raw.githubusercontent.com/lablueprint/website/case-studies/src/app/assets/images/projects/TCW/tcw-competitive-analysis.png)

## User Interviews

We conducted interviews with two Navigators from TransCanWork who work closely with the Jobseeker clients.

*“The current process works, but it’s pretty limited… it’s very cluttered and spread out because there’s an overload of info. Makes it hard to navigate to specific info in the middle of a session.”
— TCW Navigator*

<table float="center">
    <tbody>
        <tr>
            <td width="50%">
                <img src="https://raw.githubusercontent.com/lablueprint/website/case-studies/src/app/assets/images/projects/TCW/tcw-user-interviews-1.png" alt="User Interview">
            </td>
            <td width="50%" style="vertical-align: top;" >
                <img src="https://raw.githubusercontent.com/lablueprint/website/case-studies/src/app/assets/images/projects/TCW/tcw-user-interviews-2.png" alt="User Interview">
            </td>
        </tr>
    </tbody>
</table>

## Affinity Mapping

Lastly, we synthesized our findings from both the competitive audit and the preliminary user interviews to identify common themes and trends. The result was this web of ideas:

![Affinity Mapping](https://raw.githubusercontent.com/lablueprint/website/case-studies/src/app/assets/images/projects/TCW/tcw-affinity-mapping.png)

## Key Takeaways

The current process at TransCanWork is highly manual and requires much individual work and organization from the Navigators to keep track of all jobseekers.

There is a Google sheet that Navigators use to keep track of each of their assigned Job seekers. After the interviews, we realized that this spreadsheet is the blueprint of the TransCanWork process, but also contributes to the slow, manual process since each Job seeker has their own spreadsheet.

In creating the designs, we wanted to allow for a more convenient, faster, and all-in-one workflow, while maintaining the original spreadsheet design.

# Ideation

## User Flow

![User Flow](https://raw.githubusercontent.com/lablueprint/website/case-studies/src/app/assets/images/projects/TCW/tcw-user-flow.png)

**Admin**

- Can add or remove jobseekers and navigators
- Can access all milestone maps for all jobseekers
- Can access all demographic data and information for all jobseekers

**Navigator**

- Can add or remove jobseekers
- Can access all milestone maps for all jobseekers
- Can confirm milestone completion for any jobseeker

**Jobseeker**

- Can access their own milestone map
- Can submit milestones as being completed
    - Status changes to pending awaiting approval from assigned navigator
- Can see additional details or resources for milestones

## Low-Fidelity Mockups

After doing some preliminary research, we had a north star from which to start designing mockups for our base features: client management, profile, and employment roadmap experiences!

These rough sketches aimed to convey the content of each screen, rather than its final design.

<table float="center">
    <tbody>
        <tr>
            <td width="50%" >
                <img src="https://raw.githubusercontent.com/lablueprint/website/case-studies/src/app/assets/images/projects/TCW/tcw-lofi-clientinfo.png" alt="Low-Fidelity Mockups - Client Info Page">
            </td>
            <td width="50%" >
                <img src="https://raw.githubusercontent.com/lablueprint/website/case-studies/src/app/assets/images/projects/TCW/tcw-lofi-adminprofilepage.png" alt="Low-Fidelity Mockups - Admin Profile Page">
            </td>
        </tr>
        <tr>
            <td width="50%" >
                <img src="https://raw.githubusercontent.com/lablueprint/website/case-studies/src/app/assets/images/projects/TCW/tcw-lofi-profilepage.png" alt="Low-Fidelity Mockups - Jobseeker Profile Page">
            </td>
            <td width="50%" >
                <img src="https://raw.githubusercontent.com/lablueprint/website/case-studies/src/app/assets/images/projects/TCW/tcw-lofi-employmentroadmap.png" alt="Low-Fidelity Mockups - Employment Roadmap">
            </td>
        </tr>
    </tbody>
</table>

## Mid-Fidelity Prototypes

Next, we started to formulate our design system to decide on the colors, typography, and other design elements that we wanted our product to ultimately look like. Here are some of the explorations that came along the way!

<table float="center">
    <tbody>
        <tr>
            <td width="50%" >
                <img src="https://raw.githubusercontent.com/lablueprint/website/case-studies/src/app/assets/images/projects/TCW/tcw-midfi-signup.png" alt="Mid-Fidelity Prototypes - Sign Up Page">
            </td>
            <td width="50%" >
                <img src="https://raw.githubusercontent.com/lablueprint/website/case-studies/src/app/assets/images/projects/TCW/tcw-midfi-navdashboard.png" alt="Mid-Fidelity Prototypes - Navigator Dashboard">
            </td>
        </tr>
        <tr>
            <td width="50%" >
                <img src="https://raw.githubusercontent.com/lablueprint/website/case-studies/src/app/assets/images/projects/TCW/tcw-midfi-navprofile.png" alt="Mid-Fidelity Prototypes - Navigator Profile Page">
            </td>
            <td width="50%" >
                <img src="https://raw.githubusercontent.com/lablueprint/website/case-studies/src/app/assets/images/projects/TCW/tcw-midfi-employmentroadmap.png" alt="Mid-Fidelity Prototypes - Employment Roadmap">
            </td>
        </tr>
    </tbody>
</table>

## Usability Testing

We conducted usability tests with two Navigators and one Jobseeker from TransCanWork to gain insight and feedback on the preliminary design of the app.

<table float="center">
    <tbody>
        <tr>
            <td width="50%">
                <img src="https://raw.githubusercontent.com/lablueprint/website/case-studies/src/app/assets/images/projects/TCW/tcw-usabilitytesting-zoom-1.png" alt="Usability Testing Call">
            </td>
            <td width="50%" style="vertical-align: top;" >
                <img src="https://raw.githubusercontent.com/lablueprint/website/case-studies/src/app/assets/images/projects/TCW/tcw-usabilitytesting-zoom-2.png" alt="Usability Testing Call">
            </td>
        </tr>
    </tbody>
</table>

Interviewees cited that the new app was intuitive, easy-to-use, and engaging. Whilst there were some points of confusion for certain features, the users explained that they felt the app was easy to learn.

Users also pointed out specific design aspects to adjust, such as the sizing and placement of certain buttons.

In response to the feedback, we properly adjusted our prototype while maintaining the core of the original high-fidelity design.

# Final Designs

## Login & Sign-Up

The landing page allows users to sign up for an account, or log in if they have an existing account. We included welcoming imagery and graphics to provide a fun and inviting experience!

<table float="center">
    <tbody>
        <tr>
            <td width="50%">
                <img src="https://raw.githubusercontent.com/lablueprint/website/case-studies/src/app/assets/images/projects/TCW/tcw-finaldesigns-login.png" alt="Final Design - Login Page">
            </td>
            <td width="50%" style="vertical-align: top;" >
                <img src="https://raw.githubusercontent.com/lablueprint/website/case-studies/src/app/assets/images/projects/TCW/tcw-finaldesigns-signup.png" alt="Final Design - Sig Up Page">
            </td>
        </tr>
    </tbody>
</table>

## Admin/Navigator Dashboard

The dashboard seamlessly uses a shared interface for admins and navigators. For admins, it acts as a place to manage navigators, jobseekers, as well as internal information like demographics. For navigators, it serves to be a hub from which they can manage their specific assigned jobseekers, as well as confirm their progress.

<table float="center">
    <tbody>
        <tr>
            <td width="50%" >
                <img src="https://raw.githubusercontent.com/lablueprint/website/case-studies/src/app/assets/images/projects/TCW/tcw-finaldesigns-admindashboard-1.png" alt="Final Design - Admin Dashboard">
            </td>
            <td width="50%" >
                <img src="https://raw.githubusercontent.com/lablueprint/website/case-studies/src/app/assets/images/projects/TCW/tcw-finaldesigns-admindashboard-2.png" alt="Final Design - Admin Dashboard">
            </td>
        </tr>
        <tr>
            <td width="50%" >
                <img src="https://raw.githubusercontent.com/lablueprint/website/case-studies/src/app/assets/images/projects/TCW/tcw-finaldesigns-admindashboard-3.png" alt="Final Design - Admin Dashboard">
            </td>
            <td width="50%" >
                <img src="https://raw.githubusercontent.com/lablueprint/website/case-studies/src/app/assets/images/projects/TCW/tcw-finaldesigns-admindashboard-4.png" alt="Final Design - Admin Dashboard">
            </td>
        </tr>
    </tbody>
</table>

## Admin/Navigator Profile Page

The profile tab of the profile system allows users to see how their public profile looks to other users, while the account tab of the profile system allows users to edit their basic info as necessary!

<table float="center">
    <tbody>
        <tr>
            <td width="50%">
                <img src="https://raw.githubusercontent.com/lablueprint/website/case-studies/src/app/assets/images/projects/TCW/tcw-finaldesigns-adminprofile-1.png" alt="Final Design - Admin Profile Page">
            </td>
            <td width="50%" style="vertical-align: top;" >
                <img src="https://raw.githubusercontent.com/lablueprint/website/case-studies/src/app/assets/images/projects/TCW/tcw-finaldesigns-adminprofile-2.png" alt="Final Design - Admin Edit Profile Page">
            </td>
        </tr>
    </tbody>
</table>

## Jobseeker Employment Roadmap

To help guide jobseekers along their journey, the dotted line to the red X (in keeping with the pirate theme) provides a sense of direction. Islands will also start black-and-white, then fill in with color once their corresponding milestone is completed, so that progress feels more rewarding and interactive.

![Final Design - Jobseeker Employment Roadmap](https://raw.githubusercontent.com/lablueprint/website/case-studies/src/app/assets/images/projects/TCW/tcw-finaldesigns-roadmap.png)

## Jobseeker Roadmap Details

Clicking or tapping on an island reveals a popup with details about the milestone it represents. They can include forms to fill out, checklists to mull over, resources to check out, and more! These popups allow jobseekers to easily see and access tasks without having to wait for their next navigator check-in. As requested by TCW, bits of pirate lingo are also sprinkled throughout!

![Final Design - Jobseeker Roadmap Details](https://raw.githubusercontent.com/lablueprint/website/case-studies/src/app/assets/images/projects/TCW/tcw-finaldesigns-roadmapdetails.png)

## Jobseeker Profile Page

For the first time, TCW jobseekers can create profiles to show off their personality. Full profile customization, including avatar and banner image selection, provides jobseekers control over their job-hunting voyage. The profile page also acts as a way to easily reach your assigned navigator, if the need arises.

![Final Design - Jobseeker Profile Page](https://raw.githubusercontent.com/lablueprint/website/case-studies/src/app/assets/images/projects/TCW/tcw-finaldesigns-jobseekerprofile.png)

## Design System

Our internal app, to be used by admins and jobseekers, had a more sleek and simple look. On the external side of things, we chose display fonts and custom color palettes for the most visually appealing and pirate-like experience possible!


![DEsign System](https://raw.githubusercontent.com/lablueprint/website/case-studies/src/app/assets/images/projects/TCW/tcw-design-system.png)

# Next Steps

Our website is currently slated to launch in Summer 2023! At the time of writing this (July 2023), we’re currently working away at getting styled on the development side of things.

If we had more time, the designers would have liked to conduct a few more interviews and usability tests to get more insight from real users. We would have also taken time to build a more seamless experience across all screens of the website.

<table float="center">
    <tbody>
        <tr>
            <td width="50%">
                <img src="https://raw.githubusercontent.com/lablueprint/website/case-studies/src/app/assets/images/projects/TCW/tcw-team-1.jpeg" alt="Blueprint TransCanWork Project Team">
            </td>
            <td width="50%" style="vertical-align: top;" >
                <img src="https://raw.githubusercontent.com/lablueprint/website/case-studies/src/app/assets/images/projects/TCW/tcw-team-2.png" alt="Blueprint TransCanWork Project Team">
            </td>
        </tr>
    </tbody>
</table>