import HomePage from "../components/HomePage";
import { Outlet } from "react-router";

function RootLayout() {
    return <>
        <HomePage />
        <main>
            <Outlet />
        </main>
    </>
}

export default RootLayout;