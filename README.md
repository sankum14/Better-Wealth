💸 BetterWealth – Financial Advisor Marketplace

**BetterWealth** is a functional MVP web application designed to connect retail investors in India with **vetted, professional financial advisors**.

It simulates an end-to-end user journey from discovering an advisor, completing a **risk profile questionnaire**, to booking a consultation.



## ✨ Features

### 🏠 Trust-Focused Landing Page

* Clean and professional homepage.
* Social proof (“As Featured In”) + testimonials.

### 👨‍💼 Advisor Marketplace

* 20+ detailed advisor profiles.
* Dynamic filters (by specialty) and sort (by price).

### 🔐 User Authentication

* Sign-Up & Login for investors.
* Sessions persisted using `localStorage`.

### 📈 Investor Dashboard

* Secure client area.
* 20-question **Risk Profile Questionnaire**.
* Appointment tracking (past & upcoming sessions).

### 🤝 Advisor Matching

* Smart recommendation engine based on questionnaire results.
* Displays **top 3 advisors** matching client needs.

### 🎥 Simulated Video Consultations

* “Join Call” buttons activate before scheduled sessions.
* Realistic call screen + countdown timer.

### ⭐ Review & Rating System

* Post-session star ratings + written feedback.
* Reviews shown on advisor profiles.

### 📢 “For Advisors” Page

* Explains verification, onboarding, and value proposition.

---

## 🛠️ Tech Stack

* **Frontend:** HTML5
* **Styling:** [Tailwind CSS](https://tailwindcss.com/) + custom CSS
* **Logic / State Management:** Vanilla JavaScript (ES6)
* **Persistence:** Browser `localStorage` (simulated backend)

---

## 📂 Project Structure

```bash
betterwealth/
├── index.html      # Main entry point (landing, routing, templates)
├── styles.css      # Custom styles + Tailwind utilities
├── script.js       # App logic, routing, localStorage handling
└── README.md       # Project documentation
```

---

## 🚀 Getting Started

1. Clone this repository:

   ```bash
   git clone https://github.com/<your-username>/betterwealth.git
   cd betterwealth
   ```

2. Open `index.html` in any modern browser (Chrome, Firefox, Safari).

That’s it — the full app runs locally without any setup.

---

## 🔮 Future Development

* 🗄 **Backend Integration:** Node.js (Express) / Django + PostgreSQL.
* 💳 **Payments:** Razorpay / Stripe integration.
* 📞 **Real Video Calls:** WebRTC (Twilio / Agora).
* 📊 **Advisor Dashboard:** Profile management, availability, payouts.

---

## ⚠️ Disclaimer

This is an MVP **prototype** for demonstration and testing purposes only. It does not provide real financial advice or process actual transactions.

---

## 📌 License

MIT License — free to use, modify, and distribute.

---

👉 Do you want me to also add a **GitHub badge section** (build status, tech stack, license, demo link) at the very top so it looks like a polished open-source repo?
