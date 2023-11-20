import React from 'react';
import { Typography } from "@mui/material";
import { useLocation } from 'react-router-dom';

const PageTitle = () => {
  const location = useLocation();

  const getPageTitleFromURL = () => {
    const parts = location.pathname.split('/');
    const pageTitle = parts[parts.length - 1];
    
    // Ensure the first letter is uppercase
    return pageTitle.charAt(0).toUpperCase() + pageTitle.slice(1);
  };

  const pageTitle = getPageTitleFromURL();

  return (
    <Typography variant="h2" sx={{fontWeight:"bold", letterSpacing:1}}>{pageTitle}</Typography>
  );
}

export default PageTitle;
