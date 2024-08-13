import Link from "next/link";
import React from "react";
import logo from './logo.png'
import Image from 'next/image';

const Logo = () => {
    return(
        <Link href='/'>
            <Image src={logo} alt={'def_shopify_logo'} width={'auto'} height={33}/>
        </Link>
    )
}

export default Logo