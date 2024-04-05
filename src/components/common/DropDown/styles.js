const dropDownIcon = {
  margin: "13px 14px 13px 0",
  position: "relative",
  height: {
    xs: "21px",
    sm: "24px",
  },
  width: {
    xs: "21px",
    sm: "24px",
  },
  color: "custom.label",
};

const styles = {
  wrapper: {
    width: "100%",
    color: "white",
  },

  container: {
    "& .MuiInputBase-input": {
      color: "white",
      padding: "4px 6px 5px 15px",
    },
  },

  label: {
    height: {
      xs: "17px",
      sm: "20px",
    },
    marginBottom: {
      xs: "8px",
      sm: "12px",
    },
    color: "custom.label",
  },

  dropDownIconWrapper: {
    height: {
      xs: "35px",
      sm: "40px",
    },
    display: "flex",
    alignItems: "center",
    position: "absolute",
    right: 0,
    top: "3px",
    cursor: "pointer",
  },

  dropDownIconUp: {
    ...dropDownIcon,
    transform: "rotate(90deg)",
    top: {
      xs: "3px",
      sm: "6px",
    },
  },

  dropDownIconDown: {
    ...dropDownIcon,
    transform: "rotate(-90deg)",
    bottom: {
      xs: "6px",
      sm: "4px",
    },
  },

  select: {
    paddingLeft: "25px",

    "& .MuiSelect-select": {
      padding: {
        xs: "15px 10px 13px",
        sm: "17px 20px 16px",
      },
      marginRight: "10px",
      boxSizing: "border-box",
    },

    "& .MuiBox-root": {
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
  },

  menuItem: {
    height: {
      xs: "42px",
      sm: "56px",
    },
    color: "black",
    borderBottom: "1px solid white",
  },

  text: {
    color: "white",
    height: "17px",
    fontSize: {
      xs: "12px",
      sm: "14px",
    },
    overflow: "hidden",
    textOverflow: "ellipsis",
    padding: {
      xs: "0 6px",
      sm: "0 8px",
    },
    margin: "auto 0",
  },

  paper: {
    backgroundColor: "#626262",
  },

  menu: {
    padding: "0",
  },

  helperText: { ml: 0 },
};

export default styles;
