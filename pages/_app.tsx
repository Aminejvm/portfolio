import { ThemeProvider } from "@xstyled/styled-components";
import App from "next/app";
import Head from "next/head";
import React from "react";
import Headroom from "react-headroom";
import Nav from "../components/nav";
import Reset from "../globalStyles/reset";
import theme from "../globalStyles/theme";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <>
          <Head>
            <link
              href="https://fonts.googleapis.com/css?family=Roboto:400,700|Source+Sans+Pro&display=swap"
              rel="stylesheet"
            />
          </Head>
          <header>
            <Headroom>
              <Nav />
            </Headroom>
          </header>
          <Reset />
          <main>
            <Component {...pageProps} />
          </main>
        </>
      </ThemeProvider>
    );
  }
}

export default MyApp;
