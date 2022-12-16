import { Box, Center, Image } from "@chakra-ui/react";
import React from "react";

const ProductImage2 = () => {
  return (
    <Box
      style={{
        background:
          "linear-gradient(180deg, white 50%, #ffe6ff 50%)",
      }}
      w="100%"
    >
      <Center>
        <Image
          className="imgp"
          src="https://eep.io/images/yzco4xsimv0y/4K5y0q5W6gnczlpoTux24H/7100eb6cb5d3529e5c37ed575463e114/Websites-fill-v2-min.png?w=500&fm=webp&q=80"
          alt="pLogo2"
          height={[150,350,700]}
          w={[200,400,850]}
        />
      </Center>
    </Box>
  );
};

export default ProductImage2;
