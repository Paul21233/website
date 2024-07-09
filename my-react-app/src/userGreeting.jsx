import PropTypes from 'prop-types';

function UserGreeting (props) {
    const welcomeMsg = <h2 className="welcome__msg">Welcome {props.username} </h2>
    const loginPropmt = <h2>Please log in</h2>

    return(props.isLoggedIN ? welcomeMsg : loginPropmt );
}
UserGreeting.prototype = {
    isLoggedIN: PropTypes.bool,
    username: PropTypes.string,
}

UserGreeting.defaulProps = {
    isLoggedIN: false,
    username: "Guest",
}

export default UserGreeting;