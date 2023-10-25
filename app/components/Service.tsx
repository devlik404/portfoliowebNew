import {
  SimpleGrid,
  Card,
  CardHeader,
  Heading,
  CardBody,
  CardFooter,
  Button,
  Text,
  Center,
  Box,
} from "@chakra-ui/react";

export default function Service() {
  return (
    <>
      <Box bg={"blackAlpha.50"}>
        <Center flexDirection={"column"} mb={"10"}>
          <Text fontSize="4xl" as='b'  m={"6"}>Our Service</Text>
          
        </Center>
        <Center>
          <SimpleGrid spacing={4} columns={3}>
            <Card>
              <CardHeader>
                <Heading size="md"> Web development</Heading>
              </CardHeader>
              <CardBody>
                <Text>
                  saya membuka jasa pengembang web  dan juga basis data
                </Text>
              </CardBody>
              <CardFooter>
                <Button>Contact me</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <Heading size="md"> Web Desainer</Heading>
              </CardHeader>
              <CardBody>
                <Text>
                  View a summary of all your customers over the last month.
                </Text>
              </CardBody>
              <CardFooter>
                <Button>View here</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <Heading size="md"> Customer dashboard</Heading>
              </CardHeader>
              <CardBody>
                <Text>
                  View a summary of all your customers over the last month.
                </Text>
              </CardBody>
              <CardFooter>
                <Button>View here</Button>
              </CardFooter>
            </Card>
          </SimpleGrid>
        </Center>
      </Box>
    </>
  );
}
