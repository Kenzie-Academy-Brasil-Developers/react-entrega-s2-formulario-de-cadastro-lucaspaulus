import React from "react";
import GlobalStyle from "./components/style/globalStyle.js";

import Router from "./routes";

function App() {
    return (
        <>
            <GlobalStyle/>
            <Router />
        </>
    );
}

export default App;
