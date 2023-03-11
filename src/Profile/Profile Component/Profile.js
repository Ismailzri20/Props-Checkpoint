import React from 'react';
import PropTypes from 'prop-types';

const Profile = ({ fullName, bio, profession, handleName, children }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {children}
      <h2 style={{ color: 'blue' }}>{fullName}</h2>
      <p>{bio}</p>
      <p>{profession}</p>
      <button onClick={handleName}>Click me</button>
    </div>
  );
};

Profile.propTypes = {
  fullName: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  profession: PropTypes.string.isRequired,
  handleName: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};

Profile.defaultProps = {
  fullName: 'Ismail Zouari',
  bio: '....',
  profession: 'Web developer',
};

export default Profile;
