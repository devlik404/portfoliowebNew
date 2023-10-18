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
  Image
} from "@chakra-ui/react";

export default function Portfolio() {

    
  return (
    <>
      <Box >
        <Center flexDirection={"column"} mb={"10"}>
          <Text fontSize="4xl" as='b' m={"6"}>My Portfolio</Text>
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
                <Heading size="md">
                  <Stack direction="row">
                
                    <Image
                   
                      objectFit="cover"
                      src="https://bit.ly/dan-abramov"
                      alt="Dan Abramov"
                    />
                   
                    
                  </Stack>
                </Heading>
              </CardHeader>
             
              <CardFooter>
                <Button>View here</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
              <Heading size="md">
                  <Stack direction="row">
                
                    <Image
                   
                      objectFit="cover"
                      src="https://bit.ly/dan-abramov"
                      alt="Dan Abramov"
                    />
                   
                    
                  </Stack>
                </Heading>
              </CardHeader>
            
              <CardFooter>
                <Button>View here</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
              <Heading size="md">
                  <Stack direction="row">
                
                    <Image
                   
                      objectFit="cover"
                      src="https://bit.ly/dan-abramov"
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
      </Box>
    </>
  );
}
