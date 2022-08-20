// Module Imports
import React from "react";
import Head from "next/head";
import {
	Grid,
	Typography,
	Button,
	useMediaQuery,
	useTheme,
} from "@mui/material";
import Link from "next/link";

// Local Imports
import ButtonArrow from "../src/ui/ButtonArrow";
import { Icon, SpecialText } from "../src/utils/styledComponents";

function Services() {
	const theme = useTheme();
	const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
	const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
	const customSoftwareVertical = useMediaQuery(
		theme.breakpoints.down("customSoftware")
	);
	const mobileAppVertical = useMediaQuery(theme.breakpoints.down("mobileApp"));
	const websitesVertical = useMediaQuery(theme.breakpoints.down("websites"));

	const sx = {
		learnButtonSmall: {
			...theme.typography.learnButton,
			fontSize: "0.7rem",
			height: 35,
		},
		subtitle: {
			marginBottom: "1em",
		},
		servicesContainer: {
			marginTop: "10em",
		},
	};

	return (
		<Grid container direction="column">
			<Head>
				<title key="title">
					Top Custom Software Development Services | Arc Development
				</title>
				<meta
					name="description"
					key="description"
					content="Cutting-edge software, mobile app, and website development services with sleek custom designs - get a free online estimate instantly!"
				/>
				<meta
					property="og:title"
					content="Bringing West Coast Technology to the Midwest | Services"
					key="og:title"
				/>
				<meta
					property="og:url"
					key="og:url"
					content="arcsoftwaredevelopment.com/services"
				/>
				<link
					rel="canonical"
					key="canonical"
					href="https://arcsoftwaredevelopment.com/services"
				/>
			</Head>
			<Grid
				item
				style={{
					marginLeft: matchesMD ? 0 : "5em",
					marginTop: matchesMD ? "1em" : "2em",
				}}
			>
				<Typography
					variant="h1"
					align={matchesMD ? "center" : undefined}
					gutterBottom
				>
					Services
				</Typography>
			</Grid>
			{/* -----iOS/Android Block----- */}
			<Grid item>
				<Grid
					container
					sx={sx.servicesContainer}
					direction={mobileAppVertical ? "column" : "row"}
					justifyContent={mobileAppVertical ? "center" : "flex-end"}
					alignItems={mobileAppVertical ? "center" : undefined}
					style={{ marginTop: matchesSM ? "1em" : "5em" }}
				>
					<Grid
						item
						style={{
							marginLeft: mobileAppVertical ? 0 : "5em",
							textAlign: mobileAppVertical ? "center" : undefined,
							padding: mobileAppVertical ? "25px" : 0,
							width: mobileAppVertical ? undefined : "35em",
						}}
					>
						<Typography variant="h4">iOS/Android App Development</Typography>
						<Typography variant="subtitle1" sx={sx.subtitle}>
							Extend Functionality. Extend Access. Increase Engagement.
						</Typography>
						<Typography variant="subtitle1">
							Integrate your web experience or create a standalone app
							{mobileAppVertical ? null : <br />} with either mobile platform.
						</Typography>
						<Link href="/mobileapps">
							<Button variant="outlined" sx={sx.learnButtonSmall}>
								<span style={{ marginRight: 10 }}>Learn More</span>
								<ButtonArrow
									width={10}
									height={10}
									fill={theme.palette.common.blue}
								/>
							</Button>
						</Link>
					</Grid>
					<Grid item style={{ marginRight: mobileAppVertical ? 0 : "5em" }}>
						<Icon
							breakpoint="mobileApp"
							width="250em"
							src="/assets/mobileIcon.svg"
							alt="mobile phone icon"
						/>
					</Grid>
				</Grid>
			</Grid>
			{/* -----Custom Software Block----- */}
			<Grid item>
				<Grid
					container
					sx={sx.servicesContainer}
					direction={customSoftwareVertical ? "column" : "row"}
					justifyContent={customSoftwareVertical ? "center" : "flex-start"}
					alignItems={customSoftwareVertical ? "center" : undefined}
				>
					<Grid
						item
						style={{
							marginLeft: customSoftwareVertical ? 0 : "5em",
							textAlign: customSoftwareVertical ? "center" : undefined,
							padding: customSoftwareVertical ? "25px" : 0,
						}}
					>
						<Typography variant="h4">Custom Software Development</Typography>
						<Typography variant="subtitle1" sx={sx.subtitle}>
							Save Energy. Save Time. Save Money.
						</Typography>
						<Typography variant="subtitle1">
							Complete digital solutions, from investigation to&nbsp;
							<SpecialText>celebration</SpecialText>.
						</Typography>
						<Link href="/customsoftware">
							<Button variant="outlined" sx={sx.learnButtonSmall}>
								<span style={{ marginRight: 10 }}>Learn More</span>
								<ButtonArrow
									width={10}
									height={10}
									fill={theme.palette.common.blue}
								/>
							</Button>
						</Link>
					</Grid>
					<Grid
						item
						style={{ marginRight: customSoftwareVertical ? 0 : "5em" }}
					>
						<Icon
							breakpoint="customSoftware"
							src="/assets/Custom Software Icon.svg"
							alt="custom software icon"
						/>
					</Grid>
				</Grid>
			</Grid>
			{/* -----Websites Block----- */}
			<Grid item>
				<Grid
					container
					sx={sx.servicesContainer}
					direction={websitesVertical ? "column" : "row"}
					justifyContent={websitesVertical ? "center" : "flex-end"}
					alignItems={websitesVertical ? "center" : undefined}
					style={{ marginBottom: "10em" }}
				>
					<Grid
						item
						style={{
							marginLeft: websitesVertical ? 0 : "5em",
							textAlign: websitesVertical ? "center" : undefined,
							padding: websitesVertical ? "25px" : 0,
							width: websitesVertical ? undefined : "35em",
						}}
					>
						<Typography variant="h4">Website Development</Typography>
						<Typography variant="subtitle1" sx={sx.subtitle}>
							Reach More. Discover More. Sell More.
						</Typography>
						<Typography variant="subtitle1">
							Optimized for Search Engines, built for speed.
						</Typography>
						<Link href="/websites">
							<Button variant="outlined" sx={sx.learnButtonSmall}>
								<span style={{ marginRight: 10 }}>Learn More</span>
								<ButtonArrow
									width={10}
									height={10}
									fill={theme.palette.common.blue}
								/>
							</Button>
						</Link>
					</Grid>
					<Grid item style={{ marginRight: websitesVertical ? 0 : "5em" }}>
						<Icon
							breakpoint="websites"
							width="250em"
							src="/assets/websiteIcon.svg"
							alt="website icon"
						/>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
}

export default Services;
