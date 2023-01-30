import { useRouter } from "next/router";
import { useState } from "react";
import { CommentWithChildren } from "../utils/api";
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
    return (
      <div className="flex flex-col pl-16">                   
        
            <p className="pl-md text-red-300">
                {comment.body}
            </p>
        
        <CommentActions commentId={comment.id} />
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




