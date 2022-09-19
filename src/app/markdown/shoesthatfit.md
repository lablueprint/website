<div class="title">
Shoes That Fit
</div>

Shoes That Fit tackles one of the most visible signs of poverty by giving kids in need new athletic shoes to attend school with dignity and joy. Since their founding in 1992, they’ve provided over 2 million pairs of brand new shoes and other necessities to children across the United States.

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
| Jan 2022 - June 2022 (6 months) | Figma; React, Airtable, Airlock |

</div>

| Team Members | |
| - | - |
| **_Project Leads_** | Michael Shi, Vivian Wong |
| **_Designers_** | Aye Pyae, Galen Heuer, Nasser Elhajjaoui |
| **_Developers_** | Jerry Xu, Jiamin Xu, Kevin Antony, Laura Lu, Ryan Kim, Siddharth Nandy, Solaine Zhao |

# Background
Across the country, an estimated 1 in 3 children live in a low-income household. One of the most visible and prevalent signs of poverty affecting these children is a lack of access to well-fitting shoes. Shoes That Fit is a non-profit organization based in Claremont, California which provides over 100,000 kids with new, proper fitting shoes each year through an impressive network of volunteer-run local grassroots chapters. Since their founding in 1992, Shoes That Fit has helped over 2 million students and schools supported by the organization have reported increased self-esteem, increased physical activity, improved behavior, and improved attendance for their students. 

# Problem
Shoes That Fit currently relies on a time-consuming manual approach to process orders and donations, and an inefficient digital process to manage inventory.

As the organization grows, the manual process becomes less manageable and less desirable.

# The Challenge
***How can we transition to an intuitive online system that integrates the current system used by Shoes That Fit while also allowing users to easily keep track of orders, donations, and inventory all in one place?***

# Solution
To address these issues, we proposed an all-encompassing web application with an educator portal and an admin portal that allows Shoes That Fit to efficiently manage their orders, donations, and inventory, featuring: 

1. A **profile system** for educators and administrators to ensure a secure web application and to avoid entering repetitive information for orders
2. A **summary table** of all orders which allows administrators to easily find the most recent orders and to check their status
3. **Intuitive forms** allowing administrators to easily update the inventory and register new donations
4. An **inventory table** where administrators can sort by different criteria to find specific shoes
5. An option to **automatically update** the inventory once an order is placed

# Research
## User Interviews
To gain insight into the users involved with the order process, we conducted **5 user interviews**, including 3 administrators from ShoesThatFit and 2 educator liaisons. Each of these interviews consisted of general questions to gain a better understanding of the current process and the difficulties faced by both internal and external users, including:

- What are some problems you face using the current methods for placing or fulfilling orders?
- For Educators: Can you walk us through the process of placing an order with ShoesThatFit?
- For Administrators: Can you walk us through the process of updating the inventory when an order or donation is received?

### Key Takeaways
From our initial interviews with users, we identified several different issues and goals:

- Maintaining familiarity with the current Excel spreadsheet system
- Adding flexibility with notes feature to record special preferences
    - Girls wanting boys style or vice-versa
    - Parents wanting Velcro shoes for young children
- Automating processes that are currently manual
    - Emailing back and forth to place orders
    - Using manila folders to organize past orders
    - These manual processes result in mistakes and inefficiency
- Synthesizing everything for orders, donations, and inventory into one application
    - Currently using multiple platforms like TopShelf and Salesforce for different needs
    - Inefficient and difficult for users to manage
- Ensuring that the system is easy-to-use
    - Many of the administrators and educators are not especially familiar with tech

# Ideation
## User Flow
![User Flow](https://github.com/lablueprint/website/blob/master/src/app/assets/images/projects/shoesthatfit/Untitled.png)

![Information Architecture](https://github.com/lablueprint/website/blob/master/src/app/assets/images/projects/shoesthatfit/information%20architecture.png)

# Low Fidelity Prototypes
### Donations Inflow
![Donations Inflow Lofi](https://github.com/lablueprint/website/blob/master/src/app/assets/images/projects/shoesthatfit/donationsinflow.png)

### Orders Inflow
![Orders Inflow Lofi](https://github.com/lablueprint/website/blob/master/src/app/assets/images/projects/shoesthatfit/ordersinflow.png)

### Inventory Catalog
![Inventory Catalog Lofi](https://github.com/lablueprint/website/blob/master/src/app/assets/images/projects/shoesthatfit/dashboardandinv.png)

### Order Form & History
![Order Form & History Lofi](https://github.com/lablueprint/website/blob/master/src/app/assets/images/projects/shoesthatfit/orderformandhis.png)

# Mid Fidelity Wireframes
### Donations Inflow
![Donations Inflow Midfi](https://github.com/lablueprint/website/blob/master/src/app/assets/images/projects/shoesthatfit/midfidonations.png)

### Orders Inflow
![Orders Inflow Midfi](https://github.com/lablueprint/website/blob/master/src/app/assets/images/projects/shoesthatfit/midfiorders.png)

### Dashboard & Inventory Catalog
![Dashboard & Inventory Catalog Midfi](https://github.com/lablueprint/website/blob/master/src/app/assets/images/projects/shoesthatfit/midfisdashbaord.png)

### Order Form & History
![Order Form & History Midfi](https://github.com/lablueprint/website/blob/master/src/app/assets/images/projects/shoesthatfit/midfisorderform.png)

# Usability Testing
We were able to recruit 4 participants, including 2 educators and 2 ShoesThatFit administrators, for usability testing. Our usability testing consisted of presenting the users with different tasks to complete on the prototype web application.

General tasks included:

- Creating an account as a new user
- Asking for general impressions of each new screen
- Logging out of the account

For administrators, these tasks included:

- Adding and removing items from the inventory
- Checking recent activity and looking for new orders
- Viewing the donations history and logging a new donation
- Finding the details for a new order
- Adjusting the status of a completed order

For educators, these tasks included:

- Placing a new order
- Adding a special note to an order
- Reviewing a previously placed order

## Key Findings & Suggestions

Through usability testing, our participants generally found the application design to be simple and clean. Furthermore, the users noted that the application was straightforward and easy-to-use, especially since it closely mirrored the current system used by ShoesThatFit administrators and educators. 

However, we were able to identify some issues with the design and usability of the application. Specifically, users mentioned: 

- Some elements were hard to see or nonintuitive
    - Making fonts bigger for user clarity
    - Enlarging button touch targets for easier usability
    - Allowing users to “refresh” the page using the navigation bar
    - Editing Filters button to include the word "filter"
- Adding more flexibility with the school database
    - Giving users the option to delete schools

# Final Solution
## Branding
![Branding Photos](https://github.com/lablueprint/website/blob/master/src/app/assets/images/projects/shoesthatfit/branding.png)

## Dashboard
<img src="https://github.com/lablueprint/website/blob/master/src/app/assets/images/projects/shoesthatfit/Dashboard.png" width=50% /><img src="https://github.com/lablueprint/website/blob/master/src/app/assets/images/projects/shoesthatfit/Recent%20Activity.png" width=50% />

## Inventory Catalog
<img src="https://github.com/lablueprint/website/blob/master/src/app/assets/images/projects/shoesthatfit/Inventory.png" width=50% /><img src="https://github.com/lablueprint/website/blob/master/src/app/assets/images/projects/shoesthatfit/inventory%20with%20filter.png" width=50% />

<img src="https://github.com/lablueprint/website/blob/master/src/app/assets/images/projects/shoesthatfit/Inventory%20search%20filter2.png" width=50% /><img src="https://github.com/lablueprint/website/blob/master/src/app/assets/images/projects/shoesthatfit/Add%20inventory%20populated.png" width=50% />


## Orders Inflow
![Orders Inflow](

## Donations Inflow
![Donations Inflow](

## Schools
<img src="https://github.com/lablueprint/website/blob/master/src/app/assets/images/projects/shoesthatfit/Schools%20Home.png" width=50% /><img src="https://github.com/lablueprint/website/blob/master/src/app/assets/images/projects/shoesthatfit/Add%20new%20school.png" width=50% />

<img src="https://github.com/lablueprint/website/blob/master/src/app/assets/images/projects/shoesthatfit/Add%20new%20school-1.png" width=50% /><img src="https://github.com/lablueprint/website/blob/master/src/app/assets/images/projects/shoesthatfit/Schools%20Home-1.png" width=50% />

## Educator Dashboard
<img src="https://github.com/lablueprint/website/blob/master/src/app/assets/images/projects/shoesthatfit/HOME%20Order%20History.png" width=50% /><img src="https://github.com/lablueprint/website/blob/master/src/app/assets/images/projects/shoesthatfit/Order%20History.png" width=50% />

<img src="https://github.com/lablueprint/website/blob/master/src/app/assets/images/projects/shoesthatfit/Order%20History-1.png" width=50% /><img src="https://github.com/lablueprint/website/blob/master/src/app/assets/images/projects/shoesthatfit/Order%20Form%20Details%20(Educator%20View).png" width=50% />


