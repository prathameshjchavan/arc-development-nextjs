// Module Imports
import React from "react";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider } from "@mui/material";

// Local Imports
import createEmotionCache from "../utility/createEmotionCache";
import theme from "../src/ui/theme";
import "../styles/globals.css";
import Header from "../src/ui/Header";
import Footer from "../src/ui/Footer";

const clientSideEmotionCache = createEmotionCache();

const MyApp = (props) => {
	const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

	return (
		<CacheProvider value={emotionCache}>
			<ThemeProvider theme={theme}>
				<Header />
				<Component {...pageProps} />
				<Footer />
			</ThemeProvider>
		</CacheProvider>
	);
};

export default MyApp;
