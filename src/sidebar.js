import React from 'react';
import { Drawer, IconButton, Checkbox, Button, List, ListItem, ListItemText,  Avatar, InputBase } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined'; 
import SearchIcon from '@mui/icons-material/Search';
import { speakers } from './components/speaker';


export default function Sidebar({ open, onClose }) {
    const [selectedSpeakers, setSelectedSpeakers] = React.useState([]);

    const handleSelectSpeaker = (id) => {
        if (selectedSpeakers.includes(id)) {
            setSelectedSpeakers(selectedSpeakers.filter(speakerId => speakerId !== id));
        } else {
            setSelectedSpeakers([...selectedSpeakers, id]);
        }
    };

    return (
      
        <Drawer  anchor="right" open={open} onClose={onClose}>
            <div className="sidebar-header">
                <h3>Add Speaker</h3>
                <IconButton onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            </div>
         <div className='search-bar-parent'>
            <div  >
                
                <InputBase
                    className="search-bar w-500"
                    placeholder="   Search…"
                    inputProps={{ 'aria-label': 'search' }}
                    startAdornment={<SearchIcon style={{color:'#E4875D'}} />}
                />
            </div>
            </div>
            <div className='parentCheckbox'>
            <List className="sidebar-content"   >
                {speakers.map(speaker => (
                    <ListItem
                        id='checkboxstyle'
                        key={speaker.id}
                        className={selectedSpeakers.includes(speaker.id) ? 'selected' : ''}
                        // onClick={() => handleSelectSpeaker(speaker.id)}
                    >
                        <div>
                        <div className='list-inside-section'>
                            <Avatar></Avatar> 
                            <div>
                                <ListItemText
                                    primary={speaker.name}
                                    secondary={`${speaker.title} | ${speaker.company}`}
                                />
                            </div>
                            
                            
                                <Checkbox className='section-checkbox'
                                    checked={selectedSpeakers.includes(speaker.id)}
                                    onChange={() => handleSelectSpeaker(speaker.id)}
                                />
                        </div>
                        <div className='edit-button-parent'>
                        <IconButton  className='edit-btn' edge="end" >
                            <EditOutlinedIcon  /> 
                           <p>Edit Speaker</p> 
                        </IconButton>
                        </div>
                        </div>
                    </ListItem>
                ))}
            </List>
            </div>
            <div className="sidebar-footer">
                <div className='add-cancel-btn'>
                    <Button
                        className="sidebar-add-btn"
                        variant="contained"
                        color="primary"
                        disabled={selectedSpeakers.length === 0}
                    >
                        Add
                    </Button>
                    <Button className="sidebar-btn" onClick={onClose}>
                        Cancel
                    </Button>
                </div>
                <Button
                    className="sidebar-btn-right"
                    variant="outlined"
                    color="secondary"
                >
                    Create Speaker
                </Button>
            </div>
           
        </Drawer>
    
    );
}
