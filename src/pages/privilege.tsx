import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  Icon,
  IconButton,
  Input,
  NumberInput,
  NumberInputField,
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
import { ChangeEvent, useRef, useState } from "react";
import { motion } from "framer-motion";
import moment from 'moment-timezone';
import { FiUpload } from "react-icons/fi";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { Exo } from "next/font/google";
import { useContractRead, useContractWrite } from "wagmi";
import utilityContractABI from "../abis/utilityContract.json";
import { contractAddress } from "@/utils/contractConfig";

const exo = Exo({ subsets: ["latin"] });

export default function Privilege() {

  const [activeTab, setActiveTab] = useState<number>(0);
  const handleNextTab = () => {
    setActiveTab((prevTab) => prevTab + 1);
  };

  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleAddFileClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files && e.target.files[0];
    if (selectedFile) {
      const imageUrl = URL.createObjectURL(selectedFile);
      setSelectedImage(imageUrl);
    }
  };

  const { data: dataOne, isError: isErrorOne , isLoading: isLoadingOne } = useContractRead({
    address: contractAddress,
    abi: utilityContractABI,
    functionName: 'getUtilityCount',
  })

  const { data: dataTwo, isLoading: isLoadingTwo , isSuccess: isSuccessTwo , write } = useContractWrite({
    address: contractAddress,
    abi: utilityContractABI,
    functionName: 'addUtility',
  })

  const [formData, setFormData] = useState({
    utilityName: "",
    utilityDescription: "",
    isRedeemableTypeChecked: false,
    isExpiryTypeChecked: false,
    redeemableTypeValue: 0,
    dateTimeValue: "",
    timezoneValue: "",
    selectedCategoryValue: "",
  });

  const allTimezones: string[] = moment.tz.names();

  const handleRedeemableTypeChange = () => {
    setFormData((prevData) => ({
      ...prevData,
      isRedeemableTypeChecked: !prevData.isRedeemableTypeChecked,
    }));
  };

  const handleExpiryTypeChange = () => {
    setFormData((prevData) => ({
      ...prevData,
      isExpiryTypeChecked: !prevData.isExpiryTypeChecked,
    }));
  };

  const handleSubmit = () => {
    const datetimeMoment = moment.tz(formData.dateTimeValue, formData.timezoneValue);
    const formattedDatetime = datetimeMoment.format('YYYYMMDDHHmmss');
    let datetimeInteger = parseInt(formattedDatetime);
    if (formData.isExpiryTypeChecked===false) {
      formData.dateTimeValue = "";
      formData.timezoneValue = "";
      datetimeInteger = 0;
    }
    if (formData.isExpiryTypeChecked && (formData.dateTimeValue==="" || formData.timezoneValue==="")) {
      alert("Please select a valid date and time and timezone");
      return;
    }
    if (write && !isLoadingOne) {
      write({ args: [Number(dataOne)+1, formData.utilityName, formData.isExpiryTypeChecked, datetimeInteger, formData.redeemableTypeValue] });
    }
  };

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
          index={activeTab}
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
                <Tab fontSize={"12px"} fontWeight={600} onClick={()=> setActiveTab(0)}>
                  Utility Info
                </Tab>
                <Tab fontSize={"12px"} fontWeight={600} onClick={()=> setActiveTab(1)}>
                  Upload
                </Tab>
                <Tab fontSize={"12px"} fontWeight={600} onClick={()=> setActiveTab(2)}>
                  Redeemable Type
                </Tab>
              </TabList>
            </Box>

            <TabPanels>
              {/* Utility Info tab */}
              <TabPanel display="flex" flexDirection="column">
                <FormControl mt={4}>
                  <Input
                    border={"1.5px solid rgba(255, 255, 255, 1)"}
                    placeholder="Utility Name"
                    _placeholder={{ color: "rgba(255, 255, 255, 1)" }}
                    value={formData.utilityName}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        utilityName: e.target.value,
                      })
                    }
                  />
                </FormControl>
                <FormControl mt={8} isRequired>
                  <Textarea
                    border={"1.5px solid rgba(255, 255, 255, 1)"}
                    _placeholder={{ color: "rgba(255, 255, 255, 1)" }}
                    placeholder="Utility Description"
                    resize="vertical"
                    rows={5}
                    value={formData.utilityDescription}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        utilityDescription: e.target.value,
                      })
                    }
                  />
                </FormControl>
                <Button
                  bg={"rgba(2, 170, 176, 1)"}
                  _hover={{ bg: "rgba(0, 120, 126, 1)" }}
                  mt={28}
                  w={"180px"}
                  h={"46px"}
                  fontSize={"20px"}
                  alignSelf={{ base: "center", md: "flex-end" }}
                  onClick={handleNextTab}
                >
                  Next
                </Button>
              </TabPanel>
              {/* Upload tab */}
              <TabPanel mt={4}>
                <main className={exo.className}>
                  <Flex
                    justifyContent="center"
                    alignItems="center"
                    h={{ base: "300px", md: "320px" }}
                  >
                    {selectedImage ? (
                      <Box
                        w={{ base: "310px", md: "360px" }}
                        h={{ base: "300px", md: "340px" }}
                        borderRadius="24px"
                        bgImage={`url(${selectedImage})`}
                        bgSize="cover"
                        bgPosition="center"
                      />
                    ) : (
                    <Box
                      display={"flex"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      flexDirection={"column"}
                      borderRadius={"24px"}
                      w={{ base: "310px", md: "360px" }}
                      h={{ base: "300px", md: "340px" }}
                      textAlign="center"
                      border={"1px solid rgba(255, 255, 255, 0.3)"}
                      style={{
                        background: `
                          linear-gradient(162.34deg, #161A42 22.61%, rgba(22, 26, 66, 0) 118.29%),
                          linear-gradient(0deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3))
                        `,
                      }}
                    >
                      <Flex>
                        <Icon
                          as={FiUpload}
                          w={{ base: "25px", md: "29px" }}
                          h={{ base: "25px", md: "29px" }}
                          mr={{ base: "10px", md: "15px" }}
                        />
                        <Text fontSize={{ base: "18px", md: "20px" }} fontWeight={600}>
                          Upload your file
                        </Text>
                      </Flex>
                      <Box
                        border="2px dashed rgba(47, 128, 236, 1)"
                        mt={6}
                        mx={"auto"}
                        width={"80%"}
                        h={"140px"}
                        borderRadius={"24px"}
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <Text
                          color={"rgba(47, 128, 236, 1)"}
                          mb={2}
                          fontSize={{ base: "13px", md: "16px" }}
                          fontWeight={500}
                        >
                          Drag or Drop files here
                        </Text>
                        <Text
                          color={"rgba(47, 128, 236, 1)"}
                          mb={2}
                          fontSize={{ base: "10px", md: "12px" }}
                          fontWeight={500}
                        >
                          OR
                        </Text>
                        <Input
                          type="file"
                          accept=".jpg, .png, .gif"
                          ref={fileInputRef}
                          style={{ display: "none" }}
                          onChange={handleFileChange}
                        />
                        <Button
                          display="flex"
                          alignItems={"center"}
                          fontSize={{ base: "13px", md: "16px" }}
                          w={{ base: "110px", md: "128px" }}
                          h={{ base: "30px", md: "35px" }}
                          leftIcon={<AiOutlinePlusCircle />}
                          bg={"rgba(47, 128, 236, 1)"}
                          _hover={{ bg: "rgba(0, 85, 160, 1)" }}
                          onClick={handleAddFileClick}
                        >
                          Add File
                        </Button>
                      </Box>
                      <Box mt={6}>
                        <Text
                          mb={2}
                          fontSize={{ base: "10px", md: "12px" }}
                          fontWeight={500}
                        >
                          Supported files - JPG, PNG, GIF
                        </Text>
                        <Text fontSize={{ base: "10px", md: "12px" }} fontWeight={500}>
                          Please select a file to import the collections
                        </Text>
                      </Box>
                    </Box>
                    )}
                  </Flex>
                  <Flex justifyContent={{ base: "center", md: "flex-end" }} mt={7}>
                    <Button
                      bg={"rgba(2, 170, 176, 1)"}
                      _hover={{ bg: "rgba(0, 120, 126, 1)" }}
                      w={"180px"}
                      h={"46px"}
                      fontSize={"20px"}
                      onClick={handleNextTab}
                    >
                      Next
                    </Button>
                  </Flex>
                </main>
              </TabPanel>
              {/* Redeemable Type tab */}
              <TabPanel mt={2}>
                <Box>
                  <Box>
                    <Flex justifyContent="space-between" alignItems="center" mb={4}>
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
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Switch
                          size={{ base: "md", md: "lg" }}
                          color="rgba(2, 170, 176, 1)"
                          isChecked={formData.isRedeemableTypeChecked}
                          onChange={handleRedeemableTypeChange}
                        />
                      </motion.div>
                    </Flex>
                    {formData.isRedeemableTypeChecked && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <NumberInput
                          mb={4}
                          defaultValue={formData.redeemableTypeValue}
                          onChange={(value) => setFormData({ ...formData, redeemableTypeValue: parseInt(value) || 0 })}
                        >
                          <NumberInputField placeholder="Max redeem" />
                        </NumberInput>
                      </motion.div>
                    )}
                  </Box>

                  <Box>
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
                        isChecked={formData.isExpiryTypeChecked}
                        onChange={handleExpiryTypeChange}
                      />
                    </Flex>
                    {formData.isExpiryTypeChecked && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Flex mt={4}>
                          <Input
                            mr={5}
                            placeholder="Date & Time"
                            type="datetime-local"
                            value={formData.dateTimeValue}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                dateTimeValue: e.target.value,
                              })
                            }
                          />
                          <Select
                            value={formData.timezoneValue}
                            placeholder={'Timezone'}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                timezoneValue: e.target.value,
                              })
                            }
                          >
                            {allTimezones.map((timezone) => (
                              <option key={timezone} value={timezone}>
                                {timezone}
                              </option>
                            ))}
                          </Select>
                        </Flex>
                      </motion.div>
                    )}
                  </Box>

                  <Box>
                    <Text fontSize={{ base: "20px", md: "22px" }} mt={4}>
                      Categories
                    </Text>
                    <Select
                      fontSize={{ base: "13px", md: "16px" }}
                      icon={<IoIosArrowDropdown />}
                      mt={4}
                      placeholder="Select"
                      value={formData.selectedCategoryValue}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          selectedCategoryValue: e.target.value,
                        })
                      }
                    >
                      {[1, 2, 3].map((index) => (
                        <option
                          key={index}
                          value={`Category ${index}`}
                          style={{
                            backgroundColor: "rgba(0, 0, 0, 1)",
                            height: "40px",
                          }}
                        >
                          Category {index}
                        </option>
                      ))}
                    </Select>
                  </Box>

                  <Flex
                    justifyContent={{ base: "center", md: "flex-end" }}
                    mt={24}
                  >
                    <Button
                      isLoading={isLoadingTwo}
                      bg="rgba(2, 170, 176, 1)"
                      _hover={{ bg: "rgba(0, 120, 126, 1)" }}
                      w={"180px"}
                      h={"46px"}
                      fontSize={"20px"}
                      disabled={!write}
                      onClick={handleSubmit}
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