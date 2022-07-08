import {screen,render} from "@testing-library/react";
import App from '../App';
import userEvent from "@testing-library/user-event";
// import CommentForm from '../components/CommentForm';
// import CommentList from '../components/CommentList';

describe("Tests for App component",()=>{


    test("comments gets display after submitting",async ()=>{
        render(<App />)

        // render(<CommentForm />)
        const commentInput = screen.getByRole("textbox");
        const checkBox = screen.getByLabelText("i agree to terms and conditions",{exact:false})
        const submitBtn = screen.getByRole("button",{name:"comment",exact:false});

        userEvent.type(commentInput,"Nice pic");
        userEvent.click(checkBox);
        userEvent.click(submitBtn);

        // const commentLi = screen.getByText("Nice pic",{exact:false});      //getBy
        const commentLi = await screen.findByText("Nice pic",{exact:false});  //findBy
        expect(commentLi).toBeInTheDocument();


    })

    test("2 comments gets display after submitting",async()=>{
        render(<App />)

        // render(<CommentForm />)
        const commentInput = screen.getByRole("textbox");
        const checkBox = screen.getByLabelText("i agree to terms and conditions",{exact:false})
        const submitBtn = screen.getByRole("button",{name:"comment",exact:false});

        userEvent.type(commentInput,"Nice pic");
        userEvent.click(checkBox);
        userEvent.click(submitBtn);

        userEvent.type(commentInput,"Looking good");
        userEvent.click(submitBtn);

        // const commentLi = screen.getAllByRole("listitem");
        const commentLi = await screen.findAllByRole("listitem");

        // screen.debug();
        expect(commentLi.length).toBe(2);


    })






})