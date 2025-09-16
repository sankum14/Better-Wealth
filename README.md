Better Wealth - Financial Advisor Marketplace
Better Wealth is a fully functional, single-file web application prototype designed to connect retail investors in India with professional, vetted financial advisors. The platform simulates an end-to-end user experience, from discovering an advisor to booking a session and completing a detailed investor profile, all without requiring a backend server.

The core concept is to provide a trustworthy and accessible "Astrotalk for personal finance" for the Indian market.

Core Features Implemented in this MVP
This prototype is built as a single better-wealth.html file but simulates a full-stack application using the browser's local storage as a database.

Trust-Focused Landing Page: A professional and engaging homepage designed to build confidence with clear messaging, social proof ("As Featured In"), and testimonials.

Dynamic Advisor Marketplace ("Find an Advisor"):

Features over 20 detailed and realistic profiles of Indian financial advisors.

Includes dynamic filtering by specialty (e.g., Retirement Planning, NRI Investments).

Allows sorting by consultation price (Low to High / High to Low).

Complete User Authentication:

Fully functional Sign-Up and Login pages for investor accounts.

The user's session is saved, keeping them logged in.

"For Advisors" Page: A dedicated informational page explaining the value proposition and verification process for financial professionals who wish to join the platform.

Interactive Investor Dashboard:

A secure area for logged-in users.

Risk Profile Questionnaire: A comprehensive 20-question survey to understand the investor's goals, risk tolerance, and financial situation.

Appointment Management: A section to view upcoming and past (simulated) appointments.

Intelligent Advisor Recommendations:

After an investor completes their profile, the application instantly analyzes their answers to identify key needs (e.g., "high-risk tolerance," "goal-oriented," "beginner").

It then redirects the user to a personalized page showcasing the top 3 recommended advisors whose specialties best match the user's profile.

Simulated Video Call Experience:

"Join Call" buttons become active just before a scheduled session.

Leads to a realistic video call screen with a 45-minute countdown timer.

Review and Rating System: After a session, users can leave a star rating and a written review for their advisor, which is then displayed on the advisor's public profile.

How to Run This Project
Because this is a self-contained prototype, running it is extremely simple:

Download the File: Get the better-wealth.html file.

Open in Browser: Open the file directly in any modern web browser such as Google Chrome, Firefox, or Safari.

That's it! The full application will be running locally on your machine.

Technology Stack
This project is intentionally built with a minimal and accessible stack to demonstrate the full functionality in a single file.

Frontend: Plain HTML

Styling: Tailwind CSS (loaded via CDN) for a modern, utility-first design.

Logic & "Backend": Vanilla JavaScript (ES6). All application logic, routing, and data management are handled by the script within the HTML file.

A Note on the "Simulated Backend"
This prototype uses the browser's localStorage to function as a persistent database.

When you create an account, your user details are saved in localStorage.

When you book an appointment or save your profile, the data is updated in localStorage.

This allows the website to "remember" you and your data even if you close the browser tab and reopen it later, simulating the experience of a real web application with a server and database.

Future Development & Next Steps
This MVP serves as a robust proof of concept. The logical next steps to turn this into a production-ready application would be:

Backend Development: Rebuild the application logic using a proper backend framework (e.g., Node.js with Express, Python with Django) and a real database (e.g., PostgreSQL).

Payment Gateway Integration: Integrate a real payment provider like Razorpay or Stripe to handle consultation payments.

Real Video Calling: Replace the simulated call page with a real WebRTC service like Twilio or Agora.io.

Advisor Dashboard: Build out the full functionality for the advisor-side portal, including profile management, availability setting, and payout tracking.
