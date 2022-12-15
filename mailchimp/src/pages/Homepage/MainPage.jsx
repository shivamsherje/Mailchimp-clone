import Auto1 from "../../assets/autometion1.png";
import Auto2 from "../../assets/autometion2.png";
import Auto3 from "../../assets/autometion3.png";
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

const MainPage = () => {
  const [auto] = useState(Autometion1);
  const heading1 ="Generate up to 4x more orders* with Customer Journey Builder automations";


  return (
    <div>
      <TopSection />
      <Gridcard />
      <Video />
      <Pricing />
      <Automations  data={auto} heading={heading1} />
      <Accordation />
    </div>
  );
};

export default MainPage;
