<div class="title">
The Conscious Kid
</div>

The Conscious Kid is a nonprofit organization dedicated to supporting families and educators in working to disrupt racism, inequity and bias. We partnered with them to create a web app that highlights children’s books featuring characters from underrepresented and marginalized backgrounds. 

<Button className="blue" size="md" href="https://github.com/lablueprint/tck-web-app">
    Github Repository
</Button>


<Button className="white" size="md" href="https://www.figma.com/proto/yYLXBHaMSz9N9qaRKKjyvd/TCK?node-id=1559%3A6604&scaling=scale-down-width&page-id=1144%3A3190&starting-point-node-id=1559%3A6604">
    Figma Prototype
</Button>

---
<div id="duration-table">

| Duration | Tools & Tech |
| - | - |
| January 2022 - September 2022 (9 months) | Figma; React, Airtable, Airlock |

</div>

| Team Members | |
| - | - |
| **_Project Leads_** | Chantal Tan, Diya Baliga |
| **_Designers_** | Christine Park, Derek Wang, Raqeeb Chang |
| **_Developers_** | Avnish Sengupta, Caroline DebBaruah, Dan Lee, Ryan Tran, Ryan Yeo, Solia Valentine |

# Background 

Public education resources, like schools and libraries, do not provide enough access to **stories centering minoritized identities**. The Conscious Kid works to encourage healthy racial identity development in kids ages 0-18 by increasing access to **representative books** and racial identity educational resources. They have now donated **hundreds of thousands of books** and have grown a following of **2M people** who look to them for educational resources to teach their kids about anti-racism.

As their reach and social media presence has grown, they have received an increased demand for book and resource recommendations. However, they have **no centralized channel** to provide them!

# The Challenge

***How might we create a centralized channel that allows parents, educators, and kids to easily navigate children’s book resources and recommendations?***

# Solution

We proposed a **web app that acts as an educational hub** for parents, educators, and kids to access representative books and resources, featuring:

1. A **book search** where users can browse, search, and filter through TCK’s library of books
2. A **quiz** for users to get quick, personalized book recommendations
3. **Curated collections** of books by theme & identity
4. A **dictionary** of key racial literacy terms

[Skip to Final Solution](hyperlink to section)

# Process
![Process](https://github.com/lablueprint/website/blob/master/src/app/assets/images/projects/theconsciouskid/TCK%20Process.png?raw=true)


# Research

## Competitive Analysis
We began our research by analyzing competing products & spaces to understand what already exists in the market.

![Competitors](https://github.com/lablueprint/website/blob/master/src/app/assets/images/projects/theconsciouskid/TCK%20Competitors.png?raw=true) 

For each competitor, we noted particular things we liked and disliked about each site on virtual sticky notes and tried to think about how they fit into the three features TCK wanted (a Book Search, Quiz, and Dictionary).

![Competitive Analysis](https://github.com/lablueprint/website/blob/master/src/app/assets/images/projects/theconsciouskid/TCK%20comp%20analysis%20screenshot.png?raw=true)

### Key Takeaways

1. Sites geared towards children are **colorful** and abundant in **interesting illustrations & shapes.**
2. Newer sites are adopting **clickable carousels**, a more interactive way of browsing that simultaneously allows pages to contain more content.
3. Text-heavy websites are dated and cumbersome to browse—**focusing on book covers** **is much more enjoyable** and preserves real estate for more books to be displayed.
4. Some sites are jam-packed with information/call-to-actions, which overwhelms the user’s cognitive load.
5. **Nested navigation tabs break the user’s flow of navigating** to other pages which creates a bulky experience.
Therefore we hope to create a colorful, yet minimalist site that allows users to quickly search for books and easily switch between resources.

## User Interviews
We conducted **8 45-minute user interviews**. Our interviewees included educators, parents, and children from a variety of backgrounds. During these sessions, perform tasks on websites with similar functionality to what we wanted to achieve while voicing out their thought processes. After conducting these sessions, we were able to identify features of these pages that we wanted to reference as well as elements that we definitely wanted to avoid in our designs.

### Key Takeaways 
**Book Search**

- Users will go to the bookstore or library if they already have a book in mind.
- Most users will visit TCK to **browse for books** rather than search for something specific.

**Book Finder Quiz**

- Most users are willing to spend **5 minutes** on the quiz.
- We need to make sure **child-friendly language** is used.

**General Design**

- Users value the **visibility of book cover thumbnails**.
- **Short descriptions** for each book are also valuable.

## Literature Reviews
For the other research questions we couldn’t answer through user interviews, we did a comprehensive study of 13 research articles. From this research, we had 3 major take-aways: 

1. Zero-search results can be frustrating, so offer alternative solutions (ex. partial matching results) 
2. Large cover page images are important for selecting books 
3. Make quizzes engaging & conversational

## Personas
We then created 3 user persona with our targeted audience groups: kids, teachers, and parents. This helped us understand and empathize with our audience and their pain points.

### Kid
![Kid Persona](https://github.com/lablueprint/website/blob/master/src/app/assets/images/projects/theconsciouskid/Kid%20Persona.jpg?raw=true)

### Educator
![Educator Persona](https://github.com/lablueprint/website/blob/master/src/app/assets/images/projects/theconsciouskid/Educator%20Persona.jpg?raw=true)

### Parent
![Parent Persona](https://github.com/lablueprint/website/blob/master/src/app/assets/images/projects/theconsciouskid/Parent%20Persona.jpg?raw=true)

## Journey Map
To supplement our understanding of our users, we included a user journey map of Darla’s persona. This map details the feelings, thoughts, and pain points that Darla has as a result of using the original TCK site.

![Journey Map](https://github.com/lablueprint/website/blob/master/src/app/assets/images/projects/theconsciouskid/Journey%20Map.jpg?raw=true)

# Ideation
## Information Architecture
In order to understand what information we would be putting on the website, we created an information architecture. Here we determined what filters to include and how to prioritize them in the book search based on our user research and nonprofit calls.

![Information Architecture](https://github.com/lablueprint/website/blob/master/src/app/assets/images/projects/theconsciouskid/Information%20Architecture.png?raw=true)

## Quiz Logic and Copywriting
We also created different quiz flows to create more personalized experience within the book finder quiz, where different questions were presented to the user based on variables such as their user group or mood. Based on these questions, kids and adults can view questions written appropriately for them. 

For kids, we split up the genres into “fun” and “serious” categories and   included a mood question that asks users to self-reflect on their personality. Depending on their answer, the quiz displays the serious genres, fun genres, or both for the user to choose from.

![Quiz Diagram 1](https://github.com/lablueprint/website/blob/master/src/app/assets/images/projects/theconsciouskid/Quiz%20Diagram%20(1).png?raw=true)
![Quiz Diagram 2](https://github.com/lablueprint/website/blob/master/src/app/assets/images/projects/theconsciouskid/Quiz%20Diagram%20(2).png?raw=true)


## Low-Fidelity Prototypes
After our first round of research and identifying preliminary requirements for each feature, we had a frame of reference to start designing a method of book searching, a book finder quiz, and a racial literacy dictionary.

Our first step in creating the design was sketching out rough ideas of what each feature could look like. We basically included what information to display on each page as well as a general visual layout.

### Book Search
<p align="center">
<img src="https://github.com/lablueprint/website/blob/master/src/app/assets/images/projects/theconsciouskid/TCK%20lofi%20book%20search.png?raw=true" width=75%>
  </p>
  
### Dictionary
<p align="center">
<img src="https://github.com/lablueprint/website/blob/master/src/app/assets/images/projects/theconsciouskid/TCK%20lofi%20dictionary.png?raw=true" width=50%>
  </p>
  
### Book Recommendation Quiz
<p align="center">
<img src="https://github.com/lablueprint/website/blob/master/src/app/assets/images/projects/theconsciouskid/TCK%20lofi%20quiz%202.png?raw=true" width=75% />
  </p>

# Mid-Fidelity Wireframes
Mid-fidelity wireframes were created whilst in the middle of also creating a design system. Here are a few explorations we created during this process!

### Book Search
![Midfi book search](https://github.com/lablueprint/website/blob/master/src/app/assets/images/projects/theconsciouskid/TCK%20midfi%20book%20search.png?raw=true)

### Author Page
![Midfi author page](https://github.com/lablueprint/website/blob/master/src/app/assets/images/projects/theconsciouskid/TCK%20midfi%20author%20page.png?raw=true)

### Quiz Questions
![Midfi quiz](https://github.com/lablueprint/website/blob/master/src/app/assets/images/projects/theconsciouskid/TCK%20midfi%20quiz.png?raw=true)

### Racial Literacy Dictionary
![Midfi dictionary](https://github.com/lablueprint/website/blob/master/src/app/assets/images/projects/theconsciouskid/TCK%20midfi%20dictionary.png?raw=true)

### Collections
![Midfi collections](https://github.com/lablueprint/website/blob/master/src/app/assets/images/projects/theconsciouskid/TCK%20midfi%20collection.png?raw=true)


# Usability Testing
We were able to get ahold of **4 participants** to test out our website prototype which consisted of 2 students, 1 parent, and 1 educator. 3 of the 4 participants have used the original site before, so they had a comparative point of reference. The average age of our participants was 36.25.

<p align="center">
<img src="https://github.com/lablueprint/website/blob/master/src/app/assets/images/projects/theconsciouskid/TCK%20UT.png?raw=true" width=50% >
    </p>

After the test, we gave participants a System Usability Scoring (SUS) questionnaire, where participants answered 10 questions and averaged the scores to assess the overall usability. The prototype received a score of 77.5, which meant that it is quite usable, but that there is room for marginal improvement.

#### Key Takeaways
- The website is **very simple** and **straightforward to use in general**
- Our layout reminded them of video streaming services like Netflix, which is what we were aiming for.
- The Racial Literacy Dictionary and Book Finder Quiz UI could use more color to make it more interesting

# Final Designs
## Design System
When creating the branding for this website, we wanted to create fun, vibrant, and inclusive illustrations. We used inviting typography and colorful illustrations to do so!

![Design System](https://github.com/lablueprint/website/blob/master/src/app/assets/images/projects/theconsciouskid/Design%20System%20Summary%20DW.png?raw=true)

## Book Search
Parents, educators, and children can start their search by browsing our carousels or using the Book Search to filter for relevant books. Users can search by keywords, authors/illustrators, and titles as well as filter by age range, race/ethnicity, religion, book format, and more. 

<p align="center">
![Book Search Filter Gif](https://github.com/lablueprint/website/blob/master/src/app/assets/images/projects/theconsciouskid/TCK%20Book%20Search%20Gif.gif?raw=true)
  </p>
  
## Author/Illustrator Bio
Within each book page, users can find an author or illustrator bio to further support their work.

<p align="center">
![Creator Page](https://github.com/lablueprint/website/blob/master/src/app/assets/images/projects/theconsciouskid/Creator%20Bio%20(Most%20Recent).png?raw=true)
  </p>

## Book Finder Quiz
For a quick and fun way to discover new books, users can take our Book Finder Quiz to receive five personalized book recommendations! 

<p align="center">
<img src="https://github.com/lablueprint/website/blob/master/src/app/assets/images/projects/theconsciouskid/ezgif.com-gif-maker%20(1)%20(1).gif" width=48% /><img src="https://github.com/lablueprint/website/blob/master/src/app/assets/images/projects/theconsciouskid/ezgif.com-gif-maker%20(4).gif" width=48% />
  </p>

## Curated Collections
To browse books by relevant themes such as Martin Luther King Jr. books, books by AAPI authors, or books by Latinx authors, users can browse curated collections of books. 

<p align="center">
![Collections Gif](https://github.com/lablueprint/website/blob/master/src/app/assets/images/projects/theconsciouskid/Collections%20gif.gif?raw=true)
  </p>

## Racial Literacy Dictionary
Sometimes it can be difficult to have conversations about race, so knowing key racial literacy terms can equip individuals to create awareness around racism and advocate for topics surrounding identity, race, and racism. The dictionary sorts terms by alphabetical order and links associated resources to help parents or educators teach their kids about anti-racism.

<p align="center">
![Dictionary Gif](https://github.com/lablueprint/website/blob/master/src/app/assets/images/projects/theconsciouskid/TCK%20Dictionary%20Gif.gif?raw=true)
  </p>

# Next Steps
After months of hard work, the website is set to launch in Fall 2022! We are currently in the process of cleaning up the development and implementing a mobile-friendly version while The Conscious Kid uploads all their books into their database.

If we had more time, the designers would have conducted more usability tests on kids and educators as well as designed a profile feature for the users.
