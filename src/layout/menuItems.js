import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import BarChartIcon from '@mui/icons-material/BarChart';
import SettingsIcon from '@mui/icons-material/Settings';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';

export const mainMenu = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <RecordVoiceOverIcon />
      </ListItemIcon>
      <ListItemText primary="Publishers" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Subscribers" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Reports" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <SettingsIcon />
      </ListItemIcon>
      <ListItemText primary="Settings" />
    </ListItem>
  </div>
);

export const pluginItems = (
  <div>
    <ListSubheader>Plugins</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <WbSunnyIcon />
      </ListItemIcon>
      <ListItemText primary="Weather" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ShowChartIcon />
      </ListItemIcon>
      <ListItemText primary="Alphavantage" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <DirectionsBusIcon />
      </ListItemIcon>
      <ListItemText primary="Bustime" />
    </ListItem>
  </div>
);
