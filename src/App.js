import "./App.css";
import FullName from "./Component/Profile/FullName";
import Address from "./Component/Profile/Address";
import ProfilePhoto from "./Component/Profile/ProfilePhoto";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FullName></FullName>
        <Address></Address>
        <ProfilePhoto></ProfilePhoto>
      </header>
    </div>
  );
}

export default App;
