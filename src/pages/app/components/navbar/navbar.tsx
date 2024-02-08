import { APP_NAME } from "@/lib/constants"

const Navbar = () => {
  return (
    <nav className="w-full h-[4rem] border-b px-4 flex flex-row justify-between items-center">
      {APP_NAME}
    </nav>
  )
}

export default Navbar