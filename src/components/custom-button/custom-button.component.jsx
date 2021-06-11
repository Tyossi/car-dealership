import React from "react";
import Button from "@material-ui/core/Button";

const CustomButton = ({ children, ...otherProps }) => {
  return (
    <Button className="button" variant="contained" size="large" {...otherProps}>
      {children}
    </Button>
  );
};

export default CustomButton;
