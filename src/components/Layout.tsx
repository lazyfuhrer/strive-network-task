'use client'

import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Text,
  Drawer,
  DrawerContent,
  useDisclosure,
  BoxProps,
  FlexProps,
  Menu,
  MenuButton,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react'
import { FiMenu } from 'react-icons/fi'
import { BsSearch } from 'react-icons/bs'

import { Profile, Bell, Fire, Rocket, Analytics, LogOut, Plus, BellColored } from '@/icons/strive'

interface LinkItemProps {
  name: string
  icon: any
}

interface NavItemProps extends FlexProps {
  icon: any
  children: React.ReactNode
}

interface MobileProps extends FlexProps {
  onOpen: () => void
}

interface SidebarProps extends BoxProps {
  onClose: () => void
}

const LinkItems: Array<LinkItemProps> = [
  { name: 'Profile', icon: Profile },
  { name: 'Push Notifications', icon: Bell },
  { name: 'Gas Fee', icon: Fire },
  { name: 'Utilities Launchpad', icon: Rocket },
  { name: 'Add Utility', icon: Plus },
  { name: 'Analytics', icon: Analytics },
  { name: 'Logout', icon: LogOut },
]

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      bottom={0}
      zIndex={10}
      transition="3s ease"
      bg="#0A0C17"
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      h="100vh"
      mt={{ base: 0, md: 20 }}
      {...rest}
    >
      <Flex h={{base: '20', md: '5'}} alignItems="center" mx="8" justifyContent="space-between">
        <CloseButton color={'rgba(2, 170, 176, 1)'} display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  )
}

const NavItem = ({ icon, children, ...rest }: NavItemProps) => {
  return (
    <Box
      as="a"
      href="#"
      style={{ textDecoration: 'none' }}
      _focus={{ boxShadow: 'none' }}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: '#0A1E2F',
        }}
        {...rest}>
        {icon && (
          <Icon
            //color={'linear-gradient(90deg, #02AAB0 0%, #00CDAC 100%)'}
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Box>
  )
}

const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
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
        borderBottomWidth="1px"
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
              size="md"
              color="rgba(2, 170, 176, 1)"
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
  

export default function Layout ({ children } : any) {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box minH="100vh" backgroundImage={"linear-gradient(to right,#0A0C17, #0A1E2F)"}>
      <SidebarContent onClose={() => onClose} display={{ base: 'none', md: 'block' }} />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} mt={20}>
        {children}
      </Box>
    </Box>
  )
};