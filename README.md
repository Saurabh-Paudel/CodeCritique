
# CodeCritique - Automated Code Review Web App with Google Gemini Integration

**CodeCritique** is a web application that provides **automated code reviews** using **Google Gemini**. It allows users to submit their code and receive feedback on the quality, efficiency, and structure of their code, with actionable suggestions for improvement. Built with a **React frontend** and a **Node.js backend**, this app offers a smooth and user-friendly interface for real-time code analysis.

## Features
- **Automated Code Review**: Receive feedback on your code in real-time after submitting it to the app.
- **AI-Powered Feedback**: Integrates with **Google Gemini** to analyze code and generate valuable insights and suggestions.
- **Responsive UI**: Built using **React** and styled with **Tailwind CSS** for an intuitive and mobile-responsive interface.
- **Backend API**: The backend is powered by **Node.js** and **Express.js**, which communicates with Google Gemini to process code reviews.
- **Programming Language Support**: Supports multiple programming languages for analysis.
- **Real-Time Feedback**: Quickly get suggestions to improve code quality and structure.

## Technologies Used
- **Frontend**:
  - React.js
  - Tailwind CSS
  - React Icons
- **Backend**:
  - Node.js
  - Express.js
  - Axios (for API requests)
- **AI Integration**:
  - Google Gemini (for generating code review feedback)
- **Miscellaneous**:
  - CORS (Cross-Origin Resource Sharing) for API communication
  - dotenv (for environment variables management)

## Project Setup

### Backend Setup (Node.js & Express)
1. Clone the repository:
   ```bash
   git clone https://github.com/Saurabh-Paudel/CodeCritique.git
   cd CodeCritique/backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the backend folder and add your **Google Gemini API key**:
   ```bash
   GEMINI_API_KEY=your_api_key_here
   ```

4. Start the backend server:
   ```bash
   npm start
   ```

### Frontend Setup (React & Tailwind CSS)
1. Navigate to the frontend directory:
   ```bash
   cd CodeCritique/frontend
   ```

2. Install frontend dependencies:
   ```bash
   npm install
   ```

3. Start the React development server:
   ```bash
   npm start
   ```

### Environment Variables
- **Backend**:
  - `GEMINI_API_KEY`: API key for **Google Gemini**.
- **Frontend**:
  - Ensure the frontend can make requests to the correct API endpoint for processing code reviews.

## How It Works
1. **User Input**: The user enters their code and selects the programming language.
2. **Backend Processing**: The backend sends the submitted code to the **Google Gemini API** for analysis.
3. **AI Review**: Google Gemini processes the code and provides detailed feedback.
4. **Frontend Display**: The feedback is displayed on the frontend, showing the user suggestions for improvement.
5. **User Action**: The user can modify their code based on the feedback and resubmit it for further review.

## Usage
1. Navigate to the web app in your browser.
2. Paste your code into the input form on the app.
3. Select the programming language for the code.
4. Click **Submit** to get code review feedback from **Google Gemini**.
5. Review the feedback provided and improve your code based on the suggestions.
