import Image from "next/image";
import Link from "next/link";
import NavItems from "./NavItems";
import { SignInButton , SignUpButton , SignedIn , SignedOut , UserButton } from "@clerk/nextjs";


const Navbar = () => {
  return (
    <nav className="navbar">
        <Link href={"/"} >
        <div className="flex items-center gap-2.5 cursor-pointer">
            <Image  src="/images/logo.svg"   alt="logo"  height={44} width={46}  />


            
           
        </div>

        </Link>
        <div className="flex items-center gap-8">
            <NavItems/>
            <SignedOut>
             
                <SignInButton>
                  <button className= "btn-signin">Sign In</button>
                  </SignInButton>
            


            </SignedOut>

            <SignInButton>
              <UserButton/>
            </SignInButton>

        </div>
      
    </nav>
  );
}

export default Navbar;
