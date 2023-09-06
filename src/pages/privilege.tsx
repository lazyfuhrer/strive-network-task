import { Exo } from 'next/font/google';
import { Box, Button, Center, Divider, Flex, FormControl, FormLabel, Heading, IconButton, Input, Select, Spacer, Switch, Tab, TabList, TabPanel, TabPanels, Tabs, Text, Textarea, Tooltip } from "@chakra-ui/react";
import { CloseIcon, InfoIcon } from '@chakra-ui/icons'; 
import { IoIosArrowDropdown } from 'react-icons/io';
import { AiOutlinePlusCircle } from "react-icons/ai";

const exo = Exo({ subsets: ['latin'] })

export default function Privilege() {
  return (
    <>
      <Flex justify={'center'} mt={10}> 
      <Tabs
        w={'638px'}
        h={'full'}
        bg={'rgba(10, 12, 23, 1)'}
        border={'1px'}
        borderRadius={'16px'}
        size={'md'}
      >
        <Box p={3} display="flex" alignItems="center" justifyContent="space-between">
            <Box flex="1" textAlign="center">
                <Text fontSize={"22px"}>Add Privilege</Text>
            </Box>
            <IconButton aria-label='Close section' icon={<CloseIcon />} />
        </Box>
        <Divider />
        <Box p={'8'}>
            <Box>
            <TabList gap={'35px'}>
                <Tab fontSize={"12px"} fontWeight={600}>Utility Info</Tab>
                <Tab fontSize={"12px"} fontWeight={600}>Upload</Tab>
                <Tab fontSize={"12px"} fontWeight={600}>Redeemable Type</Tab>
            </TabList>
            </Box>

            <TabPanels>
            <TabPanel display="flex" flexDirection="column">
                <FormControl mt={4}>
                    <Input placeholder="Utility Name" />
                </FormControl>
                <FormControl mt={8} isRequired>
                    <Textarea
                    placeholder="Utility Description"
                    resize="vertical"
                    rows={5}
                    />
                </FormControl>
                <Button variant="unstyled" bg={'rgba(2, 170, 176, 1)'} mt={28} w={'180px'} h={'46px'} fontSize={'20px'} alignSelf="flex-end">
                    Next
                </Button>
            </TabPanel>

            <TabPanel mt={3}>
                <main className={exo.className}>
                    <Flex justifyContent="center" alignItems="center" h={{base: '300px', md: '360px'}}>
                        <Box display={"flex"} justifyContent={"center"} alignItems={"center"} flexDirection={"column"} borderRadius={'24px'} w={{base: '310px', md: '400px'}} h={{base: '300px', md: '360px'}} textAlign="center" style={{
                            background: `
                            linear-gradient(162.34deg, #161A42 22.61%, rgba(22, 26, 66, 0) 118.29%),
                            linear-gradient(0deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3))
                            `,
                        }}>
                            <Text fontSize={'24px'} fontWeight={600}>Upload your file</Text>
                            <Box border="2px dashed rgba(47, 128, 236, 1)" mt={6} mx={'auto'} width={'80%'} h={'140px'} borderRadius={'24px'} display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                                <Text color={'rgba(47, 128, 236, 1)'} mb={2} fontSize={'16px'} fontWeight={500}>Drag or Drop files here</Text>
                                <Text color={'rgba(47, 128, 236, 1)'} mb={2} fontSize={'12px'} fontWeight={500}>OR</Text>
                                <Button variant={"unstyled"} w={'128px'} h={'35px'} leftIcon={<AiOutlinePlusCircle />} bg={'rgba(47, 128, 236, 1)'}>Add File</Button>
                            </Box>
                            <Box mt={8}>
                                <Text mb={2} fontSize={'12px'} fontWeight={500}>Supported files - JPG, PNG, GIF</Text>
                                <Text fontSize={'12px'} fontWeight={500}>Please select a file to import the collections</Text>
                            </Box>
                        </Box>
                    </Flex>
                    <Flex justifyContent="flex-end" mt={7}>
                        <Button variant="unstyled" bg={'rgba(2, 170, 176, 1)'} w={'180px'} h={'46px'} fontSize={'20px'}>Next</Button>
                    </Flex>
                </main>
            </TabPanel>

            <TabPanel mt={2}>
                <Box>
                    <Flex justifyContent="space-between" alignItems="center" mb={4}>
                        <Text fontSize="22px">
                            Redeemable Type{" "}
                            <Tooltip label="Redeemable Type" fontSize="md">
                            <InfoIcon color={'rgba(2, 170, 176, 1)'} w={4} h={4} />
                            </Tooltip>
                        </Text>
                        <Switch size="lg" color="rgba(2, 170, 176, 1)" />
                    </Flex>

                    <Flex justifyContent="space-between" alignItems="center">
                        <Text fontSize="22px">
                            Expiry Type{" "}
                            <Tooltip label="Expiry Type" fontSize="md">
                            <InfoIcon color={'rgba(2, 170, 176, 1)'} w={4} h={4} />
                            </Tooltip>
                        </Text>
                        <Switch size="lg" color="rgba(2, 170, 176, 1)" />
                    </Flex>

                    <Box>
                        <Text fontSize="22px" mt={4}>Categories</Text>
                        <Select icon={<IoIosArrowDropdown/>} mt={4} placeholder="Select">
                            <option value="option1" style={{ backgroundColor: "rgba(0, 0, 0, 1)", height: "56px", width: "602px" }}>Category</option>
                            <option value="option2" style={{ backgroundColor: "rgba(0, 0, 0, 1)", height: "40px" }}>Category</option>
                            <option value="option3" style={{ backgroundColor: "rgba(0, 0, 0, 1)", height: "40px" }}>Category</option>
                        </Select>
                    </Box>

                    <Flex justifyContent="flex-end" mt={36}>
                        <Spacer />
                        <Button variant="unstyled" bg="rgba(2, 170, 176, 1)" w={'180px'} h={'46px'} fontSize={'20px'}>Submit</Button>
                    </Flex>
                </Box>
            </TabPanel>
        </TabPanels>
        </Box>
      </Tabs>
      </Flex>
    </>
  )
}
