export function groupComments(comments: CommentItemModel[]) {
  const commentMap = new Map<string, CommentItemModel[]>();

  comments.forEach(comment => {
    if (comment.parentCommentId) {
      if (!commentMap.has(comment.parentCommentId)) {
        commentMap.set(comment.parentCommentId, []);
      }
      commentMap.get(comment.parentCommentId)?.push(comment);
    } else {
      commentMap.set(comment.comment.id, [comment]);
    }
  });

  return commentMap;
}

export function groupCommentsIntoSections(comments: CommentItemModel[]) {
  const sections = comments
    .filter(comment => !comment.parentCommentId)
    .map(comment => ({
      parent: comment,
      data: comments.filter(
        child => child.parentCommentId === comment.comment.id,
      ),
    }));

  return sections;
}
