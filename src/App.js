import React from "react";
import { Int, Cyb, School, Contact, Infohub, Request, Layout, Home, Posts} from "./pages";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import "./App.css";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route>
				<Route path="/" element={<Layout />}>
					<Route path="/internetaccess" element={<Int />} />
					<Route path="/schooladmission" element={<School />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/cybersecurity" element={<Cyb />} />
					<Route path="/request" element={<Request />} />
					<Route path="/posts" element={<Posts />} />
				</Route>

				<Route>
					<Route index element={<Home />} />
				</Route>

				</Route>
			</Routes>
		</BrowserRouter>
	);
}


export default App;


{/**

const App = () => {
	return (
		<div className="App">
			<div>
				<Navbar/>
				<Int/>
			</div>
		</div>
	);
};


*/}
