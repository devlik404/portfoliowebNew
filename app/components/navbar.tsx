import { HamburgerIcon } from "@chakra-ui/icons";
import { Menu, MenuButton, IconButton, MenuList, MenuItem,Box, Flex } from "@chakra-ui/react";
import { Link } from "@remix-run/react";
// import me from "../assets/image/me2.png"

export default function Navbar() {
  return (
    <>
 
    <Box  >

    <Flex justifyContent={"end"} m={"20px"} >  
    
      <Box >
        <Menu >
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon />}
            variant="outline"
          />
          <MenuList   >
          <Link to={"/jumbotron"}>
              <MenuItem >
                Home
              </MenuItem>
            </Link>
            <Link to={"/about"}>
              <MenuItem >
                About
              </MenuItem>
            </Link>
            <Link to={"/Portfolio"}>
              <MenuItem >
                
                portfolio
                
              </MenuItem>
            </Link>
            <Link to={"/contact"}>
              <MenuItem >
                Contact
              </MenuItem>
            </Link>
            <Link to={"/service"}>
              <MenuItem >
                Service
              </MenuItem>
            </Link>
          </MenuList>
        </Menu>
      </Box>
    </Flex>
    </Box>
   
    </>
  );
}
