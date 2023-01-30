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
      <div className="flex flex-col pl-md text-white">                   
        <div>
            <p>
                {comment.body}
            </p>
        </div>
        <CommentActions commentId={comment.id} />
        <div className="flex flex-col pl-lg text-yellow">
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




