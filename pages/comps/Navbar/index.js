import Link from 'next/link'
import Image from 'next/image'

import {
    Container, 
    Input,
    Inline,
    Button,
} from './styles'
const logo = 'https://icons-for-free.com/iconfiles/png/512/people+reddit+website+world+icon-1320168265344965117.png'

const myLoader = ({ src, width, quality }) => {
    return logo
}

const Navbar = () => {
    return ( 
        <Container>
            <Image
                loader={myLoader}
                alt="Reddit"
                src="logo.png"
                width={40}
                height={40}
            />
            <Input
                placeholder="Search Reddit"
            />
            <Inline>
                <Button>Log In</Button>
                <Button blue>Sign Upn</Button>
            </Inline>
        </Container>
    )
}

export default Navbar