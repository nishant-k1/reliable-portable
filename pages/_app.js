import React from "react";
import { DefaultSeo, LocalBusinessJsonLd } from "next-seo";
import defaultSeoConfig, { localBusinessConfig } from "../next-seo.config";
import "../styles/globals.css";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import { QuoteContextProvider } from "../contexts/QuoteContext";
import Testimonial from "../components/Testimonial";
import Head from "next/head";
import QuickQuote from "../components/QuickQuote";
import { QuickQuoteContext } from "../contexts/QuickQuoteContext";
import { ClientWidthContext } from "../contexts/ClientWidthContext";
import { SidebarContext } from "./../contexts/SidebarContext";
import { ToastContainer } from "react-toastify";
import { testimonials } from "../constants";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { initGA, logPageView } from "../react-ga4-config";

function MyApp({ Component, pageProps, router }) {
  const { asPath } = useRouter();

  const [clientWidth, setClientWidth] = React.useState(
    typeof window !== "undefined" ? window.innerWidth : null
  );
  const [quickQuoteViewStatus, setQuickQuoteViewStatus] = React.useState(false);

  React.useEffect(() => {
    initGA();
    logPageView(router.pathname, document.title);

    const handleRouteChange = (url) => {
      logPageView(url, document.title);
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  React.useEffect(() => {
    if (asPath !== "/quote") {
      setTimeout(() => {
        setQuickQuoteViewStatus(true);
      }, 9000);
    }
  }, []);

  const [active, setActive] = React.useState(false);

  const handleResize = React.useCallback(() => {
    setClientWidth(window.innerWidth);
  }, []);
  React.useEffect(() => {
    if (typeof window) {
      handleResize();
    }
  }, [handleResize]);

  React.useEffect(() => {
    if (typeof window) {
      // modal container
      if ((quickQuoteViewStatus && clientWidth <= 768) || active) {
        document.documentElement.style.overflowY = "hidden"; // firefox, chrome
        // document.body.scroll = "no"; // ie only
      } else {
        document.documentElement.style.overflowY = "scroll"; // firefox, chrome
        // document.body.scroll = "yes"; // ie only
      }
    }
  }, [quickQuoteViewStatus, clientWidth, active]);

  React.useEffect(() => {
    if (clientWidth) {
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, [clientWidth, handleResize]);

  return (
    <React.Fragment>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1, shrink-to-fit=no, user-scalable=1, viewport-fit=cover"
        />
        <link
          rel="shortcut icon"
          href="favicon.svg"
          type="image/x-icon"
        />
      </Head>
      <ClientWidthContext.Provider value={[clientWidth, setClientWidth]}>
        <SidebarContext.Provider value={{ active, setActive }}>
          <QuoteContextProvider>
            <QuickQuoteContext.Provider
              value={{ quickQuoteViewStatus, setQuickQuoteViewStatus }}
            >
              <Sidebar />
              <Layout>
                <DefaultSeo
                  {...defaultSeoConfig}
                  canonical={asPath}
                  openGraph={{ ...defaultSeoConfig.openGraph, url: asPath }}
                />
                <LocalBusinessJsonLd
                  {...localBusinessConfig}
                  url={asPath}
                />
                <Navbar />
                <motion.div
                  key={router.route}
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: {
                      opacity: 0,
                    },
                    visible: {
                      opacity: 1,
                      transition: {
                        delay: 0.5,
                      },
                    },
                  }}
                >
                  <Component {...pageProps} />
                </motion.div>
                <QuickQuote />
                <Testimonial {...testimonials} />
                <Footer />
                <ToastContainer />
              </Layout>
            </QuickQuoteContext.Provider>
          </QuoteContextProvider>
        </SidebarContext.Provider>
      </ClientWidthContext.Provider>
    </React.Fragment>
  );
}

export default MyApp;
