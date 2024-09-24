# 🌐 URL Shortener App

A simple URL shortener application built with EJS, Express, and MongoDB. This app allows users to shorten long URLs and easily manage them with a clean UI.

## 🚀 Features

- 🔗  Shorten URLs : Converts long URLs into short, easy-to-share links.
- 💾  MongoDB Integration : Stores and manages original and shortened URLs using MongoDB.
- 🖥️  Dynamic UI : Built using EJS templates for dynamic content rendering.
- ⚡  Fast and Lightweight : Powered by Express.js for quick and efficient routing.


## 🛠️ Technologies Used

-  Node.js : Backend runtime environment.
-  Express.js : Lightweight web framework for routing and middleware.
-  EJS : Templating engine for rendering dynamic content.
-  Mongoose : MongoDB object modeling tool for schema-based data management.
-  CSS : Custom styles for a modern and responsive user interface.


## 📦 Installation

1.  Clone the repository : ```bash
   git clone https://github.com/aditya9587/url-shortener-app.git

2. Install dependencies
    :npm install

3.Set up environment variables: Create a .env file in the root directory and add your MongoDB URI.
    :MONGO_URI=your-mongodb-uri

4. Run the app:
    npm start

5. Access the app: Open your browser and navigate to:
    http://localhost:3000

🌱 Usage

Enter the original URL: On the home page, input the long URL you wish to shorten.
Get the short URL: Once submitted, the app generates a shortened URL.
Access the original URL: Use the shortened URL to redirect to the original page.

👷 Future Improvements

🔍 Analytics: Add URL visit statistics to track usage.
🔑 Authentication: Allow users to create accounts and manage their shortened URLs.
📝 Custom Aliases: Allow users to create custom short URLs 