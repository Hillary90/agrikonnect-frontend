import React from 'react';
import { Link } from 'react-router-dom';
import LikeButton from './LikeButton';
import CommentList from './CommentList';
import CommentForm from './CommentForm';

const PostCard = ({
  post,
  onLikeToggle,
  onCommentSubmit,
  onCommentDelete,
  onDeletePost,
  currentUserId,
  isOwnPost = false,
  className = '',
}) => {
  const {
    id,
    title,
    content,
    image_url,
    author_id,
    created_at,
    likeCount = 0,
    commentCount = 0,
    isLiked = false,
    comments = [],
    isAnonymous,
  } = post;

  // Get author name from post data
  const authorName = post.author?.first_name && post.author?.last_name 
    ? `${post.author.first_name} ${post.author.last_name}`
    : post.author?.name || 'Anonymous';

  //get author initials for avatar
  const authorInitials = authorName
    .split(' ').map(n => n[0]).join('').toUpperCase();

  // Format creation date
  const formattedDate = created_at ? new Date(created_at).toLocaleString() : '';

  return (
    <div className={`glass rounded-2xl shadow-lg hover:shadow-xl transition-all p-6 mb-4 ${className}`}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary to-secondary text-white flex items-center justify-center text-lg font-bold mr-3">
            {authorInitials}
          </div>
          <div>
            <p className="font-semibold text-gray-900">{authorName}</p>
            <p className="text-xs text-gray-500">{formattedDate}</p>
          </div>
        </div>
        {isOwnPost && onDeletePost && (
          <button
            onClick={() => {
              if (window.confirm('Are you sure you want to delete this post?')) {
                onDeletePost(id);
              }
            }}
            className="text-white bg-red-500 hover:bg-red-600 text-sm font-semibold px-4 py-2 rounded-full transition-all shadow-md hover:shadow-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </button>
        )}
      </div>

      {title && title.trim() !== '' && !content.startsWith(title) && (
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">{title}</h2>
      )}
      <p className="text-gray-700 mb-3 leading-relaxed">{content}</p>
      {image_url && (
        <img
          src={image_url}
          alt="Post visual content"
          className="w-full h-auto rounded-xl mb-4 object-cover"
        />
      )}

      <div className="flex items-center gap-6 py-3 border-t border-gray-100">
        <LikeButton
          postId={id}
          isLiked={isLiked}
          likeCount={likeCount}
          onLikeToggle={onLikeToggle}
        />
        <span className="text-sm text-gray-600 font-medium">{commentCount} Comments</span>
      </div>

      {/* Comment Section */}
      <div className="p-4 bg-white">
        <CommentList
          comments={comments}
          onDelete={onCommentDelete ? (commentId) => onCommentDelete(id, commentId) : undefined}
          currentUserId={currentUserId}
        />
        <div className="mt-3 pt-3 border-t border-gray-100">
          <CommentForm
            postId={id}
            onSubmit={(text) => onCommentSubmit(id, text)}
          />
        </div>
      </div>
    </div>
  );
};

export default PostCard;