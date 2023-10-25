import {
  Box,
  Container,
  Flex,
  Image,
  Link,
  VStack,
  Text,
  Stack,
} from "@chakra-ui/react";
import me from "../assets/image/me.png";
import facebook from "../assets/image/icons8-facebook-48.png";
import thread from "../assets/image/icons8-threads-48.png";
import instagram from "../assets/image/icons8-instagram-48.png";
import linkedin from "../assets/image/icons8-linkedin-48.png";
import github from "../assets/image/icons8-github-48.png";

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
            <Box
              color="#fff"
              fontWeight={200}
              textShadow="1px 1px 1px rgba(0, 0, 0, 0.8)"
            >
              <Text fontSize={{ base: "4xl", md: "6xl" }}>Hello I'm</Text>
              <Text fontSize={{ base: "4xl", md: "6xl" }}>Malik Fajar</Text>

              <Box color="yellow.500">
                <Text fontSize={{ base: "3xl", md: "5xl" }}>
                  FullStack Developer
                </Text>
              </Box>
            </Box>
            ;
            <Stack direction="row" gap={5}>
              <Link href="#about" className="tombol">
                <Image src={facebook} />
              </Link>
              <Link href="#about" className="tombol">
                <Image src={thread} />
              </Link>
              <Link href="#about" className="tombol">
                <Image src={instagram} />
              </Link>
              <Link href="#about" className="tombol">
                <Image src={linkedin} />
              </Link>
              <Link href="#about" className="tombol">
                <Image src={github} />
              </Link>
            </Stack>
          </VStack>
        </Box>
      </Flex>
    </Container>
  );
}

export default JumbotronWithImage;
