import { Image } from '@chakra-ui/react'
import React from 'react'

function Campaign({ value }) {
    if (value === 1) {
        return (
            <Image src="https://eep.io/images/yzco4xsimv0y/3Upkm3Id44Wo4GcqkKKM28/9a21b039af2307954296f78dc1b24dc3/ILLO_Spot_Email_4_1080.png?w=1520&fm=webp&q=80" />
        );
    }
    if (value === 2) {
        return (
            <Image src="https://eep.io/images/yzco4xsimv0y/PYULEP3VcqSOAe8aa8UeY/2030f517357ede1b9a85b7648612bfec/ILLO_Spot_Email_5_1080.png?w=1520&fm=webp&q=80" />
        );
    }
    if (value === 3) {
        return (
            <Image src="https://eep.io/images/yzco4xsimv0y/4Engb3S2UwQO8cI4okcqyY/5429c68e8f8b1f1edd3c4861381d9059/Mailchimp_101_step_3.png?w=1520&fm=webp&q=80" />
        );
    }
    if (value === 4) {
        return (
            <Image src="https://eep.io/images/yzco4xsimv0y/5rkk2EOqwE0CQYuuW6IuM4/12c354bb10e611faa14f6f4ac1388b60/ILLO_Spot_Email_7_1080.png?w=1520&fm=webp&q=80" />
        );
    }
}

export default Campaign