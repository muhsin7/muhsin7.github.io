import { Button, SvgIcon } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import React from "react";
import './headerbutton.css';

class HeaderButton extends React.Component {
    

    render()  {
        return <React.Fragment>
            <Button variant="outlined">
                {/* <SvgIcon color="primary" style={{ colorPrimary: "#000000" }} children={ icon.icon.path }></SvgIcon> */}
                {/* <img src={"https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/" + slug.icon + ".svg"} /> */}
                <div>{this.props.name}</div>
            </Button>
        </React.Fragment>
    };
}

export default HeaderButton;