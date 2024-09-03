import { Toaster } from "react-hot-toast";
import "../styles/globals.css";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="light">
        <Component {...pageProps} />
        <Toaster position="bottom-center" reverseOrder={true} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
