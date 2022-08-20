// Module Imports
import {
	AppBar,
	Box,
	Button,
	ListItemButton,
	Menu,
	MenuItem,
	Tab,
	Tabs,
	Toolbar,
	SwipeableDrawer,
	IconButton,
	List,
	ListItem,
	ListItemText,
	Collapse,
	useMediaQuery,
	useTheme,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { Fragment, useEffect, useMemo, useRef, useState } from "react";

// Elevation Scroll Effect
function ElevationScroll(props) {
	const { children } = props;
	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 0,
	});

	return React.cloneElement(children, {
		elevation: trigger ? 4 : 0,
	});
}

function Header() {
	const [value, setValue] = useState(false);
	const [anchorEl, setAnchorEl] = useState(null);
	const [selectedIndex, setSelectedIndex] = useState(-1);
	const [openDrawer, setOpenDrawer] = useState(false);
	const [openServicesList, setOpenServicesList] = useState(false);
	const openMenu = Boolean(anchorEl);
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.down("tabs"));
	const { pathname, push } = useRouter();
	const iOS =
		typeof navigator !== "undefined" &&
		/iPad|iPhone|iPod/.test(navigator.userAgent);

	// Common sx prop object for all components
	const sx = {
		tab: {
			...theme.typography.tab,
			minWidth: 10,
			marginLeft: "25px",
		},
		button: {
			...theme.typography.estimate,
			borderRadius: 50,
			marginLeft: "50px",
			marginRight: "25px",
			height: "45px",
			"&:hover": {
				backgroundColor: theme.palette.secondary.light,
			},
			display: { tabs: "block", xs: "none" },
		},
		logoContainer: {
			padding: 0,
			height: "100%",
		},
		servicesMenu: {
			marginTop: "-50px",
			zIndex: theme.zIndex.modal + 2,
			"& .MuiPaper-root": {
				borderRadius: 0,
			},
			"& .MuiList-root": {
				background: theme.palette.common.blue,
			},
			"& .MuiMenuItem-root": {
				...theme.typography.tab,
				color: "#fff",
				opacity: 0.7,
				"&:hover": {
					opacity: 1,
				},
			},
			"& .Mui-selected": {
				background: "#074f81 !important",
			},
		},
		toolbar: {
			display: "flex",
			justifyContent: "space-between",
			[theme.breakpoints.down("lg")]: {
				height: "6em",
			},
			[theme.breakpoints.down("sm")]: {
				height: "5em",
			},
		},
		drawerIconContainer: {
			marginLeft: "auto",
			display: { xs: "block", tabs: "none" },
		},
		drawerIcon: {
			height: "50px",
			width: "50px",
		},
		drawer: {
			"& .MuiPaper-root": {
				background: theme.palette.common.blue,
			},
			"& .MuiListItem-root": {
				padding: 0,
			},
			"& .MuiListItemButton-root": {
				padding: "12px 16px",
			},
			"& .Mui-selected": {
				background: "#074f81 !important",
			},
			"& .Mui-selected > .MuiListItemText-root": {
				opacity: 1,
			},
		},
		drawerItem: {
			...theme.typography.tab,
			color: "#fff",
			opacity: 0.7,
		},
		drawerItemButton: {
			"&:hover": {
				background: "transparent",
			},
			"& .MuiTouchRipple-child": {
				backgroundColor: "#000",
			},
		},
		drawerItemEstimate: {
			background: theme.palette.common.orange,
		},
		drawerList: {
			width: "11em",
		},
		appbar: {
			zIndex: theme.zIndex.modal + 1,
		},
		icon: {
			color: theme.palette.common.orange,
			transform: openServicesList ? "rotate(180deg)" : undefined,
			transition: "transform 200ms ease-in-out",
		},
		servicesMenuListItem: {
			"& .Mui-selected": {
				backgroundColor: "#3683b7 !important;",
			},
		},
	};

	// Company logo svg
	const logo = (
		<svg
			style={{ height: "100%" }}
			id="Layer_1"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 480 139"
		>
			<style>{`.st0{fill:none}.st1{fill:#fff}.st2{font-family:Raleway;font-weight:300;text-transform:none;text-decoration:none;font-weight: 100;}.st6{fill:none;stroke:#000;stroke-width:3;stroke-miterlimit:10}`}</style>
			<path d="M448.07-1l-9.62 17.24-8.36 14.96L369.93 139H-1V-1z" />
			<path className="st0" d="M-1 139h479.92v.01H-1z" />
			<text
				transform="translate(261.994 65.233)"
				className="st1 st2"
				fontSize="57"
			>
				Arc
			</text>
			<text
				transform="translate(17.692 112.015)"
				className="st1 st2"
				fontSize="54"
			>
				Development
			</text>
			<path
				className="st0"
				d="M382.44 116.43l47.65-85.23 8.36-14.96M369.83 139l-.01.01L362 153"
			/>
			<path
				d="M438.76 15.76l-56.42 100.91c-12.52-10.83-20.45-26.82-20.45-44.67 0-32.58 26.42-59 59-59 6.23 0 12.24.97 17.87 2.76z"
				fill="#0b72b9"
			/>
			<path d="M479.89 72c0 32.58-26.42 59-59 59-14.73 0-28.21-5.4-38.55-14.33l56.42-100.91c23.85 7.57 41.13 29.89 41.13 56.24z" />
			<g id="Group_186" transform="translate(30.153 11.413)">
				<g id="Group_185">
					<g id="Words">
						<path
							id="Path_59"
							className="st1"
							d="M405.05 14.4l-.09 80.38-7.67-.01.06-52.25-29.4 52.21-7.94-.01 45.04-80.32z"
						/>
					</g>
				</g>
			</g>
			<path
				className="st0"
				d="M457-17l-8.93 16-9.62 17.24-8.36 14.96L369.93 139l-.01.01L361 155"
			/>
		</svg>
	);

	const servicesMenuOptions = useMemo(
		() => [
			{
				name: "Services",
				link: "/services",
			},
			{
				name: "Custom Software Development",
				link: "/customsoftware",
			},
			{
				name: "iOS/Android App Development",
				link: "/mobileapps",
			},
			{
				name: "Website Development",
				link: "/websites",
			},
		],
		[]
	);

	const routes = useMemo(
		() => [
			{
				name: "Home",
				link: "/",
			},
			{
				name: "Services",
				link: "/services",
			},
			...servicesMenuOptions.slice(1),
			{
				name: "The Revolution",
				link: "/revolution",
			},
			{
				name: "About Us",
				link: "/about",
			},
			{
				name: "Contact Us",
				link: "/contact",
			},
			{
				name: "Free Estimate",
				link: "/estimate",
			},
		],
		[servicesMenuOptions]
	);

	// Event Listeners
	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	const handleOpenMenu = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleMenuItemClick = (event, index) => {
		setValue(1);
		setSelectedIndex(index);
		setAnchorEl(null);
	};

	const handleCloseMenu = () => {
		setAnchorEl(null);
	};

	const handleServiceListClick = (event) => {
		event.stopPropagation();
		event.preventDefault();
		setOpenServicesList(!openServicesList);
	};

	// For setting tab value on refresh/reload
	useEffect(() => {
		const routeIndex = routes.findIndex(({ link }) => link === pathname);

		if (routeIndex !== -1) {
			if (routeIndex >= 1 && routeIndex <= 4) {
				if (value !== 1) setValue(1);

				if (selectedIndex !== routeIndex - 1) setSelectedIndex(routeIndex - 1);
			} else {
				const index = routeIndex === 0 ? 0 : routeIndex - 3;
				if (value !== index) {
					setValue(index);
				}
			}
		}
	}, [routes, pathname, value, setValue, selectedIndex, setSelectedIndex]);

	const tabs = (
		<Fragment>
			<Tabs
				value={value > 4 ? false : value}
				onChange={handleChange}
				indicatorColor="primary"
				textColor="inherit"
				sx={{
					marginLeft: "auto",
					display: { tabs: "block", xs: "none" },
				}}
			>
				<Tab sx={sx.tab} label="Home" onClick={() => push("/")} />
				<Tab
					id="services"
					aria-haspopup="listbox"
					aria-controls="services-menu"
					aria-expanded={openMenu ? "true" : undefined}
					onClick={() => push("/services")}
					onMouseEnter={handleOpenMenu}
					sx={sx.tab}
					label="Services"
				/>
				<Tab
					sx={sx.tab}
					label="The Revolution"
					onClick={() => push("/revolution")}
				/>
				<Tab sx={sx.tab} label="About Us" onClick={() => push("/about")} />
				<Tab sx={sx.tab} label="Contact Us" onClick={() => push("/contact")} />
			</Tabs>
			<Menu
				id="services-menu"
				anchorEl={anchorEl}
				open={openMenu}
				onClose={handleCloseMenu}
				MenuListProps={{
					"aria-labelledby": "services",
					role: "listbox",
					onMouseLeave: handleCloseMenu,
				}}
				sx={sx.servicesMenu}
				disableAutoFocusItem
				keepMounted
			>
				{servicesMenuOptions.map(({ name, link }, index) => (
					<Link key={name} href={link}>
						<MenuItem
							selected={index === selectedIndex && value === 1}
							onClick={(event) => handleMenuItemClick(event, index)}
						>
							{name}
						</MenuItem>
					</Link>
				))}
			</Menu>
			<Link href="/estimate">
				<Button sx={sx.button} variant="contained" color="secondary">
					Free Estimate
				</Button>
			</Link>
		</Fragment>
	);

	const drawer = (
		<Fragment>
			<SwipeableDrawer
				disableBackdropTransition={!iOS}
				disableDiscovery={iOS}
				anchor="right"
				open={openDrawer}
				onClose={() => setOpenDrawer(false)}
				onOpen={() => setOpenDrawer(true)}
				sx={sx.drawer}
			>
				<Box sx={{ ...theme.mixins.toolbar, ...sx.toolbar }} />
				<List sx={sx.drawerList} disablePadding>
					{[...routes.slice(0, 2), ...routes.slice(5)].map(
						({ name, link }, index) => (
							<Fragment key={name}>
								<Link href={link}>
									<ListItem
										onClick={() => {
											setOpenDrawer(false);
											if (openServicesList) setOpenServicesList(false);
										}}
										divider
									>
										<ListItemButton
											selected={value === index}
											sx={
												index === 5
													? { ...sx.drawerItemButton, ...sx.drawerItemEstimate }
													: sx.drawerItemButton
											}
										>
											<ListItemText sx={sx.drawerItem} disableTypography>
												{name}
											</ListItemText>
											{index === 1 ? (
												<IconButton
													sx={sx.drawerItemButton}
													onClick={handleServiceListClick}
													style={{ position: "absolute", right: "0.5em" }}
												>
													<ExpandMore sx={sx.icon} />
												</IconButton>
											) : null}
										</ListItemButton>
									</ListItem>
								</Link>
								{index === 1 && (
									<Collapse in={openServicesList} timeout="auto" unmountOnExit>
										<List
											disablePadding
											sx={{ background: theme.palette.primary.light }}
										>
											{servicesMenuOptions
												.slice(1)
												.map(({ name, link }, index) => (
													<Link key={name} href={link}>
														<ListItem
															onClick={() => {
																setOpenDrawer(false);
																setOpenServicesList(false);
															}}
															sx={sx.servicesMenuListItem}
														>
															<ListItemButton
																selected={
																	value === 1 && selectedIndex - 1 === index
																}
																disableTouchRipple
															>
																<ListItemText
																	sx={sx.drawerItem}
																	disableTypography
																>
																	{name.split(" Development")[0]}
																	<br />
																	<span style={{ fontSize: "0.8rem" }}>
																		Development
																	</span>
																</ListItemText>
															</ListItemButton>
														</ListItem>
													</Link>
												))}
										</List>
									</Collapse>
								)}
							</Fragment>
						)
					)}
				</List>
			</SwipeableDrawer>
			<IconButton
				sx={sx.drawerIconContainer}
				onClick={() => setOpenDrawer(!openDrawer)}
				disableRipple
			>
				<MenuIcon sx={sx.drawerIcon} />
			</IconButton>
		</Fragment>
	);

	return (
		<React.Fragment>
			<ElevationScroll>
				<AppBar sx={sx.appbar} position="fixed">
					<Toolbar sx={sx.toolbar} disableGutters>
						<Link href="/">
							<Button
								sx={sx.logoContainer}
								disableRipple
								onClick={() => setValue(0)}
							>
								{logo}
							</Button>
						</Link>
						{matches ? drawer : tabs}
					</Toolbar>
				</AppBar>
			</ElevationScroll>
			<Box sx={{ ...theme.mixins.toolbar, ...sx.toolbar }} />
		</React.Fragment>
	);
}

export default Header;
