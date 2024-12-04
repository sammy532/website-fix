'use client'

import { useRouter } from 'next/navigation'

import React, {useState} from "react";

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import { createTheme, ThemeProvider } from '@mui/material/styles';

import {isMobile} from 'react-device-detect';

const LegalMenuMobile = () => {

  const router = useRouter()

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const navigateTerms= () => {
    router.push('/terms');
    setAnchorEl(null);
    // if(isMobile) {
    //   onClose();
    // }
  }

  const navigatePrivacy= () => {
    router.push('/privacy');
    setAnchorEl(null);
    // if(isMobile) {
    //   onClose();
    // }
  }

  const navigateCookies= () => {
    router.push('/cookies');
    setAnchorEl(null);
    // if(isMobile) {
    //   onClose();
    // }
  }

  const theme = createTheme({
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            // Some CSS
            fontSize: '1rem',
            color: "white",
            textTransform: "none",
            paddingHorizontal: "3rem"
        },
        },
      },
  },
});

	return (
    <div>
      <ThemeProvider theme={theme}>
        <Button
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          style={{
              backgroundColor: "#5d5df6",
              textTransform: "none",
              justifyContent: "center",
              width: "100%",
            }}
        >
          Legal
        </Button>
      </ThemeProvider>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={navigateTerms}>Terms and Conditions</MenuItem>
        <MenuItem onClick={navigatePrivacy}>Privacy Policy</MenuItem>
        <MenuItem onClick={navigateCookies}>Cookies</MenuItem>
      </Menu>
    </div>
	);
};

// Default export
export default LegalMenuMobile;
