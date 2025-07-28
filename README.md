# Typeface Task FE

This is the frontend service for the **Typeface Task** project. It is designed to work in conjunction with the [`typeface-task-be`](https://github.com/aayush-meshram/typeface-task-be) backend service. Together, these repositories enable a full-stack web application for managing and interacting with typeface tasks.

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Architecture](#architecture)
- [Setup & Installation](#setup--installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Environment Variables](#environment-variables)
- [Integration with Backend](#integration-with-backend)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

**Typeface Task FE** is a frontend application built primarily using HTML (additional frameworks or libraries may be present in source files). It provides a user interface for the typeface-task system, allowing users to interact with the backend, manage typeface tasks, and visualize results.

---

## Features

- Responsive UI for typeface task management
- Integration with the backend API (`typeface-task-be`)
- Authentication and session management (when enabled in backend)
- Display and update of task data
- Error handling and notifications
- Extensible architecture for new features

---

## Architecture

- **Frontend (`typeface-task-fe`)**: Handles user interaction, presentation logic, and communication with backend using HTTP APIs.
- **Backend (`typeface-task-be`)**: Provides RESTful APIs, handles business logic, database interaction, and authentication.

The frontend is fully decoupled and communicates with the backend via API endpoints. Any changes to API contracts must be reflected in both repositories for compatibility.

---

## Setup & Installation

1. **Clone the Repository**
   ```sh
   git clone https://github.com/aayush-meshram/typeface-task-fe.git
   cd typeface-task-fe
   ```

2. **Install Dependencies**
   - If using a package manager (e.g. npm, yarn), run:
     ```sh
     npm install
     # or
     yarn install
     ```

3. **Configure Environment Variables**
   - Create a `.env` file and provide API endpoint details as needed.

4. **Run the Development Server**
   ```sh
   npm start
   # or
   yarn start
   ```

---

## Usage

- Open the application in your browser (`http://localhost:3000` or as configured).
- Log in or interact with public features.
- All data is fetched from the backend service (`typeface-task-be`).
- Ensure both frontend and backend are running for full functionality.

---

## Project Structure

Typical structure (may differ based on implementation):

```
typeface-task-fe/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   ├── pages/
│   ├── services/
│   ├── App.js
│   └── index.js
├── .env
├── package.json
└── README.md
```

---

## Environment Variables

- `REACT_APP_API_URL`: Base URL for backend API (example: `http://localhost:5000/api`)
- Other keys as required by integration (see source code for details)

---

## Integration with Backend

This frontend is intended to be used with [`typeface-task-be`](https://github.com/aayush-meshram/typeface-task-be):

- Make sure the backend is running and accessible to the frontend.
- All API endpoints should match those exposed by the backend.
- Authentication, authorization, and session logic are shared across both services.

---


## Links

- [Frontend Repository](https://github.com/aayush-meshram/typeface-task-fe)
- [Backend Repository](https://github.com/aayush-meshram/typeface-task-be)

---

> _For full-stack integration and feature details, refer to both frontend and backend repositories._
