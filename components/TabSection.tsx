import { Box, Container, Divider, Heading, Text } from "@chakra-ui/layout";
import { useMediaQuery } from "@chakra-ui/media-query";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/tabs";
import { tabList } from "../data";
import { TabListOpts } from "../interfaces";

const TabSection = (): JSX.Element => {
  const [isLargerThan480] = useMediaQuery("(min-width: 480px)");

  return (
    <Container maxW="container.xl">
      <Box textAlign="center">
        <Heading fontSize={{ base: "25px", md: "3xl" }}>
          OUR AREAS OF SPECIALTY
        </Heading>
      </Box>
      <Tabs
        h={{ base: "450px", md: "300px" }}
        isLazy
        isFitted
        mt="3em"
        variant="enclosed"
        colorScheme="primary"
      >
        <TabList>
          {tabList.map(({ abbr, heading }: TabListOpts, i) => (
            <Tab
              key={i}
              _focus={{
                boxShadow: "none",
              }}
              fontSize={{ base: "12px", md: "inherit" }}
            >
              {isLargerThan480 ? heading : abbr}
            </Tab>
          ))}
        </TabList>
        <TabPanels mt="1em">
          {tabList.map(({ heading, text }, i) => (
            <TabPanel key={i}>
              <Heading fontSize={{ base: "20px", md: "3xl" }}>
                {heading}
              </Heading>
              <Divider my={3} />
              <Text textStyle="defaultText">{text}</Text>
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </Container>
  );
};

export default TabSection;
