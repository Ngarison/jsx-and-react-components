import logo from './logo.svg';
import './App.css';
import ProfilePhoto from './Component/Profil/ProfilePhoto';
import FullName from './Component/Profil/FullName';
import Address from './Component/Profil/Address';

function App() {
  return (
    <div className="App">
      <ProfilePhoto image="./profil.jpg"/>
      <FullName fullName="Ngarison"/>
      <Address adresse="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"/>
    </div>
  );
}

export default App;
