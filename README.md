# Firebase/React Notification App

This project is a simple SPA (Single Page Application) developed using Firebase and React with TypeScript. The core functionality includes a notification system where users can click one of three buttons and receive corresponding notifications. Notifications can be marked as "read" once they are viewed.

## Features

- **Notification System**: Users can click one of three buttons to receive a corresponding notification.
- **Mark Notifications Read**: When a user views a notification, it is marked as "read".
- **Firebase Emulators**: Set up and run Firebase emulators in development mode to simulate backend services locally.

## Installation

To get started, you need to have Node.js and npm (Node Package Manager) installed on your machine. Clone this repository and install the dependencies.

```bash
git clone https://github.com/zohaibkhalidse/firebase-react-notify
cd firebase-react-notify
npm install
```

## Usage

First, start the Firebase development emulators:

Then, start the React development server:

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view your application in the browser.

## Development

### Available Scripts

In the project directory, you can run:

- `npm start`: Runs the app in development mode.
- `npm run build`: Builds the app for production.
- `npm test`: Launches the test runner.
- `npm run eject`: Ejects the app from Create React App.

## Configuration

Configure your Firebase project by updating the `firebaseConfig` in `src/libs`:

```ts
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: ocess.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

```

## Contributing

Contributions are welcome! If you have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---

Feel free to customize this README file as per your project requirements. Happy coding!