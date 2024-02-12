import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HelloWorld from "./Pages/HelloWorld";

const routes = createBrowserRouter([{
    path: "/",
    element: <App />,
    children: [
        {
            path: "/testpage",
            element: <HelloWorld/>

        }
    ]
}]);

export default routes;