import { NavLink } from "react-router-dom"
import { Button } from "./ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "./ui/navigation-menu"

function Header() {
  const links = [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "/findDoc",
      name: "Find Doctors",
    },
    {
      path: "/about",
      name: "About",
    },
  ]
  return (
    <>
      <header className='p-4 px-12 grid grid-flow-col-dense bg-primary-foreground'>
        <h1 className='text-4xl font-medium tracking-[0.3em] uppercase text-primary px-4'>
          Amrutam
        </h1>
        <NavigationMenu>
          <NavigationMenuList>
            {links.map((link, index) => (
              <NavigationMenuItem key={`${link.name}-${index}`}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `bg-transparent text-xl mx-4 p-1 rounded-md border border-transparent ${
                      isActive
                        ? "text-primary font-bold hover:underline hover:border-primary"
                        : "text-neutral-800 font-medium hover:bg-primary hover:text-neutral-50"
                    }`
                  }>
                  {link.name}
                </NavLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className='flex justify-end px-4 items-center gap-2'>
          <Button
            variant='outline'
            className='text-primary bg-transparent text-[1rem] border border-primary shadow-md tracking-wide hover:bg-primary hover:text-white'>
            Login
          </Button>
          <Button className=''>Sign-up</Button>
        </div>
      </header>
    </>
  )
}

export default Header
