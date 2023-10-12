import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}



function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

export default function VerticalTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box
            sx={{ flexGrow: 1, bgcolor: '#F6F4EB', display: 'flex', height: 384, borderRadius: 4 ,boxShadow:"0 4px 30px rgba(0, 0, 0, 0.1)"}}
        >
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{ borderRight: 1, borderColor: 'divider' }}
            >
                <Tab label="Tangier" {...a11yProps(0)} />
                <Tab label="Amsterdam" {...a11yProps(1)} />
                <Tab label="Dubai" {...a11yProps(2)} />
            </Tabs>
            <TabPanel value={value} index={0} >
                <div style={{marginBottom:"30px",display:'flex',flexDirection:'column',gap:'20px'}} className="tab-container">
                    <h3 className="title-tabs">Business development</h3>
                    <desc className="desc-tabs">
                        info@lunatech.nl
                        +31 10 750 2600
                    </desc>
                </div>
                <div style={{marginBottom:"30px",display:'flex',flexDirection:'column',gap:'20px'}} className="tab-container">
                    <h3 className="title-tabs">Careers</h3>
                    <desc className="desc-tabs">
                        employment@lunatech.nl
                    </desc>
                </div>
                <div style={{marginBottom:"30px",display:'flex',flexDirection:'column',gap:'20px'}} className="tab-container">
                    <h3 className="title-tabs">Address</h3>
                    <desc className="desc-tabs">
                        Hofplein 20

                        3032 AC Rotterdam

                        Van Leijenberghlaan 197A

                        1082 GG Amsterdam
                    </desc>
                </div>
            </TabPanel>
            <TabPanel value={value} index={1} >
                <div style={{marginBottom:"30px",display:'flex',flexDirection:'column',gap:'20px'}} className="tab-container">
                    <h3 className="title-tabs">Business development</h3>
                    <desc className="desc-tabs">
                        info@lunatech.nl
                        +31 10 750 2600
                    </desc>
                </div>
                <div style={{marginBottom:"30px",display:'flex',flexDirection:'column',gap:'20px'}} className="tab-container">
                    <h3 className="title-tabs">Careers</h3>
                    <desc className="desc-tabs">
                        employment@lunatech.nl
                    </desc>
                </div>
                <div style={{marginBottom:"30px",display:'flex',flexDirection:'column',gap:'20px'}} className="tab-container">
                    <h3 className="title-tabs">Address</h3>
                    <desc className="desc-tabs">
                        Hofplein 20

                        3032 AC Rotterdam

                        Van Leijenberghlaan 197A

                        1082 GG Amsterdam
                    </desc>
                </div>
            </TabPanel>
            <TabPanel value={value} index={2} >
                <div style={{marginBottom:"30px",display:'flex',flexDirection:'column',gap:'20px'}} className="tab-container">
                    <h3 className="title-tabs">Business development</h3>
                    <desc className="desc-tabs">
                        info@lunatech.nl
                        +31 10 750 2600
                    </desc>
                </div>
                <div style={{marginBottom:"30px",display:'flex',flexDirection:'column',gap:'20px'}} className="tab-container">
                    <h3 className="title-tabs">Careers</h3>
                    <desc className="desc-tabs">
                        employment@lunatech.nl
                    </desc>
                </div>
                <div style={{marginBottom:"30px",display:'flex',flexDirection:'column',gap:'20px'}} className="tab-container">
                    <h3 className="title-tabs">Address</h3>
                    <desc className="desc-tabs">
                        Hofplein 20

                        3032 AC Rotterdam

                        Van Leijenberghlaan 197A

                        1082 GG Amsterdam
                    </desc>
                </div>
            </TabPanel>
        </Box>
    );
}