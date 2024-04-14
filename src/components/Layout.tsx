import React from 'react'
import { GlobalStyle } from '../styles/global';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
		<>
			<GlobalStyle></GlobalStyle>
			<Header></Header>
            <Outlet/>
			<Footer></Footer>
		</>
	);
}

export default Layout