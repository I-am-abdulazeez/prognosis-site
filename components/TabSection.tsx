import { Box, Container, Divider, Heading, Text } from "@chakra-ui/layout";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/tabs";

interface tabListOpts {
  heading: string;
  text: string;
}

const tabList: tabListOpts[] = [
  {
    heading: "Predictive Analytics (P.A)",
    text: "Analyze data and build analytics models to predict future outcomes. Uncover potential risks and opportunities for your organization. Analytics ends the era of graphs and spreadsheets and Predictive. Our Competent engineers, business analyst and software developers’ will help you develop that software that does not just tell what has happened but forecast what will happen in the future using previous data.",
  },
  {
    heading: "Cloud Computing",
    text: "Cloud Computing has greatly changed how business operates and revolutionize IT. We possess the expertise to help you build. Prognosis is smartly positioned to help define and implement an evenly smarter cloud software strategy and hereby optimize your cloud environment.",
  },
  {
    heading: "Data Analytics ",
    text: "Introduce data analytics to your business with our superb and customized analytics software to make more informed and precise business decision, work faster and all these are backed up by facts. You can manage risk and deepen customers’ requirement, build customer relationship with custom Data Analytics.",
  },
  {
    heading: "Data Analytics ",
    text: "Introduce data analytics to your business with our superb and customized analytics software to make more informed and precise business decision, work faster and all these are backed up by facts. You can manage risk and deepen customers’ requirement, build customer relationship with custom Data Analytics.",
  },
];

const TabSection = (): JSX.Element => {
  return (
    <Container maxW="container.xl">
      <Box textAlign="center">
        <Heading fontSize={{ base: "25px", md: "4xl" }}>
          OUR AREAS OF SPECIALTY
        </Heading>
      </Box>
      <Tabs isLazy mt="3em" variant="enclosed" colorScheme="primary">
        <TabList>
          {tabList.map(({ heading }, i) => (
            <Tab
              key={i}
              _focus={{
                boxShadow: "0 0 0 3px #3af429",
              }}
            >
              {heading}
            </Tab>
          ))}
        </TabList>
        <TabPanels>
          {tabList.map(({ heading, text }, i) => (
            <TabPanel key={i}>
              <Heading>{heading}</Heading>
              <Divider my={2} />
              <Text textStyle="defaultText">{text}</Text>
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </Container>
  );
};

export default TabSection;
