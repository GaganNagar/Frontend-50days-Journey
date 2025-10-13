const flashcards = {
            html: [
                { question: "What does HTML stand for?", answer: "HyperText Markup Language" },
                { question: "Which tag is used for the largest heading?", answer: "<h1>" },
                { question: "What is the correct element for a line break?", answer: "<br>" },
                { question: "What is the purpose of the <head> element?", answer: "It contains meta-information like the title and links to stylesheets." },
                { question: "How do you create an unordered list?", answer: "Using <ul> and <li> tags." },
                { question: "What attribute defines inline styles?", answer: "style" },
                { question: "Which element specifies a footer for a document?", answer: "<footer>" },
                { question: "Difference between <div> and <span>?", answer: "<div> is a block-level element, while <span> is an inline-level element." },
                { question: "How do you embed an image?", answer: "Using the <img> tag with 'src' and 'alt' attributes." },
                { question: "What is the purpose of the 'alt' attribute?", answer: "Provides alternative text for an image for accessibility (screen readers)." },
                { question: "How do you create a hyperlink?", answer: "Using the <a> tag with the 'href' attribute." },
                { question: "Which tag is used to define a table?", answer: "<table>, with <tr> for rows, and <td> or <th> for cells." },
                { question: "What is the function of the <form> tag?", answer: "It's used to create an HTML form for user input." },
                { question: "What is the difference between 'GET' and 'POST' methods in forms?", answer: "'GET' appends form data to the URL, while 'POST' sends it in the HTTP request body." },
                { question: "What are semantic HTML elements?", answer: "Elements with meaning, like <header>, <footer>, <article>, and <section>." },
                { question: "Which attribute specifies the character encoding for the HTML document?", answer: "The 'charset' attribute inside a <meta> tag." },
                { question: "How do you add a comment in HTML?", answer: "" },
                { question: "What is the purpose of the <!DOCTYPE html> declaration?", answer: "It tells the browser that the document is an HTML5 document." },
                { question: "Which tag is used to embed a video?", answer: "The <video> tag." },
                { question: "What is the 'target' attribute in an <a> tag for?", answer: "Specifies where to open the linked document (e.g., '_blank' for a new tab)." },
                { question: "How do you create a checkbox input field?", answer: "<input type='checkbox'>" },
                { question: "What does the <nav> element represent?", answer: "A section of a page that contains navigation links." },
                { question: "What is the purpose of 'colspan' and 'rowspan' attributes in a table?", answer: "They are used to make a cell span over multiple columns or rows." },
                { question: "Which element is used to create a dropdown list?", answer: "<select> with <option> elements inside." },
                { question: "What is the 'placeholder' attribute in an <input> tag?", answer: "Provides a short hint that describes the expected value of an input field." },
                { question: "Can you nest a block-level element inside an inline element?", answer: "No, this is generally not allowed and can lead to validation errors." },
                { question: "What is the purpose of the <aside> element?", answer: "Represents content that is tangentially related to the content around it (e.g., a sidebar)." },
                { question: "How do you create a radio button?", answer: "<input type='radio'>. Radio buttons with the same 'name' attribute are in a group." },
                { question: "What is the 'required' attribute in an input field for?", answer: "Specifies that the input field must be filled out before submitting the form." },
                { question: "What is the HTML entity for the copyright symbol?", answer: "&copy; or &#169;" },
                { question: "Which tag defines a section in a document?", answer: "<section>" },
                { question: "What is the function of the 'defer' attribute in a <script> tag?", answer: "It ensures the script is executed after the document has been parsed, but before DOMContentLoaded." },
                { question: "How do you create a numbered list?", answer: "Using the <ol> (ordered list) tag with <li> items." },
                { question: "What does the <strong> tag do?", answer: "It defines text with strong importance. Browsers typically render this as bold text." },
                { question: "Which tag is used to define a short quotation?", answer: "<q>" },
                { question: "What is the purpose of the 'id' attribute?", answer: "Specifies a unique id for an HTML element. It's used by CSS and JavaScript to select and manipulate the element." },
                { question: "What is the 'class' attribute used for?", answer: "Specifies one or more class names for an element, used for styling with CSS or selecting with JS." },
                { question: "What is the 'lang' attribute in the <html> tag for?", answer: "Declares the language of the Web page, which is important for accessibility and search engines." },
                { question: "Which tag represents the main content of an HTML document?", answer: "<body>" },
                { question: "What is an iframe used for?", answer: "To embed another HTML document within the current one." },
                { question: "What is the difference between <header> and <head>?", answer: "<head> contains meta-data for the whole page. <header> is a semantic tag for introductory content of a section." },
                { question: "How can you disable a form input field?", answer: "By adding the 'disabled' attribute to the <input> element." },
                { question: "What does the <em> tag represent?", answer: "It marks text that has stress emphasis. Browsers usually render this in italic." },
                { question: "Which element defines preformatted text?", answer: "<pre>. It preserves both spaces and line breaks." },
                { question: "What is the purpose of the <figure> and <figcaption> elements?", answer: "<figure> is for self-contained content (like images), and <figcaption> provides a caption for it." },
                { question: "How do you specify a background color for a page in HTML?", answer: "This is best done with CSS, but can be done with the 'bgcolor' attribute on the <body> tag (obsolete)." },
                { question: "What is the 'viewport' meta tag for?", answer: "It gives the browser instructions on how to control the page's dimensions and scaling for responsive design." },
                { question: "Which HTML5 element is used for drawing graphics on the fly?", answer: "<canvas>" },
                { question: "What is the purpose of the <label> tag in a form?", answer: "It defines a label for many form elements, improving usability and accessibility." },
                { question: "How do you define a variable in CSS?", answer: "Using custom properties, like '--main-color: #ff0000;' inside a selector like ':root'." }
            ],
            css: [
                { question: "What does CSS stand for?", answer: "Cascading Style Sheets" },
                { question: "Which property controls the text size?", answer: "font-size" },
                { question: "How do you select an element with id 'header'?", answer: "#header" },
                { question: "What is the 'box model'?", answer: "It describes the rectangular boxes generated for elements: content, padding, border, and margin." },
                { question: "How do you make text bold?", answer: "font-weight: bold;" },
                { question: "What is 'display: flex;' for?", answer: "It creates a flex container, enabling a flexible box layout for its children." },
                { question: "How do you add comments in CSS?", answer: "/* This is a comment */" },
                { question: "Difference between 'margin' and 'padding'?", answer: "Padding is the space inside an element's border; Margin is the space outside it." },
                { question: "Which property changes the background color?", answer: "background-color" },
                { question: "What does 'position: relative;' do?", answer: "It positions an element relative to its normal position in the document flow." },
                { question: "How do you select elements with a specific class?", answer: ".classname" },
                { question: "What is the purpose of the 'z-index' property?", answer: "It controls the stacking order of positioned elements." },
                { question: "Difference between 'em' and 'rem' units?", answer: "'em' is relative to the font-size of the parent, while 'rem' is relative to the root (<html>) font-size." },
                { question: "What is a CSS selector?", answer: "A pattern used to select the element(s) you want to style." },
                { question: "What does the 'float' property do?", answer: "It places an element on the left or right side of its container, allowing text and inline elements to wrap around it." },
                { question: "How do you apply a style to all <p> elements?", answer: "p { /* styles */ }" },
                { question: "What is 'specificity' in CSS?", answer: "The set of rules browsers use to determine which CSS style is applied to an element when multiple rules conflict." },
                { question: "What does 'box-sizing: border-box;' do?", answer: "It tells the browser to include the padding and border in the element's total width and height." },
                { question: "How do you center a block-level element horizontally?", answer: "Set 'margin-left' and 'margin-right' to 'auto'." },
                { question: "What is a pseudo-class?", answer: "A keyword added to a selector that specifies a special state of the selected element(s), like :hover." },
                { question: "What is a pseudo-element?", answer: "A keyword added to a selector that lets you style a specific part of the selected element(s), like ::before." },
                { question: "How do you link an external stylesheet?", answer: "<link rel='stylesheet' href='styles.css'>" },
                { question: "What is the 'display: grid;' property for?", answer: "It enables a two-dimensional grid-based layout system." },
                { question: "What is the difference between 'visibility: hidden;' and 'display: none;'?", answer: "'visibility: hidden' hides the element, but it still takes up space. 'display: none' removes it completely." },
                { question: "How do you create a CSS variable?", answer: "Inside a selector (like :root), declare it with two dashes, e.g., --main-color: blue;" },
                { question: "What does the 'opacity' property do?", answer: "It sets the transparency level of an element, from 0 (completely transparent) to 1 (fully opaque)." },
                { question: "How can you select the first child of an element?", answer: "Using the ':first-child' pseudo-class." },
                { question: "What is the purpose of 'media queries'?", answer: "To apply different styles for different media types/devices, essential for responsive design." },
                { question: "How do you select an input field that is required?", answer: "input:required" },
                { question: "What is the CSS 'transform' property used for?", answer: "It allows you to move, rotate, scale, and skew elements." },
                { question: "What is a 'transition' in CSS?", answer: "It allows you to change property values smoothly over a given duration." },
                { question: "How do you combine selectors?", answer: "You can group them with a comma (p, h1), or combine for specificity (div p)." },
                { question: "What does the 'overflow' property control?", answer: "What happens to content that is too big to fit into an element's box." },
                { question: "How do you change the font of an element?", answer: "Using the 'font-family' property." },
                { question: "What is the 'line-height' property for?", answer: "It sets the distance between lines of text." },
                { question: "What is the difference between an 'inline' and 'block' element?", answer: "Block elements start on a new line and take up the full width. Inline elements do not start on a new line." },
                { question: "How do you add a shadow to text?", answer: "Using the 'text-shadow' property." },
                { question: "What is the purpose of the '!important' rule?", answer: "To override any other declarations. Its use is generally discouraged." },
                { question: "How can you select an element that is the direct child of another?", answer: "Using the child combinator (>), for example 'div > p'." },
                { question: "What does 'position: fixed;' do?", answer: "It positions an element relative to the viewport, meaning it always stays in the same place even if the page is scrolled." },
                { question: "How do you style the border of an element?", answer: "Using 'border-width', 'border-style', and 'border-color', or the shorthand 'border' property." },
                { question: "What is 'flex-wrap' in a flex container for?", answer: "It specifies whether flex items are forced onto one line or can wrap onto multiple lines." },
                { question: "What does 'justify-content' control in a flex container?", answer: "The alignment of items along the main axis." },
                { question: "What does 'align-items' control in a flex container?", answer: "The alignment of items along the cross axis." },
                { question: "How do you select an <a> tag only when it has a 'title' attribute?", answer: "a[title]" },
                { question: "What is the 'object-fit' property used for?", answer: "It specifies how an <img> or <video> should be resized to fit its container." },
                { question: "What is a CSS framework?", answer: "A pre-prepared library of CSS code that is meant to allow for easier, more standards-compliant web design (e.g., Bootstrap, Tailwind CSS)." },
                { question: "How do you round the corners of an element?", answer: "Using the 'border-radius' property." },
                { question: "What is the 'cursor' property for?", answer: "It specifies the mouse cursor to be displayed when pointing over an element." },
                { question: "What is CSS Grid Layout?", answer: "A 2-dimensional layout system for the web. It lets you lay content out in rows and columns." }
            ],
            js: [
                { question: "How do you declare a variable?", answer: "Using var, let, or const keywords." },
                { question: "What is a 'closure'?", answer: "A function that has access to its outer function's scope, even after the outer function has returned." },
                { question: "How do you write 'Hello World' in an alert box?", answer: "alert('Hello World');" },
                { question: "What is the 'DOM'?", answer: "Document Object Model, a programming interface for web documents." },
                { question: "How do you add an event listener?", answer: "element.addEventListener('event', function);" },
                { question: "What is 'hoisting'?", answer: "JavaScript's default behavior of moving variable and function declarations to the top of their scope." },
                { question: "What is the 'this' keyword?", answer: "It refers to the object it belongs to. Its value depends on how the function is called." },
                { question: "How do you convert a string to a number?", answer: "Using parseInt(), parseFloat(), or the Number() constructor." },
                { question: "Difference between '==' and '==='?", answer: "'==' performs type coercion (loose equality), while '===' does not (strict equality)." },
                { question: "What is an 'arrow function'?", answer: "A concise way to write functions in ES6 (=>). They do not have their own 'this' context." },
                { question: "What is a 'Promise' in JavaScript?", answer: "An object representing the eventual completion (or failure) of an asynchronous operation." },
                { question: "How do you comment in JavaScript?", answer: "// for single-line comments, /* ... */ for multi-line comments." },
                { question: "What is JSON?", answer: "JavaScript Object Notation, a lightweight format for storing and transporting data." },
                { question: "How do you select an HTML element by its ID?", answer: "document.getElementById('elementId');" },
                { question: "What does the `map` method do on an array?", answer: "It creates a new array by calling a function on every element of the original array." },
                { question: "What does the `filter` method do on an array?", answer: "It creates a new array with all elements that pass the test implemented by the provided function." },
                { question: "What is 'async/await'?", answer: "Syntactic sugar built on top of Promises that makes asynchronous code look and behave more like synchronous code." },
                { question:- "What are template literals?", answer: "String literals allowing embedded expressions, denoted with backticks (``). E.g., `Hello, ${name}!`." },
                { question: "What is 'localStorage'?", answer: "A web storage object that allows you to save key/value pairs in the browser, with no expiration date." },
                { question: "What is the difference between 'null' and 'undefined'?", answer: "'undefined' means a variable has been declared but not assigned a value. 'null' is an assignment value that represents no value." },
                { question: "How do you get the length of an array?", answer: "Using the '.length' property." },
                { question: "What is 'event delegation'?", answer: "A technique involving adding a single event listener to a parent element to manage events for all of its children." },
                { question: "What does 'destructuring' mean?", answer: "A syntax that makes it possible to unpack values from arrays, or properties from objects, into distinct variables." },
                { question: "What is the spread operator (...)?", answer: "It allows an iterable (like an array) to be expanded in places where zero or more arguments or elements are expected." },
                { question: "What is the purpose of the 'try...catch' statement?", answer: "To handle errors. Code in the 'try' block is executed, and if an error occurs, the 'catch' block is executed." },
                { question: "How do you create an object in JavaScript?", answer: "Using object literal syntax { key: 'value' } or the 'new Object()' constructor." },
                { question: "What is a 'callback function'?", answer: "A function passed into another function as an argument, which is then invoked inside the outer function." },
                { question: "How do you check the type of a variable?", answer: "Using the 'typeof' operator." },
        { question: "What is 'NaN'?", answer: "Not-a-Number. It's a property of the global object, representing a value that is not a legal number." },
                { question: "What is the 'Array.forEach' method?", answer: "It executes a provided function once for each array element." },
                { question: "What is the purpose of 'use strict'?", answer: "It enables Strict Mode, which catches common coding mistakes and 'unsafe' actions." },
                { question: "How can you round a number to the nearest integer?", answer: "Math.round()" },
                { question: "What is the difference between `let` and `const`?", answer: "`let` allows you to reassign the variable's value, while `const` declares a constant whose value cannot be reassigned." },
                { question: "What is an API?", answer: "Application Programming Interface. It's a set of rules that allows different software applications to communicate with each other." },
                { question: "How do you fetch data from an API?", answer: "Using the `fetch()` API or libraries like Axios." },
                { question: "What is a 'module' in JavaScript (ES6)?", answer: "A self-contained file of JavaScript code. You can `export` parts of a module and `import` them into other modules." },
                { question: "What is the '...rest' parameter syntax?", answer: "It allows a function to accept an indefinite number of arguments as an array." },
                { question: "What is the ternary operator?", answer: "A shorthand for an if-else statement. Syntax: `condition ? exprIfTrue : exprIfFalse`." },
                { question: "How do you add an element to the end of an array?", answer: "Using the `push()` method." },
                { question: "How do you remove the last element from an array?", answer: "Using the `pop()` method." },
                { question: "What is the `this` keyword's value in an arrow function?", answer: "It lexically binds its context, so `this` has the same meaning as in its parent scope." },
                { question: "How do you clone an object?", answer: "Using the spread operator `{...obj}` or `Object.assign({}, obj)` for a shallow copy." },
                { question: "What is the call stack?", answer: "A mechanism for the JavaScript interpreter to keep track of its place in a script that calls multiple functions." },
                { question: "What is the event loop?", answer: "A mechanism that allows JavaScript to perform non-blocking operations by offloading operations to the system kernel whenever possible." },
                { question: "What does `JSON.stringify()` do?", answer: "Converts a JavaScript object or value to a JSON string." },
                { question: "What does `JSON.parse()` do?", answer: "Parses a JSON string, constructing the JavaScript value or object described by the string." },
                { question: "What is a Set in JavaScript?", answer: "A collection of unique values. Each value can only occur once in a Set." },
                { question: "What is a Map in JavaScript?", answer: "A collection of keyed data items, like an Object. But the main difference is that Map allows keys of any type." },
                { question: "What is a higher-order function?", answer: "A function that either takes one or more functions as arguments, or returns a function as its result." }
            ]
        };

        // --- DOM Elements ---
        const dom = {
            flashcard: document.getElementById('flashcard'),
            cardQuestion: document.getElementById('card-question'),
            cardAnswer: document.getElementById('card-answer'),
            prevBtn: document.getElementById('prev-btn'),
            nextBtn: document.getElementById('next-btn'),
            markKnownBtn: document.getElementById('mark-known-btn'),
            progressText: document.getElementById('progress-text'),
            progressBarFill: document.getElementById('progress-bar-fill'),
            subjectButtons: document.querySelectorAll('.subject-btn')
        };

        // --- Application State ---
        const state = {
            subject: null,
            cards: [],
            index: -1,
            known: new Set()
        };

        // --- Functions ---

        function shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
        }

        function selectSubject(subject) {
            state.subject = subject;
            state.cards = [...flashcards[subject]];
            shuffleArray(state.cards);
            state.index = 0;
            state.known.clear();
            render();

            // Update active button styling
            dom.subjectButtons.forEach(btn => {
                const isSelected = btn.dataset.subject === subject;
                btn.classList.toggle('bg-indigo-800', isSelected);
                btn.classList.toggle('bg-indigo-600', !isSelected);
                btn.classList.toggle('ring-2', isSelected);
            });
        }

        function render() {
            if (!state.subject || state.cards.length === 0) {
                updateCardContent("Select a subject to start the quiz!");
                return;
            }
            
            const card = state.cards[state.index];
            updateCardContent(card.question, card.answer);
            updateProgressDisplay();
            updateButtonStates();

            // Reset flip state on card change
            dom.flashcard.classList.remove('flipped');
        }

        function updateCardContent(question, answer = "") {
            dom.cardQuestion.textContent = question;
            dom.cardAnswer.textContent = answer;
        }

        function updateProgressDisplay() {
            const total = state.cards.length;
            const knownCount = state.known.size;
            
            if (total === 0) {
                dom.progressText.textContent = "0/0 (0 known)";
                dom.progressBarFill.style.width = '0%';
                return;
            }

            const progressPercent = (knownCount / total) * 100;
            dom.progressText.textContent = `${state.index + 1}/${total} (${knownCount} known)`;
            dom.progressBarFill.style.width = `${progressPercent}%`;

            // Update mark known button text and style
            if (state.known.has(state.index)) {
                dom.markKnownBtn.textContent = "Marked as Known";
                dom.markKnownBtn.classList.replace('bg-emerald-500', 'bg-emerald-700');
            } else {
                dom.markKnownBtn.textContent = "Mark as Known";
                dom.markKnownBtn.classList.replace('bg-emerald-700', 'bg-emerald-500');
            }
        }
        
        function updateButtonStates() {
            const noCards = state.cards.length === 0;
            dom.prevBtn.disabled = noCards || state.index === 0;
            dom.nextBtn.disabled = noCards || state.index === state.cards.length - 1;
            dom.markKnownBtn.disabled = noCards;
        }

        function flipCard() {
            if (state.subject) {
                dom.flashcard.classList.toggle('flipped');
            }
        }

        function navigateCards(direction) {
            const newIndex = state.index + direction;
            if (newIndex >= 0 && newIndex < state.cards.length) {
                state.index = newIndex;
                render();
            }
        }

        function toggleMarkKnown() {
            if (state.index === -1) return;

            if (state.known.has(state.index)) {
                state.known.delete(state.index);
            } else {
                state.known.add(state.index);
            }
            updateProgressDisplay();
        }

        // --- Event Listeners ---
        function initializeApp() {
            dom.flashcard.addEventListener('click', flipCard);
            dom.nextBtn.addEventListener('click', () => navigateCards(1));
            dom.prevBtn.addEventListener('click', () => navigateCards(-1));
            dom.markKnownBtn.addEventListener('click', toggleMarkKnown);

            dom.subjectButtons.forEach(button => {
                button.addEventListener('click', (e) => selectSubject(e.target.dataset.subject));
            });

            // Initial render
            updateCardContent("Select a subject to start the quiz!");
            updateButtonStates();
            updateProgressDisplay();
        }

        // Start the app
        initializeApp();