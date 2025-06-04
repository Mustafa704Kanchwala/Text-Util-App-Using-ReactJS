import React from 'react'
import PropTypes from 'prop-types';

function Alert(props) {
  return (
        props.alert && <>
            <div className={`alert alert-${props.alert.typ} alert-dismissible fade show`} role="alert">
             <strong>{props.alert.typ}</strong>{props.alert.msg}
            </div>
        </>
    )
}

Alert.propTypes ={
    type: PropTypes.string.isRequired,
    msg: PropTypes.string.isRequired
};
Alert.defaultProps = {
    type: "primary",
    msg: "Wlcome User"
};

export default Alert
