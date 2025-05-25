# React Routing Example with Wildlife App

This project demonstrates basic **React Router** usage for a small Wildlife-themed website. It includes multiple pages/components and navigation using `react-router-dom`.

---

## Features

- Home page with hero section and call-to-action  
- About page describing the mission  
- Contact page with a contact form and info  
- GitHub info page fetching and displaying GitHub user data with loader  
- Dynamic User page showing user ID from the URL  

---

## Setup and Installation

1. Clone the repo  
2. Run `npm install` to install dependencies  
3. Run `npm start` to launch the development server

---

## Routing Overview

The app uses `react-router-dom` for routing:

```jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import { Github, githubInfoLoader } from './Github';
import User from './User';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/github" element={<Github />} loader={githubInfoLoader} />
        <Route path="/user/:userid" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


Key Points
Static Routes: /, /about, /contact render static components.

Loader Data: The GitHub page uses a loader to fetch GitHub API data before rendering.

Dynamic Route: /user/:userid captures a dynamic userid parameter from the URL accessible inside the User component with useParams.

Components Summary
Home: Main landing page with donation call-to-action

About: Mission statement and foundation goals

Contact: Contact details and form with validation-ready inputs

Github: Shows GitHub user info fetched via loader

User: Displays dynamic user ID from URL with light green theme

Dependencies
React

react-router-dom (v6+)

Tailwind CSS for styling

