
## **8-Objects Folder — README**

```markdown
# 8-Objects — README

## Project Overview
This folder contains JavaScript practice focused on **objects** and their manipulation.  
It helps understand **object creation, iteration, and advanced object methods**.

---

## Concepts Covered
- Object creation: literals, constructor, `Object.create()`  
- Accessing and modifying object properties  
- Iteration: `for-in` loop, `Object.keys()`, `Object.values()`, `Object.entries()`  
- Nested objects and arrays inside objects  
- Real-life example exercises

---

## Folder Structure
8-Objects/
├── objects-practice.js
├── nested-objects.js
└── examples/
└── object-examples.js



---

## Code Snippets
```javascript
const student = {
  name: "Gagan",
  age: 22,
  courses: ["HTML", "CSS", "JS"]
};

// Iterating using for-in
for (let key in student) {
  console.log(key, student[key]);
}

// Object.entries
Object.entries(student).forEach(([key, value]) => {
  console.log(key, value);
});
Key Learnings / Skills Demonstrated
Practiced object creation and property manipulation

Learned to iterate objects efficiently

Understood nested data structures

Gained confidence in real-world JS data handling

Future Improvements / Next Steps
Combine objects with arrays and DOM

Practice object destructuring and ES6 features

Apply objects in mini JS projects