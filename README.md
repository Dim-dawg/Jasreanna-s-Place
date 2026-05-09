<div align="center">
  <img width="1200" height="475" alt="Jasreanna's Place Banner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
  
  # ☕ Jasreanna's Place
  ### *A Modern Café Experience in Belize*
  
  [![Vite](https://img.shields.io/badge/Vite-6.2.0-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)
  [![React](https://img.shields.io/badge/React-19.0.0-61DAFB?style=flat&logo=react&logoColor=white)](https://react.dev/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.14-06B6D4?style=flat&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
  [![SQLite](https://img.shields.io/badge/SQLite-3.x-003B57?style=flat&logo=sqlite&logoColor=white)](https://www.sqlite.org/)
</div>

---

## 🌟 Overview

Jasreanna's Place is a premium, modern café web application designed to showcase a high-end boutique aesthetic for a Belize-based coffee shop. It focuses on authentic connections, modern vibes, and a seamless digital experience.

## ✨ Key Features

- **🎨 Modern UI/UX**: Built with a "classy white-and-pink" aesthetic, featuring smooth animations via Framer Motion.
- **📋 Dynamic Menu**: Categorized menu items (Signature Classics, Trendy & Cold, etc.) sourced from a relational database.
- **🎬 Media Gallery**: High-quality imagery and video content showcasing the café's atmosphere and craft.
- **🗄️ Robust Database**: Fully normalized SQLite database with migrations, seeds, and relational integrity.
- **📱 Responsive Design**: Optimized for everything from mobile devices to large desktop monitors.

## 🛠️ Tech Stack

- **Frontend**: React 19, Vite, Tailwind CSS 4, Lucide React (Icons), Framer Motion (Animations).
- **Backend/DB**: SQLite, Knex.js (Migrations & Query Building), Better-SQLite3.

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd Jasreanna-s-Place
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up Environment Variables**:
   Create a `.env` file based on `.env.example`:
   ```bash
   GEMINI_API_KEY="your_api_key_here"
   APP_URL="http://localhost:3000"
   ```

### 🗄️ Database Setup

The project uses a structured migration system. To initialize your local database:

1. **Run Migrations**:
   ```bash
   npx tsx node_modules/knex/bin/cli.js migrate:latest
   ```

2. **Seed Initial Data**:
   ```bash
   npx tsx node_modules/knex/bin/cli.js seed:run
   ```

### Running the App

Start the development server:
```bash
npm run dev
```
The site will be available at `http://localhost:3000`.

---

## 📖 Documentation

Detailed technical documentation is maintained in the `/docs` directory:

- **[Database Architecture](docs/database/erd-diagram.md)**: ERDs, Schema maps, and relationship logic.
- **[Table Relations](docs/database/table-relations.md)**: Deep dive into the data model.
- **[Example Queries](docs/database/example-queries.md)**: Common SQL operations for developers.

---

## 📂 Project Structure

```text
├── docs/               # Technical documentation
├── server/             # Backend logic and Database
│   └── db/             # Migrations, Seeds, and SQLite file
├── src/                # Frontend React application
│   ├── components/     # Reusable UI components
│   ├── pages/          # Individual page views
│   └── App.tsx         # Main application entry
├── knexfile.ts         # Database configuration
└── vite.config.ts      # Vite configuration
```

---

<div align="center">
  <p>&copy; 2026 Jasreanna's Place. All rights reserved.</p>
</div>
