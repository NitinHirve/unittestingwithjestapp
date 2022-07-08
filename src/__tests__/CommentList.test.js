import {screen,render} from '@testing-library/react';
import CommentList from '../components/CommentList';

describe("Tests for comment list",()=>{

test("comments are not available",()=>{
    render(<CommentList allcomments={[]} />)
    const h3Element = screen.getByText("No comments",{exact:false});
    expect(h3Element).toBeInTheDocument();
})

test("List all comments",()=>{
    const comments = [
        {id:1,text :"This is comment 1"},
        {id:1,text :"This is comment 2"}
    ]

    render(<CommentList allcomments={comments} />)
    const h3Element = screen.queryByText("no comments",{exact:false});
    expect(h3Element).not.toBeInTheDocument();

    const commentLi = screen.getAllByRole("listitem");
    expect(commentLi.length).toBe(comments.length); 
})





})