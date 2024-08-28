import React, { useState } from 'react';
import Sidebar from './sidebar';
import { Button } from '@mui/material';

function App() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="App">
            <div style={{margin:'5%'}}>
            <p> Add Speaker</p>
               
         
            <Button
                variant="contained"
                color="warning"
                onClick={() => setIsSidebarOpen(true)}
            >
                Add Speaker
            </Button>
           
              <Sidebar open={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
              </div>
        </div>
    );
}

export default App;
