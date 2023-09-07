import { BellColored } from "@/icons/strive";
import { Avatar, Box, Flex, FlexProps, HStack, IconButton, Image, Input, InputGroup, InputLeftElement, Menu, MenuButton, Text, VStack } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";

interface NavbarProps extends FlexProps {
  onOpen: () => void
}

export default function Navbar ({ onOpen, ...rest }: NavbarProps) {
    return (
      <Flex
        position="fixed"
        top={0}
        left={0}
        right={0}
        zIndex={10}
        px={{ base: 4, md: 4 }}
        height="20"
        alignItems="center"
        bg="#0A1E2F"
        justifyContent={{ base: 'space-between', md: 'flex-end' }}
        {...rest}
      >
        <IconButton
          color={'rgba(2, 170, 176, 1)'}
          display={{ base: "flex", md: "none" }}
          onClick={onOpen}
          variant="outline"
          aria-label="open menu"
          icon={<FiMenu />}
        />
  
        <Box
          display="flex"
          fontSize="2xl"
          fontFamily="monospace"
          fontWeight="bold"
          ml={5}
          justifySelf="flex-start"
        >
          <Image maxW={'120'} maxH={'50'} src='/icons/strive-icon.svg'/>
        </Box>

        <InputGroup flex={1} ml={{base : 25, md: 48}} mr={3}>
            <InputLeftElement pointerEvents='none'>
              <BsSearch color='rgba(255, 255, 255, 1)' />
            </InputLeftElement>
            <Input
              type="text"
              placeholder="Search Collections, Utilities and NFT’s"
              _placeholder={{ color: 'rgba(255, 255, 255, 1)', fontSize: '14px'}}
              size="md"
              bgColor="rgba(2, 136, 141, 0.2)"
              borderColor="rgba(2, 170, 176, 1)"
              borderRadius={'36px'}
              border={'1px solid rgba(255, 255, 255, 0.63)'}
              width={{ base: '100%', md: '580px' }}
            />
        </InputGroup>

        <HStack spacing={{ base: "0", md: "6" }} justifySelf="flex-end">
          <Box mr={3} position="relative" display="inline-block">
            <IconButton color={"rgba(2, 170, 176, 1)"} size="xl" variant="ghost" aria-label="open menu" icon={<BellColored />} />
            <Box style={{ position: "absolute", top: "0px", right: "0px", width: "5px", height: "5px", borderRadius: "50%", background: "rgba(255, 54, 151, 1)"}}></Box>
          </Box>
          <Flex alignItems={"center"}>
            <Menu>
              <MenuButton py={2} transition="all 0.3s" _focus={{ boxShadow: "none" }}>
                <HStack>
                  <Avatar
                    size={"sm"}
                    src={'/icons/avatar.svg'}
                    showBorder={true}
                    borderColor={'rgba(2, 170, 176, 1)'}
                    borderStyle={'dashed'}
                  />
                  <VStack
                    display={{ base: "none", md: "flex" }}
                    alignItems="flex-start"
                    spacing="1px"
                    ml="2"
                  >
                    <Text fontSize="sm" fontWeight={600}>23741....awo83</Text>
                  </VStack>
                </HStack>
              </MenuButton>
            </Menu>
          </Flex>
        </HStack>
      </Flex>
  );
};