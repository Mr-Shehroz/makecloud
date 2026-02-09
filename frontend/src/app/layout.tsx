import { Archivo_Black, DM_Sans, Roboto } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@/components/global/GoogleAnalytics";
import FooterSectionContainer from "@/components/FooterSectionContainer";
import HeaderContainer from "@/components/HeaderContainer";

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
			<HeaderContainer />
            {children}
			<FooterSectionContainer />
			</body>
		</html>
	);
}