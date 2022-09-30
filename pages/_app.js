import "../styles/globals.css"
import { MoralisProvider } from "react-moralis"
import { NotificationProvider } from "web3uikit"

const NEXT_PUBLIC_MORALIS_SERVER_URL = process.env.NEXT_PUBLIC_MORALIS_SERVER_URL
const NEXT_PUBLIC_MORALIS_APPLICATION_ID = process.env.NEXT_PUBLIC_MORALIS_APPLICATION_ID
// console.log(NEXT_PUBLIC_MORALIS_SERVER_URL)
// console.log(NEXT_PUBLIC_MORALIS_APPLICATION_ID)

function MyApp({ Component, pageProps }) {
    return (
        <MoralisProvider
            // serverUrl={NEXT_PUBLIC_MORALIS_SERVER_URL}
            // appId={NEXT_PUBLIC_MORALIS_APPLICATION_ID}
            // OR wihtout having to initialize the App:
            initializeOnMount={false}
        >
            <NotificationProvider>
                <Component {...pageProps} />
            </NotificationProvider>
        </MoralisProvider>
    )
}

export default MyApp
