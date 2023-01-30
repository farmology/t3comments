
import { useRouter } from "next/router";
import { useState } from "react";
import formComments from "../helpers/formatComments";


import { api } from "../utils/api";
import CommentForm from "./CommentForm";
import ListComments from "./ListComments";

function CommentSection() {
  const router = useRouter();

  const permalink = router.query.permalink as string;
  const [comments, setComments] = useState({});
  const { data } = api.comment.getComments.useQuery(undefined, {
    onSuccess: (data) => {
        console.log(data);
        setComments(data);
    },
  });
     
  return (
    <div>
      <CommentForm />
      {data && <ListComments comments={formComments(data || [])} />}
    </div>
  );
}

export default CommentSection;