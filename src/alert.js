import React from 'react';
import PropTypes from 'prop-types';

import styles from './alert.scss';

function AlertComponent({ message }) {
    return (
        <div className={styles.alert}>
            <span>{message}</span>
        </div>
    );
}

AlertComponent.propTypes = {
    message: PropTypes.string,
};

AlertComponent.defaultProps = {
    message: 'Default message',
};

export default AlertComponent;
