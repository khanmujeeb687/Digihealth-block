import React from 'react';
import {DoctorService} from "../services/doctorService";
import {Avatar, Button, ListItem, ListItemAvatar, ListItemText, makeStyles, Typography} from "@material-ui/core";
import {UserService} from "../services/userService";
import {StorageUtil} from "../utils/storageUtil";


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: '36ch',
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: 'inline',
    },
}));

const PermittedDoctors=({doctors,remove}:{doctors:any[],remove?:(id:string)=>void;})=>{
    const classes = useStyles();


    const cancel= async(id:string)=>{
        await UserService.removeDoctor(id,StorageUtil.requestUserData()?.id);
        remove && remove(id);
    }


    return (
        <div style={{minWidth:window.innerWidth*.8}}>
            {doctors.map((item:any)=>{
                return(
                    <ListItem style={{backgroundColor:'#434242',borderRadius:'20px',margin:'5px'}} alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                            primary={item.data().firstname+' '+item.data().lastname}
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        component="span"
                                        variant="body2"
                                        className={classes.inline}
                                        color="textPrimary"
                                    >
                                        {item.data()?.email+"    "}
                                    </Typography>
                                    {item.data().address+', '+item.data().city}
                                </React.Fragment>
                            }
                        />
                        <Button onClick={()=>{
                            cancel(item.id)
                        }} variant="contained" color="primary">
                            Remove
                        </Button>
                    </ListItem>
                )
            })}
        </div>
    );
}


export default PermittedDoctors;
