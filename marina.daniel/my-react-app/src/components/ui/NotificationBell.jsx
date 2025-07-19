import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';

export default function NotificationBell({ count = 0, onClick }) {
  return (
    <IconButton
      size="large"
      aria-label={`show ${count} new notifications`}
      color="inherit"
      onClick={onClick}
    >
      <Badge badgeContent={count} color="error">
        <NotificationsIcon />
      </Badge>
    </IconButton>
  );
}