import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import "./NotificationBell.scss"

export default function NotificationBell({ count = 5, onClick }) {
  return (
    <IconButton
    id='notificationBell'
      size="large"
      aria-label={`show ${count} new notifications`}
      color="inherit"
      onClick={() => alert('See your notifications!')}
    >
      <Badge badgeContent={count} color="error">
        <NotificationsIcon />
      </Badge>
    </IconButton>
  );
}