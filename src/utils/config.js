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

// export const allShares = [
//   {
//     title: "Sh-FUNTUNA",
//     image: Funtuna,
//     price: 10,
//     hourProfit: 0.025,
//     lifeSpan: 40,
//     totalRevenue: 24,
//     pre: "",
//     post: "least",
//   },
//   {
//     title: "Sh-NEW AGE",
//     image: NewAge,
//     price: 20,
//     hourProfit: 0.055,
//     lifeSpan: 40,
//     totalRevenue: 52.8,
//     pre: "one of",
//     post: "least",
//   },
//   {
//     title: "Sh-ORAIMO",
//     image: Oraimo,
//     price: 30,
//     hourProfit: 0.075,
//     lifeSpan: 40,
//     totalRevenue: 72,
//     pre: "one of",
//     post: "least",
//   },
//   {
//     title: "Sh-LENOVO",
//     image: Lenovo,
//     price: 40,
//     hourProfit: 0.1,
//     lifeSpan: 40,
//     totalRevenue: 96,
//     pre: "",
//     post: "mid-range",
//   },
//   {
//     title: "Sh-TENCENT",
//     image: Tencent,
//     price: 60,
//     hourProfit: 0.15,
//     lifeSpan: 40,
//     totalRevenue: 144,
//     pre: "one of",
//     post: "highest",
//   },
//   {
//     title: "Sh-NIO",
//     image: NIO,
//     price: 100,
//     hourProfit: 0.25,
//     lifeSpan: 40,
//     totalRevenue: 240,
//     pre: "the 2nd highest of",
//     post: "",
//   },
//   {
//     title: "LUCID",
//     image: Lucid,
//     price: 200,
//     hourProfit: 0.5,
//     lifeSpan: 40,
//     totalRevenue: 480,
//     pre: "",
//     post: "highest",
//   },
// ];

export const allShares = [
  {
    title: "Sh - FUNTUNA",
    image: Funtuna,
    pre: "",
    post: "least",
  },
  {
    title: "Sh - NEW AGE",
    image: NewAge,
    pre: "one of",
    post: "least",
  },
  {
    title: "Sh - ORAIMO",
    image: Oraimo,
    pre: "one of",
    post: "least",
  },
  {
    title: "Sh - LENOVO",
    image: Lenovo,
    pre: "",
    post: "mid-range",
  },
  {
    title: "Sh - TENCENT",
    image: Tencent,
    pre: "one of",
    post: "highest",
  },
  {
    title: "Sh - NIO",
    image: NIO,
    pre: "the 2nd highest of",
    post: "",
  },
  {
    title: "LUCID",
    image: Lucid,
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

export const forgotPasswordSchema = yup.object().shape({
  email: yup.string().email("Please enter a valid email").required(),
});

export const referralSchema = yup.object().shape({
  referral: yup.string("Please enter a valid referral code").required(),
});

export const fundList = [
  {
    amount: 10,
    checkoutID: "ea6b2d54-fa4a-42e5-8baf-cea5d295db61",
  },
  {
    amount: 15,
    checkoutID: "ae6f1da3-bc56-40e9-83f3-723bb539c799",
  },
  {
    amount: 20,
    checkoutID: "8cadb7cf-9c97-4e62-893c-1c896499ccc6",
  },
  {
    amount: 50,
    checkoutID: "0beed73f-007a-4cc3-81af-7d867ca9c7e5",
  },
  {
    amount: 100,
    checkoutID: "6cbfd856-987c-42f3-9059-66e043b20263",
  },
  {
    amount: 200,
    checkoutID: "5fc4b525-d90c-4cee-9fed-18efb043a988",
  },
];
