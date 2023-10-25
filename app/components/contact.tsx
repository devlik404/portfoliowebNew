import { Box, Button, Grid, GridItem, Input, Textarea,Center,Text, Divider} from "@chakra-ui/react";





export default function ContactMe() {
    const handleSubmit = (e:any) => {
        e.preventDefault();
        // Tambahkan logika untuk menangani pengiriman formulir di sini
        console.log("Form submitted");
      };

    return (
        <Box>
            <Center flexDirection={"column"} mb={"10"}>
          <Text fontSize="4xl" as='b' m={"6"}>Contact Me <Divider color={"yellow"}/></Text>
        </Center>
      <Grid templateColumns="repeat(2, 1fr)" gap={4}>
        <GridItem colSpan={{ base: 2, md: 1 }}>
        <Box  p={4} borderWidth="1px" borderRadius="md">
        
      <form onSubmit={handleSubmit}>
        <Input type="text" placeholder="Name" mb={4} />
        <Input type="email" placeholder="Email" mb={4} />
        <Textarea placeholder="Message" mb={4} />
        <Button colorScheme="yellow" type="submit">
         Send Message
        </Button>
      </form>
    </Box>
      
        </GridItem>
        <GridItem colSpan={{ base: 2, md: 1 }}>
           <Box p={4} borderWidth="1px" borderRadius="md">
           <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.115240140383!2d106.59275560820345!3d-6.115185198333075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6a01ba7ead4d41%3A0x66b1262bdcc67a64!2sTanah%20Merah%2C%20Kec.%20Sepatan%20Tim.%2C%20Kabupaten%20Tangerang%2C%20Banten%2015520!5e0!3m2!1sid!2sid!4v1697593772773!5m2!1sid!2sid" width="600" height="450" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </Box>
        </GridItem>
      </Grid>
        </Box>
    );
  }