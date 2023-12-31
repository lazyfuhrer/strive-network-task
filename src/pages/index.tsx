import SmallUpload from "@/components/SmallUpload";
import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Textarea,
} from "@chakra-ui/react";
import { Exo } from "next/font/google";

const exo = Exo({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Flex justify={"center"} p={20}>
        <Tabs
          w={"738px"}
          minH={"500px"}
          bg={"rgba(10, 12, 23, 1)"}
          border={"1px"}
          borderRadius={"16px"}
          p={"8"}
          size={"md"}
        >
          <Box>
            <TabList gap={{ base: "25px", md: "35px" }}>
              <Tab fontSize={{ base: "10px", md: "16px" }} fontWeight={600}>
                Collection Info
              </Tab>
              <Tab fontSize={{ base: "10px", md: "16px" }} fontWeight={600}>
                Upload
              </Tab>
              <Tab fontSize={{ base: "10px", md: "16px" }} fontWeight={600}>
                Details
              </Tab>
            </TabList>
          </Box>

          <TabPanels>
            {/* Collection Info tab */}
            <TabPanel>
              <FormControl mt={3} isRequired>
                <FormLabel>Collection Address</FormLabel>
                <Input border={"1.5px solid rgba(255, 255, 255, 0.3)"} />
              </FormControl>
              <FormControl mt={3} isRequired>
                <FormLabel>Collection Name</FormLabel>
                <Input border={"1.5px solid rgba(255, 255, 255, 0.3)"} />
              </FormControl>
              <FormControl mt={3} isRequired>
                <FormLabel>Collection Description</FormLabel>
                <Textarea
                  border={"1.5px solid rgba(255, 255, 255, 0.3)"}
                  resize="vertical"
                  rows={5}
                />
              </FormControl>
            </TabPanel>
            {/* Upload tab */}
            <TabPanel mt={{ base: "0", md: "16" }}>
              <main className={exo.className}>
                <Flex
                  mt={{ base: "12", md: "0" }}
                  direction={{ base: "column", md: "row" }}
                  justify="center"
                  align="center"
                  h="100%"
                  w="100%"
                >
                  <SmallUpload title={"Profile Picture"} />
                  <SmallUpload
                    mt={{ base: "10", md: "0" }}
                    title={"Cover Picture"}
                  />
                </Flex>
              </main>
            </TabPanel>
            {/* Details tab */}
            <TabPanel>
              <FormControl mt={3}>
                <FormLabel>Website URL</FormLabel>
                <Input
                  border={"1.5px solid rgba(255, 255, 255, 0.3)"}
                  placeholder="Optional"
                />
              </FormControl>
              <FormControl mt={3}>
                <FormLabel>Twitter URL</FormLabel>
                <Input
                  border={"1.5px solid rgba(255, 255, 255, 0.3)"}
                  placeholder="Optional"
                />
              </FormControl>
              <FormControl mt={3}>
                <FormLabel>Discord URL</FormLabel>
                <Input
                  border={"1.5px solid rgba(255, 255, 255, 0.3)"}
                  placeholder="Optional"
                />
              </FormControl>
              <Center>
                <Button
                  mt={10}
                  bg={"rgba(2, 170, 176, 1)"}
                  _hover={{ bg: "rgba(0, 120, 126, 1)" }}
                  w={"186px"}
                >
                  Submit
                </Button>
              </Center>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </>
  );
};