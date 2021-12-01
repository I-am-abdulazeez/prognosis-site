import {
  cardItems,
  serviceCategory,
  SwipeCardDetails,
  SwipeDetails,
  TeamList,
  TestimonialDetails,
} from "../interfaces";
import ReactParser from "html-react-parser";
import { nanoid } from "nanoid";

export const cardsArray: cardItems[] = [
  {
    cardHeader: "Our Mission",
    cardText:
      "To positively impact the world through delivery of cutting edge software solutions. We believe properly designed and developed solution can make life easier for human race thereby making the world a better place to live.",
  },
  {
    cardHeader: "Our Philosophy",
    cardText:
      "Our philosophy is to deliver more than what we promise. This will make a happy customer, and ultimately positive response from the market",
  },
  {
    cardHeader: "Why work with us",
    cardText:
      "Working with us presents with an opportunity to apply imagination skills on our field without boundaries. It is an interesting role with new challenges everyday that makes it challenging and exciting. There is always something new to learn in solving day to day problems of the world using technology.",
  },
];

export const ourTeam: TeamList[] = [
  {
    username: "Calisto Zulu",
    userPosition: "Founder & CEO",
    userAvatar: "",
    userText: ReactParser(`18 Years industrial experience in
      <span className="semibold">
        software development/project management/change management
      </span> in various business domains across
      <span className="semibold">
        Sub Saharan Africa (Uganda, Tanzania, Zimbabwe and Nigeria)
      </span>. Calisto is full stack developer with a business flare.`),
  },
  {
    username: "Olufemi Talabi",
    userPosition: "Executive Director",
    userAvatar: "",
    userText:
      ReactParser(`Renowned Nigerian <span className="semibold">Legal practitioner with specialization in Secured Credit Transactions, Property and Corporate law. </span>
      He is a seasoned arbitrator and holds an <span className="semibold">MBA</span> with specialty in <span className="semibold">business management</span>.
      He has over 30 years of varied management experience and he sits on the board of five other high net worth companies, some of which are players in the real estate and hospitality industry.`),
  },
  {
    username: "Mgbemena Ifeanyi",
    userPosition: "Implementation Executive",
    userAvatar: "",
    userText:
      ReactParser(`Ifeanyi joined Prognosis in 2017 as a trainee and has grown through the ranks to be <span className="semibold">Implementation and
    Support Executive</span>. He recently graduated from <span className="semibold">Nigeria Open University with a Bsc in Computer Science.</span>
      He is passionate about sharing knowledge, systems documentation, .Net development and infrastructure
      management. Ifeanyi is currently <span className="semibold">Team Lead</span> on our platform multi-lingual upgrade project. Systems
      Engineering is his passion.`),
  },
  {
    username: "Akolade Mustapha",
    userPosition: "Software Developer",
    userAvatar: "",
    userText:
      ReactParser(`Akolade is an Engineering graduate from Syracuse university in New York, USA. He just joined Prognosis,
    January 2020, as a graduate <span className="semibold">software development trainee</span>. His main passion is in developing applications
    and problem solving complex scenarios. He was an intern at <span className="semibold">Coscharis</span> before joining Prognosis`),
  },
];

export const swiperItems: SwipeCardDetails[] = [
  {
    imageSrc: "/images/accounting.jpg",
    title: "INSURANCE MANAGEMENT SOLUTIONS",
    text: "Creating one-of-a-kind software for corporate customers is a",
    link: "/something",
  },
  {
    imageSrc: "/images/health.jpg",
    title: "ACCOUNTING MANAGEMENT SOLUTION",
    text: "Introduce data analytics to your business with our superb and",
    link: "/something",
  },
  {
    imageSrc: "/images/insurance.jpg",
    title: "INSURANCE BROKER MANAGEMENT SOLUTION",
    text: "Creating one-of-a-kind software for corporate customers is a cornerstone of our expertise.",
    link: "/something",
  },
  {
    imageSrc: "/images/hrm.jpg",
    title: "HUMAN RESOURCE  MANAGEMENT SOLUTION",
    text: "Introduce data analytics to your business with our superb and customized analytics software to make more informed.",
    link: "/something",
  },
  {
    imageSrc: "/images/health.jpg",
    title: "HEALTH INSURANCE MANAGEMENT SOLUTION",
    text: "Creating one-of-a-kind software for corporate customers is a cornerstone of our expertise.",
    link: "/something",
  },
];

export const swiperItems2: SwipeDetails[] = [
  {
    imageSrc: "/images/accounting.jpg",
    title: "Accounting Solution",
    text: "Take control of your business finances, we have designed our accounting solution to provide business owners with a full spectrum of features guaranteed to help them manage all aspects of their business finance.",
  },
  {
    imageSrc: "/images/health.jpg",
    title: "Health Insurance Management Solution",
    text: "We understand the importance of keeping track of patients records and helping healthcare providers deliver on their promise. This is why we have designed our HMO management solution to be robust and user friendly tor different levels of admins.",
  },
  {
    imageSrc: "/images/insurance.jpg",
    title: "Insurance Management Solution",
    text: "We understand the importance of keeping track of patients records and helping healthcare providers deliver on their promise. This is why we have designed our HMO management solution to be robust and user friendly tor different levels of admins.",
  },
];

export const testimonialItems: TestimonialDetails[] = [
  {
    userImage: "/images/user-1.svg",
    userName: "Marrie Jones",
    text: "Prognosis builds its technology with the ultimate purpose of helping business serve their clients optimally. Through our custom CRM & Insurance.",
    userDetails: "Marketing Ads Strategist",
  },
  {
    userImage: "/images/user-2.svg",
    userName: "John Doe",
    text: "Prognosis builds its technology with the ultimate purpose of helping business serve their clients optimally. Through our custom CRM & Insurance.",
    userDetails: "Marketing Ads Strategist",
  },
  {
    userImage: "/images/user-3.svg",
    userName: "Abubakar Muhammad",
    text: "Prognosis builds its technology with the ultimate purpose of helping business serve their clients optimally. Through our custom CRM & Insurance.",
    userDetails: "Marketing Ads Strategist",
  },
  {
    userImage: "/images/user-4.svg",
    userName: "Stephen Dickson",
    text: "Prognosis builds its technology with the ultimate purpose of helping business serve their clients optimally. Through our custom CRM & Insurance.",
    userDetails: "Marketing Ads Strategist",
  },
];

export const servicesCategory: serviceCategory[] = [
  {
    serviceId: nanoid(4),
    serviceCategory: "General Inquiry",
  },
  {
    serviceId: nanoid(4),
    serviceCategory: "Customer Support",
  },
  {
    serviceId: nanoid(4),
    serviceCategory: "Accounting Solution",
  },
  {
    serviceId: nanoid(4),
    serviceCategory: "Health Insurance Management Solutions",
  },
  {
    serviceId: nanoid(4),
    serviceCategory: "Insurance Management Solutions",
  },
  {
    serviceId: nanoid(4),
    serviceCategory: "Human Resources Management Solution",
  },
];
