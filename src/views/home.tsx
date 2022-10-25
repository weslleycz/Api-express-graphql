import { ListItemText } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import React from "react";
import { Header } from "./components/Header";
import Card from '@mui/material/Card';

export type Project = {
  name: string;
  description: String;
  userId: String;
  id: String;
};

const home = (projects: Project[]) => {
  return (
    <>
      <Header></Header>
      <div>
      <List sx={{ width: "100%", maxWidth: 360 }}>
        {Object.values(projects).map((project) => {
          return (
            <>
            <Card
            sx={{
              marginBlockEnd:"3%",
              background:"rgba(255, 255, 255, 0.25)",
              boxShadow:"0 8px 32px 0 rgba(31, 38, 135, 0.37)",
              backdropFilter:"blur(4px)",
              WebkitBackdropFilter:"blur(4px)",
              borderRadius:"10px",
              border:"1px solid rgba(255, 255, 255, 0.18)"
            }}>
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src={`/static/${project.name}.png`} />
                </ListItemAvatar>
                <ListItemText
                  primary={project.name}
                  secondary={
                    <React.Fragment>{project.description}</React.Fragment>
                  }
                />
              </ListItem>
            </Card>
            </>
          );
        })}
      </List>
      </div>
    </>
  );
};

export default home;
