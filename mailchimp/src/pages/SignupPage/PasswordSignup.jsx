import { Button,  Image, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import React  from 'react'
import showe from '../../assets/show.png'
import hide from '../../assets/hide.png'

function PasswordSignup() {
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)

    return (
      <InputGroup size='md'>
        
        <Input
          size="lg"
          pr='4.5rem'
          type={show ? 'text' : 'password'}
        />
        <InputRightElement width='4.5rem'>
          <Button h='1.75rem'mt={1} mr={1} padding={5} bgColor="white" size='sm' onClick={handleClick}>
            {show ? <Image  src={hide}/> : <Image src={showe}/>}
            
          </Button>
        </InputRightElement>
      </InputGroup>
    )
  }
  export default PasswordSignup