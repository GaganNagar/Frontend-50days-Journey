# 10-Forms & Forms Validation — README

## Project Overview
This folder contains JavaScript projects focusing on **form handling and validation**.  
The main goal is to **learn how to capture user input, validate it using JS, and provide interactive feedback**.  
A highlight project in this folder is the **Email & Password Validator**, demonstrating advanced **regex validation and DOM integration**.

---

## Concepts Covered
- Selecting form elements with `querySelector` and `getElementById`  
- Handling form submissions with `preventDefault()`  
- Validating input fields using **Regular Expressions (Regex)**  
- Displaying dynamic feedback messages on the page  
- Conditional logic based on user input  
- Enhancing user experience with **error messages and success indicators**  

---

## Folder Structure
10-Forms & Forms Validation/
├── EmailPasswordValidator/
│ ├── index.html
│ ├── style.css
│ └── script.js
├── form-practice.js
└── examples/
└── regex-examples.js



---

## Code Snippets

### HTML (Form Example)
```html
<form id="signupForm">
  <label for="email">Email:</label>
  <input type="text" id="email" name="email" required>

  <label for="password">Password:</label>
  <input type="password" id="password" name="password" required>

  <button type="submit" id="submit">Submit</button>
</form>
<div id="message"></div>

JavaScript (Validation Example)

const form = document.querySelector('#signupForm');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const message = document.querySelector('#message');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  const passwordPattern = /^(?=.*[A-Z])(?=.*[0-9]).{6,}$/;

  if (!email.value.match(emailPattern)) {
    message.textContent = "Invalid Email!";
    message.style.color = "red";
  } else if (!password.value.match(passwordPattern)) {
    message.textContent = "Password must have at least 6 characters, including one uppercase letter and one number.";
    message.style.color = "red";
  } else {
    message.textContent = "Form submitted successfully!";
    message.style.color = "green";
  }
});

CSS (Example)

form {
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: 2rem auto;
}

input, button {
  margin: 0.5rem 0;
  padding: 0.5rem;
}

#message {
  margin-top: 1rem;
  font-weight: bold;
}

Key Learnings / Skills Demonstrated
Implemented form handling and validation using JavaScript

Learned Regular Expressions (Regex) for input validation

Displayed real-time feedback on user input

Practiced DOM manipulation and event handling

Built a user-friendly and interactive form application

Future Improvements / Next Steps
Add real-time validation as user types

Include more fields (phone, username, confirm password)

Enhance UI with animations and visual cues

Connect form with a backend API to store submissions

Implement error logging and advanced validation rules

This project strengthens my skills in form handling, regex validation, and dynamic UI updates,
preparing me for more complex web applications in my 50-Day Frontend Development Journey. 🚀