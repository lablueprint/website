<div class="title">
Asian Pacific Forward Movement
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

**How might we minimize Food Root’s manual intervention, accurately reflect inventory updates, and allow clients to easily find the produce they need?**

# Proposed Solution

We proposed a **mobile app that automates and streamlines the produce-ordering process** for both Food Roots and their clients, featuring:

1. A **calendar** that notifies the user of an **order deadline** based on the desired delivery date
2. A **marketplace** for users to **browse**, **filter**, and **favorite** their items of interest
3. A **cart** where users can review and edit their items and shipping information
4. A **past orders** page where users can **edit** and **reorder** previous purchases

[Skip to Final Solution](hyperlink to section)

# Process
![Design Process](/Design_Process.png)

## Research 

### Survey - what are people's experiences with online grocery shopping?

We conducted an online survey to get more insights on food shopping behavior and how potential users utilize technology to purchase groceries.

<div class="flex-row">

![Google Forms Survey](/F2P_Google_Survey.png)

![Google Survey Responses](/F2P_Survey_Responses.png)

</div>

From **97 responses** from college students, their parents, and family members, we found that:
- **14.8% face mild or moderate food insecurity**
- With **54.5% of people shopping for food 3-4 times a month**, it’s important to make a website that can be easily renavigated for consistent and frequent use.
- **22.7% have shopped online for groceries before**, so most shop in-person at stores instead of using online platforms. We must make the UI simple and clear as a result of this unfamiliarity with online grocery shopping.
- For those who have shopped for food online, the **top websites used were: Instacart, Amazon, and Target**. We can refer to the structures and UI elements of these websites when designing our website.

### Interviews - what do buyers expect from an online shopping experience?

We conducted **3 individual, in-depth interviews** on students experiencing mild food security to gain insights on how they get food now and how to create a helpful and pleasant online food shopping experience with our website.

![Interview Notes](/F2P_Interview_Notes.png)

We found that: 
- **Users prefer shopping in-person because it allows buyers to see the freshness of the food** they buy. So, we want to make sure images of produce will be visible.
- Buyers expect an online shopping process to be:
    - **Easy** in terms of signing up and selecting items
    - **Fast, but also flexible** if they want to go back to decide what they want to buy
    - **Reliable**
    - **Allowing for price comparisons** and showing price changes

### Competitive Analysis -  what are the pain points of Farm2People's competitors, and how can we improve on that?

We conducted **heuristics analyses on 4 competitor websites**, which included marketplaces that display produce from local farmers or imperfect produce.


<div class="flex-row">

![Competitors: Open Food Network, LocalHarvest, Imperfect Foods, Food Roots](/F2P_Competitor_Thumbnails.png)

![Notes on Imperfect Foods](/F2P_Competitor_Notes.png)

</div>

![Competitor Analysis](/F2P_Competitor_Analysis.png)

### Literature Reviews -  what can previous research tell us about our users?

By reading existing articles and research about online shopping platforms, particularly those that sell produce, we wanted to get a rough idea of what kinds of problems farmers and customers have on online buying & selling platforms.

In online selling platforms, **farmers want...**
- **Strong personal support**
    - Farmers may not always be up to date with the newest technology, so they want the ability to contact staff to ask any questions they have.
- **Flexibility to accommodate buyers in any situation**
    - For example, if products go bad before the farmers can deliver them, they want to be able to refund the money back to the buyer.
    - If the platform is across multiple states, a tax integration system to manage different tax codes and regulations.
- **Integration with systems they already have**
    - Farmers want to be able to integrate information from other systems they already have, such as accounting software like Quickbooks.

On the other hand, in online selling platforms, **buyers want...**
- **A mobile website**
    - Another online selling platform called Barn2Door reports that 65% of their orders is completed through their mobile site. So, a mobile website, or a responsive website is crucial for buyers.
- **Ability to shop as a guest**
    - Buyers often see it as a huge hassle if they have to go through a long sign-up process. Alternatively, if we have to create a sign-up process, designers must think about how to make the process as seamless as possible.
- **To save time!**
    - One of the biggest reasons many buyers shop online is to save time. Designers have to make it easy for them to find what they're looking for.

## Ideation

### User Personas

Based on our research and conversations with Farm2People, we created three personas for the three types of users the platform will be catered to: buyer, special buyer (non-profit) and seller.

![Buyer Persona](/F2P_Buyer.png)

![Seller Persona](/F2P_Seller.png)

![Non-profit Persona](/F2P_Nonprofit.png)

### User Flows

With these users in mind, our project lead ideated the user flows for the website.

![User Flows](/F2P_User_Flows.png)

### Features

During our ideation process, we had to keep in mind the users we were designing for. After our wireframing and iterations, the users are distinguished by these features:

![User Features Chart](/F2P_Features_Chart.png)

# Low Fidelity Wireframes

After ideating the features, we created low fidelity wireframes. Throughout this process, we made iterations based on Farm2People’s feedback and changes in vision (particularly for the marketplace and inventory manager).

![Lofi Screenshots](/F2P_Lofi_screenshots.png)

# User Testing
We conducted usability testing over Zoom and used Google Forms to to test if users can navigate and use the high fidelity application as intended. Out of **7 interviews**, interviewees represented these user profiles:

<div class="flex-row">

![User Testing Profiles](/F2P_User_Testing_Profiles.png)

![User Testing](/F2P_User_Testing.gif)

</div>

## Iterations 

Based on the user interviews, we proposed iterations for areas of confusion. We ranked the severity of the changes and discussed the level of need for each. We also considered the feasibility of the iterations tangentially to the developers' progress. 

![Iterations](/F2P_Iterations.png)

# Final Designs

After 8 months of design work and 10 months of development, Farm2People’s website was ready to deploy! Here are the final designs as well as the Github repository and Figma prototype.

## Public Pages 

![Public Pages](/F2P_Public_Pages.gif)

## Onboarding

![Onboarding](/F2P_Onboarding.gif)

## Registration

![Registration](/F2P_Registration.gif)

## Marketplace

Nonprofits and other buyers can purchase produce from different farms around their area

![Marketplace](/F2P_Marketplace.gif)

## Checkout

Buyers can request a quote through the checkout system

![Checkout](/F2P_Checkout.gif)

## Orders 

Once buyers have requested a quote, they can review their orders and approve or cancel them

![Orders](/F2P_Orders.gif)

## Profile

![Profile](/F2P_Profile.png)

## Seller's Dashboard

![Seller's Dashboard](/F2P_Sellers_Dashboard.png)

## Inventory Manager 

Farmers can manage their inventory throughout different harvesting seasons

![Inventory Manager](/F2P_Inventory_Manager1.gif)

![Inventory Manager](/F2P_Inventory_Manager2.gif)

![Inventory Manager](/F2P_Inventory_Manager3.gif)

## Notifications
![Notifications](/F2P_Notifications.png)

# Next Steps 

Because of the large scope of the project, we handed off a few undeveloped features for the Farm2People development team to implement. If we had more time, the designers would have tested the seller’s dashboard and onboarding as well as conducted usability testing on more farmers and nonprofits.
