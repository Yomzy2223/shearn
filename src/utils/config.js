import * as yup from "yup";

import {
  DollarIcon,
  Funtuna,
  InfoIcon,
  Lenovo,
  LogoutIcon,
  Lucid,
  NewAge,
  NIO,
  Oraimo,
  PaymentIcon,
  PriceIcon,
  ReferralIcon,
  ServicesIcon,
  Tencent,
  WalletIcon,
} from "../assets/images";

export const allShares = [
  {
    title: "Sh-FUNTUNA",
    image: Funtuna,
    price: 10,
    hourProfit: 0.025,
    lifeSpan: 40,
    totalRevenue: 24,
    pre: "",
    post: "least",
  },
  {
    title: "Sh-NEW AGE",
    image: NewAge,
    price: 20,
    hourProfit: 0.055,
    lifeSpan: 40,
    totalRevenue: 52.8,
    pre: "one of",
    post: "least",
  },
  {
    title: "Sh-ORAIMO",
    image: Oraimo,
    price: 30,
    hourProfit: 0.075,
    lifeSpan: 40,
    totalRevenue: 72,
    pre: "one of",
    post: "least",
  },
  {
    title: "Sh-LENOVO",
    image: Lenovo,
    price: 40,
    hourProfit: 0.1,
    lifeSpan: 40,
    totalRevenue: 96,
    pre: "",
    post: "mid-range",
  },
  {
    title: "Sh-TENCENT",
    image: Tencent,
    price: 60,
    hourProfit: 0.15,
    lifeSpan: 40,
    totalRevenue: 144,
    pre: "one of",
    post: "highest",
  },
  {
    title: "Sh-NIO",
    image: NIO,
    price: 100,
    hourProfit: 0.25,
    lifeSpan: 40,
    totalRevenue: 240,
    pre: "the 2nd highest of",
    post: "",
  },
  {
    title: "LUCID",
    image: Lucid,
    price: 200,
    hourProfit: 0.5,
    lifeSpan: 40,
    totalRevenue: 480,
    pre: "",
    post: "highest",
  },
];

export const AccountPageLinks = [
  {
    text: "Withdraw",
    icon: PriceIcon,
    link: "/account/withdraw",
  },
  {
    text: "My Wallet Address",
    icon: WalletIcon,
    link: "/account/wallet-info",
  },
  {
    text: "Payment Records",
    icon: PaymentIcon,
    link: "/account/payments-record",
  },
  {
    text: "Balance Record",
    icon: DollarIcon,
    link: "/account/payments-record/account",
  },
  {
    text: "Customer Service",
    icon: ServicesIcon,
    link: "",
  },
  {
    text: "Affliate Program",
    icon: ReferralIcon,
    link: "/account/referrals",
  },
  {
    text: "About Us",
    icon: InfoIcon,
    link: "/account/about",
  },
  {
    text: "Log Out",
    icon: LogoutIcon,
    link: "/login",
  },
];

export const loginSchema = yup.object().shape({
  email: yup.string().email("Please enter a valid email").required(),
  password: yup.string().min(5).max(32).required(),
});

export const registerSchema = yup.object().shape({
  full_name: yup
    .string("Please enter a valid name")
    .required("Full name is required"),
  email: yup.string().email("Please enter a valid email").required(),
  password: yup.string().min(5).max(32).required(),
  confirm_password: yup
    .string()
    .label("confirm password")
    .required("You must confirm password")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

export const newPasswordSchema = yup.object().shape({
  password: yup.string().min(5).max(32).required(),
  confirm_password: yup
    .string()
    .label("confirm password")
    .required()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});
