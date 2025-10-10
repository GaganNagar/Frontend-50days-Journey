# 2-Basics of html&js — README

## Project Overview
This folder contains my **second HTML & CSS project** in my 50-Day Frontend Development Journey.  
It demonstrates a **Recipe Page** (Vada Pav recipe), focusing on proper semantic structure, advanced CSS layout techniques, and styling.  
The project emphasizes **clean design, readability, and content organization**.

---

## Concepts Covered
- Semantic HTML: `<header>`, `<main>`, `<section>`, `<article>`, `<footer>`  
- Lists: `<ul>`, `<ol>`, `<li>` for ingredients and steps  
- Images and media embedding (`<img>`)  
- Linking external CSS and basic page layout  
- CSS styling: typography, colors, spacing, background, hover effects  
- Box Model, margin, padding, and borders  
- Practice of **clean code and indentation**

---

## Folder Structure
2-Basics of html&js/
├── HTML TASK/
│ ├── recipe.html
│ ├── css/
│ │ └── style.css
│ └── assets/
│ └── (images of recipe)


## Code Snippets

### HTML
```html
<header>
  <h1>Vada Pav Recipe</h1>
</header>

<main>
  <section id="ingredients">
    <h2>Ingredients</h2>
    <ul>
      <li>Potatoes</li>
      <li>Vada Pav buns</li>
      <li>Spices</li>
      <li>Oil</li>
    </ul>
  </section>

  <section id="steps">
    <h2>Steps</h2>
    <ol>
      <li>Boil and mash potatoes</li>
      <li>Prepare spicy filling</li>
      <li>Shape into balls and fry</li>
      <li>Assemble in buns</li>
    </ol>
  </section>
</main>

<footer>
  <p>© 2025 Gagan Nagar | Frontend Developer</p>
</footer>

body {
  font-family: 'Poppins', sans-serif;
  background-color: #fff8f0;
  color: #333;
  margin: 0;
  padding: 0;
}

header {
  text-align: center;
  padding: 2rem;
  background-color: #ffd700;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

section {
  padding: 2rem;
  line-height: 1.6;
}

ul, ol {
  margin-left: 2rem;
}



Key Learnings / Skills Demonstrated
Practiced semantic HTML and proper content structure

Learned to use lists for ingredients and steps

Applied CSS styling techniques: typography, spacing, colors

Created a visually organized and readable recipe page

Improved layout design and code formatting

Future Improvements / Next Steps
Make the page responsive for mobile and tablet screens

Add interactive steps with JS (like toggling instructions)

Include images with hover effects

Enhance color palette and visual aesthetics

Integrate recipe search or filter functionality

This project builds upon my foundational HTML & CSS skills,
preparing me for interactive web development projects in the 50-Day Frontend Journey. 🚀