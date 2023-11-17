import Head from "./Heading_transition";
import 'animate.css';
import Image from "next/image";
import Link from "next/link";


const Heading = () => {
  return (
    <div className="animate__bounce p-10 flex w-full justify-between items-center">
      <div className="object-left">
          <Link href="/">
            <Image
              src='/iiitlLogo.png'
              alt="IIITL"
              layout="responsive"
              width={300}
              height={10}
            />
          </Link>
        </div>
        <Head />
    </div>
  )
}

export default Heading
