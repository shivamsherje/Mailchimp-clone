import Auto1 from "../../assets/autometion1.png";
import Auto2 from "../../assets/autometion2.png";
import Auto3 from "../../assets/autometion3.png";
import Auto4 from "../../assets/autometion4.png";
import Auto5 from "../../assets/autometion5.png";
import Auto6 from "../../assets/autometion6.png";

import React from "react";
import TopSection from "./TopSection";
import Gridcard from "./Gridcard";
import Video from "./Video";
import Pricing from "./Pricing";
import { useState } from "react";
import Automations from "./Automations";
import Accordation from "./Accordation";

const Autometion1 = [
  {
    id: 1,
    image: Auto1,
    heading: "Convert more customers at scale",
    text: "Drive more traffic and sales by setting up automations that trigger emails based on customer behavior with our Customer Journey Builder.",
  },
  {
    id: 2,
    image: Auto2,
    heading: "Discover new ways to automate",
    text: "Get a head start with pre-built journeys that help you cross-sell your products, recover abandoned carts, re-engage existing customers, and win new ones.",
  },
  {
    id: 3,
    image: Auto3,
    heading: "Keep your emails relevant and your brand growing",
    text: "Deliver personalized emails based on their buying behavior, survey responses, chat interactions, and support tickets to promote loyalty and growth.",
  },
];

const Autometion2 = [
  {
    id: 1,
    image: Auto4,
    heading:
      "Mailchimp will help you focus on your most loyal and valuable customers.",
    text: "",
  },
  {
    id: 2,
    image: Auto5,
    heading: "Predict who’s likely to buy again",
    text: "Create segments of customers based on their lifetime value and likelihood to purchase.",
  },
  {
    id: 3,
    image: Auto6,
    heading: "Build customers for life",
    text: "Use our intelligent predictions to tighten your targeting strategy, strengthen customer relationships, and drive repeat sales.",
  },
];

const MainPage = () => {
  const [auto] = useState(Autometion1);
  const [auto2] = useState(Autometion2);

  const heading1 =
    "Generate up to 4x more orders* with Customer Journey Builder automations";
  const heading2 =
    "Get up to 88% more revenue* with our Customer Lifetime Value and Likelihood to Purchase segments";

  return (
    <div>
      <TopSection />
      <Gridcard />
      <Video />
      <Pricing />
      <Automations data={auto} heading={heading1} />
      <Accordation />
      <Automations data={auto2} heading={heading2} />
    </div>
  );
};

export default MainPage;
