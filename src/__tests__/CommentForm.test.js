import {screen,render} from "@testing-library/react";
import CommentForm from '../components/CommentForm';
import userEvent from "@testing-library/user-event"

describe("Test cases for CommentForm", ()=>{


    test("Initial condition",()=>{
        
        render(<CommentForm />);
        const commentInput = screen.getByRole("textbox");
        const checkBox = screen.getByLabelText("i agree to terms and conditions",{exact:false})
        const submitBtn = screen.getByRole("button",{name:"comment",exact:false});

        expect(commentInput).toBeInTheDocument();
        expect(checkBox).toBeInTheDocument();
        expect(submitBtn).toBeInTheDocument();
        expect(submitBtn).toBeDisabled();
    })

    test("Enable submit button on type and checkbox click",()=>{

         render(<CommentForm />)
         const commentInput = screen.getByRole("textbox");
         const checkBox = screen.getByLabelText("i agree to terms and conditions",{exact:false})
         const submitBtn = screen.getByRole("button",{name:"comment",exact:false});

        //  fireEvent.change(commentInput,{target:{value:"something"}})
         userEvent.type(commentInput,"This is nice") 
         userEvent.click(checkBox);
         expect(submitBtn).toBeEnabled();
         userEvent.click(checkBox);
         expect(submitBtn).toBeDisabled();


    })




})