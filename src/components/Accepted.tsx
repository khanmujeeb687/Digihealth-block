import React from 'react';
import {Icon, Typography} from "@material-ui/core";
import {Link} from "react-router-dom";


const Accepted = ({phone}:{phone:string})=>{
    return  (
        <div style={{marginRight:'40px'}}>
            <Typography variant={'h6'}>Accepted</Typography>
            <Link to={'/files/'+phone} style={{color:'blue'}}>View Files</Link>
        </div>
    );
}

export default Accepted;