import { Box, Button, Center, Flex, FormControl, FormLabel, Input, Tab, TabList, TabPanel, TabPanels, Tabs, Text, Textarea } from "@chakra-ui/react";
import { Exo } from "next/font/google";
import { AiOutlinePlusCircle } from "react-icons/ai";

const exo = Exo({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Flex justify={'center'} p={20}>
      <Tabs
        w={'638px'}
        h={'full'}
        bg={'rgba(10, 12, 23, 1)'}
        border={'1px'}
        borderRadius={'16px'}
        p={'8'}
        size={'md'}
      >
        <Box>
          <TabList gap={{base: '25px', md: '35px'}}>
            <Tab fontSize={{base: '10px', md: '16px'}} fontWeight={600}>Collection Info</Tab>
            <Tab fontSize={{base: '10px', md: '16px'}} fontWeight={600}>Upload</Tab>
            <Tab fontSize={{base: '10px', md: '16px'}} fontWeight={600}>Details</Tab>
          </TabList>
        </Box>

        <TabPanels>
          <TabPanel>
            <FormControl mt={3} isRequired>
              <FormLabel>Collection Address</FormLabel>
              <Input />
            </FormControl>
            <FormControl mt={3} isRequired>
              <FormLabel>Collection Name</FormLabel>
              <Input />
            </FormControl>
            <FormControl mt={3} isRequired>
              <FormLabel>Collection Description</FormLabel>
              <Textarea
                resize="vertical"
                rows={5}
              />
            </FormControl>
          </TabPanel>
          <TabPanel mt={{base: '0', md: '10'}}>
            <main className={exo.className}> 
            <Flex
              mt={{ base: '12', md: '0' }}
              direction={{ base: 'column', md: 'row' }}
              justify="center"
              align="center"
              h="100%"
              w="100%"
            >
              <Box
                w={{ base: '100%', md: '268px' }}
                h={{ base: '200px', md: '248px' }}
                mb={{ base: '16px', md: '0' }}
                mr={{ base: '0', md: '16px' }}
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                borderRadius="24px"
              >
                <Text fontSize={{ base: '20px', md: '20px' }} fontWeight={500}>Profile Picture</Text>
                <Box
                  mt={3}
                  w={{ base: '100%', md: '100%' }}
                  h={{ base: '200px', md: '220' }}
                  style={{
                    background: `
                      linear-gradient(162.34deg, #161A42 22.61%, rgba(22, 26, 66, 0) 118.29%),
                      linear-gradient(0deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3))
                    `,
                  }}
                  flex="1"
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                  borderRadius="24px"
                  padding="16px"
                >
                  <Center flexDirection={"column"} w={{ base: '100%', md: '100%' }} h="250px" borderRadius={'12px'} border="2px dashed rgba(47, 128, 236, 1)">
                    <Text mb={2} fontSize={{ base: '12px', md: '16px' }}>Drag or Drop files here</Text>
                    <Text mb={2} fontSize={{ base: '10px', md: '12px' }}>OR</Text>
                    <Button fontSize={{ base: '12px', md: '16px' }} variant="unstyled" bg={'rgba(47, 128, 236, 1)'} leftIcon={<AiOutlinePlusCircle />} w={{ base: '90px', md: '128px' }} h={{ base: '25px', md: '35px' }}>Add File</Button>
                  </Center>
                </Box>
              </Box>
              <Box
                w={{ base: '100%', md: '268px' }}
                h={{ base: '200px', md: '248px' }}
                mb={{ base: '16px', md: '0' }}
                mr={{ base: '0', md: '0' }}
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                borderRadius="24px"
                mt={{ base: '10', md: '0' }}
              >
                <Text fontSize={{ base: '20px', md: '20px' }} fontWeight={500}>Cover Picture</Text>
                <Box
                  mt={3}
                  w={{ base: '100%', md: '100%' }}
                  h={{ base: '200px', md: '220' }}
                  style={{
                    background: `
                      linear-gradient(162.34deg, #161A42 22.61%, rgba(22, 26, 66, 0) 118.29%),
                      linear-gradient(0deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3))
                    `,
                  }}
                  flex="1"
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                  borderRadius="24px"
                  padding="16px"
                >
                  <Center flexDirection={"column"} w={{ base: '100%', md: '100%' }} h="250px" borderRadius={'12px'} border="2px dashed rgba(47, 128, 236, 1)">
                    <Text mb={2} fontSize={{ base: '12px', md: '16px' }}>Drag or Drop files here</Text>
                    <Text mb={2} fontSize={{ base: '10px', md: '12px' }}>OR</Text>
                    <Button fontSize={{ base: '12px', md: '16px' }} variant="unstyled" bg={'rgba(47, 128, 236, 1)'} leftIcon={<AiOutlinePlusCircle />} w={{ base: '90px', md: '128px' }} h={{ base: '25px', md: '35px' }}>Add File</Button>
                  </Center>
                </Box>
              </Box>
            </Flex>
            </main> 
          </TabPanel>

          <TabPanel>
            <FormControl mt={3}>
              <FormLabel>Website URL</FormLabel>
              <Input placeholder='Optional' />
            </FormControl>
            <FormControl mt={3}>
              <FormLabel>Twitter URL</FormLabel>
              <Input placeholder='Optional' />
            </FormControl>
            <FormControl mt={3}>
              <FormLabel>Discord URL</FormLabel>
              <Input placeholder='Optional' />
            </FormControl>
            <Center>
              <Button variant="unstyled" mt={10} bg={"rgba(2, 170, 176, 1)"} w={'186px'}>Submit</Button>
            </Center>
          </TabPanel>
        </TabPanels>
      </Tabs>
      </Flex>
    </>
  )
}
