import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
    appBar: {
        position: 'relative',
    },
    title: {
        marginLeft: theme.spacing(2),
        flex: 1,
    },
}));

 const FileView=({file,onClose}:{file:string;onClose:()=>void;}) =>{
    const classes = useStyles();

    return (
        <div>
            <Dialog fullScreen open={!!file} onClose={onClose}>
                <AppBar className={classes.appBar}>
                    <Toolbar>
                        <IconButton edge="start" color="inherit" onClick={onClose} aria-label="close">
                            <CloseIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            IPFS File
                        </Typography>
                    </Toolbar>
                </AppBar>
                <iframe src={file}
                        style={{width:window.innerWidth, height:window.innerHeight}} frameBorder="0"/>
            </Dialog>
        </div>
    );
}


export default FileView;