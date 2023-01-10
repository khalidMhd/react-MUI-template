import * as React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Box, Collapse, List } from "@mui/material";
import { ExpandLess, ExpandMore, StarBorder } from "@mui/icons-material";
import { userMenus } from "../../common/userMenu";
import { useNavigate } from "react-router-dom";
export default function SidebarContent(props) {
  const { open } = props;
  const navigate = useNavigate();

  const [visibilities, setVisibilities] = React.useState(() =>
    userMenus.map((x) => false)
  );
  // console.log("visibilities", visibilities);
  const handleClick = (index) => {
    const newVisibilities = [...visibilities];
    newVisibilities[index] = !newVisibilities[index];
    setVisibilities(newVisibilities);
  };

  return (
    <List>
      {userMenus.map((menu, menuIndex) => (
        <Box key={menuIndex}>
          {menu.childMenus === null ? (
            <ListItem key={menuIndex} disablePadding sx={{ display: "block" }}>
              <ListItemButton onClick={() => navigate(menu.routeName)}>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary={menu.title} />
              </ListItemButton>
            </ListItem>
          ) : (
            <Box key={menuIndex}>
              <ListItemButton onClick={() => handleClick(menuIndex)}>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary={menu.title} />
                {visibilities[menuIndex] ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              {menu.childMenus.map((child, childIndex) => (
                <Collapse
                  key={childIndex}
                  in={visibilities[menuIndex]}
                  timeout="auto"
                  unmountOnExit
                >
                  <ListItem component="div" disablePadding>
                    <ListItemButton
                      sx={{ pl: 4 }}
                      onClick={() => navigate(child.routeName)}
                    >
                      <ListItemText primary={child.title} />
                    </ListItemButton>
                  </ListItem>
                </Collapse>
              ))}
            </Box>
          )}
        </Box>
      ))}
    </List>
  );
}
