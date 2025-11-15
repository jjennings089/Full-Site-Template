export default function CommentsList({ comments }) {
  if (Array.isArray(comments)) {
    return (
      <>
        <h3>Comments:</h3>
        {comments.map((comment) => (
          <div key={comment.text}>
            <h4>{comment.postedBy}</h4>
            <p>{comment.text}</p>
          </div>
        ))}
      </>
    );
  } else {
    return (
      <>
        <h3>Comments:</h3>
        <p>Be the first to comment!</p>
      </>
    );
  }
}
