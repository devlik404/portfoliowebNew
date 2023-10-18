import { Box } from '@chakra-ui/react';
import Service from '~/components/Service';
import ContactMe from '~/components/contact';
import NavbarDrawer from '~/components/drawer';
import JumbotronWithImage from '~/components/jumbotron';
import Portfolio from '~/components/portfolio';



export default function Home() {
  return (
    <>
    
    <NavbarDrawer/>
    <Box>
        <JumbotronWithImage/>
    </Box>
    <Box>

        <Service/>
    </Box>
    <Box>
        <Portfolio/>
    </Box>
    <Box>
    <ContactMe/>
    </Box>

    </>
  );
}


