<div class="title">
Skid Row Arts Alliance
</div>

<Button className="blue" size="md" href="https://github.com/lablueprint/skid-row-arts-alliance/">
    Github Repository
</Button>


<Button className="white" size="md" href="https://www.figma.com/file/xTqoSZo77qaLM38N8k9qW7/Designs?type=design&node-id=25%3A448&mode=design&t=4Wyent7o7qEylY35-1">
    Figma Prototype
</Button>

---
<div id="duration-table">

| Duration | Tools & Tech |
| - | - |
| November 2022 - September 2023 | Figma, React Native, Expo, MongoDB, AWS |

</div>

| Team Members | |
| - | - |
| **_Project Leads_** | Aye Pyae, James He |
| **_Designers_** | Christine Park, Diya Indoliya, Isaac Wen, Jimmy Tang |
| **_Developers_** | Andrew Huynh, Angela Tan, Caroline DebBaruah, Juliet Zhang, Kenny Wan, Ryan Kim, Siddharth Nandy |

# Background

The Skid Row Arts Alliance is a consortium of artist-driven organizations in Skid Row, dedicated to **creating art**, **fostering community**, and **advocating for residents**. **~4,000 Skid Row residents** face the threat of gentrification due to their community not being recognized as an entity. SRAA brings individuals together and **represents their voices through arts and culture** to support place-keeping for all Skid Row residents.

# Problem

Currently, the Skid Row Arts Alliance relies on multiple platforms to promote its events and host various resources. This leads to an unorganized distribution of information and a potential lack of visibility for the community members we aim to engage.

# The Challenge

***How can we centralize SRAA's resources and events onto a unified platform, enhancing accessibility, while fostering a sense of connection within the underrepresented Skid Row community through the mediums of art and culture?***

# Solution

Our solution is a mobile app that allows residents of Skid Row to discover events, resources, and communities where they can find an outlet to feel empowered. 

Features:

1. An **accessible map** with calendar events and resources available in Skid Row
2. A pdf reader of past released **Zine** articles
3. A **Digital Art Platform** where users can share their works and **profiles** with other members of the community
4. An **Admin Portal** where SRAA admins can easily update the map by adding and deleting events, resources, zines, and curating the gallery

# Design Process
![Design Process](https://raw.githubusercontent.com/lablueprint/website/master/src/app/assets/images/projects/SRAA/sraa-process.jpeg)

# Research

## **Competitive Analysis**

To gain inspiration for our designs, we took a look at other various apps sharing similar features that we planned on implementing. Some of these apps included Yelp, Canvas, Google Arts & Culture, and many others.

![Competitive Analysis](https://raw.githubusercontent.com/lablueprint/website/master/src/app/assets/images/projects/SRAA/sraa-comp-analysis.png)

After separating the features by their respective categories, we took note of the strengths and weaknesses within the apps, highlighting aspects that we liked in particular.

## User Interviews

We conducted interviews with three artists in the community and two admins who were directly involved in SRAA’s organization overall. The questions consisted of a general overview of their backgrounds along with an understanding of current work processes and problems they navigated.

### Affinity Mapping

Following the interviews we created an affinity map to collectively synthesize our findings as a group. We sorted insights into different categories to understand the common trends and problems the community faced, allowing us to effectively address these issues head-on.

![Affinity Mapping](https://raw.githubusercontent.com/lablueprint/website/master/src/app/assets/images/projects/SRAA/sraa-aff-mapping.jpg)

### Key Takeaways

1. Users are not tech-savvy
2. User typically use government-issued phones
3. **No centralization** of information for resources and events
4. Current map **not interactive** and **outdated**
5. **Lack of communication** between organizations - overlapping events

![Key Takeaways](https://raw.githubusercontent.com/lablueprint/website/master/src/app/assets/images/projects/SRAA/sraa-key-takeaways.png)

## User Personas

We then developed 2 personas for our targeted audience: artists and admins. This allowed us to empathize and gain a better understanding of our audience's needs and challenges.

### The Artist
![User Personas - The Artists](https://raw.githubusercontent.com/lablueprint/website/master/src/app/assets/images/projects/SRAA/sraa-userpersonas-artist.png)

### The Admin
![User Personas - The Admin](https://raw.githubusercontent.com/lablueprint/website/master/src/app/assets/images/projects/SRAA/sraa-userpersonas-admin.png)

# Ideation

## Information Architecture

Before moving on to the early stages of designing the interface itself, we created an information architecture to provide a visual framework to outline the structure of the app.

![Information Architecture](https://raw.githubusercontent.com/lablueprint/website/master/src/app/assets/images/projects/SRAA/sraa-info-architecture.jpeg)

# Low-Fidelity Prototypes

With our initial drafts created, we began creating various mockups to explore iterations of designs for the app. This allowed us to map out the features and try different layouts within the screens.

<table float="center">
    <tbody>
        <tr>
            <td width="33%" >
                <img src="https://raw.githubusercontent.com/lablueprint/website/master/src/app/assets/images/projects/SRAA/sraa-lowfi-map.png" alt="Low-Fidelity Prototype - Map Screen">
            </td>
            <td width="33%" >
                <img src="https://raw.githubusercontent.com/lablueprint/website/master/src/app/assets/images/projects/SRAA/sraa-lowfi-event.png" alt="Low-Fidelity Prototype - Events Screen">
            </td>
            <td width="33%" >
                <img src="https://raw.githubusercontent.com/lablueprint/website/master/src/app/assets/images/projects/SRAA/sraa-lowfi-zinereader.png" alt="Low-Fidelity Prototype - Zine Reader">
            </td>
        </tr>
        <tr>
            <td width="33%" >
                <img src="https://raw.githubusercontent.com/lablueprint/website/master/src/app/assets/images/projects/SRAA/sraa-lowfi-profile.png" alt="Low-Fidelity Prototype - Profile Page">
            </td>
            <td width="33%" >
                <img src="https://raw.githubusercontent.com/lablueprint/website/master/src/app/assets/images/projects/SRAA/sraa-lowfi-artsubmission.png" alt="Low-Fidelity Prototype - Art Submission Portal">
            </td>
            <td width="33%" >
                <img src="https://raw.githubusercontent.com/lablueprint/website/master/src/app/assets/images/projects/SRAA/sraa-lowfi-artdetails.png" alt="Low-Fidelity Prototype - Art Details Screen">
            </td>
        </tr>
    </tbody>
</table>

# Mid-Fidelity Prototypes

<table float="center">
    <tbody>
        <tr>
            <td width="33%" >
                <img src="https://raw.githubusercontent.com/lablueprint/website/master/src/app/assets/images/projects/SRAA/sraa-midfi-map.png" alt="Mid-Fidelity Prototype - Map Screen">
            </td>
            <td width="33%" >
                <img src="https://raw.githubusercontent.com/lablueprint/website/master/src/app/assets/images/projects/SRAA/sraa-midfi-profile.png" alt="Mid-Fidelity Prototype - Profile Page">
            </td>
            <td width="33%" >
                <img src="https://raw.githubusercontent.com/lablueprint/website/master/src/app/assets/images/projects/SRAA/sraa-midfi-gallery.png" alt="Mid-Fidelity Prototype - Art Gallery">
            </td>
        </tr>
        <tr>
            <td width="33%" >
                <img src="https://raw.githubusercontent.com/lablueprint/website/master/src/app/assets/images/projects/SRAA/sraa-midfi-eventdetails.png" alt="Mid-Fidelity Prototype - Event Details Screen">
            </td>
            <td width="33%" >
                <img src="https://raw.githubusercontent.com/lablueprint/website/master/src/app/assets/images/projects/SRAA/sraa-midfi-artsubmission.png" alt="Mid-Fidelity Prototype - Art Submission Portal">
            </td>
            <td width="33%" >
                <img src="https://raw.githubusercontent.com/lablueprint/website/master/src/app/assets/images/projects/SRAA/sraa-midfi-artdetails.png" alt="Mid-Fidelity Prototype - Art Details Screen">
            </td>
        </tr>
    </tbody>
</table>

## Usability Testing

In order to gain further insight and feedback for our app, we conducted usability tests with an admin and an artist. We gave various tasks for them to follow to test their interactions with the designs. Throughout this process, we took note of their critiques and suggestions, which were valuable as we progressed toward refining our final designs.

<table float="center">
    <tbody>
        <tr>
            <td width="50%" >
                <img src="https://raw.githubusercontent.com/lablueprint/website/master/src/app/assets/images/projects/SRAA/sraa-usabilitytesting-1.png" alt="Usability Testing Zoom Call with Map Screen">
            </td>
            <td width="50%" >
                <img src="https://raw.githubusercontent.com/lablueprint/website/master/src/app/assets/images/projects/SRAA/sraa-usabilitytesting-2.png" alt="Usability Testing Zoom Call with Art Details Screen">
            </td>
        </tr>
    </tbody>
</table>

Overall, participants found that the app was straightforward and user-friendly. However, certain aspects surfaced where improvements in clarity were suggested to enhance the overall user experience throughout the app.

A few examples include: An audio icon to quickly identify the media type uploaded, a calendar view for intuitive navigation of events, and an artist section for greater artist emphasis and discovery.

![Usability Testing - Interface Changes](https://raw.githubusercontent.com/lablueprint/website/master/src/app/assets/images/projects/SRAA/sraa-usabilitytesting-3.png)

## Design System

While designing the app, we opted for colors that brought more visibility within the interface, while maintaining pre-existing themes that SRAA had for their own branding.

![Design System](https://raw.githubusercontent.com/lablueprint/website/master/src/app/assets/images/projects/SRAA/sraa-designsystem.jpeg)

# Final Designs

## Map & Events

Browse and filter upcoming events in the surrounding area. Tap event cards for more details and save events you are interested in.

<table float="center">
    <tbody>
        <tr>
            <td width="50%" >
                <img src="https://raw.githubusercontent.com/lablueprint/website/master/src/app/assets/images/projects/SRAA/sraa-final-map.gif" alt="Final Designs - Map Screen">
            </td>
            <td width="50%" >
                <img src="https://raw.githubusercontent.com/lablueprint/website/master/src/app/assets/images/projects/SRAA/sraa-final-events.gif" alt="Final Designs - Event Screen">
            </td>
        </tr>
    </tbody>
</table>

## Gallery & Art Page

Explore a community-submitted gallery of various mediums of art. Find further information about each piece and its artist through the art page.

<table float="center">
    <tbody>
        <tr>
            <td width="50%" >
                <img src="https://raw.githubusercontent.com/lablueprint/website/master/src/app/assets/images/projects/SRAA/sraa-final-artgallery.gif" alt="Final Designs - Art Gallery">
            </td>
            <td width="50%" >
                <img src="https://raw.githubusercontent.com/lablueprint/website/master/src/app/assets/images/projects/SRAA/sraa-final-artdetails.gif" alt="Final Designs - Art Details Screen">
            </td>
        </tr>
    </tbody>
</table>

## Zines

Access the latest and past collection of Zines anytime, anywhere through the Zine reader.

<table float="center">
    <tbody>
        <tr>
            <td width="25%" ></td>
            <td width="50%" colspan=2>
                <img src="https://raw.githubusercontent.com/lablueprint/website/master/src/app/assets/images/projects/SRAA/sraa-final-zinereader.gif" alt="Final Designs - Zines Reader">
            </td>
            <td width="25%" ></td>
        </tr>
    </tbody>
</table>

## Profile Page

Introduce yourself to the community while managing your saved art pieces and events.

<table float="center">
    <tbody>
        <tr>
            <td width="50%" >
                <img src="https://raw.githubusercontent.com/lablueprint/website/master/src/app/assets/images/projects/SRAA/sraa-final-profile.gif" alt="Final Designs - Profile Page">
            </td>
            <td width="50%" >
                <img src="https://raw.githubusercontent.com/lablueprint/website/master/src/app/assets/images/projects/SRAA/sraa-final-editprofile.gif" alt="Final Designs - Edit Profile Screen">
            </td>
        </tr>
    </tbody>
</table>

## Submission Portal

Share your passions with the community, whether it be visual or audio. Add details about each piece for others to enjoy!

<table float="center">
    <tbody>
        <tr>
            <td width="25%" ></td>
            <td width="50%" colspan=2>
                <img src="https://raw.githubusercontent.com/lablueprint/website/master/src/app/assets/images/projects/SRAA/sraa-final-artsubmission.gif" alt="Final Designs - Art Submission Portal">
            </td>
            <td width="25%" ></td>
        </tr>
    </tbody>
</table>


## Next Steps

We are currently preparing for the launch of our app on both the App Store and Google Play Store, scheduled for Fall 2023. While finalizing features, our development team is working on the deployment process with SRAA.

Given more time, our designers would have conducted additional interviews with more artists and admins to gather greater insight into the app. Furthermore, we would have liked to design a resource section for the users.
