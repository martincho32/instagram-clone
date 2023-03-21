import Image from "next/image";
import {MagnifyingGlassIcon} from "@heroicons/react/24/outline"
 
function Header() {
  return (
    <div>
      {/**Header */}
      <div className="flex justify-between max-w-6xl">
       <div className="relative hidden lg:inline-grid w-24">
        <Image src="https://links.papareact.com/ocw" 
        alt="test image"
        fill
        style={{objectFit:"contain"}}
        />
        </div>
        <div className="relative w-10 lg:hidden flex-shrin
         cursor-pointer">
          <Image src="https://links.papareact.com/jjm" 
          alt="test image"
          fill
        style={{objectFit:"contain"}}
          />
        </div>
        {/**Middle - Search input field */}
        <div className="mt-1 relative p-3 rounded-md">
          <div className="absolute inset-y-0 pl-3 flex items-center
           pointer-events-none">
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-500" />
          </div>
          <input type="text" placeholder="Search" className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 rounded-md focus:ring-black focus:border-black" />
        </div>
        {/**Right */}
      </div>
    </div>
  )
}

export default Header