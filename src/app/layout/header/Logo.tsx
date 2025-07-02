'use client'; 
import Image from 'next/image';
import Link from 'next/link'; 
import logo from "../../../assets/images/logo-black.png";

const Logo = () => {
  return (
    <div className="logo">
      <Link href="/">
        <Image
          src={logo}
          alt="logo"
          width={120}
          className="border-r pr-6 p-1"
        />
      </Link>
    </div>
  );
};

export default Logo;
