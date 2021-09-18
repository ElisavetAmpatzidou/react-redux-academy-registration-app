import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    er:{
        fontWeight:'bold',
        color:'red',
        fontSize: 10
    }
})
const ErrorMessage = ({error}) => {

    const classes = useStyles();
    return ( 
        <div className={classes.er}>{error}</div> 
     );
}
 
export default ErrorMessage;