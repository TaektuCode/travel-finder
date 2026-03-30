# 🌍 Travel-Finder (Work & Travel Edition)

An interactive destination explorer built with the latest React stack, designed to help Work & Travel enthusiasts plan their next big adventure.

## 🚀 Tech Stack
* **React 19** – Leveraging the latest features and Hooks for a fast, component-based UI.
* **Vite** – Used as a lightning-fast build tool and development server.
* **Tailwind CSS v4** – Utilizing the brand-new CSS engine for high-performance styling.
* **JSON-based Data Model** – Decoupled data layer for dynamic rendering of travel destinations.

## 🛠️ Features
- [x] **Modular Architecture:** Clean separation of concerns with `Header`, `FilterBar`, and `CountryCard`.
- [x] **Advanced State Management:** Uses `useState` for real-time UI updates based on user interaction.
- [x] **Multi-Criteria Filtering:** - Filter by **Budget** (Single selection: Low, Medium, High).
    - Filter by **Language** (Multi-selection: English, Spanish, etc. using a custom toggle logic).
- [x] **Lifting State Up:** Centralized logic in `App.jsx` to maintain a single source of truth.
- [x] **Dynamic Rendering & Filtering:** Efficiently derives the filtered list on every render using `.filter()` and `.map()`.
- [x] **Responsive Design:** Mobile-first approach with a "sticky" sidebar for desktop users.

## 🏁 Getting Started
To run this project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/TaektuCode/travel-finder.git```

2. **Install dependencies**
    ```bash
    npm install```

3. **Start the development server:**
   ```bash
   npm run dev```

## 🛠️ Project Evolution
**Day 1**: Foundation, UI Components, and Responsive Layout.

**Day 2**: Interactive Filtering, State Management, and Logic implementation.