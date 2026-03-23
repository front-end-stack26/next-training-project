import { Open_Sans } from "next/font/google"    
import { Roboto_Mono } from "next/font/google"
import { Playwrite_DK_Uloopet_Guides } from "next/font/google"

const OpenSans = Open_Sans({subsets:['latin'], weight:['500']})
const Roboto = Roboto_Mono({subsets:['latin'], weight: ['500']})
const PlayWrite = Playwrite_DK_Uloopet_Guides({subsets:['latin'], weight: ['400']})

const Fonts = () => {
  return (
    <div>
        <h1 className={`${OpenSans.className} text-4xl font-bold mb-10`}>Open Sans Font</h1>
        <h1 className={`${Roboto.className} text-4xl font-bold mb-10 mt-6`}>Roboto Mono Font</h1>
        <h1 className={`${PlayWrite.className} text-4xl font-bold mb-10 mt-6`}>PlayWrite Mono Font</h1>
    </div>
  )
}

export default Fonts