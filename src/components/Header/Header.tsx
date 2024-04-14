import React, { useState } from 'react';
import styled from 'styled-components';
import logo from '../../assets/Logo.png'; // Adjust the path to your logo image
import { NavLink } from "react-router-dom";

interface NavListProps {
	isOpen: boolean;
}

const HeaderContainer = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 10px 20px;
	color: white;
`;

const Logo = styled.img`
	height: 50px;
`;

const Nav = styled.nav`
	background-color: #6ab547;
	border-radius: 25px; // Creates the semi-circle effect on the edges
	padding: 0 1rem; // Adds horizontal padding for spacing
`;

const MobileNavIcon = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`;

const NavList = styled.ul<NavListProps>`
	display: flex;
	list-style: none;
	margin: 0;
	padding: 0;

	@media (max-width: 768px) {
		flex-direction: column;
		position: absolute;
		top: 70px;
		right: 0;
		background-color: #6ab547;
		width: 100%;
		height: 100vh;
		border: 1px solid #fff;
		border-top: none;
		border-radius: 0; // Resets border-radius for mobile view
		z-index: 2000;

		display: ${({ isOpen }) => (isOpen ? "block" : "none")};
	}
`;

const NavItem = styled.li`
	padding: 10px 15px;

	@media (max-width: 768px) {
		padding: 15px;
		text-align: center;
		font-weight: bold;
		font-size: 1.3rem;
		border-bottom: 1px solid #fff; // Separates items in mobile view
	}
`;

const StyledNavLink = styled(NavLink)`
	text-decoration: none;
	color: white;
	transition: color 0.3s;

	&:hover {
		color: #ddd;
	}
`;

const DrawerButton = styled.button`
	background: none;
	border: none;
	color: black;
	font-size: 24px;
	cursor: pointer;
`;

export function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
		<HeaderContainer>
			<Logo src={logo} alt="Parampara Logo" />
			<Nav>
				<NavList isOpen={isNavOpen}>
					<NavItem onClick={toggleNav}>
						<StyledNavLink to="/">HOME</StyledNavLink>
					</NavItem>
					<NavItem onClick={toggleNav}>
						<StyledNavLink to="/aboutus">ABOUT US</StyledNavLink>
					</NavItem>
					<NavItem onClick={toggleNav}>
						<StyledNavLink to="/oils">OILS</StyledNavLink>
					</NavItem>
					<NavItem onClick={toggleNav}>
						<StyledNavLink to="/foods">FOODS</StyledNavLink>
					</NavItem>
					<NavItem onClick={toggleNav}>
						<StyledNavLink to="/recipes">RECIPES</StyledNavLink>
					</NavItem>
					<NavItem onClick={toggleNav}>
						<StyledNavLink to="/blogs">BLOGS</StyledNavLink>
					</NavItem>
					<NavItem onClick={toggleNav}>
						<StyledNavLink to="/contact">CONTACT US</StyledNavLink>
					</NavItem>
				</NavList>
			</Nav>
			<MobileNavIcon>
				<DrawerButton onClick={toggleNav}>{isNavOpen ? "✖" : "☰"}</DrawerButton>
			</MobileNavIcon>
		</HeaderContainer>
	);
}
