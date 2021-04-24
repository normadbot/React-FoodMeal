import ReactDOM  from 'react-dom';
import React, { Fragment } from 'react';
import classes from './Modal.module.css';


const Backdrop =props=> {
    return <div className={classes.Backdrop}/>
};

const ModalOverlays =props=>{
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    );
};

const Modal =props=>{
    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop />)}

            {ReactDOM.createPortal(<ModalOverlays></ModalOverlays>)}
        </Fragment>

    );
};

export default Modal;