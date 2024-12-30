import codes from "./codes.js";

// Cache DOM elements and references
const tabs = document.querySelectorAll('.code-block-tab');
const contents = document.querySelectorAll('.code-block-contents div');

// Initialize event listeners
tabs.forEach((tab, index) => tab.addEventListener('click', () => highlight(tab, index)));

// Function to highlight code blocks
function highlight(tab, index) {
    // Hide all content divs and remove 'active' class from all tabs
    contents.forEach(content => content.style.display = "none");
    tabs.forEach(t => t.classList.remove('active'));

    // Show the selected content div and add 'active' class to the selected tab
    const selectedContent = contents[index];
    selectedContent.style.display = "block";
    tab.classList.add('active');

    // Highlight the code if not already done
    const codeElm = selectedContent.querySelector('code');
    if (codeElm.getAttribute('data-highlighted') === "yes") return;

    const type = tab.getAttribute('type');
    const code = codes[type];
    codeElm.textContent = code;

    // Apply Highlight.js
    hljs.highlightElement(codeElm);
}

// Initial highlight
highlight(tabs[0], 0);

// Initialize Typed.js
new Typed("#auto-type", {
    stringsElement: '#typed-strings',
    typeSpeed: 50,
    backSpeed: 40,
    loop: true
});


document.querySelector('.menu-open').addEventListener('click', () => {
    document.querySelector('nav').classList.add('open');
});

document.querySelector('.menu-close').addEventListener('click', () => {
    document.querySelector('nav').classList.remove('open');
});

document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('nav').classList.remove('open');
        // acitvate the clicked link
        document.querySelectorAll('nav a').forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    });
});

document.querySelectorAll('.section-skills-item,.section-projects-item').forEach(item => {
    item.setAttribute('data-aos', 'fade-up');
});
AOS.init();
