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

### Server (Back End) <!-- omit in toc -->

- Have a **RESTful JSON API**.
  - Build a **Ruby on Rails** server, exposing RESTful JSON endpoints.
  - Build a database with at least 3 tables:
  - Utilize **Rails** to define models for interacting with the database.
  - Implement working generic controller actions for Full CRUD (`index`, `show`, `create`, `update`, `delete`) between your non-User tables 

### Client (Front End) <!-- omit in toc -->

- Have a working, interactive **React** app, built using `npx create-react-app`.
  - Have at least 8 separate, rendered components in an organized and understandable React file structure.
  - Utilize functional and class React components appropriately.
  - Utilize state and props in your components efficiently.
  - Use _only_ React for DOM Manipulation.
- Consume data from your **Ruby on Rails API**, and render that data in your components.
- Utilize **React Router**, for client-side routing.
- Demonstrate Full CRUD actions ( `index`, `show`, `create`, `update`, and `delete` ) on the front end.

### Styling <!-- omit in toc -->

- Be styled with CSS (or SCSS, if you'd prefer).
- Use Flexbox or Grid in your layout design.
- Implement 2 media queries for responsive design on 3 screen sizes (including desktop).

<br>

### Goals

- Create a function full stack app.
- Implement Ruby on Rails.
- Implement ReactJS.
- Use profession and modern styling.
- Implement both internal and external API.

<br>

### Libraries and Dependencies



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

https://whimsical.com/G3ZFVJNSxGVWYN92iueUK6

#### Component Hierarchy



``` structure

src
|__ assets/
      |__ fonts
      |__ graphics
      |__ images
      |__ mockups
|__ components/
      |__ SignUp.jsx
      |__ UserInfo.jsx
      |__ MealTable.jsx
      |__ AddMealTable.jsx
      |__ AccountForm.jsx
      |__ DeleteModel.jsx
      |__ DeleteButton.jsx
      |__ LogoutButton.jsx
      |__ CancelForm.jsx
|__ shared/
      |__Layout.jsx
      |__Nav.jsx
      |__Header.jsx
      

```

#### Time Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above.

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Build Back End      |    H     |     4 hrs      |     xxxxx     |     xxx     |
| Authentication      |    H     |     3 hrs      |     xxxxx     |     xxx     |
| ReactJS Setup       |    H     |     1 hrs      |     xxxxx     |     xxx     |
| Internal API Comm.  |    H     |     4 hrs      |     xxxxx     |     xxx     |
| External API Comm.  |    H     |     4 hrs      |     xxxxx     |     xxx     |
| General JS          |    H     |     7 hrs      |     xxxxx     |     xxx     |
| CSS/Bootstrap       |    H     |     7 hrs      |     xxxxx     |     xxx     |
| TOTAL               |          |     30 hrs      |     xxxxx     |     xxx     |


<br>

### Server (Back End)

#### ERD Model

https://i.imgur.com/YQiQrzJ.png

<br>

***

## Post-MVP

- Make the app completely responsive
- Create a fully funtional 'stats page'

***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.
