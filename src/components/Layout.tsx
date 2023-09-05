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
  Input,
  Spacer,
  InputLeftElement,
  InputGroup
} from '@chakra-ui/react'
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
  FiBell,
  FiSearch
} from 'react-icons/fi'
import { IconType } from 'react-icons'

interface LinkItemProps {
  name: string
  icon: IconType
}

interface NavItemProps extends FlexProps {
  icon: IconType
  children: React.ReactNode
}

interface MobileProps extends FlexProps {
  onOpen: () => void
}

interface SidebarProps extends BoxProps {
  onClose: () => void
}

const LinkItems: Array<LinkItemProps> = [
  { name: 'Profile', icon: FiHome },
  { name: 'Push Notifications', icon: FiTrendingUp },
  { name: 'Gas Fee', icon: FiCompass },
  { name: 'Utilities Launchpad', icon: FiStar },
  { name: 'Add Utility', icon: FiSettings },
  { name: 'Analytics', icon: FiSettings },
  { name: 'Logout', icon: FiSettings },
]

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      transition="3s ease"
      bg="#0A0C17"
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="100vh"
      mt={{ base: 0, md: 20 }}
      {...rest}>
      <Flex h={{base: '20', md: '5'}} alignItems="center" mx="8" justifyContent="space-between">
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
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
        px={{ base: 4, md: 4 }}
        height="20"
        alignItems="center"
        bg="#0A1E2F"
        justifyContent={{ base: "space-between", md: "flex-end" }}
        borderBottomWidth="1px"
        // borderBottomColor={useColorModeValue("#0A0C17", "#0A1E2F")}
        {...rest}
      >
        <IconButton
          display={{ base: "flex", md: "none" }}
          onClick={onOpen}
          variant="outline"
          aria-label="open menu"
          icon={<FiMenu />}
        />
  
        <Text
          flex={1}
          display="flex"
          fontSize="2xl"
          fontFamily="monospace"
          fontWeight="bold"
          ml={5}
          justifySelf="flex-start"
        >
          Logo
        </Text>
  
        <Box flex={1}>
            <InputGroup>
                <InputLeftElement pointerEvents="none" fontSize={'20px'} alignSelf="center" p={3}>
                <FiSearch color="gray.300"/>
                </InputLeftElement>
                <Input size="md" borderRadius={20} placeholder="Search Collections, Utilities and NFT's" />
            </InputGroup>
        </Box>

        <HStack spacing={{ base: "0", md: "6" }} justifySelf="flex-end">
          <IconButton
            size="lg"
            variant="ghost"
            aria-label="open menu"
            icon={<FiBell />}
          />
          <Flex alignItems={"center"}>
            <Menu>
              <MenuButton py={2} transition="all 0.3s" _focus={{ boxShadow: "none" }}>
                <HStack>
                  <Avatar
                    size={"sm"}
                    src={
                      "https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                    }
                  />
                  <VStack
                    display={{ base: "none", md: "flex" }}
                    alignItems="flex-start"
                    spacing="1px"
                    ml="2"
                  >
                    <Text fontSize="sm">Justina Clark</Text>
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
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  )
};