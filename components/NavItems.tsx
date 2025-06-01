"use client" // it is 
// a client component because it uses usePathname from next/navigation
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navItems  = [
    {label: 'Home', href: '/'},
    {label:'companion', href: '/companions'},
    {label:'myjourney', href: '/my-journey'},
]
const NavItems = () => {
    const pathname   = usePathname();

  return (
    <nav className="flex items-center gap-4">
      {navItems.map(({label, href}) => ( 
        <Link href={href} key = {label}   className={cn(pathname === href && "text-primary font-semibold")}>
            {label}
        </Link>

        
    ))}
    </nav>
  );
}

export default NavItems;
