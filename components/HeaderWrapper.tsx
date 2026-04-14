// components/HeaderWrapper.tsx
export const dynamic = "force-dynamic";
import { auth } from "@/lib/auth"
import Header from "./Header"

export default async function HeaderWrapper() {  
  const session = await auth();
  console.log("eeeee", session);
  
  const navItems = [
    { href: "/project-demo", label: "Home" },
    { href: "/project-demo/about", label: "About" },
    { href: "/project-demo/terms", label: "Terms & Conditions" },
    { href: "/project-demo/shipping", label: "Shipping & Return Policy" },
    { href: "/project-demo/privacy", label: "Privacy Policy" },
    { href: "/project-demo/faq", label: "FAQ" },
  ]
  
  return <Header 
      brand="My Store"
      brandLogoUrl="/project-demo"
      navItems= {[
            { href: "/project-demo", label: "Home" },
            { href: "/project-demo/about", label: "About" },
            { href: "/project-demo/terms", label: "Terms & Conditions" },
            { href: "/project-demo/shipping", label: "Shipping & Return Policy" },
            { href: "/project-demo/privacy", label: "Privacy Policy" },
            { href: "/project-demo/faq", label: "FAQ" },
          ]}
      showCart={true}
      session={session}
 />
}