import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  UnorderedList,
  ListItem,
} from "@chakra-ui/layout";
import Navbar from "../components/Navigations/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import SiteMetaData from "../components/SiteMetaData";
import LandingOverlays from "../components/Landings/LandingOverlays";

const PrivacyPolicy: React.FC = () => {
  return (
    <Box>
      <SiteMetaData
        metaContent="Privacy Policy - Prognosis Technologies Limited"
        metaTitle="Privacy Policy | Prognosis Technologies Limited"
        metaContent2="Our commitment to protecting your privacy"
      />
      <Navbar />
      <LandingOverlays
        bgImage="/images/privacy-policy.jpg"
        firstText="PRIVACY POLICY"
        hasSecondText={false}
        titleText="Your Privacy Matters to Us"
      />
      <Box py="4em">
        <Container maxW="container.lg">
          <VStack spacing={8} align="start">
            <Box>
              <Text fontSize={{ base: "sm", md: "15px" }} lineHeight="1.7">
                At Prognosis Technologies Limited ("we," "us," or "our"), we are
                committed to protecting your privacy. This Privacy Policy
                explains how we collect, use, disclose, and safeguard your
                information when you visit our website or use our services.
              </Text>
            </Box>

            <Box>
              <Heading fontSize={{ base: "20px", md: "2xl" }} mb={4}>
                1. Information We Collect
              </Heading>
              <Text
                fontSize={{ base: "sm", md: "15px" }}
                lineHeight="1.7"
                mb={3}
              >
                We may collect the following types of information:
              </Text>
              <UnorderedList
                spacing={2}
                fontSize={{ base: "sm", md: "15px" }}
                lineHeight="1.7"
                pl={5}
              >
                <ListItem>
                  <strong>Personal Information:</strong> Name, email address,
                  phone number, company name, and any other information you
                  provide through our contact forms or project inquiry forms.
                </ListItem>
                <ListItem>
                  <strong>Usage Data:</strong> Information about how you access
                  and use our website, including your IP address, browser type,
                  pages visited, and time spent on pages.
                </ListItem>
                <ListItem>
                  <strong>Cookies and Tracking Technologies:</strong> We may use
                  cookies and similar tracking technologies to enhance your
                  experience on our website.
                </ListItem>
              </UnorderedList>
            </Box>

            <Box>
              <Heading fontSize={{ base: "20px", md: "2xl" }} mb={4}>
                2. How We Use Your Information
              </Heading>
              <Text
                fontSize={{ base: "sm", md: "15px" }}
                lineHeight="1.7"
                mb={3}
              >
                We use the information we collect to:
              </Text>
              <UnorderedList
                spacing={2}
                fontSize={{ base: "sm", md: "15px" }}
                lineHeight="1.7"
                pl={5}
              >
                <ListItem>
                  Respond to your inquiries and provide customer support
                </ListItem>
                <ListItem>
                  Deliver our software development and implementation services
                </ListItem>
                <ListItem>
                  Send you information about our products, services, and updates
                  (with your consent)
                </ListItem>
                <ListItem>Improve our website and services</ListItem>
                <ListItem>
                  Comply with legal obligations and protect our rights
                </ListItem>
              </UnorderedList>
            </Box>

            <Box>
              <Heading fontSize={{ base: "20px", md: "2xl" }} mb={4}>
                3. How We Share Your Information
              </Heading>
              <Text
                fontSize={{ base: "sm", md: "15px" }}
                lineHeight="1.7"
                mb={3}
              >
                We do not sell or rent your personal information to third
                parties. We may share your information with:
              </Text>
              <UnorderedList
                spacing={2}
                fontSize={{ base: "sm", md: "15px" }}
                lineHeight="1.7"
                pl={5}
              >
                <ListItem>
                  <strong>Service Providers:</strong> Third-party vendors who
                  assist us in operating our website and providing our services
                  (e.g., email service providers, hosting providers).
                </ListItem>
                <ListItem>
                  <strong>Legal Requirements:</strong> When required by law or
                  to protect our rights and safety.
                </ListItem>
                <ListItem>
                  <strong>Business Transfers:</strong> In connection with a
                  merger, acquisition, or sale of assets.
                </ListItem>
              </UnorderedList>
            </Box>

            <Box>
              <Heading fontSize={{ base: "20px", md: "2xl" }} mb={4}>
                4. Data Security
              </Heading>
              <Text fontSize={{ base: "sm", md: "15px" }} lineHeight="1.7">
                We implement appropriate technical and organizational measures
                to protect your personal information from unauthorized access,
                disclosure, alteration, or destruction. However, no method of
                transmission over the internet or electronic storage is 100%
                secure.
              </Text>
            </Box>

            <Box>
              <Heading fontSize={{ base: "20px", md: "2xl" }} mb={4}>
                5. Your Rights
              </Heading>
              <Text
                fontSize={{ base: "sm", md: "15px" }}
                lineHeight="1.7"
                mb={3}
              >
                Depending on your location, you may have the following rights:
              </Text>
              <UnorderedList
                spacing={2}
                fontSize={{ base: "sm", md: "15px" }}
                lineHeight="1.7"
                pl={5}
              >
                <ListItem>
                  Access, correct, or delete your personal information
                </ListItem>
                <ListItem>
                  Object to or restrict the processing of your information
                </ListItem>
                <ListItem>
                  Withdraw consent for marketing communications
                </ListItem>
                <ListItem>Request data portability</ListItem>
              </UnorderedList>
              <Text
                fontSize={{ base: "sm", md: "15px" }}
                lineHeight="1.7"
                mt={3}
              >
                To exercise these rights, please contact us at the information
                provided below.
              </Text>
            </Box>

            <Box>
              <Heading fontSize={{ base: "20px", md: "2xl" }} mb={4}>
                6. Cookies
              </Heading>
              <Text fontSize={{ base: "sm", md: "15px" }} lineHeight="1.7">
                Our website may use cookies to enhance your browsing experience.
                You can control cookie settings through your browser
                preferences. Disabling cookies may affect the functionality of
                our website.
              </Text>
            </Box>

            <Box>
              <Heading fontSize={{ base: "20px", md: "2xl" }} mb={4}>
                7. Third-Party Links
              </Heading>
              <Text fontSize={{ base: "sm", md: "15px" }} lineHeight="1.7">
                Our website may contain links to third-party websites. We are
                not responsible for the privacy practices of these websites. We
                encourage you to review their privacy policies.
              </Text>
            </Box>

            <Box>
              <Heading fontSize={{ base: "20px", md: "2xl" }} mb={4}>
                8. Children's Privacy
              </Heading>
              <Text fontSize={{ base: "sm", md: "15px" }} lineHeight="1.7">
                Our services are not directed to individuals under the age of
                18. We do not knowingly collect personal information from
                children.
              </Text>
            </Box>

            <Box>
              <Heading fontSize={{ base: "20px", md: "2xl" }} mb={4}>
                9. Changes to This Privacy Policy
              </Heading>
              <Text fontSize={{ base: "sm", md: "15px" }} lineHeight="1.7">
                We may update this Privacy Policy from time to time. Any changes
                will be posted on this page with an updated effective date. We
                encourage you to review this policy periodically.
              </Text>
            </Box>

            <Box>
              <Heading fontSize={{ base: "20px", md: "2xl" }} mb={4}>
                10. Contact Us
              </Heading>
              <Text fontSize={{ base: "sm", md: "15px" }} lineHeight="1.7">
                If you have any questions or concerns about this Privacy Policy,
                please contact us at:
              </Text>
              <Text
                fontSize={{ base: "sm", md: "15px" }}
                lineHeight="1.7"
                mt={3}
              >
                <strong>Prognosis Technologies Limited</strong>
                <br />
                Email: info@prognosistechnologies.com
                <br />
                Address: Brownstone Estate, 39 Off Kusenla Road,
                Ikate-Eleguishi, Lekki Phase 1, Lagos Island, Nigeria.
              </Text>
            </Box>
          </VStack>
        </Container>
      </Box>
      <Box pt="4em" pb="2em" bgColor="#1A202C">
        <Footer />
      </Box>
    </Box>
  );
};

export default PrivacyPolicy;
