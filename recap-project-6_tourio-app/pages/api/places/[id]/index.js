// import { db_places } from "../../../../lib/db_places";
import { db_comments } from "../../../../lib/db_comments";
import dbConnect from "../../db/connect";
import Place from "../../db/Place";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;
  if (!id) {
    return;
  }
 if(request.method === "GET"){
  const place = await Place.findById(id);
  // const comment = place?.comments;
  // const allCommentIds = comment?.map((comment) => comment.$oid) || [];
  // const comments = db_comments.filter((comment) =>
  //   allCommentIds.includes(comment._id.$oid)
  // );

  if (!place) {
    return response.status(404).json({ status: "Not found" });
  }

  response.status(200).json(place);
}
if (request.method === "PUT"){
  await Place.findByIdAndUpdate(id, {
    $set: request.body,
  });
  response.status(200).json({ status: `updated place with id: ${id}!` });
}
}
