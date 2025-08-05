import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

import Newest from '../components/componentsList/newest.jsx';
import Active from '../components/componentsList/active.jsx';
import Popular from '../components/componentsList/popular.jsx';




function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function Props(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Newest" {...Props(0)} />
            <Tab label="Active" {...Props(1)} />
            <Tab label="Popular" {...Props(2)} />
          </Tabs>
        </Box>

        <CustomTabPanel value={value} index={0}>
          <Newest />
        </CustomTabPanel>

        <CustomTabPanel value={value} index={1}>
          <Active />
        </CustomTabPanel>

        <CustomTabPanel value={value} index={2}>
          <Popular />
        </CustomTabPanel>
      </Box>
    </Box>
  );
}