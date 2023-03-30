import '@/styles/globals.css'
import { SnackbarProvider } from "notistack";

export default function App({ Component, pageProps }) {
  return <SnackbarProvider anchorOrigin={{ horizontal: 'right', vertical: 'top' }}>
    <Component {...pageProps} />
    </SnackbarProvider>
}
