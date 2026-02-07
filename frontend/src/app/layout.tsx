import type { Metadata } from "next";
import { Archivo_Black, DM_Sans, Geist, Geist_Mono, Roboto } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/global/ThemeProvider";
import { ThemeToggle } from "@/components/global/ThemeToggle";
import { GoogleAnalytics } from "@/components/global/GoogleAnalytics";
import { getDictionary } from "@/i18n/getDictionary";
import { i18n } from "@/i18n/i18n-config";
import Header from "@/components/sections/header";
import FooterSection from "@/components/sections/FooterSection";
import Branding from "@/components/sections/branding";

const roboto = Roboto({
	variable: "--font-roboto",
	subsets: ["latin"],
	weight: ["400","500","600","700","900"]
});
const archivo_black = Archivo_Black({
	variable: "--font-archivo-black",
	subsets: ["latin"],
	weight: ["400"]
});
const dm_sans = DM_Sans({
	variable: "--font-dm-sans",
	subsets: ["latin"],
	weight: ["400","500"]
});

export async function generateMetadata(): Promise<Metadata> {
	const dictionary = await getDictionary(i18n.defaultLocale);
	return {
		title: dictionary.app.title,
		description: dictionary.app.description,
	};
}

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html suppressHydrationWarning lang="en">
			<head>
				{/* Google Analytics */}
				<GoogleAnalytics />
			</head>
			<body
				className={`${archivo_black.variable} ${roboto.variable} ${dm_sans.variable} antialiased`}
				>
			<Branding />
			<Header />
            {children}
			<FooterSection />
			</body>
		</html>
	);
}