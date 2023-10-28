import {
  Text,
  Box,
  Divider,
  Image,
  SimpleGrid,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Flex,
} from "@chakra-ui/react";

import data from "../utils/skills.json";
import Navbar from "~/components/navbar";

export default function About() {
  return (
    <>
      <Box position={"sticky"}>
        <Navbar />
      </Box>
      <Box mt={"-20"} bg={"blackAlpha.50"}>
        <Box textAlign={"center"} p={"20"}>
          <Text
            mb={"5"}
            fontSize={{ base: "2xl", md: "4xl" }}
            as="b"
            m={["4", "6"]}
            color={"yellow"}
          >
            About me
          </Text>
          <Text>
            I am a Fullstack Developer with strong experience in developing
            various innovative web solutions. My expertise includes front-end
            and back-end development, as well as efficient database integration.
            I have a track record of designing, building and managing
            high-performance web applications, with a strong focus on security,
            scalability and engaging user interfaces. I'm also always eager to
            learn and adopt the latest technologies, and collaborate with teams
            to create web solutions that meet business and user needs.
          </Text>
        </Box>
        <Divider />
        <Box textAlign={"center"} m={"5"}>
          <Flex>
            <Box
              mb={"5"}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                fontSize={{ base: "2xl", md: "4xl" }}
                as="b"
                color={"yellow"}
                style={{ transform: "rotate(-90deg)" }}
              >
                Skills
                <Divider bg={"yellow"} />
              </Text>
            </Box>

            <Box>
              <SimpleGrid
                columns={[1, 2, 3, 4, 5]}
                spacing={4}
                bg={"blackAlpha.500"}
                borderRadius={"2xl"}
              >
                {data.map((category, index) =>
                  category.items.map((item, itemIndex) => (
                    <>
                      <Card
                        key={itemIndex}
                        m={"2"}
                        bg={"blackAlpha.900"}
                        boxShadow="2xl"
                        zIndex={-9}
                      >
                        <Box
                          display={"flex"}
                          flexDirection={"column"}
                          alignItems={"center"}
                        >
                          <CardBody>
                            <Image
                              src={item.image}
                              alt={item.name}
                              width="100"
                              height="100"
                            />{" "}
                            {/* Menggunakan URL gambar dari item */}
                          </CardBody>
                          <CardFooter>
                            <Heading size="md">{item.name}</Heading>
                          </CardFooter>
                        </Box>
                      </Card>
                    </>
                  ))
                )}
              </SimpleGrid>
            </Box>
          </Flex>
        </Box>
      </Box>
    </>
  );
}
