import React from "react";
import {render, screen, fireEvent, findByTestId, waitFor, getByTestId} from "@testing-library/react";
import ContactForm from "../components/ContactForm";
import { act } from "react-dom/test-utils";

test('form renders?', () => {
    render(<ContactForm />);
})

test('Contact form is submitted, and data is rendered onto screen', async() =>{
  //Render form for 'virtual?' testing dom
  render(<ContactForm />);
  //query the inputs
    const FNinput = screen.getByLabelText(/first name/i);
    const LNinput = screen.getByLabelText(/last name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const messageInput = screen.getByLabelText(/message/i);
  //put in dummy data
  await act(async()=>{
      fireEvent.change(FNinput,{target:{value:'Jef'}});
      fireEvent.change(LNinput,{target:{value:'Gallion'}});
      fireEvent.change(emailInput,{target:{value:'fake@gmail.com'}});
      fireEvent.change(messageInput,{target:{value:'live free die hard'}});
      //grab submit button
      const submitBtn = screen.getByTestId("submit");
      //submit form
      fireEvent.click(submitBtn);
    })
  //make your assertions or whats expected to happen.
     expect(screen.getByText(/jef/i)).toBeInTheDocument();

})