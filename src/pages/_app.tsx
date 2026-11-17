import "@/styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider defaultTheme="system" storageKey="site-theme" disableTransitionOnChange>
			<Component {...pageProps} />
		</ThemeProvider>
	);
}
