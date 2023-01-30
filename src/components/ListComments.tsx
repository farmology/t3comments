import { useRouter } from "next/router";
import { useState } from "react";
import { api, CommentWithChildren } from "../utils/api";
import CommentForm from "./CommentForm";

function CommentActions({ commentId }: { commentId: string }) {
    const [replying, setReplying] = useState(false);
    
    
    return (
      <>
        <div>
          <button onClick={() => setReplying(!replying)}>Reply</button> 
            {replying && <CommentForm parentId={commentId} />}
        </div>
      </>
    )};

function Comment({ comment }: { comment: CommentWithChildren }) {
  const { mutate: deleteComment } = api.comment.deleteComment.useMutation({
    onSuccess: (comment) => {
        console.log(comment);
        
        
    },
});
    return (
      <div className="flex flex-col pl-16">                   
        
            <p className="pl-md text-red-300">
                {comment.body}
            </p>
        <div className="flex text-gray-300">
          <CommentActions commentId={comment.id} />
          <form>
          <button type='submit' className="pl-3" onClick={() => deleteComment({ id: comment.id })}>Delete</button>
          </form>
        </div>
        <div>
            {comment.children && comment.children.length > 0 && (
                <ListComments comments={comment.children} />
            )}
        </div>
      </div>
    );
  }

function ListComments({ comments }: { comments: Array<CommentWithChildren> }) {
    return (
      <div>
        {comments.map((comment) => {
          return <Comment key={comment.id} comment={comment} />;
        })}
      </div>      
    );
  }
  
export default ListComments;




