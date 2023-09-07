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
            <Input border={'1.5px solid rgba(255, 255, 255, 1)'} placeholder='Name of the Dapp' _placeholder={{ color: 'rgba(255, 255, 255, 1)' }} />
          </FormControl>
          <FormControl mt={7}>
            <Input border={'1.5px solid rgba(255, 255, 255, 1)'} placeholder='Chain' _placeholder={{ color: 'rgba(255, 255, 255, 1)' }} />
          </FormControl>
          <FormControl mt={7}>
            <Input border={'1.5px solid rgba(255, 255, 255, 1)'} placeholder='Network' _placeholder={{ color: 'rgba(255, 255, 255, 1)' }} />
          </FormControl>
          <Box display="flex" justifyContent="flex-end">
            <Button
              variant='solid'
              bgColor={'rgba(2, 170, 176, 1)'}
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
            <Input border={'1.5px solid rgba(255, 255, 255, 1)'} placeholder='Smart Contract Name' _placeholder={{ color: 'rgba(255, 255, 255, 1)' }} />
          </FormControl>
          <FormControl mt={{ base: 5, md: 16 }}>
            <Input border={'1.5px solid rgba(255, 255, 255, 1)'} placeholder='Smart Contract Address' _placeholder={{ color: 'rgba(255, 255, 255, 1)' }} />
          </FormControl>
          <FormControl mt={{ base: 5, md: 14 }}>
            <FormLabel>Meta Transaction Type</FormLabel>
            <Select placeholder='Select' _placeholder={{ color: 'red' }}>
              <option value='option1'>Option 1</option>
              <option value='option2'>Option 2</option>
              <option value='option3'>Option 3</option>
            </Select>
          </FormControl>
        </Box>
        <Box w={{ base: '100%', md: '50%' }}>
          <Textarea
            border={'1.5px solid rgba(255, 255, 255, 1)'}
            h='275px'
            placeholder='Application Binary Interface (ABI)'
            _placeholder={{ color: 'rgba(255, 255, 255, 1)' }}
          />
        </Box>
      </Stack>
    </Stack>
  );
}