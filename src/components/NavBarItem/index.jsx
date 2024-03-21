import { Grid, Typography } from "@mui/material";

const NavBarItem = ({ label, onClick }) => {
  return (
    <>
      <Grid
        display={"flex"}
        item
        justifyContent={"center"}
        alignItems={"center"}
        xs={3}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flex: "1",
            height: "100%",
          }}
          onClick={onClick}
        >
          <Typography fontSize={25} textAlign={"center"}>
            {label}
          </Typography>
        </div>
      </Grid>
    </>
  );
};

export default NavBarItem;
