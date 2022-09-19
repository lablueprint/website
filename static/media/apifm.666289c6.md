<div class="title">
Asian Pacific Islander Forward Movement
</div>

Asian Pacific Islander Forward Movement (APIFM) is a nonprofit local to LA that aims to empower Asian and Pacific Islander communities.  
APIFM is a food hub, where they coordinate orders between farmers and the local businesses.

<Button className="blue" size="md" href="https://github.com/lablueprint/farm2people-web-app">
    Github Repository
</Button>


<Button className="white" size="md" href="https://www.figma.com/proto/RMj6iCOWuUG4UpfjrykCUL/Farm-2-People?node-id=3687%3A1639&scaling=scale-down-width&page-id=1384%3A2">
    Figma Prototype
</Button>

---
<div id="duration-table">

| Duration | Tools & Tech |
| - | - |
| January 2022 - August 2022 (8 months) | Figma; React Native, Airtable, Airlock |

</div>

| Team Members | |
| - | - |
| **_Project Leads_** | Chandra Suresh, Helen Wang, Michelle Kou (January 2022 - May 2022); Aaron Shi, James He, Sarah Chang (June 2022 - August 2022) |
| **_Designers_** | Isaac Wen, Michelle Tran Bui, Sarah Chang |
| **_Developers_** | Aaron Shi, Grace Ma, Genevieve Chin, James He, Jeff Lu, Kaylee Tran |


# Background

Our project specifically works with the Food Roots Harvest program of APIFM, which works to connect local and sustainably grown Asian specialty foods 
to communities and businesses in the greater LA area while supporting Asian American small farms and other farmers of color in California. Food Roots 
Harvest is currently working with a network of 4 farms and 15+ clients, including nonprofits, restaurants, hospitals, and schools. Any revenue made 
from these sales goes right into supporting the programs they produce to cultivate healthy API communities.


# Problem 

Currently, Food Roots orders can only be placed through a spreadsheet, which can be an inconvenience for both Food Roots and its clients. 

With a large number of orders coming in each week, the **entire** **ordering process must be monitored manually**––from updating inventory to 
keeping track of delivery dates, **making room for** **human error**. As a result, sometimes, the **inventory changes may not be immediately 
updated**, which can be frustrating for a client trying to place an order.


# Challenge 

*How might we minimize Food Root’s manual intervention, accurately reflect inventory updates, and allow clients to easily find the produce they need?*

# Proposed Solution

We proposed a **mobile app that automates and streamlines the produce-ordering process** for both Food Roots and their clients, featuring:

1. A **calendar** that notifies the user of an **order deadline** based on the desired delivery date
2. A **marketplace** for users to **browse**, **filter**, and **favorite** their items of interest
3. A **cart** where users can review and edit their items and shipping information
4. A **past orders** page where users can **edit** and **reorder** previous purchases

[Skip to Final Solution](hyperlink to section)


# Research 

## Competitive Analysis

To gather inspiration for our design, we first performed a competitive analysis on 9 grocery / produce delivery apps, comparing their features and noting their respective strengths and weaknesses. The features we examined included saved orders, product details, and delivery date selection, just to name a few.

![Competitors](https://github.com/lablueprint/website/blob/master/src/app/assets/images/projects/APIFM/Competitors.png)

We found that:

1. The marketplace where items are listed is almost always broken down into **categories** or at least **filterable**.
2. Many apps have adopted a **subscription model** for products that a user would need **frequent shipments** of.
3. Users typically are able to save **favorite items** or **access previous purchases** through an order history or “buy again” page.
4. Some apps with more limited stock only allow **orders for the coming week**. If an item is only available on certain days, **changing the delivery date** prompts a **warning message**.
5. Visually, **white space** is necessary to help **reduce clutter** and the user’s **cognitive load**, especially on screens like the marketplace that contain a great number of products.

## User Interviews

To better understand who our users were, we conducted **5 user interviews** with current clients of Food Roots. Our participants came from a range of occupations, such as **restaurant owners, chefs, cooking instructors, and community organizers**. Each 30-minute interview consisted of general questions about their current experience working with Food Roots, like:

- Why do you order with Food Roots?
- During what days or occasions do you order produce?
- Can you walk us through your current process of ordering with Food Roots?

#### Affinity Mapping

After we wrapped up our user interviews, we drew an affinity map to group our findings into categories such as delivery patterns, tech literacy, order frequency, and purpose, just to name a few. Through examining these categories, we were able to identify common themes and recurring trends, using them to extract key problems to prioritize.

![Affinity Map](https://github.com/lablueprint/website/blob/master/src/app/assets/images/projects/APIFM/Affinity_Map.png)

#### Key Takeaways

From our user research, we recognized four major trends:

1. Order dates don’t change that much, but the **quantity and contents** of the order **do change** occasionally.
2. Users want to be able to **see more items** at once and to select **frequently-purchased** items easily.
3. Users want to see which items are **available,** especially seasonal ones, and see **real-time updates.**
4. Users choose to use Food Roots because it aligns with their **belief in supporting their community**, but they **don’t feel a connection to the local API farms** they purchase from.


# Ideation

## Initial Brainstorming

After synthesizing our research insights, we proceeded to brainstorm some features that would directly address the patterns we noticed. 

1. **Subscription:** enables editable recurring orders that are delivered on the same day
2. **List View:** allows for a broader view and quicker selection of desired items for busy users
3. **Filter & Favorites:** identify seasonal produce, sift through sizable catalog, and access frequently purchased items
4. **Farm Information**: include farm information in product details to reinforce community support

## User Personas

Based on our user interviews, we created 2 user personas that matched our user demographic. This helped us understand our audience’s goals, needs, and pain points more thoroughly.

#### The Pragmatist

![Persona 1](https://github.com/lablueprint/website/blob/master/src/app/assets/images/projects/APIFM/Persona_1.png)

#### The Entrepreneur
![Persona 2](https://github.com/lablueprint/website/blob/master/src/app/assets/images/projects/APIFM/Persona_2.png)

## Working With Constraints

Before we began designing, our team was informed of some important constraints we had to work around:

1. First, because of a limited number of employees, Food Roots **could only deliver on Mondays and Fridays**. As a result, there were two order deadlines ever week. This meant that it was imperative for us to **remind the user when they must order by** to have their shipments arrive on time. 
2. Due to a tight timeline, our development team **did not have the bandwidth** to develop a **search bar**. For us, this meant that we had to come up with a **precise filtering system** to allows the user to narrow down the catalog efficiently.

## Low Fidelity Wireframes

Keeping these constraints in mind, we began creating lo-fi wireframes to get a better sense of what some of our core features would look like. For each screen, we focused on the general layout, information hierarchy, and its potential interactions with other screens. 

##### Calendar
![Lofi Calendar](https://github.com/lablueprint/website/blob/master/src/app/assets/images/projects/APIFM/Lofi_Calendar.png)

##### Marketplace
![Lofi Marketplace](https://github.com/lablueprint/website/blob/master/src/app/assets/images/projects/APIFM/Lofi_Marketplace.png)

##### Cart
![Lofi Cart](https://github.com/lablueprint/website/blob/master/src/app/assets/images/projects/APIFM/Lofi_Cart.png)

##### Subscription
![Lofi Subscription](https://github.com/lablueprint/website/blob/master/src/app/assets/images/projects/APIFM/Lofi_Subscription.png)

## Mid-Fidelity Wireframes

Once we had the foundations of our mobile app visualized, we began creating in-between screens, exploring alternate versions of layouts, and building a cohesive visual identity.
![Midfi](https://github.com/lablueprint/website/blob/master/src/app/assets/images/projects/APIFM/Midfi.png)

## Unexpected Challenges 

However, after speaking with Food Roots, we were faced with an unforeseen challenge. Since produce availability is always changing, users could not order one week in advance, making repeated orders or subscriptions difficult to implement. Thus, we had to repurpose our subscription feature into a past orders page that enables users to edit and reorder previous purchases.

## Usability Testing

Upon making the appropriate changes, our team was able to recruit **3 participants** for usability testing. Ideally, we would’ve liked more participants, but since the app is only meant to be used by Food Root’s existing pool of customers, there was a limited number of users we could potentially recruit.

Our usability test consisted of a series of tasks that tested how the user interacted with the app’s core features. These tasks included:

1. Add a list of items and their specified quantities to the cart.
2. Favorite items and switch to list view.
3. Filtering for only seasonal produce.
4. Editing order content and quantity from the cart.
5. Access, edit, and reorder a previous purchase.

#### Key Findings & Suggestions

Overall, the app is **efficient**, easy to use, and visually appealing. It felt **familiar** to most participants, as it shared some similarities to other major shopping or grocery apps. This was done intentionally to lower the learning curve for new users. Participants also appreciated the visuals of the app, saying the it represented Food Roots and its culture well.

However, there were definitely areas of improvement. Users informed us that…

1. The text was a little small, making it hard for users to click on the correct buttons. 
2. Since restaurant inventories are always changing, although they may need the same item, the quantity varies weekly by what is still available in their stock. 
    1. To fix this, we made the **quantity flow in “Past Orders” editable**. If an item in a reorder is no longer available, a **warning message** pops up.
    ![Warning Message](https://github.com/lablueprint/website/blob/master/src/app/assets/images/projects/APIFM/Warning_Message.png)
3. For the quantity count of total items in the cart, the number should represent the **total pounds of items** ordered, and not a count of unique items. This is because it’s more helpful for users to know how many pounds worth of produce they’ve ordered in total.


# Final Designs

After 6 months of design work and 8 months of development, Food Roots Harvest was ready to deploy! Here are the final designs as well as the Github repository and Figma prototype.

## Branding 

![Branding](https://github.com/lablueprint/website/blob/master/src/app/assets/images/projects/APIFM/Branding.png)

## Sign Up

When users first open the app, they will be directed to the Onboarding process to make an account. Users will be prompted to add personal information necessary for the purchasing process, as well as delivery details and reading the Terms of Conditions. Once users are finished signing up, their accounts will be pending approval by Food Roots Harvest before they can start browsing the mobile app.

![Sign Up](https://github.com/lablueprint/website/blob/master/src/app/assets/images/projects/APIFM/Signup_gif.gif)

## Calendar

Before the user can begin shopping, a calendar prompts the user to select a delivery date. This step is crucial as the produce offered varies according to the delivery date. Once selected, the app generates an order deadline reminder for the user.

![Calendar](https://github.com/lablueprint/website/blob/master/src/app/assets/images/projects/APIFM/Calendar.gif)

## Marketplace

The Marketplace is where users can browse, favorite, and purchase produce from Food Roots Harvest.

Our design team implemented a few features to help smoothen the user experience, such as:

- Sort & Filter: categorize and organize items in different ways.
- List View: helps users view multiple items quickly.
- Favorites: enables buyers to find frequently-purchased items.

![Marketplace](https://github.com/lablueprint/website/blob/master/src/app/assets/images/projects/APIFM/Marketplace_gif.gif)

## Cart

The Cart is where the buyer can see all of the produce they added to purchase, and where they can finalize checkout details. Within the Cart, users are given multiple opportunities to review their items and respective costs before finalizing their purchase, and are able to edit item quantity, remove unwanted produce, and edit/add delivery addresses.

![Cart](https://github.com/lablueprint/website/blob/master/src/app/assets/images/projects/APIFM/Cart_gif.gif)

## Past Orders 

In the case that customers have similar orders every week, they can quicken their purchasing process by accessing Past Orders. Here, all of the users’ past orders will be stored and customers can place the same order again, with the ability to remove items or adjust the quantity if needed. Past orders can also be ordered on a different day of the week, but customers must be wary as some items are only available for specific delivery dates.

![Past Orders](https://github.com/lablueprint/website/blob/master/src/app/assets/images/projects/APIFM/Pastorders_gif.gif)

## Profile

If a user needs to change any of the personal information that was first inputted during the Onboarding process, they can do so through their Profile. Contact information, delivery addresses, and avatar images can be edited here. The avatar images were designed and created by our own team!

![Profile](https://github.com/lablueprint/website/blob/master/src/app/assets/images/projects/APIFM/Profile.gif)
