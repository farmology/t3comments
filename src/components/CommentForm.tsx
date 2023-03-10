import React, { useRef, useState } from 'react'
import { api } from '../utils/api';

function CommentForm({ parentId }: { parentId?: string }) {
    const [input, setInput] = useState<string>('');           
    const { mutate: addComment } = api.comment.addComment.useMutation({
        onSuccess: (comment) => {
            console.log(comment);
            
            setInput('');
        },
    });
    return (
        <form className='text-black'>
            <input type='text' value={input} onChange={(e) => setInput(e.target.value)} />
            <button  
                className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20" 
                onClick={(e) => {
                    addComment({ body: input, parentId });
                    
                    }
                }>
                Add comment</button>
        </form>
    )
}

export default CommentForm