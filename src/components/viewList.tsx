import React from 'react';
import {ListItem, ListItemAvatar, ListItemText, makeStyles, Typography} from "@material-ui/core";
import {defaultStyles, FileIcon} from 'react-file-icon';


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

const ViewList=({list}:{list:any[]})=>{
    const classes = useStyles();



    return (
        <div style={{minWidth:window.innerWidth*.8}}>
            {list.map((item:any)=>{
                return(
                    <ListItem  style={{backgroundColor:'#434242',borderRadius:'20px',margin:'5px'}} alignItems="flex-start">
                        <ListItemAvatar>
                            <div style={{width:50}}>
                                <FileIcon extension="docx" {...defaultStyles.docx} />
                            </div>
                        </ListItemAvatar>
                        <ListItemText
                            primary={'Doctor ID :'+item.data().doctor_id}
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        component="span"
                                        variant="body2"
                                        className={classes.inline}
                                        color="textPrimary"
                                    >
                                        {"Viewed at 24 may 2021"}
                                    </Typography>

                                </React.Fragment>
                            }
                        />
                    </ListItem>
                )
            })}
        </div>
    );
}


export default ViewList;
