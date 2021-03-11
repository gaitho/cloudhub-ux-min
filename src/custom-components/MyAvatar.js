import React from 'react';
import PropTypes from 'prop-types';

import { MAvatar } from '../theme';
import createAvatar from '../utils/createAvatar';

// ----------------------------------------------------------------------

MyAvatar.propTypes = {
  className: PropTypes.string
};

function MyAvatar({ className, user, ...other }) {
  return (
    <MAvatar
      src={user.photoURL}
      alt={user.Name}
      color={user.photoURL ? 'default' : createAvatar(user.Name).color}
      className={className}
      {...other}
    >
      {createAvatar(user.Name).name}
    </MAvatar>
  );
}

export default MyAvatar;
