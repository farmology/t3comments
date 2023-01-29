import React, { useState } from 'react'
import { api } from '../utils/api';

function CommentForm() {
    const [input, setInput] = useState<string>('');
    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        
    };
    const { mutate: addComment } = api.comment.addComment.useMutation({
        onSuccess: (comment) => {
            setInput('');
        },
    });
    return (
        <form onSubmit={handleSubmit}>
            <input type='text' value={input} onChange={(e) => setInput(e.target.value)} />
            <button  
                className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20" 
                onClick={() => addComment({ body: input })}>
                Reply</button>
        </form>
    )
}

export default CommentForm