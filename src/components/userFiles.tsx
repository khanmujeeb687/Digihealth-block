import React, {useEffect, useState} from 'react';
import {DoctorService} from "../services/doctorService";
import {Avatar, Button, ListItem, ListItemAvatar, ListItemText, makeStyles, Typography} from "@material-ui/core";
import {UserService} from "../services/userService";
import {StorageUtil} from "../utils/storageUtil";
import { FileIcon, defaultStyles } from 'react-file-icon';
import Modal from "@material-ui/core/Modal";
import FileView from "./fileView";


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

const UserFiles=({phone}:{phone:string})=>{
    const classes = useStyles();
    const [files,setFiles] = useState<any[]>([]);
    const [selectedFile,setSelectedFile] = useState('');

    const fetch = async()=>{
        const data =await UserService.getReports(phone);
        setFiles(data);
    }

    useEffect(()=>{
        fetch();
    },[]);




    return (
        <div style={{minWidth:window.innerWidth*.8}}>
            <FileView file={selectedFile} onClose={()=>{
                setSelectedFile('');
            }}/>
            {files.map((item:any)=>{
                return(
                    <ListItem onClick={()=>{
                        setSelectedFile(item.data().file_url);
                    }} style={{backgroundColor:'#434242',borderRadius:'20px',margin:'5px'}} alignItems="flex-start">
                        <ListItemAvatar>
                            <div style={{width:50}}>
                            <FileIcon extension="docx" {...defaultStyles.docx} />
                            </div>
                        </ListItemAvatar>
                        <ListItemText
                            primary={'Pathologist ID :'+item.data().pathologist_id}
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        component="span"
                                        variant="body2"
                                        className={classes.inline}
                                        color="textPrimary"
                                    >
                                        {"Secured File "}
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


export default UserFiles;
