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

const TermsOfService: React.FC = () => {
  return (
    <Box>
      <SiteMetaData
        metaContent="Terms of Service - Prognosis Technologies Limited"
        metaTitle="Terms of Service | Prognosis Technologies Limited"
        metaContent2="Terms and conditions for using our services"
      />
      <Navbar />
      <LandingOverlays
        bgImage="/images/terms-service.jpg"
        firstText="TERMS OF SERVICE"
        hasSecondText={false}
        titleText="Terms & Conditions"
      />
      <Box py="4em">
        <Container maxW="container.lg">
          <VStack spacing={8} align="start">
            <Box>
              <Text fontSize={{ base: "sm", md: "15px" }} mb={4}>
                <strong>Effective Date:</strong> December 22, 2025
              </Text>
              <Text fontSize={{ base: "sm", md: "15px" }} lineHeight="1.7">
                Welcome to Prognosis Technologies Limited. By accessing or using
                our website and services, you agree to be bound by these Terms
                of Service ("Terms"). Please read them carefully.
              </Text>
            </Box>

            <Box>
              <Heading fontSize={{ base: "20px", md: "2xl" }} mb={4}>
                1. Acceptance of Terms
              </Heading>
              <Text fontSize={{ base: "sm", md: "15px" }} lineHeight="1.7">
                By accessing our website or using our services, you acknowledge
                that you have read, understood, and agree to be bound by these
                Terms and our Privacy Policy. If you do not agree, please do not
                use our website or services.
              </Text>
            </Box>

            <Box>
              <Heading fontSize={{ base: "20px", md: "2xl" }} mb={4}>
                2. Services Provided
              </Heading>
              <Text
                fontSize={{ base: "sm", md: "15px" }}
                lineHeight="1.7"
                mb={3}
              >
                Prognosis Technologies Limited provides software development and
                implementation services, including but not limited to:
              </Text>
              <UnorderedList
                spacing={2}
                fontSize={{ base: "sm", md: "15px" }}
                lineHeight="1.7"
                pl={5}
              >
                <ListItem>Custom software solutions</ListItem>
                <ListItem>Data processing and analysis</ListItem>
                <ListItem>Artificial Intelligence solutions</ListItem>
                <ListItem>Cloud computing services</ListItem>
                <ListItem>
                  Accounting, insurance, and HR management software
                </ListItem>
                <ListItem>Other technology consulting services</ListItem>
              </UnorderedList>
            </Box>

            <Box>
              <Heading fontSize={{ base: "20px", md: "2xl" }} mb={4}>
                3. Use of Website
              </Heading>
              <Text
                fontSize={{ base: "sm", md: "15px" }}
                lineHeight="1.7"
                mb={3}
              >
                You agree to use our website only for lawful purposes and in a
                manner that does not infringe the rights of others. You must
                not:
              </Text>
              <UnorderedList
                spacing={2}
                fontSize={{ base: "sm", md: "15px" }}
                lineHeight="1.7"
                pl={5}
              >
                <ListItem>
                  Use the website in any way that violates applicable laws or
                  regulations
                </ListItem>
                <ListItem>
                  Attempt to gain unauthorized access to our systems or networks
                </ListItem>
                <ListItem>
                  Transmit malicious code, viruses, or harmful software
                </ListItem>
                <ListItem>
                  Engage in any activity that disrupts or interferes with our
                  services
                </ListItem>
                <ListItem>
                  Use automated systems to access the website without permission
                </ListItem>
              </UnorderedList>
            </Box>

            <Box>
              <Heading fontSize={{ base: "20px", md: "2xl" }} mb={4}>
                4. Intellectual Property Rights
              </Heading>
              <Text fontSize={{ base: "sm", md: "15px" }} lineHeight="1.7">
                All content on our website, including text, graphics, logos,
                images, software, and other materials, is the property of
                Prognosis Technologies Limited or its licensors and is protected
                by Nigerian and international intellectual property laws. You
                may not reproduce, distribute, modify, or create derivative
                works without our express written permission.
              </Text>
            </Box>

            <Box>
              <Heading fontSize={{ base: "20px", md: "2xl" }} mb={4}>
                5. User Accounts and Registration
              </Heading>
              <Text fontSize={{ base: "sm", md: "15px" }} lineHeight="1.7">
                Some services may require you to create an account. You are
                responsible for maintaining the confidentiality of your account
                credentials and for all activities under your account. You must
                notify us immediately of any unauthorized use of your account.
              </Text>
            </Box>

            <Box>
              <Heading fontSize={{ base: "20px", md: "2xl" }} mb={4}>
                6. Service Agreements
              </Heading>
              <Text fontSize={{ base: "sm", md: "15px" }} lineHeight="1.7">
                Specific services provided by Prognosis Technologies Limited may
                be subject to separate written agreements. In the event of any
                conflict between these Terms and a separate agreement, the
                separate agreement will prevail.
              </Text>
            </Box>

            <Box>
              <Heading fontSize={{ base: "20px", md: "2xl" }} mb={4}>
                7. Payment Terms
              </Heading>
              <Text fontSize={{ base: "sm", md: "15px" }} lineHeight="1.7">
                Payment terms for our services will be specified in individual
                project agreements or invoices. All fees are exclusive of
                applicable taxes unless otherwise stated. Late payments may be
                subject to interest charges as permitted by law.
              </Text>
            </Box>

            <Box>
              <Heading fontSize={{ base: "20px", md: "2xl" }} mb={4}>
                8. Limitation of Liability
              </Heading>
              <Text fontSize={{ base: "sm", md: "15px" }} lineHeight="1.7">
                To the fullest extent permitted by law, Prognosis Technologies
                Limited shall not be liable for any indirect, incidental,
                special, consequential, or punitive damages, including loss of
                profits, data, or business opportunities, arising from your use
                of our website or services. Our total liability shall not exceed
                the amount paid by you for the specific service giving rise to
                the claim.
              </Text>
            </Box>

            <Box>
              <Heading fontSize={{ base: "20px", md: "2xl" }} mb={4}>
                9. Disclaimer of Warranties
              </Heading>
              <Text fontSize={{ base: "sm", md: "15px" }} lineHeight="1.7">
                Our website and services are provided "as is" and "as available"
                without warranties of any kind, either express or implied. We do
                not warrant that our website will be uninterrupted, secure, or
                error-free, or that defects will be corrected.
              </Text>
            </Box>

            <Box>
              <Heading fontSize={{ base: "20px", md: "2xl" }} mb={4}>
                10. Indemnification
              </Heading>
              <Text fontSize={{ base: "sm", md: "15px" }} lineHeight="1.7">
                You agree to indemnify and hold harmless Prognosis Technologies
                Limited, its officers, directors, employees, and agents from any
                claims, damages, losses, liabilities, and expenses (including
                legal fees) arising from your use of our website or services or
                your violation of these Terms.
              </Text>
            </Box>

            <Box>
              <Heading fontSize={{ base: "20px", md: "2xl" }} mb={4}>
                11. Termination
              </Heading>
              <Text fontSize={{ base: "sm", md: "15px" }} lineHeight="1.7">
                We reserve the right to suspend or terminate your access to our
                website or services at any time, without notice, for conduct
                that we believe violates these Terms or is harmful to other
                users, us, or third parties, or for any other reason at our sole
                discretion.
              </Text>
            </Box>

            <Box>
              <Heading fontSize={{ base: "20px", md: "2xl" }} mb={4}>
                12. Governing Law
              </Heading>
              <Text fontSize={{ base: "sm", md: "15px" }} lineHeight="1.7">
                These Terms shall be governed by and construed in accordance
                with the laws of the Federal Republic of Nigeria. Any disputes
                arising from these Terms shall be subject to the exclusive
                jurisdiction of the courts of Lagos, Nigeria.
              </Text>
            </Box>

            <Box>
              <Heading fontSize={{ base: "20px", md: "2xl" }} mb={4}>
                13. Changes to Terms
              </Heading>
              <Text fontSize={{ base: "sm", md: "15px" }} lineHeight="1.7">
                We reserve the right to modify these Terms at any time. Changes
                will be effective immediately upon posting on our website. Your
                continued use of our website or services after changes are
                posted constitutes your acceptance of the revised Terms.
              </Text>
            </Box>

            <Box>
              <Heading fontSize={{ base: "20px", md: "2xl" }} mb={4}>
                14. Contact Information
              </Heading>
              <Text fontSize={{ base: "sm", md: "15px" }} lineHeight="1.7">
                If you have any questions about these Terms, please contact us
                at:
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
                <br />
                Phone: +234 809 070 0956, +234 701 626 2503.
              </Text>
            </Box>

            <Box bg="#EEF2F6" p={6} rounded="md">
              <Text
                fontSize={{ base: "sm", md: "15px" }}
                lineHeight="1.7"
                fontStyle="italic"
              >
                <strong>Note:</strong> By using our website and services, you
                acknowledge that you have read and understood these Terms of
                Service and agree to be bound by them.
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

export default TermsOfService;
