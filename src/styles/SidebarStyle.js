// sidebarStyles.js
export const sidebarSx = (colors) => ({
    borderRadius: "5px",
    borderRight: "2px solid gray",
    fontSize: 16,
    "& .pro-sidebar-inner": {
        background: `${colors.primary[400]} !important`,
    },
    "& .pro-icon-wrapper": {
        backgroundColor: "transparent !important",
    },
    "& .pro-menu-item": {
        color: `${colors.grey[100]}`,
        margin: "7px 0",
        "& .MuiTypography-root": {
            fontSize: 16,
            letterSpacing: 1,
        },
    },
    "& .pro-inner-item": {
        padding: "5px 35px 15px 20px !important",
    },
    "& .pro-inner-item:hover": {
        color: `${colors.blueAccent[500]} !important`,
    },
    "& .pro-menu-item.active": {
        color: `${colors.blueAccent[500]} !important`,
    },
});
  