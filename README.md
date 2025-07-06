This project demonstrates the same responsive web layout built using three different styling approaches:
Vanilla CSS, Sass, and Tailwind CSS, all managed through a Gitflow branching workflow.

🔀 Branch Structure

features/vanilla: HTML and plain CSS without pre-processors or utility frameworks.

features/sass: Modular Sass architecture, compiled using Live Sass Compiler in Visual Studio Code. No bundlers like Vite or Webpack are used.

features/tailwind: Fully styled with Tailwind CSS utility classes, without additional CSS or Sass.



🎨 Tailwind Approach 

The features/tailwind branch replaces all custom CSS with Tailwind utility classes, removing the need for Sass variables or mixins.

Key aspects:

No external stylesheets, only Tailwind classes in the HTML.
Transitions, hover effects, and responsive design handled entirely through Tailwind utilities.
Interactive components (accordion, FAQ toggles) are implemented using pure HTML and Tailwind states (peer-checked), without JavaScript.


🔧 Development Setup (Tailwind Branch)

To work efficiently with Tailwind CSS, follow these steps:

1. Install Tailwind CSS

This project does not include Tailwind CLI or Node.js setup, but you can enable Tailwind IntelliSense for better development experience.

Visit the official documentation for the latest installation guides:
👉 https://tailwindcss.com/docs/installation


2. Recommended VS Code Extensions

Install these extensions from the VS Code Marketplace:

    Tailwind CSS IntelliSense → Provides autocomplete, class name suggestions, and linting for Tailwind.
    Marketplace link: https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss

    Live Server → To open your HTML files and view them live in the browser.

⚙️ No additional build tools like Vite or Webpack are required for this exercise since Tailwind classes are written directly in the HTML.