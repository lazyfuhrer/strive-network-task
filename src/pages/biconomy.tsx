import { Box, Button, FormControl, FormLabel, Input, Select, Stack, StackDivider, Text, Textarea } from '@chakra-ui/react';

export default function Biconomy() {
  return (
    <Stack p={{base: 10, md: 12}} spacing={18} divider={<StackDivider borderColor='rgba(255, 255, 255, 0.3)' />}>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        spacing={{ base: 5, md: 10 }}
      >
        <Box w={{ base: '100%', md: '50%' }} mt={-5}>
          <Text fontSize={{ base: '28px', md: '44px' }} fontWeight={700}>
            Configure Biconomy
          </Text>
          <Text
            mt={4}
            fontSize={{ base: '16px', md: '18px' }}
            fontWeight={500}
          >
            <Box maxW={{ base: '100%', md: '497px' }} width="100%">
              Biconomy integration into your smart contract enables your community
              to make gasless transactions and helps you provide a better user
              experience. Fill in the gas fee in your gas section to enable this
              function in your next steps. Give your dapp a name (for your
              reference) and verify the other fields before you create the dapp.
            </Box>
          </Text>
        </Box>
        <Box w={{ base: '100%', md: '50%' }}>
          <FormControl>
            <Input placeholder='Name of the Dapp' />
          </FormControl>
          <FormControl mt={7}>
            <Input placeholder='Chain' />
          </FormControl>
          <FormControl mt={7}>
            <Input placeholder='Network' />
          </FormControl>
          <Box display="flex" justifyContent="flex-end">
            <Button
              variant='solid'
              colorScheme='teal'
              size='lg'
              mt={7}
              w={{ base: '100%', md: '218px' }}
              h='46px'
            >
              Create Dapp
            </Button>
          </Box>
        </Box>
      </Stack>
      
      <Stack
        direction={{ base: 'column', md: 'row' }}
        spacing={{ base: 5, md: 10 }}
      >
        <Box w={{ base: '100%', md: '50%' }}>
          <FormControl>
            <Input placeholder='Smart Contract Name' />
          </FormControl>
          <FormControl mt={{ base: 5, md: 16 }}>
            <Input placeholder='Smart Contract Address' />
          </FormControl>
          <FormControl mt={{ base: 5, md: 14 }}>
            <FormLabel>Meta Transaction Type</FormLabel>
            <Select placeholder='Select'>
              <option value='option1'>Option 1</option>
              <option value='option2'>Option 2</option>
              <option value='option3'>Option 3</option>
            </Select>
          </FormControl>
        </Box>
        <Box w={{ base: '100%', md: '50%' }}>
          <Textarea
            h='275px'
            placeholder='Application Binary Interface (ABI)'
          />
        </Box>
      </Stack>
    </Stack>
  );
}