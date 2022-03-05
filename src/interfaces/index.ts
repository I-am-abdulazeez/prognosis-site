import { nanoid } from "nanoid";
import { UrlObject } from "url";

export interface SwipeDetails {
  imageSrc: string;
  title: string;
  text: string;
}

export interface SwipeCardDetails extends SwipeDetails {
  link: string;
}

export interface TeamList {
  username: string;
  userPosition: string;
  userAvatar: string;
  userText: string | JSX.Element | JSX.Element[];
}

export interface CardProps {
  icon: string;
  title: string;
  text: string;
  w: string;
  h: string;
  alt: string;
}

export interface TestimonialDetails {
  userImage: string;
  text: string;
  userName: string;
  userDetails: string;
}

export interface RoundCardProps {
  bgColor: string;
  title: string;
  text: string;
  textColor: string;
}

export interface cardItems {
  cardHeader: string;
  cardText: string;
}

export interface FormInput {
  name: string;
  companyName: string;
  email: string;
  service: string;
  message: string;
}

export interface InputFieldProps {
  name: string;
  handleChange: (e: any) => void;
  value: string;
  placeHolder: string;
  label: string;
}

export interface SelectFieldProps extends InputFieldProps {}
export interface TextAreaFieldProps extends InputFieldProps {}

export interface serviceCategory {
  serviceId: string;
  serviceCategory: string;
}

export interface TabListOpts {
  heading: string;
  text: string;
  abbr: string;
}

export interface FooterLinksProps {
  text: string;
  link: string | UrlObject;
}
