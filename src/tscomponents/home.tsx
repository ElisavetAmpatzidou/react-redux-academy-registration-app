import React from 'react';
import image1 from '../images/Web-development.png';
import image2 from '../images/icon.png';
import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles({
    header : {
        color: '#3e88f7',
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop : '2%'

    },
    im:{
       width: ' 50%'
    },
    text:{
        fontSize: '20px',
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#071f33',
    },
    info:{
       marginTop: '5%',
       display:'flex',
       flexDirection :'row',
       justifyContent: 'space-between',
       alignItems: 'center',
       ['@media (max-width:760px)']: {
        display:'flex',
        flexDirection :'column-reverse'
      }
    },
    info2:{
        marginTop: '5%',
        display:'flex',
        flexDirection :'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        ['@media (max-width:760px)']: {
         display:'flex',
         flexDirection :'column'
       }
    }
})
const Home = () => {
    const classes = useStyles();
    return ( 
        
        <>
            <h1 className={classes.header}>Welcome to our Academy!</h1>
            <div className={classes.info}>
            <p className={classes.text}>
                You can register in our Academy and join our web-development team.
                Complete the registration form and learn more about Web Develpoment.
                It will be a wonderful experiense if you are intrested in web develpoment applications.
            </p>
            <img className={classes.im} src={image2} alt="image" />
            
            </div>
            <div className={classes.info2}>
            <img className={classes.im} src={image1} alt="image" />
            <div  className={classes.text}>
            <h3>
                What you will learn ? 
            </h3>
            <ul >
                <li>Html</li>
                <li>Css</li>
                <li>Javascript</li>
                <li>Framework : React/ Angular/ Vue</li>
            </ul>
            </div>
            
            
            
            </div>
        
           
        </>
        
        
     );
}
 
export default Home;