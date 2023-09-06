import { Alert, AlertIcon, Box, Button, ButtonGroup, Center, CloseButton, Flex, FormControl, Grid, GridItem, Heading, Image, Input, InputGroup, InputRightElement, Spacer, Stack, Text, useDisclosure } from "@chakra-ui/react";

export default function Utility() {
  const { isOpen: isVisible, onClose } = useDisclosure({ defaultIsOpen: true });
  return (
    <>
        {isVisible ? 
            <Alert h={'38px'} color={'rgba(0, 0, 0, 1)'} fontSize={'14px'} fontWeight={600} bgColor={'rgba(243, 154, 74, 1)'}alignItems='center' justifyContent='space-between' textAlign='center'>
                <Flex alignItems='center' justifyContent='center' flex='1'>
                    <AlertIcon color={'rgba(0, 0, 0, 1)'} />
                    Please fill out the redirection URL and save to continue.
                </Flex>
                <CloseButton onClick={onClose} />
            </Alert> : <></>
        }
        <Box pl={5} pr={5} mt={4}>
            <Flex alignItems='center' gap='2' mb={3}>
                    <Flex p='2' gap={4}>
                        <Image src="/icons/back-arrow.svg" alt="arrow left" />
                        <Text fontSize={{base: '26px', md: '36px'}} fontWeight={600}>View Utility</Text>
                    </Flex>
                    <Spacer />
                    <ButtonGroup gap='2'>
                        <Button border={1}>Cancel</Button>
                        <Button bgColor={'rgba(2, 170, 176, 1)'}>Save Changes</Button>
                    </ButtonGroup>
            </Flex>
            <Box backgroundImage="url('/images/banner.svg')" backgroundSize="cover" backgroundPosition="center" backgroundRepeat="no-repeat" w={'full'} h={{ base: '420px', md: '371px' }}>
                <Stack p={7}>
                    <Box>
                        <Image src="/images/ape.svg" alt="bored ape" />
                        <Box w={'full'} pt={2}>
                            <Text pb={2} fontSize={'24px'} fontWeight={600}>MAYC Collection</Text>
                            <Flex px={1} borderRadius={'12px'} fontSize={'20px'} w={'233px'} h={'32px'} bgColor="rgba(255, 255, 255, 0.18)" justifyContent="space-between">
                                <Text color={'rgba(255, 255, 255, 0.64)'}>Address</Text>
                                <Text color={'rgba(255, 255, 255, 1)'}>0x988bdf...57b3 </Text>
                            </Flex>
                            <Flex direction={{base: 'column', md: 'row'}} justifyContent={'space-between'}>
                                <Text maxW={'468px'} pt={2} fontSize={'14px'} fontWeight={500}>Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per...</Text>
                                <Flex mt={{ base: 2, md: 0 }}h={'64px'} w={'250px'} p={5} justifyContent="space-between" borderRadius="16px" bgColor="rgba(255, 255, 255, 0.07)">
                                    <Image src="/icons/globe.svg" alt="globe"/>
                                    <Image src="/icons/discord.svg" alt="discord"/>
                                    <Image src="/icons/twitter.svg" alt="twitter"/>
                                </Flex>
                            </Flex>
                        </Box>
                    </Box>
                </Stack>
            </Box>
            <Stack mt={10} direction={{ base: 'column', md: 'row' }} spacing={5}>
                <Box flex={1} minW="0">
                    <Box p={4} w="100%" h="auto" bg={'rgba(2, 170, 176, 0.1)'} borderRadius={'16px'}>
                    <Text fontSize={'14px'} fontWeight={600} color={'rgba(2, 170, 176, 1)'}>Utility Name</Text>
                    <Text mt={2} fontSize={'20px'} fontWeight={500} color={'rgba(255, 255, 255, 0.8)'}>MAYC#41135601</Text>
                    </Box>

                    <Box mt={5} p={4} w="100%" h="auto" bg={'rgba(2, 170, 176, 0.1)'} borderRadius={'16px'}>
                    <Text fontSize={'14px'} fontWeight={600} color={'rgba(2, 170, 176, 1)'}>Utility Name</Text>
                    <Text mt={2} fontSize={'20px'} fontWeight={500} color={'rgba(255, 255, 255, 0.8)'}>Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit...</Text>
                    </Box>

                    <Box mt={8} w="100%" h="auto" borderRadius={'16px'} >
                    <InputGroup size='lg'>
                        <Input placeholder='Redirection URL' />
                        <InputRightElement>
                        <Image src="/icons/edit.svg" alt="external link" />
                        </InputRightElement>
                    </InputGroup>
                    </Box>
                </Box>

                <Box flex={1} minW="0">
                    <Box p={4} w="100%" h="auto" bg={'rgba(2, 170, 176, 0.1)'} borderRadius={'16px'}>
                    <Text fontSize={'14px'} fontWeight={600} color={'rgba(2, 170, 176, 1)'}>Redeemable Type</Text>
                    <Text mt={2} fontSize={'20px'} fontWeight={500} color={'rgba(255, 255, 255, 0.8)'}>Multiple Utility</Text>
                    </Box>

                    <Box mt={5} p={4} w="100%" h="auto" bg={'rgba(2, 170, 176, 0.1)'} borderRadius={'16px'}>
                    <Text fontSize={'14px'} fontWeight={600} color={'rgba(2, 170, 176, 1)'}>Expirable Type</Text>
                    <Text mt={2} fontSize={'20px'} fontWeight={500} color={'rgba(255, 255, 255, 0.8)'}>Non-Expirable</Text>
                    </Box>

                    <Box mt={5} mb={10} p={4} w="100%" h="auto" bg={'rgba(2, 170, 176, 0.1)'} borderRadius={'16px'}>
                    <Text fontSize={'14px'} fontWeight={600} color={'rgba(2, 170, 176, 1)'}>Category</Text>
                    <Text mt={2} fontSize={'20px'} fontWeight={500} color={'rgba(255, 255, 255, 0.8)'}>Lorem ipsum</Text>
                    </Box>
                </Box>
            </Stack>
        </Box>
    </>
  )
};