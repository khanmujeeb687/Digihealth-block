import React, {useEffect, useState} from 'react';
import {DoctorService} from "../services/doctorService";
import {Avatar, Button, ListItem, ListItemAvatar, ListItemText, makeStyles, Typography} from "@material-ui/core";
import {UserService} from "../services/userService";
import {StorageUtil} from "../utils/storageUtil";
import { FileIcon, defaultStyles } from 'react-file-icon';
import Modal from "@material-ui/core/Modal";
import FileView from "./fileView";
import HashVerifier from "./HashVerifier";
import PathologistRegister from "../screens/doctorRegister/pathologistRegister";
import {PathologistService} from "../services/pathologistService";


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
    const {type}  = StorageUtil.requestUserData();

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
                if(item.data().file_url!=='' && type==='doctor') return null;
                return(
                    <ListItem  style={{backgroundColor:'#434242',borderRadius:'20px',margin:'5px'}} alignItems="flex-start">
                        <ListItemAvatar>
                            <div style={{width:50}}>
                            <FileIcon extension="docx" {...defaultStyles.docx} />
                            </div>
                        </ListItemAvatar>
                        <ListItemText
                            onClick={()=>{
                                if(StorageUtil.requestUserData()?.type==='doctor'){
                                    DoctorService.view(item.id,item.data()?.user_phone);
                                }
                                setSelectedFile(item.data().file_url);
                            }}
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
                        {(type==='user' && item.data().file_url!=='' && <HashVerifier type={type} onSubmit={(a)=>{
                            UserService.addToBlockChain(item.data().file_url,item.id);
                        }}/>)}
                    </ListItem>
                )
            })}
        </div>
    );
}


export default UserFiles;
