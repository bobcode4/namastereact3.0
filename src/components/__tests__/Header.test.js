import Header from '../Header';
import appStore from "../../utils/appStore";
import {render, screen, fireEvent} from "@testing-library/react";
import {Provider} from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("should test the Header Component", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    const logInButton = screen.getByRole("button", {name : "LogIn"});

    fireEvent.click(logInButton);

    const logOutButton = screen.getByRole("button", {name : "LogOut"});

    expect(logOutButton).toBeInTheDocument();
});