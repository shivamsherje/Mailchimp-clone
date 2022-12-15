import { Box, Center, Image } from "@chakra-ui/react";
import React from "react";

const ProductImage = () => {
  return (
    <Box
      style={{
        background:
          "linear-gradient(180deg, #ffe6ff 50%, white 50%)",
      }}
      w="100%"
    >
      <Center>
        <Image
          className="imgp"
          src="https://eep.io/images/yzco4xsimv0y/1jLvkI1ssXliXkyATh9h5D/3765c84774f2dae75d78ded45b5e26f8/AUI_Website-Builder_01-Hero.png?w=1560&fm=webp&q=70"
          alt="pLogo"
          height={[150,350,700]}
          w={[200,400,850]}
        />
      </Center>
    </Box>
  );
};

export default ProductImage;
