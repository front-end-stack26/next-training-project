import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { useRouter } from "next/navigation"
import { Category } from "@/types/category";


type NavMenuProps = {
    navItems: Category[],
    setSelectedCategory: (category: string) => void
}

const NavMenu = ({ navItems, setSelectedCategory }: NavMenuProps) => {
  const router = useRouter();
  const selectCategory = (category: string) => {    
    if (category && category !== 'all') {
       router.push(`/project-demo?category=${category}`);
    } else {
       router.push(`/project-demo`);
    }
    setSelectedCategory(category);
   }
  return (
   <NavigationMenu className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <NavigationMenuList> 
            {navItems.map((item) => (
                <NavigationMenuItem  key={item.name}>
                    <button onClick={() => selectCategory(item.slug)}>{item.slug}</button>
                </NavigationMenuItem> 
            ))}
        </NavigationMenuList>
    </NavigationMenu>
  )
}

export default NavMenu