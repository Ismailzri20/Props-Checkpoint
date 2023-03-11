import React from 'react';
import Profile from './Profile/Profile Component/Profile';
import imageSrc from './Profile/Profile Component/ProfilePhoto.png';

const App = () => {
  const handleName = () => {
    alert('Ismail Zouari');
  };

  return (
    <div>
      <Profile
        fullName="Ismail Zouari"
        bio="...."
        profession="Web Developer"
        handleName={handleName}
      >
        <img src={imageSrc} alt="profile" style={{ width: 200, height: 200, borderRadius: '50%' }} />
      </Profile>
    </div>
  );
};

export default App;
