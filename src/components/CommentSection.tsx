
import { useRouter } from "next/router";
import formComments from "../helpers/formatComments";


import { api } from "../utils/api";
import CommentForm from "./CommentForm";
import ListComments from "./ListComments";

function CommentSection() {
  const router = useRouter();

  const permalink = router.query.permalink as string;

  const { data } = api.comment.getComments.useQuery(undefined, {
    onSuccess: (data) => {
        permalink
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