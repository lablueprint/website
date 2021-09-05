<div class="title">
Harmony Project
</div>

[Harmony Project](https://www.harmony-project.org/) is an established non-profit whose focus is to provide free and high-quality music education for children from underserved communities.

Blueprint partnered with Harmony Project to create a mobile app that facilitates communication and music learning between students and teachers outside of the classroom.

<Button className="blue" size="md" href="https://github.com/lablueprint/harmony-project">
    Github Repository
</Button>


<Button className="white" size="md" href="https://www.figma.com/file/FbP7J8GiLNWmhjr1K8xxuM/Harmony-Project?node-id=0%3A1">
    Figma Prototype
</Button>

---
<div id="duration-table">

| Duration | Tools & Tech |
| - | - |
| January 2020 - June 2020; November 2020 - June 2021 | Figma; React |

</div>

| Team Members | |
| - | - |
| **_Project Leads_** | Leo Liu (Jan 2020 - Jun 2020); Karen Tan (Nov 2020 - Jun 2021) |
| **_Designers_** | Rachel Lu, Vanessa Ta, Vivian Wong |
| **_Developers_** | Bianca Villamor, Cody Do, Edward Chu, Jiamin Xu, Karen Tan, Kendrake Tsui, Linus Lam, Michael Shi, Raymond Phan |

# Background 
The collaboration with Harmony Project began in January 2020. Harmony Project recognized that its students may have other commitments they have to abide to and may find it difficult to find time or transportation to attend lessons, resulting in an overall lack of engagement. Thus, a mobile app was proposed to increase engagement by streamlining communication and simplifying feedback-based learning.  

# Research 

## Classroom Visitations

We wanted to design a solution that would improve the online learning experience for children, so our designers and developers visited Zoom classrooms to learn how teachers are currently organizing their classes and lessons. We found that because of COVID-19, Harmony Project transitioned to BAND, an online classroom similar to popular social media apps like Facebook. However, there were many limiting features within the application that made it difficult to navigate, especially for young children. Thus, we wanted our solution to:

1. Emphathize with children K-12 to create an accessible user experience through design
2. Capture classroom workflows and organization in order to mimic real classroom environments
3. Create a culture of encouragement and growth

## User Interviews 

After examining the data collected from classroom visitations, we brainstormed initial solutions. However, we found that even more questions arose:

- What were typical interactions between teachers and students? Between students and students? 
- What was a typical assignment?
- How were parents involved in the program?
- How progress and feedback is tracked?

To answer our questions, we conducted hour-long user interviews with four teachers. In our analysis, we arranged the data into a spreadsheet and identified positive, negative, and neutral experiences in red, green, and gray respectively.

![Interview Research](/HP_Interview_Research.png)

After conducting our user research, we created three user personas that summarized our target audience. We also constructed empathy maps for each of the three personas to chart their perspectives through a typical day.

## User Personas

### Teacher Profile 

![Teacher User Profile](/HP_TeacherProfile.png)

### Teacher Empathy Map 

![Teacher Empathy Map](/HP_TeacherEmpathyMap.png)

### Teenager Profile 

![Teenager User Profile](/HP_TeenProfile.png)

### Teenager Empathy Map

![Teenager Empathy Map](/HP_TeenEmpathyMap.png)

### Child Profile

![Child User Profile](/HP_ChildProfile.png)

### Child Empathy Map 

![Child Empathy Map](/HP_ChildEmpathyMap.png)

# Design

## User Flows

### Teacher User Flow

![Teacher User Flow](/HP_TeacherUserFlow.png)

### Student User Flow

![Student User Flow](/HP_StudentUserFlow.png)

## Low-Fidelity Sketches

Now that we understood the problems our users faced, we drew quick, low-fidelity sketches to brainstorm as many solutions as possible. As a team, we examined the sketches and identified and critiqued what we liked, and what we didn’t.

![lo-fi sketches](/HP_lofiSketches.png)
*Low-fidelity sketch depicting classroom creation and navigation. Green circles signify positive notes; red circles signify negative notes.*

## Prototyping

After discussing our initial sketches as a group, we started working on more concrete designs in a design program, Figma. After several iterations, we settled on several solutions: 

### Video Feedback Feature - Ranges

Our scrubbing feature allows teachers to choose a range of time within the video and provide a comment based on the clip they identified.

<div class="hp-gif-demo">

![Range Demo](/HP_Ranges.gif)

</div>

### Video Feedback Feature - Pins

Our pinning feature is an alternate method of providing feedback. However, this feature pinpoints a specific moment in time, rather than identifying a timeframe within the video. 

<div class="hp-gif-demo">

![Pins Demo](/HP_pins.gif)

</div>

### Folder Creation

This feature allows teachers to organize To-Do's and materials within their classroom with folders.

<div class="hp-gif-demo">

![Folder Demo](/HP_Folder.gif)

</div>

### Quick To-Do

This feature gives teachers a "short-cut" in creating a To-Do. It allows teachers to input the most important aspects (due date, folder selection) of the To-Do with ease.

<div class="hp-gif-demo">

![Quick To-Do Demo](/HP_QuickTodo.gif)

</div>

### Detailed To-Do

This allows teachers to provide more information while creating a To-Do, including attaching links, media, detailed descriptions, and specifications on submission format.

<div class="hp-gif-demo">

![Detailed To-Do Demo](/HP_Detailed_Todo.gif)

</div>

## Usability Testing

We conducted usability testing interviews to see how the teachers would intuitively interact with our design.

Through these sessions, we wanted to validate two core capabilities:

1. The ability for teachers to give time-sensitive feedback to their students
2. The ability for teachers to create tasks for students to complete outside of the classroom

![Usability Testing Schedule](/HP_Usability_Testing.png)

We asked each teacher the same set of questions regarding their experience navigating through the prototype:

![Usability Test Questions](/HP_Usability_Questions.png)

After interviewing the teachers, we collected feedback on the most pressing questions about the app's features. We organized this information in a chart to synthesize our information and understand the general opinion of our interviewees.

![Usability Test Analysis](/HP_Usability_Analysis.png)

# Final Designs

## Onboarding

Users are prompted with the Login and Sign Up page when entering the app for the first time. 

![Onboarding](/HP_Onboarding.png)

## To-Do's

Teachers can create tasks for students “to do”. They can add descriptions, videos, photos, and links for students to reference. Teachers are able to set due dates for each assignment, and organize student submissions. 

Students are able to attach files for their teachers and classmates to view.

![To-do](/HP_Todo_Teacher.png)
*Teacher View*

![To-do (Student View)](/HP_Todo_Student.png)
*Student View*

## Feedback

Using the Feedback feature, teachers are able to provide time-specific feedback on videos that students upload with their To-Do’s.

![Feedback](/HP_Feedback.png)

## Bulletin

In the Bulletin, teachers and administrators can make announcements to their classrooms. Teachers can add attachments to their posts, and students can engage in the classroom by reacting to posts and leaving comments. 

![New announcement and class information](/HP_Bulletin1.png)
*Create new announcement and view class information page*

![Edit existing announcements](/HP_Bulletin2.png)
*Edit existing announcements*

<div id="hp-expand-announcements">

![Expand announcements](/HP_Bulletin3.png)
*Expand announcements*

</div>

## Library

The Library feature organizes media attachments (videos, pictures, and files) within classrooms. Users can easily look for files.

![Library](/HP_Library.png)

## Profile and Settings

Students and teachers can view and edit their profile information. They can also customize their notification preferences.

![Profile and Settings](/HP_Profile_Settings.png)

# Next Steps

If we had more time, we would have liked to conduct more usability testing for the prototypes. We interviewed Harmony Project teachers, but we would have liked to interview some students as well to get their feedback on the application. We are currently in the development stage for our app.
