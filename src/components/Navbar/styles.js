const styles = {
  wrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    position: "fixed",
    // position: "sticky",
    top: 0,
    zIndex: 100,
    height: "65px",
    padding: {
      xs: "15px 40px",
      md: "15px 60px",
    },
    transition: "all 0.5s ease",
  },

  image: {
    width: "70px",
  },

  listContainer: {
    display: "flex",
    gap: "3rem",
    padding: "0 10px",
    borderLeft: "2px solid",
    borderRight: "2px solid",
  },

  list: {
    color: "black",
    fontSize: "14px",
  },

  drawer: {
    "& .MuiDrawer-paper": {
      zIndex: 100,
      position: "fixed",
      width: {
        xs: "250px",
        sm: "270px",
      },
      opacity: "0.9",
      maxWidth: {
        xs: "300px",
        sm: "340px",
      },
      borderRadius: 0,
      borderTop: "none",
      borderBottom: "none",
      padding: "20px",
      top: 65,
      backgroundColor: "white",
      height: `calc(100% - 65px)`,
    },
  },

  drawerContent: {
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
  },

  drawerHeads: {
    fontSize: "14px",
    userSelect: "none",
  },

  iconWrapper: {
    display: "flex",
    gap: "1rem",
    alignItems: "center",
  },

  icon: { fontSize: "30px", cursor: "pointer" },

  drawerItemWrapper: {
    display: "flex",
    flexDirection: "column",
  },

  drawerItem: {
    color: "black",
    padding: "20px 0px 20px 30px",
    fontSize: {
      xs: "14px",
      sm: "16px",
    },
    fontWeight: 500,
    borderBottom: "1px solid #8C8C8C",
    transition: "all 400ms",

    "&:hover": {
      textDecoration: "underline",
    },
  },
};

export default styles;
