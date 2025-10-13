const flashcards = {
    html: [
        { question: "Explain the difference between `<strong>`, `<b>`, `<em>`, and `<i>` tags.", answer: "`<strong>` and `<em>` are semantic tags. `<strong>` indicates strong importance, while `<em>` indicates stress emphasis. `<b>` and `<i>` are purely presentational, making text bold or italic without adding semantic meaning. For accessibility, always prefer semantic tags." },
        { question: "What is the purpose of the `DOCTYPE` declaration?", answer: "It's an instruction to the web browser about what version of HTML the page is written in. `<!DOCTYPE html>` is the simplest and standard declaration for HTML5. Without it, browsers may enter 'quirks mode', leading to inconsistent rendering." },
        { question: "Describe the difference between `async` and `defer` attributes on a `<script>` tag.", answer: "`async` downloads the script without blocking the HTML parser and executes it as soon as it's downloaded. `defer` downloads the script without blocking, but guarantees execution only after the HTML parser has finished, in the order they appear." },
        { question: "What are ARIA roles and why are they important for accessibility?", answer: "ARIA (Accessible Rich Internet Applications) roles are attributes that define what an element does for screen readers. For example, `role='button'` on a `<div>` tells a screen reader to treat it as a button. They are crucial for making dynamic web content accessible to users with disabilities." },
        { question: "When would you use the `<picture>` element instead of an `<img>` element?", answer: "Use `<picture>` when you need art direction—serving completely different image files for different screen sizes (e.g., a cropped version on mobile). Use `<img>` with the `srcset` attribute for resolution switching—serving the same image at different resolutions." },
        { question: "Explain the difference between `localStorage`, `sessionStorage`, and `cookies`.", answer: "`localStorage` stores data with no expiration date. `sessionStorage` stores data for one session (data is lost when the browser tab is closed). `cookies` store small amounts of data sent with every HTTP request, have an expiration date, and are primarily used for server-side tracking." },
        { question: "What is the Shadow DOM and how does it relate to Web Components?", answer: "The Shadow DOM is a web standard that provides encapsulation for the structure and style of a web component. It keeps an element's features private, so they can be scripted and styled without fear of clashing with other parts of the document. It's a key part of the Web Components suite." },
        { question: "What is the difference between `null` and `undefined` in JavaScript?", answer: "'undefined' means a variable has been declared but has not yet been assigned a value. 'null' is an assignment value, intentionally assigned to a variable to represent 'no value' or an empty object." }
    ],
    css: [
        { question: "Explain CSS Specificity and how it is calculated.", answer: "Specificity is the algorithm browsers use to determine which CSS rule applies if multiple rules target the same element. It's calculated based on a selector's composition: Inline Styles (highest), IDs, Classes/attributes/pseudo-classes, and Elements/pseudo-elements (lowest). An ID will always override a class." },
        { question: "What is the 'box-sizing: border-box' property and why is it useful?", answer: "By default, an element's width and height apply only to its content box. `box-sizing: border-box` changes this, so the specified width and height include the content, padding, and border. This makes creating layouts much more intuitive and predictable." },
        { question: "What is a Block Formatting Context (BFC) and how can one be created?", answer: "A BFC is a part of a visual CSS rendering of a web page in which block-level elements are laid out. It contains floats and prevents margin collapsing. You can create a BFC by setting properties like `overflow: auto`, `display: flow-root`, or `position: absolute`." },
        { question: "What is the difference between `display: none`, `visibility: hidden`, and `opacity: 0`?", answer: "`display: none` removes the element from the document flow completely. `visibility: hidden` hides the element, but it still occupies its space in the layout. `opacity: 0` makes the element fully transparent, but it is still interactive (e.g., clickable)." },
        { question: "Explain the difference between Flexbox and CSS Grid.", answer: "Flexbox is designed for one-dimensional layouts (either a row or a column). CSS Grid is designed for two-dimensional layouts (both rows and columns). Use Flexbox for component-level layouts and Grid for page-level layouts." },
        { question: "What is a 'stacking context' and how is it related to `z-index`?", answer: "A stacking context is a three-dimensional conceptualization of HTML elements along an imaginary z-axis. It's formed by elements with properties like `position: relative/absolute/fixed/sticky` (with a `z-index` other than `auto`), `opacity` less than 1, or `transform`. `z-index` only works within the same stacking context." },
        { question: "What are CSS Custom Properties (variables) and what is their main advantage?", answer: "They are entities defined by CSS authors which contain specific values to be reused throughout a document. They start with `--` (e.g., `--main-color: blue`). Their main advantage is that they are dynamic and can be updated with JavaScript, unlike preprocessor variables (like in Sass)." },
        { question: "What is the purpose of the CSS `clamp()` function?", answer: "The `clamp()` function allows you to set a value that clamps between a minimum and maximum value, based on a preferred value. `font-size: clamp(1rem, 2.5vw, 2rem);` sets the font size to be 2.5% of the viewport width, but never smaller than 1rem or larger than 2rem. It's great for fluid typography." }
    ],
    js: [
        { question: "Explain the JavaScript Event Loop. What is the role of the Call Stack and Callback Queue?", answer: "The Event Loop is a mechanism that allows JavaScript to perform non-blocking (asynchronous) operations despite being single-threaded. When an async operation (like `setTimeout`) is called, it's passed to a Web API. When it's done, its callback is placed in the Callback Queue. The Event Loop constantly checks if the Call Stack is empty. If it is, it moves the first item from the queue to the stack to be executed." },
        { question: "What is a Closure in JavaScript? Provide a practical use case.", answer: "A closure is a function that remembers and has access to its lexical scope (the variables from its outer function), even after the outer function has finished executing. A practical use case is creating private variables or functions, like in a counter module where the count variable is not accessible from the global scope." },
        { question: "Explain the difference between `==` and `===`.", answer: "`===` is the strict equality operator. It checks for equality without performing type coercion, meaning both the type and value must be the same. `==` is the loose equality operator. It compares two values for equality after converting both values to a common type (type coercion). It's generally recommended to always use `===`." },
        { question: "What is 'prototypal inheritance' in JavaScript?", answer: "It's a feature where objects can inherit properties and methods from other objects. Every object has a private property which holds a link to another object called its prototype. When trying to access a property, if it's not found on the object itself, the search continues up the prototype chain until it's found or the chain ends (at null)." },
        { question: "What is the `this` keyword and how does its value differ in regular functions vs. arrow functions?", answer: "`this` refers to the object it belongs to. In a regular function, its value is determined by how the function is called (e.g., in a method, it's the object). In an arrow function, `this` is lexically bound, meaning it inherits the `this` value from its surrounding (parent) scope at the time of its creation." },
        { question: "What is a Promise? Explain what `.then()`, `.catch()`, and `.finally()` are for.", answer: "A Promise is an object representing the eventual completion or failure of an asynchronous operation. `.then()` is called when the Promise is fulfilled (succeeds), receiving the result. `.catch()` is called when the Promise is rejected (fails), receiving the error. `.finally()` is called regardless of whether the Promise was fulfilled or rejected, useful for cleanup code." },
        { question: "What is 'event delegation' and why is it useful?", answer: "Event delegation is a technique where you add a single event listener to a parent element to manage events for all of its children. When an event bubbles up from a child to the parent, you can check `event.target` to determine which child was clicked. It's useful for performance (fewer event listeners) and for handling dynamically added elements." },
        { question: "What is the difference between `map()`, `filter()`, and `forEach()` on an Array?", answer: "`forEach()` executes a function for each array element but does not return a value. `map()` executes a function for each element and returns a *new array* of the same length with the results. `filter()` executes a test for each element and returns a *new array* containing only the elements that passed the test." }
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
        btn.classList.toggle('ring-offset-2', isSelected);
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