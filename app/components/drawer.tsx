import { ArrowDownIcon } from "@chakra-ui/icons"
import { useDisclosure, Button, Drawer, DrawerOverlay, DrawerContent, DrawerHeader, Avatar, Box, Flex, Link, Wrap, WrapItem } from "@chakra-ui/react"
import React from "react"

export default function NavbarDrawer() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [placement] = React.useState('top')
  
    return (
      <>
     <Box display={"flex"} justifyContent={"center"}>
        <Button colorScheme='yellow' onClick={onOpen}>
        <ArrowDownIcon />
        </Button>
     </Box>
        <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent  >
            <DrawerHeader borderBottomWidth='1px'>
                
                
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1rem"
    
    
    >
        <Wrap>
        <WrapItem>
    <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
  </WrapItem>
        </Wrap>
      <Box>
        <Link href="/">Home</Link>
      </Box>
      <Box>
        <Link href="/tentang">About</Link>
        </Box>
        <Box>
        <Link href="/layanan">Project</Link>
        </Box>
        <Box>
        <Link href="/kontak">Contact</Link>
      </Box>
   
    </Flex>
            </DrawerHeader>
            {/* <DrawerBody>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
            </DrawerBody> */}
          </DrawerContent>
        </Drawer>
      </>
    )
  }