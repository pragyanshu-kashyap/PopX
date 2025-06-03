# PopX React App

A modern, responsive account management app built with React and Vite. This project demonstrates a clean UI for user registration, login, and account settings, with simulated authentication and form validation.

## Features

- Welcome screen with navigation
- Create Account form with validation
- Login form with validation
- Simulated authentication (localStorage)
- Dynamic Account Settings page
- Responsive, modern design

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone <repo-url>
   cd popx-app
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Usage

- **Create Account:** Register a new user. Data is stored in your browser's localStorage.
- **Login:** Sign in with your registered email and password.
- **Account Settings:** View your dynamic account details.
- **Logout:** (Optional) You can clear localStorage to simulate logout.

## Project Structure

```
popx-app/
  ├── src/
  │   ├── components/         # React components
  │   ├── assets/             # Static assets
  │   ├── App.jsx             # Main app component
  │   └── main.jsx            # Entry point
  ├── public/
  ├── package.json
  └── README.md
```

## Customization

- Update styles in `App.css` or component files.
- Replace the avatar image in `src/images/Account_logo.png`.

## Credits

- Built with [React](https://reactjs.org/) and [Vite](https://vitejs.dev/)
- UI inspired by modern SaaS onboarding flows

## License

This project is for demo purposes.
