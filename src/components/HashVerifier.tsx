import React, {useState} from 'react';
import {makeStyles, TextField,Button} from "@material-ui/core";
import {UserService} from "../services/userService";
import {AuthService} from "../services/authService";
import {StorageUtil} from "../utils/storageUtil";
const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

const HashVerifier=({type,onSubmit}:{type:string,onSubmit:(data:boolean)=>void;})=>{
    const classes = useStyles();
    const [value,setValue]= useState('');
    const onClick= async()=>{
       const verify = await  AuthService.verifyHash(value,StorageUtil.requestUserData()?.phone,type);
       onSubmit(!!verify);
    }


    return (
      <div>
          <form className={classes.root} noValidate autoComplete="off">
              <TextField onChange={(a)=>{
                  setValue(a.target.value);
              }} id="standard-basic" label="Enter secret hash" />
              <Button onClick={onClick} variant="contained" color="primary">
                  Submit Hash
              </Button>
          </form>
      </div>
    );
}

export default HashVerifier;