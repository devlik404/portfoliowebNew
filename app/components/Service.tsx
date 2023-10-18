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
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi eos
            earum molestiae repellat nisi amet, ullam dolores cupiditate
            sapiente quos voluptatibus autem vitae nobis iste, velit fugiat
            sequi quis illo.
          </Text>
        </Center>
        <Center>
          <SimpleGrid spacing={4} columns={3}>
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
