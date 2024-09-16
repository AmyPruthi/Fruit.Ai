Fruit.ai
Fruit.ai is a health management tool designed to help users manage their health with the help of a chatbot, translator, and frequently asked questions (FAQs) feature. This product is mobile-friendly and includes CRUD functionality for the FAQ section. The following document outlines how to set up and use the frontend part of the Fruit.ai project.

🚀 Features
Login Page: Dummy login with redirect to the homepage.
Home Page: Central navigation hub with access to chatbot, translator, FAQ, and about sections.
Chatbot Page: Lists fruits as cards and provides detailed views on individual fruits.
Translator Page: Translates input into a regional language (dummy implementation).
FAQ Page: Supports CRUD operations (Create, Read, Update, Delete) for managing FAQs.
About Page: Information about the Fruit.ai product.

🛠️ Tech Stack
Frontend: React, React Router DOM
Styling: CSS, Tailwind (optional)
State Management: React Hooks (useState, useHistory)
Routing: React Router DOM

📂 Folder Structure
fruit-ai-frontend/
│
├── public/
│   └── index.html
│
├── src/
│   ├── components/
│   │   ├── LoginPage.jsx
│   │   ├── HomePage.jsx
│   │   ├── ChatbotPage.jsx
│   │   ├── TranslatorPage.jsx
│   │   ├── FaqPage.jsx
│   │   └── AboutPage.jsx
│   ├── App.js
│   └── index.js
│
├── .gitignore
├── package.json
└── README.md

⚙️ Installation & Setup
Clone the repository:

bash
Copy code
git clone https://github.com/yourusername/fruit-ai-frontend.git
Navigate to the project directory:

bash
Copy code
cd fruit-ai-frontend
Install the dependencies:

bash
Copy code
npm install
Run the development server:

bash
Copy code
npm start
Build the project for production:

bash
Copy code
npm run build
🌐 Pages Overview
Login Page:

Dummy login with a form for User ID and Password.
Successful login (with predefined credentials) redirects to the homepage.
Home Page:

Central hub with navigation buttons to the Chatbot, Translator, FAQ, and About pages.
Chatbot Page:

Displays a list of fruits as clickable cards.
Clicking on a card shows detailed information about the fruit.
Translator Page:

Provides a text input box where users can type in text.
Displays a hardcoded translation of the text into a regional language.
FAQ Page:

Displays a list of FAQs.
Allows users to add, edit, or delete FAQs (CRUD functionality).
About Page:

Contains static information about the Fruit.ai project.
📝 CRUD Functionality (FAQ Page)
The FAQ page allows users to:

Create: Add new questions and answers.
Read: View the list of existing FAQs.
Update: Edit existing FAQs.
Delete: Remove FAQs.
📲 Deployment
To deploy the project publicly, follow the steps:

Build the production files using:

bash
Copy code
npm run build
Deploy to a platform like:

Vercel
Netlify
GitHub Pages
