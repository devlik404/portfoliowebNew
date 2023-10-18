import { Box, Container, Flex, Image, Link,VStack ,Text} from "@chakra-ui/react";
import me from "../assets/image/me.png"
function JumbotronWithImage() {
  return (
    <Container maxW="container.xl">
      <Flex align="center" gap={"5"}>
        {/* Bagian Gambar (Sisi Kanan) */}
        <Box flex="1">
          <Image
           src={me} // Ganti dengan URL gambar yang sesuai
            alt="Gambar Jumbotron"
            w="100%"
          />
        </Box>
        
        {/* Bagian Konten (Sisi Kiri) */}
        <Box flex="1">
        <VStack spacing={4} m="160px 0">
            <Box as="h1" fontSize="4xl" color="#fff" fontWeight="200" textShadow="1px 1px 1px rgba(0, 0, 0, 0.8)">
            <Text>Hello I'm</Text>  
            <br/>
            <Text>
            Malik Fajar
            </Text>
            
              <Box color="yellow.700">
                <Text>

              FullStack  Developer
                </Text>
              </Box> 
            
            </Box>
            <Link href="#about" className="tombol">
            
            </Link>
          </VStack>
        </Box>
      </Flex>
    </Container>
  );
}

export default JumbotronWithImage;
