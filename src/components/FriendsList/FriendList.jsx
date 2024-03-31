// import { FriendListItem } from './FriendListItem';
import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export const FriendList = ({ friends }) => {
  return (
       <ul className={css.friendList}>
      {friends.map(friend => {
        return (
            <FriendListItem
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        );
      })}
    </ul>
  );
};

function FriendListItem({ avatar, name, isOnline }) {
  return (
    <li className={css.item}>
      <span className={css.status} style={{ background: isOnline ? 'green' : 'red' }}></span>
      <img className={css.avatar} src={avatar} alt={name} />
      <span className={css.name}>{name}</span>
    </li>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }).isRequired
  ).isRequired,
};
