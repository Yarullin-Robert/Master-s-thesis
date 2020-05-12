import React, { useEffect } from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Main from "./Components/Main/Main";
import {BrowserRouter} from 'react-router-dom';
import BackToTop from "./Components/BackToTop/BackToTop";

const App = (props) => {

	return (
		<BrowserRouter>
			<Header Items={props.State.Menu} />
			<Main CallbackTestPage={props.State.CallbackTestPage} AddTestElement={props.AddTestElement} UpdateTestElement={props.UpdateTestElement} />
			<Footer Items={props.State.Socials} />
			<BackToTop />
		</BrowserRouter>
	);
};

export default App;
