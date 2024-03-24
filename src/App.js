import "./index.css";
import Cell from "./Components/Cell.js";
import { React, useState }from 'react';
import './App.css';
import { Drawer, List, ListItem, ListItemText, ListItemButton } from '@mui/material';
import Homepage from './Components/home';
import Plant from "./Plant.js";
import Anatomy from "./Components/anatomy.jsx";

const drawerWidth = 240;

function App() {
  const [currentPage, setCurrentPage] = useState(null); 
  const DrawerList = ["home", "cells", "plants", "anatomy"];

  function handleListClick(index) {
    setCurrentPage(index);
  }

  function renderCurrentComponent() {
    switch (currentPage) {
      case 1: 
        return <Cell />;
      case 2:
        return <Plant />
      case 3: 
        return <Anatomy/>
      default: 
        return <Homepage />
    }
  }

  return (
    <div className="App">
      <Drawer
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              '& .MuiDrawer-paper': {
                width: drawerWidth,
                boxSizing: 'border-box',
              },
            }}
            variant="permanent"
            anchor="left">
        <List>
          {DrawerList.map((item, index) => (
            <ListItemButton 
              key={index}
              onClick={() => handleListClick(index)}
            >
              <ListItemText primary={item} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <div style={{ marginLeft: drawerWidth }}> { renderCurrentComponent() } </div>
    </div>
  );
}

export default App;
