import { Box, Center, Image } from "@chakra-ui/react";
import React from "react";

const ProductImage3 = () => {
  return (
    <Box
      style={{
        background:
          "linear-gradient(180deg, #ffe6ff 50%, #ffe6ff 50%)",
      }}
      w="100%"
    >
      <Center>
        <Image
          className="imgp"
          src="https://eep.io/images/yzco4xsimv0y/5qA55qc6kma5aJigUbqXmV/846b84eee21f53b35c77bd12dd618149/Websites-Editor-Social-Proof.png?w=1960&fm=webp&q=80"
          alt="pLogo2"
          height={[150,350,700]}
          w={[200,400,850]}
        />
      </Center>
    </Box>
  );
};

export default ProductImage3;
