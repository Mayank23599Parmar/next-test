import Head from "next/head"
import { useRouter} from "next/router"
import "../../styles/globals.css";
export default function App({ Component, pageProps }) {
  const router=useRouter()
  const {pathname}=router
  return <><Head>
    <title>{pathname}</title>
  </Head><Component {...pageProps} /></>
}
