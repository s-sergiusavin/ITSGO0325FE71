import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import GroupIcon from '@mui/icons-material/Group';
import HomeIcon from '@mui/icons-material/Home';


export default function IconLabelTabs() {

    const navigate = useNavigate();
    
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Tabs value={value} onChange={handleChange} aria-label="icon label tabs example">
            <Tab icon={<HomeIcon />} label="HOME" onClick={() => navigate('/')} />
            <Tab icon={<GroupIcon />} label="FRIENDS" onClick={() => navigate('/friends')} />
        </Tabs>
    );
}