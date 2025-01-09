import {
  cardItems,
  ClientImage,
  MenuLinksInterface,
  NavLinkInterface,
  serviceCategory,
  SwipeCardDetails,
  SwipeDetails,
  TabListOpts,
  TeamList,
  TestimonialDetails,
} from '@interfaces/index';

import ReactParser from 'html-react-parser';
import { nanoid } from 'nanoid';

export const cardsArray: cardItems[] = [
  {
    cardHeader: 'Our Mission',
    cardText:
      'To positively impact the world through delivery of cutting edge software solutions. We believe properly designed and developed solution can make life easier for human race thereby making the world a better place to live.',
  },
  {
    cardHeader: 'Our Philosophy',
    cardText:
      'Our philosophy is to deliver more than what we promise. This will make a happy customer, and ultimately positive response from the market',
  },
  {
    cardHeader: 'Why work with us',
    cardText:
      'Working with us presents with an opportunity to apply imagination skills on our field without boundaries. It is an interesting role with new challenges everyday that makes it challenging and exciting. There is always something new to learn in solving day to day problems of the world using technology.',
  },
];

export const ourTeam: TeamList[] = [
  {
    username: 'Calisto Zulu',
    userPosition: 'Founder & CEO',
    userAvatar: '',
    userText: ReactParser(`18 Years industrial experience in
      <span className="semibold">
        software development/project management/change management
      </span> in various business domains across
      <span className="semibold">
        Sub Saharan Africa (Uganda, Tanzania, Zimbabwe and Nigeria)
      </span>. Calisto is full stack developer with a business flare.`),
  },
  {
    username: 'Olufemi Talabi',
    userPosition: 'Executive Director',
    userAvatar: '',
    userText:
      ReactParser(`Renowned Nigerian <span className="semibold">Legal practitioner with specialization in Secured Credit Transactions, Property and Corporate law. </span>
      He is a seasoned arbitrator and holds an <span className="semibold">MBA</span> with specialty in <span className="semibold">business management</span>.
      He has over 30 years of varied management experience and he sits on the board of five other high net worth companies, some of which are players in the real estate and hospitality industry.`),
  },
  {
    username: 'Mgbemena Ifeanyi',
    userPosition: 'Implementation Executive',
    userAvatar: '',
    userText:
      ReactParser(`Ifeanyi joined Prognosis in 2017 as a trainee and has grown through the ranks to be <span className="semibold">Implementation and
    Support Executive</span>. He recently graduated from <span className="semibold">Nigeria Open University with a Bsc in Computer Science.</span>
      He is passionate about sharing knowledge, systems documentation, .Net development and infrastructure
      management. Ifeanyi is currently <span className="semibold">Team Lead</span> on our platform multi-lingual upgrade project. Systems
      Engineering is his passion.`),
  },
  {
    username: 'Akolade Mustapha',
    userPosition: 'Software Developer',
    userAvatar: '',
    // userText:
    //   ReactParser(`Akolade is an Engineering graduate from Syracuse university in New York, USA. He just joined Prognosis,
    // January 2020, as a graduate <span className="semibold">software development trainee</span>. His main passion is in developing applications
    // and problem solving complex scenarios. He was an intern at <span className="semibold">Coscharis</span> before joining Prognosis`),
    userText: ReactParser(
      `Post Graduate Certificate holder in Cloud Computing from the University of Texas, Austin, and a graduate from Syracuse University in Mechancial Engineering, Akolade Mustapha is the Backend Developer of our esteemed team.  He is in charge of Backend Activities including backend development and data analytics and management, as well as database maintenance and security. He has led projects in developing several Dashboards and Portals for our clients. He is a Software developer with a nack for problem solving.`
    ),
  },
  {
    username: 'Opeyemi Oshoala',
    userPosition: 'Software Developer',
    userAvatar: '',
    userText:
      ReactParser(`An avid IT solution provider , Opeyemi joined Prognosis in 2020 as a trainee and has grown through the ranks to be a Developer and Support Officer.
    He is a graduate from Middlesex University with a Bsc in Computer Science. Also an Advanced Diploma holder in Software Engineering at Aptech Computer Institute.`),
  },
  {
    username: 'Tapfuma Michael Nhengu CAT, PMP, PRINCE 2 ',
    userPosition: 'Executive Director',
    userAvatar: '',
    userText: ReactParser(
      `Tapfuma is a Project Management and Development Domain Expert has been in the financial services industry for more than 20 years. Over this period, he has worked across Africa in South Africa, Zambia, Malawi, Kenya, Ghana, Tanzania, Cote d'ivoire, Nigeria and Zimbabwe.`
    ),
  },
];

export const swiperItems: SwipeCardDetails[] = [
  {
    imageSrc: '/images/accounting.jpg',
    title: 'INSURANCE MANAGEMENT SOLUTIONS',
    text: 'Creating one-of-a-kind software for corporate customers is a',
    link: '/something',
  },
  {
    imageSrc: '/images/health.jpg',
    title: 'ACCOUNTING MANAGEMENT SOLUTION',
    text: 'Introduce data analytics to your business with our superb and',
    link: '/something',
  },
  {
    imageSrc: '/images/insurance.jpg',
    title: 'INSURANCE BROKER MANAGEMENT SOLUTION',
    text: 'Creating one-of-a-kind software for corporate customers is a cornerstone of our expertise.',
    link: '/something',
  },
  {
    imageSrc: '/images/hrm.jpg',
    title: 'HUMAN RESOURCE  MANAGEMENT SOLUTION',
    text: 'Introduce data analytics to your business with our superb and customized analytics software to make more informed.',
    link: '/something',
  },
  {
    imageSrc: '/images/health.jpg',
    title: 'HEALTH INSURANCE MANAGEMENT SOLUTION',
    text: 'Creating one-of-a-kind software for corporate customers is a cornerstone of our expertise.',
    link: '/something',
  },
];

export const swiperItems2: SwipeDetails[] = [
  {
    imageSrc: '/images/accounting.jpg',
    title: 'Accounting Solution',
    text: 'Take control of your business finances, we have designed our accounting solution to provide business owners with a full spectrum of features guaranteed to help them manage all aspects of their business finance.',
  },
  {
    imageSrc: '/images/health.jpg',
    title: 'Health Insurance Management Solution',
    text: 'We understand the importance of keeping track of patients records and helping healthcare providers deliver on their promise. This is why we have designed our HMO management solution to be robust and user friendly tor different levels of admins.',
  },
  {
    imageSrc: '/images/insurance.jpg',
    title: 'Insurance Management Solution',
    text: 'We understand the importance of keeping track of patients records and helping healthcare providers deliver on their promise. This is why we have designed our HMO management solution to be robust and user friendly tor different levels of admins.',
  },
];

export const testimonialItems: TestimonialDetails[] = [
  {
    userImage: '/images/user-1.svg',
    userName: 'Marrie Jones',
    text: 'Prognosis builds its technology with the ultimate purpose of helping business serve their clients optimally. Through our custom CRM & Insurance.',
    userDetails: 'Marketing Ads Strategist',
  },
  {
    userImage: '/images/user-2.svg',
    userName: 'John Doe',
    text: 'Prognosis builds its technology with the ultimate purpose of helping business serve their clients optimally. Through our custom CRM & Insurance.',
    userDetails: 'Marketing Ads Strategist',
  },
  {
    userImage: '/images/user-3.svg',
    userName: 'Abubakar Muhammad',
    text: 'Prognosis builds its technology with the ultimate purpose of helping business serve their clients optimally. Through our custom CRM & Insurance.',
    userDetails: 'Marketing Ads Strategist',
  },
  {
    userImage: '/images/user-4.svg',
    userName: 'Stephen Dickson',
    text: 'Prognosis builds its technology with the ultimate purpose of helping business serve their clients optimally. Through our custom CRM & Insurance.',
    userDetails: 'Marketing Ads Strategist',
  },
];

export const servicesCategory: serviceCategory[] = [
  {
    serviceId: nanoid(4),
    serviceCategory: 'General Inquiry',
  },
  {
    serviceId: nanoid(4),
    serviceCategory: 'Customer Support',
  },
  {
    serviceId: nanoid(4),
    serviceCategory: 'Accounting Solution',
  },
  {
    serviceId: nanoid(4),
    serviceCategory: 'Health Insurance Management Solutions',
  },
  {
    serviceId: nanoid(4),
    serviceCategory: 'Insurance Management Solutions',
  },
  {
    serviceId: nanoid(4),
    serviceCategory: 'Human Resources Management Solution',
  },
];

export const tabList: TabListOpts[] = [
  {
    heading: 'Predictive Analytics ',
    text: 'Analyze data and build analytics models to predict future outcomes. Uncover potential risks and opportunities for your organization. Analytics ends the era of graphs and spreadsheets and Predictive. Our Competent engineers, business analyst and software developers’ will help you develop that software that does not just tell what has happened but forecast what will happen in the future using previous data.',
    abbr: 'PA',
  },
  {
    heading: 'Cloud Computing ',
    text: 'Cloud Computing has greatly changed how business operates and revolutionize IT. We possess the expertise to help you build. Prognosis is smartly positioned to help define and implement an evenly smarter cloud software strategy and hereby optimize your cloud environment.',
    abbr: 'CC',
  },
  {
    heading: 'Data Analytics ',
    text: 'Introduce data analytics to your business with our superb and customized analytics software to make more informed and precise business decision, work faster and all these are backed up by facts. You can manage risk and deepen customers’ requirement, build customer relationship with custom Data Analytics.',
    abbr: 'DA',
  },
  {
    heading: 'Custom Software Development ',
    text: "At Progronosis Technologies Limited, our engineers are trained professionals who have attained first level training and working expertise in Software Development. Our team is ardent about solving complex problems quickly and effectively, helping our customers grow their businesses, and providing the highest-quality customer experience. By choosing custom software development from Prognosis Technology, you'll enjoy full ownership, full flexibility, competitive advantages and technology independent, tailored for your business.",
    abbr: 'CSD',
  },
  {
    heading: ' Internet of Things ',
    text: "Introduce Internet of Things (IoT) to your operations to improve workplace safety, reduce operation cost, enhance customer and experience. Prognosis Technologies an IoT Software Development Company; as the world moves toward a more connected future, we're ready to help your business adapt and thrive. Our custom solutions enable cutting-edge cloud technologies, opening up a new world of revenue - creating possibilities. Prognosis Technologies blueprint software to create an ocean of opportunities for your business with IoT.",
    abbr: 'IOT',
  },
];

export const navLinks: NavLinkInterface[] = [
  {
    href: '/',
    linkName: 'Home',
  },
  {
    href: '/about',
    linkName: 'About',
  },
  {
    href: '/services',
    linkName: 'Services',
  },
];

export const menuLinks: MenuLinksInterface[] = [
  {
    href: '/accounting-software-solution',
    linkName: 'Accounting Software Solution',
  },
  {
    href: '/general-insurance',
    linkName: 'General Insurance Management',
  },
  {
    href: '/hmo-insurance-management-solution',
    linkName: 'HMO Insurance Management Solution',
  },
  {
    href: '/human-resource-management-solution',
    linkName: 'Human Resource Management Solution',
  },
  {
    href: '/insurance-broker-management-platform',
    linkName: 'Insurance Broker Management Platform',
  },
];

export const clientImage: ClientImage[] = [
  {
    alt: 'client-1',
    src: '/images/lashma-logo.jpg',
    width: '100px',
    height: '100px',
  },
  {
    alt: 'client-2',
    src: '/images/Leadway-Health.png',
    width: '500px',
    height: '300px',
  },
  {
    alt: 'client-3',
    src: '/images/star-health.png',
    width: '300px',
    height: '300px',
  },
  {
    alt: 'client-4',
    src: '/images/horizon.png',
    width: '400px',
    height: '300px',
  },
  {
    alt: 'client-5',
    src: '/images/gene-health.png',
    width: '600px',
    height: '150px',
  },
  {
    alt: 'client-6',
    src: '/images/carenet-logo.png',
    width: '200px',
    height: '80px',
  },
  {
    alt: 'client-7',
    src: '/images/aicug-logo.png',
    width: '90px',
    height: '80px',
  },
  {
    alt: 'client-8',
    src: '/images/prestige-logo.png',
    width: '1000px',
    height: '400px',
  },
  {
    alt: 'cleint-9',
    src: '/images/profin-logo.png',
    width: '120px',
    height: '50px',
  },
  {
    alt: 'client-10',
    src: '/images/masca.png',
    width: '120px',
    height: '50px',
  },
  {
    alt: 'client-11',
    src: '/images/avon.jpg',
    width: '120px',
    height: '100px',
  },
  {
    alt: 'client-12',
    src: '/images/noor.png',
    width: '150px',
    height: '100px',
  },
];
