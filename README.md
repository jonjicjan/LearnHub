# LearnHub

LearnHub is a React-based web application designed to provide an intuitive learning platform with user authentication managed by Supabase. The project is deployed on Netlify for seamless hosting and continuous deployment.

## Features

- **User Authentication**: Secure sign-up and login using Supabase.
- **Course Management**: Browse, enroll, and track progress in various courses.
- **Responsive Design**: Fully optimized for mobile and desktop devices.
- **Real-time Updates**: Data synchronization using Supabase's real-time database capabilities.

## Demo

Live Site: [LearnHub](https://jonjicjan.github.io/LearnHub/)

## Installation

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Steps to Set Up Locally

1. **Clone the Repository**
   ```sh
   git clone https://github.com/jonjicjan/LearnHub.git
   cd LearnHub
   ```
2. **Install Dependencies**
   ```sh
   npm install
   ```
3. **Configure Environment Variables**
   Create a `.env` file in the root directory with the following:
   ```sh
   REACT_APP_SUPABASE_URL=your_supabase_url
   REACT_APP_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```
4. **Run the Development Server**
   ```sh
   npm start
   ```
   The application will be available at `http://localhost:3000`.

## Deployment

LearnHub is deployed using Netlify:
- **Automatic Deployments**: Push changes to the GitHub repository, and Netlify updates the live site.
- **Environment Variables**: Set up in Netlify for security.

## Dependencies

- **React**: Front-end framework.
- **Supabase**: Backend services including authentication and database.
- **React Router**: In-app navigation.
- **Axios**: HTTP client for API requests.

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature-branch`)
3. Commit your changes (`git commit -m 'Add feature'`)
4. Push to the branch (`git push origin feature-branch`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

