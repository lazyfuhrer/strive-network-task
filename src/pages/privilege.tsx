import {
    Box,
    Button,
    Divider,
    Flex,
    FormControl,
    IconButton,
    Input,
    Select,
    Switch,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    Text,
    Textarea,
    Tooltip,
  } from "@chakra-ui/react";
  import { CloseIcon, InfoIcon } from "@chakra-ui/icons";
  import { IoIosArrowDropdown } from "react-icons/io";
  import BigUpload from "@/components/BigUpload";
  
  export default function Privilege() {
    return (
      <>
        <Flex justify={"center"} pt={10}>
          <Tabs
            w={{ base: "350px", md: "550px" }}
            minH={"500px"}
            bg={"rgba(10, 12, 23, 1)"}
            border={"1px"}
            borderRadius={"16px"}
            size={"md"}
          >
            <Box
              p={3}
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Box flex="1" textAlign="center">
                <Text fontSize={"22px"}>Add Privilege</Text>
              </Box>
              <IconButton aria-label="Close section" icon={<CloseIcon />} />
            </Box>
            <Divider />
            <Box p={"8"}>
              <Box>
                <TabList gap={{ base: "25px", md: "35px" }}>
                  <Tab fontSize={"12px"} fontWeight={600}>
                    Utility Info
                  </Tab>
                  <Tab fontSize={"12px"} fontWeight={600}>
                    Upload
                  </Tab>
                  <Tab fontSize={"12px"} fontWeight={600}>
                    Redeemable Type
                  </Tab>
                </TabList>
              </Box>
  
              <TabPanels>
                <TabPanel display="flex" flexDirection="column">
                  <FormControl mt={4}>
                    <Input
                      border={"1.5px solid rgba(255, 255, 255, 1)"}
                      placeholder="Utility Name"
                      _placeholder={{ color: "rgba(255, 255, 255, 1)" }}
                    />
                  </FormControl>
                  <FormControl mt={8} isRequired>
                    <Textarea
                      border={"1.5px solid rgba(255, 255, 255, 1)"}
                      _placeholder={{ color: "rgba(255, 255, 255, 1)" }}
                      placeholder="Utility Description"
                      resize="vertical"
                      rows={5}
                    />
                  </FormControl>
                  <Button
                    variant="unstyled"
                    bg={"rgba(2, 170, 176, 1)"}
                    _hover={{ bg: "rgba(0, 120, 126, 1)" }}
                    mt={28}
                    w={"180px"}
                    h={"46px"}
                    fontSize={"20px"}
                    alignSelf={{ base: "center", md: "flex-end" }}
                  >
                    Next
                  </Button>
                </TabPanel>
  
                <TabPanel mt={4}>
                  <BigUpload />
                </TabPanel>
  
                <TabPanel mt={2}>
                  <Box>
                    <Flex
                      justifyContent="space-between"
                      alignItems="center"
                      mb={4}
                    >
                      <Text fontSize={{ base: "20px", md: "22px" }}>
                        Redeemable Type{" "}
                        <Tooltip
                          label="Redeemable Type"
                          fontSize={{ base: "sm", md: "md" }}
                        >
                          <InfoIcon
                            color={"rgba(2, 170, 176, 1)"}
                            w={{ base: 3, md: 4 }}
                            h={{ base: 3, md: 4 }}
                          />
                        </Tooltip>
                      </Text>
                      <Switch
                        size={{ base: "md", md: "lg" }}
                        color="rgba(2, 170, 176, 1)"
                      />
                    </Flex>
  
                    <Flex justifyContent="space-between" alignItems="center">
                      <Text fontSize={{ base: "20px", md: "22px" }}>
                        Expiry Type{" "}
                        <Tooltip
                          label="Expiry Type"
                          fontSize={{ base: "sm", md: "md" }}
                        >
                          <InfoIcon
                            color={"rgba(2, 170, 176, 1)"}
                            w={{ base: 3, md: 4 }}
                            h={{ base: 3, md: 4 }}
                          />
                        </Tooltip>
                      </Text>
                      <Switch
                        size={{ base: "md", md: "lg" }}
                        color="rgba(2, 170, 176, 1)"
                      />
                    </Flex>
  
                    <Box>
                      <Text fontSize={{ base: "20px", md: "22px" }} mt={4}>
                        Categories
                      </Text>
                      <Select
                        fontSize={{ base: "13px", md: "16px" }}
                        icon={<IoIosArrowDropdown />}
                        mt={4}
                        placeholder="Select"
                      >
                        <option
                          value="option1"
                          style={{
                            backgroundColor: "rgba(0, 0, 0, 1)",
                            height: "56px",
                            width: "602px",
                          }}
                        >
                          Category
                        </option>
                        <option
                          value="option2"
                          style={{
                            backgroundColor: "rgba(0, 0, 0, 1)",
                            height: "40px",
                          }}
                        >
                          Category
                        </option>
                        <option
                          value="option3"
                          style={{
                            backgroundColor: "rgba(0, 0, 0, 1)",
                            height: "40px",
                          }}
                        >
                          Category
                        </option>
                      </Select>
                    </Box>
  
                    <Flex
                      justifyContent={{ base: "center", md: "flex-end" }}
                      mt={24}
                    >
                      <Button
                        variant="unstyled"
                        bg="rgba(2, 170, 176, 1)"
                        _hover={{ bg: "rgba(0, 120, 126, 1)" }}
                        w={"180px"}
                        h={"46px"}
                        fontSize={"20px"}
                      >
                        Submit
                      </Button>
                    </Flex>
                  </Box>
                </TabPanel>
              </TabPanels>
            </Box>
          </Tabs>
        </Flex>
      </>
    );
  };  