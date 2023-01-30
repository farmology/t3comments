
import { useRouter } from "next/router";
import { useState } from "react";
import formComments from "../helpers/formatComments";


import { api, CommentWithChildren } from "../utils/api";
import CommentForm from "./CommentForm";
import ListComments from "./ListComments";

function CommentSection() {
  const router = useRouter();

  const permalink = router.query.permalink as string;
  const [commentsData, setCommentsdata] = useState(Array<CommentWithChildren>);
  const { data } = api.comment.getComments.useQuery(undefined, {
    onSuccess: (data) => {
        console.log(data);
        const formdata = formComments(data || []);
        console.log(formdata);
        setCommentsdata(formdata);
    },
  });
     
  return (
    <div>
      <CommentForm />
      {data && <ListComments comments={commentsData} />}
    </div>
  );
}

export default CommentSection;