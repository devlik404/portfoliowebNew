import {
  SimpleGrid,
  Card,
  CardHeader,
  Heading,
  CardFooter,
  Button,
  Text,
  Center,
  Box,
  Stack,
  Image,
  Divider,
} from "@chakra-ui/react";
import articles from "../utils/portfolio.json";



export default function Portfolio() {
    
  return (
    <>
      <Box>
        <Center flexDirection={"column"} mb={10}>
          <Text fontSize="4xl" as="b" m={6}>
            My Portfolio
            <Divider />
          </Text>
        </Center>
        {articles.map((data, index) => (
          <>
            <SimpleGrid
              spacing={8}
              p={5}
              columns={{ base: 1, md: 2 }}
              key={index}
            >
              {/* Kolom kiri */}
              <Box>
                <Text as="p" p={4}>
                  <Text fontSize="2xl">{data.title}</Text>
                  {data.content}
                </Text>
                <Stack direction="row" gap={5}>
                  {data.icons && data.icons[1] && <Image src={data.icons[1]} />}
                  {data.icons && data.icons[2] && <Image src={data.icons[2]} />}
                  {data.icons && data.icons[3] && <Image src={data.icons[3]} />}

                  {data.icons && data.icons[4] && <Image src={data.icons[4]} />}
                  {data.icons && data.icons[5] && <Image src={data.icons[5]} />}

                  {data.icons && data.icons[6] && <Image src={data.icons[6]} />}
                </Stack>
              </Box>

              {/* Kolom kanan dengan gambar dan artikel */}
              <Center>
                <SimpleGrid spacing={4} columns={1}>
                  <Card key={index}>
                    <CardHeader>
                      <Heading size="md">
                        <Stack direction="row">
                          <Image
                            objectFit="cover"
                            src="https://bit.ly/dan-abramov" // Ganti dengan URL gambar yang sesuai
                            alt="Dan Abramov"
                          />
                        </Stack>
                      </Heading>
                    </CardHeader>
                    <CardFooter>
                      <Button>View here</Button>
                    </CardFooter>
                  </Card>
                </SimpleGrid>
              </Center>
            </SimpleGrid>
            <Divider />
          </>
        ))}
      </Box>
    </>
  );
}
