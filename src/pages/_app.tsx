import type { AppProps } from 'next/app'
import "@/scss/index.scss"
import {Raleway, Fira_Code} from "next/font/google"

const raleway = Raleway({subsets: ["latin"], weight:["300","400","500","600","700"]})
const fira_code = Fira_Code({subsets: ["latin"]})


export default function App({ Component, pageProps }: AppProps) {
  return (
  <>
  <style jsx global>{`
  :root {
    --raleway: ${raleway.style.fontFamily};
    --fira-code: ${fira_code.style.fontFamily};
  }`}</style>
  <Component {...pageProps} />
  </>
  )
}
