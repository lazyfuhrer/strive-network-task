import { Flex, FlexProps, Icon, Link } from "@chakra-ui/react"
import NextLink from 'next/link'

interface NavItemProps extends FlexProps {
  icon: any
  to: string
  children: React.ReactNode
}

export default function NavItem ({ icon, to, children, ...rest }: NavItemProps) {
    return (
      <Link
        as={NextLink}
        href={to}
        style={{ textDecoration: 'none' }}
        _focus={{ boxShadow: 'none' }}>
        <Flex
          align="center"
          p="4"
          mx="4"
          mt="1"
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
      </Link>
    )
}