import React, { useState } from "react";
import "./App.css";

import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./globalStyles";
import { lightTheme, darkTheme } from "./Themes";

//======= Components =======
import Nav from "./components/nav";
import Mheader from "./components/main-header";

function App() {
	// const [Current value variable, Change value variable] = useState(Initial/Previous value));
	const [counter, setCounter] = useState(0);
	const [toggle, setToggler] = useState(false);

	const incrementer = () => {
		// incrementer function
		setCounter((prev) => prev + 1); // access that last instance of the state and add one to it
		// setCounter(counter + 1) // alternate way
		console.log(setCounter); // log to the console result
	};

	const toggler = () => {
		setToggler((prev) => !prev);
	};

	const [theme, setTheme] = useState("light");
	const themeToggler = () => {
		theme === "light" ? setTheme("dark") : setTheme("light");
	};

	return (
		<ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
			<>
      <GlobalStyles/>
				<div className="App">
					<Nav />
					<Mheader />
					<h3 className={toggle ? "active" : " "}>
						Counter {counter}
					</h3>
					<button onClick={incrementer}>Increase counter</button>{" "}
					{/* When clicked run incrementer function */}
					<button onClick={toggler}>Toggle counter color</button>
					{/* When clicked change the background colors */}
					<button onClick={themeToggler}>Switch Theme</button>
				</div>
			</>
		</ThemeProvider>
	);
}

export default App;
