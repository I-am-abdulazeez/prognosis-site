import { Box, Container, Divider, Heading, Text } from "@chakra-ui/layout";
import { useMediaQuery } from "@chakra-ui/media-query";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/tabs";

interface tabListOpts {
  heading: string;
  text: string;
  abbr: string;
}

const tabList: tabListOpts[] = [
  {
    heading: "Predictive Analytics ",
    text: "Analyze data and build analytics models to predict future outcomes. Uncover potential risks and opportunities for your organization. Analytics ends the era of graphs and spreadsheets and Predictive. Our Competent engineers, business analyst and software developers’ will help you develop that software that does not just tell what has happened but forecast what will happen in the future using previous data.",
    abbr: "PA",
  },
  {
    heading: "Cloud Computing ",
    text: "Cloud Computing has greatly changed how business operates and revolutionize IT. We possess the expertise to help you build. Prognosis is smartly positioned to help define and implement an evenly smarter cloud software strategy and hereby optimize your cloud environment.",
    abbr: "CC",
  },
  {
    heading: "Data Analytics ",
    text: "Introduce data analytics to your business with our superb and customized analytics software to make more informed and precise business decision, work faster and all these are backed up by facts. You can manage risk and deepen customers’ requirement, build customer relationship with custom Data Analytics.",
    abbr: "DA",
  },
  {
    heading: "Custom Software Development ",
    text: "At Progronosis Technologies Limited, our engineers are trained professionals who have attained first level training and working expertise in Software Development. Our team is ardent about solving complex problems quickly and effectively, helping our customers grow their businesses, and providing the highest-quality customer experience. By choosing custom software development from Prognosis Technology, you'll enjoy full ownership, full flexibility, competitive advantages and technology independent, tailored for your business.",
    abbr: "CSD",
  },
  {
    heading: " Internet of Things ",
    text: "Introduce Internet of Things (IoT) to your operations to improve workplace safety, reduce operation cost, enhance customer and experience. Prognosis Technologies an IoT Software Development Company; as the world moves toward a more connected future, we're ready to help your business adapt and thrive. Our custom solutions enable cutting-edge cloud technologies, opening up a new world of revenue - creating possibilities. Prognosis Technologies blueprint software to create an ocean of opportunities for your business with IoT.",
    abbr: "IOT",
  },
];

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
        mt="3em"
        variant="line"
        colorScheme="primary"
      >
        <TabList>
          {tabList.map(({ abbr, heading }, i) => (
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
