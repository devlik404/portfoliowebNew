import {
  Box,
  Flex,
  Image,
  Link,
  VStack,
  Text,
  Stack,
  Button,
  Center,
} from "@chakra-ui/react";
import mb from "../assets/image/mb.jpg";
import facebook from "../assets/image/icons8-facebook-48.png";
import thread from "../assets/image/icons8-threads-48.png";
import instagram from "../assets/image/icons8-instagram-48.png";
import linkedin from "../assets/image/icons8-linkedin-48.png";
import github from "../assets/image/icons8-github-48.png";
import Navbar from "~/components/navbar";

function JumbotronWithImage() {

  
  return (
    <>
      <Box position={"sticky"}>
        <Navbar />
      </Box>
      <Box mt={"-20"} h={"100vh"} overflow={"hidden"} alignItems={"center"}>
        <Flex align="center"  flexDirection={{xl:'row',sm:'column-reverse'}}>
          {/* Bagian Gambar (Sisi Kanan) */}
          <Box flex=".5" bg={"#00758B"} h={"100vh"} w={{sm:"100%"}}>
            <Box
                position={{ xl: 'absolute', sm: 'relative' }}
               
              bottom={10}
              p={"10"}
              color={"whitesmoke"}
            >
              <Box bg={"#0094B0"} border={"2px"}>
                <Box m={"2"}>
                  <Text as={"b"}>Phone</Text>
                  <Text>+62 8581-0641-60</Text>
                </Box>
                <Box bg={"#00758B"}  m={"2"}>
                  <Text as={"b"}>Email</Text>
                  <Text>malikfajar0609@gmail.com</Text>
                </Box>
                <Box  m={"2"}>
                  <Text as={"b"}>LinkedIn</Text>
                  <Text>https://www.linkedin.com/in/dev-malik/</Text>
                </Box>
              </Box>
              <Box m={"2"} pt={"10"}>
                <Text as={"b"}>Find on:</Text>
                <Box>
                  {" "}
                  <Stack direction="row" gap={5}>
                    <Link
                      href="#about"
                      className="tombol"
                      bg={"#0094B0"}
                      border={"1px"}
                    >
                      <Image src={facebook} />
                    </Link>
                    <Link
                      href="#about"
                      className="tombol"
                      bg={"#0094B0"}
                      border={"1px"}
                    >
                      <Image src={thread} />
                    </Link>
                    <Link
                      href="#about"
                      className="tombol"
                      bg={"#0094B0"}
                      border={"1px"}
                    >
                      <Image src={instagram} />
                    </Link>
                    <Link
                      href="#about"
                      className="tombol"
                      bg={"#0094B0"}
                      border={"1px"}
                    >
                      <Image src={linkedin} />
                    </Link>
                    <Link
                      href="#about"
                      className="tombol"
                      bg={"#0094B0"}
                      border={"1px"}
                    >
                      <Image src={github} />
                    </Link>
                  </Stack>
                </Box>
              </Box>
            </Box>
          </Box>
          {/* tengah */}
          <Box 
        

         position={{ xl: 'absolute', sm: 'relative' }}
         right={{ xl: '35%', sm: '0%' }}
         display={{xl:'inline-block',sm: 'none' }}
    
          >
            <Center>
              
      <Image
        src={mb}
        alt="Gambar Jumbotron"
        w={{
          xl:"50%",
          sm:"100%"
        }

        }
      />
  
            </Center>
          </Box>
          {/* Bagian Konten (Sisi Kiri) */}
          <Box 
          flex="1"
           h={"100vh"}
           w={{sm:"100%"}}
            p={{ base: "4", md: "6" }} 
          >
            <VStack spacing={4} m="160px 0">
              <Box
                color="#fff"
                fontWeight={200}
                textShadow="1px 1px 1px rgba(0, 0, 0, 0.8)"
              >
                <Text fontSize={{ base: "4xl", md: "6xl" }}>Hello I'm</Text>
                <Text fontSize={{ base: "4xl", md: "6xl" }}>Malik Fajar</Text>

                <Box color="#00C0E4">
                  <Text fontSize={{ base: "3xl", md: "5xl" }}>
                    FullStack Developer
                  </Text>
                </Box>
              </Box>
              <Stack>
                <Box display={"flex"} gap={"5"}>
                  <Button colorScheme="teal" variant="outline">
                    Portfolio
                  </Button>
                  <Button colorScheme="teal" variant="outline">
                    Resume
                  </Button>
                </Box>
              </Stack>
            </VStack>
          </Box>
        </Flex>
      </Box>
    </>
  );
}

export default JumbotronWithImage;
