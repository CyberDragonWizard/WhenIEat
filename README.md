# WhenIEat README <!-- omit in toc -->


- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Hierarchy](#component-hierarchy)
    - [Component Breakdown](#component-breakdown)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

WhenIEat is an easy to use nutrition/calorie tracker app, allowing a user to keep track of their daily caloric intake.


<br>

## MVP

Server (Back End)
Have a RESTful JSON API.
Build a Ruby on Rails server, exposing RESTful JSON endpoints.
Build a database with at least 3 tables:
There must be at least 1 association between your tables. (1:m or m:m)
Utilize Rails to define models for interacting with the database.
Implement working generic controller actions for Full CRUD (index, show, create, update, delete) between your non-User tables
Note that if you choose to do Authentication, CRUD on your User table does not count toward this requirement.
Client (Front End)
Have a working, interactive React app, built using npx create-react-app.
Have at least 8 separate, rendered components in an organized and understandable React file structure.
Utilize functional and class React components appropriately.
Utilize state and props in your components efficiently.
Use only React for DOM Manipulation.
Consume data from your Ruby on Rails API, and render that data in your components.
Utilize React Router, for client-side routing.
Demonstrate Full CRUD actions ( index, show, create, update, and delete ) on the front end.
Note that if you decide to implement Auth, your full CRUD actions must be covered amongst your non-User tables.
Styling
Be styled with CSS (or SCSS, if you'd prefer).
Use Flexbox or Grid in your layout design.
Implement 2 media queries for responsive design on 3 screen sizes (including desktop).

<br>

### Goals

- _Lorem ipsum, dolor sit amet,_
- _consectetur adipiscing elit._
- _Phasellus dapibus fermentum risus vitae bibendum._
- _Integer vel ipsum mollis odio sollicitudin ornare eu vel ex._
- _etc._

<br>

### Libraries and Dependencies

> Use this section to list all supporting libraries and dependencies, and their role in the project. Below is an example - this needs to be replaced!

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _Lorem ipsum dolor sit amet, consectetur._ |
|   React Router   | _Lorem ipsum dolor sit amet, consectetur._ |
| React SemanticUI | _Lorem ipsum dolor sit amet, consectetur._ |
|     Express      | _Lorem ipsum dolor sit amet, consectetur._ |
|  Express Router  | _Lorem ipsum dolor sit amet, consectetur._ |

<br>

### Client (Front End)

#### Wireframes

> Use the Wireframes section to display desktop, tablet and mobile views. No hand-drawn wireframes. Use a tool like wireframe.cc, Whimsical or AdobeXD

https://i.imgur.com/rcDCLYE.png

- Desktop Landing

https://i.imgur.com/4JV2Nwz.png

- Desktop Landing - Sign Up Model

https://i.imgur.com/qYFi138.png

- Desktop Landing - More Info Model

https://i.imgur.com/FEAJkqz.png

- Desktop - Home Page

https://i.imgur.com/D31KtXQ.png

- Desktop - Home Page - Add Item Model

https://i.imgur.com/AfWYwYn.png

- Desktop - Account Page

https://i.imgur.com/D1qcdYg.png

- Desktop - Account Page - Delete Model

https://i.imgur.com/YUfFKkr.png

- Desktop - Stats Page

#### Component Tree

> Use this section to display the structure of how your React components are being rendered. This should show the parent to child relation between you components. In other words, show which components are rendering the other components. 

#### Component Hierarchy

> Use this section to define your React components and the data architecture of your app. This should be a reflection of how you expect your directory/file tree to look like. 

``` structure

src
|__ assets/
      |__ fonts
      |__ graphics
      |__ images
      |__ mockups
|__ components/
      |__ Header.jsx
|__ services/

```

#### Component Tree

> Use this section to include a link to your component tree.

[Component tree](url)

#### Time Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above.

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Add Contact Form    |    L     |     3 hrs      |     2 hrs     |    3 hrs    |
| Create CRUD Actions |    H     |     3 hrs      |     1 hrs     |     TBD     |
| TOTAL               |          |     6 hrs      |     3 hrs     |     TBD     |

> _Why is this necessary? Time frames are key to the development cycle. You have limited time to code your app, and your estimates can then be used to evaluate possibilities of your MVP and post-MVP based on time needed. It's best you assume an additional hour for each component, as well as a few hours added to the total time, to play it safe._

<br>

### Server (Back End)

#### ERD Model

https://i.imgur.com/YQiQrzJ.png

<br>

***

## Post-MVP

> Use this section to document ideas you've had that would be fun (or necessary) for your Post-MVP. This will be helpful when you return to your project after graduation!

***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.
