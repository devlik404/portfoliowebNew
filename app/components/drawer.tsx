import { TabPanels, TabPanel, TabIndicator, Tab, TabList, Tabs, WrapItem, Avatar, Flex } from "@chakra-ui/react"
import { motion } from "framer-motion";


import JumbotronWithImage from "./jumbotron"
import Portfolio from "./portfolio"
import Service from "./Service"
import ContactMe from "./contact"
import About from "./about"
import me from "../assets/image/me2.png"

export default function NavbarDrawer() {

  
    return (
      <>
      
       <Tabs variant="unstyled">
       <Flex alignItems="center" justify="space-between" p={4}>
        <TabList>
          <Tab>Home</Tab>
          <Tab>About</Tab>
          <Tab>Project</Tab>
          <Tab>Contact</Tab>
          <Tab>Service</Tab>

        </TabList>
          <WrapItem>
        <Avatar name='Malik Fajar' src={me} />
      </WrapItem>
      </Flex>
        <TabIndicator
          mt="-1.5px"
          height="2px"
          bg="orange.500"
          borderRadius="1px"
        />
        <TabPanels>
          <TabPanel>
          <JumbotronWithImage/>
          </TabPanel>
          <TabPanel>
          <About/>
          </TabPanel>
          
          <TabPanel>
          <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2}}
      >
          <Portfolio/>
      </motion.div>
          </TabPanel>
          <TabPanel>
          <ContactMe/>
          </TabPanel>
          <TabPanel>
          <Service/>
          </TabPanel>
         
        </TabPanels>
      </Tabs>
      </>
    )
  }