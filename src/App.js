import './App.css';
import LoginButton from './components/loginButton';
import LogoutButton from './components/logoutButton';
import UserProfile from './components/userProfile';

function App() {
  return (
    <div>
      <LoginButton />
      <LogoutButton />
      <p>User Profile</p>
      <UserProfile />
    </div>
  );
}

export default App;
