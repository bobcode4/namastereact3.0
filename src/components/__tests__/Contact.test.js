import { render,screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("load ContactUs page as expected", () => {
    test("Should load button in the ContactUs component", () => {
        render(<Contact/>);
        const button = screen.getByRole("button");
    
        //Assertion
        expect(button).toBeInTheDocument();
    });
    
    test("Should load input name inside ContactUs component", () => {
        render(<Contact/>);
        const inputName = screen.getByPlaceholderText("Name")
    
        //Assertion
        expect(inputName).toBeInTheDocument();
    });
    
    test("Should load all input boxes inside ContactUs component", () => {
        render(<Contact/>);
        const inputBoxes = screen.getAllByRole("textbox");    
        //Assertion
        expect(inputBoxes.length).toBe(2);
    });
});

