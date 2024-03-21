import { AppBar, Grid } from "@mui/material";
import NavBarItem from "../NavBarItem";

const NavBar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#222222" }}>
      <Grid container sx={{ height: "70px" }}>
        <Grid item xs={6}></Grid>

        <Grid container justifyContent={"flex-end"} xs={6}>
          <NavBarItem label={"Home"} onClick={() => alert("yo")} />
          <NavBarItem label={"About"} onClick={() => alert("yo")} />
        </Grid>
      </Grid>
    </AppBar>
  );
};

export default NavBar;
