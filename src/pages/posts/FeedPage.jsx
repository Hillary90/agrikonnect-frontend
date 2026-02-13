import React, { useEffect, useMemo, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchPosts,
  createPost,
  toggleLikePost,
  submitComment,
  deleteComment,
  removePost,
  selectAllPosts,
  selectIsLoading,
  selectError,
  selectPaginationInfo,
} from '../../features/posts/postsSlice';
import PostList from '../../components/posts/PostList';
import PostComposer from '../../components/posts/PostComposer';

const FeedPage = () => {
  const dispatch = useDispatch();

  const posts = useSelector(selectAllPosts);
  const isLoading = useSelector(selectIsLoading);
  const errorMsg = useSelector(selectError);
  const { currentPage, hasMoreItems } = useSelector(selectPaginationInfo);

  const currentUser = useSelector((state) => state.auth.user);
  const currentUserId = currentUser?.id;
  const userName = currentUser?.first_name || currentUser?.name || 'User';

  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    dispatch(fetchPosts(1));
  }, [dispatch]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!document.hidden) {
        dispatch(fetchPosts(1));
      }
    }, 20000);

    return () => clearInterval(intervalId);
  }, [dispatch]);

  const handleLoadMore = useCallback(() => {
    if (!isLoading && hasMoreItems) {
      dispatch(fetchPosts(currentPage + 1));
    }
  }, [dispatch, isLoading, hasMoreItems, currentPage]);

  const handlePostSubmit = useCallback(async (postData) => {
    const { content, imageFile } = postData;
    try {
      await dispatch(createPost({ content, imageFile })).unwrap();
    } catch (err) {
      console.error('Post creation failed inside component:', err);
    }
  }, [dispatch]);

  const handleLikeToggle = useCallback((postId, currentStatus) => {
    dispatch(toggleLikePost({ postId, currentlyLiked: currentStatus }));
  }, [dispatch]);

  const handleCommentSubmit = useCallback((postId, content) => {
    dispatch(submitComment({ postId, text: content }));
  }, [dispatch]);

  const handleCommentDelete = useCallback((postId, commentId) => {
    dispatch(deleteComment({ postId, commentId }));
  }, [dispatch]);

  const handleDeletePost = useCallback((postId) => {
    dispatch(removePost(postId));
  }, [dispatch]);

  const { filteredPosts, trendingTags } = useMemo(() => {
    const query = searchInput.toLowerCase().trim();
    const tagRegex = /#([\w-]+)/g;

    const results = posts.filter((post) => {
      if (!query) return true;

      const searchableContent = [
        post.title,
        post.content,
        post.author?.name,
        (post.comments || []).map(c => c.content).join(' ')
      ].join(' ').toLowerCase();

      return searchableContent.includes(query);
    });

    const tagSet = new Set();
    posts.forEach(post => {
      const text = `${post.title || ''} ${post.content || ''}`;
      const matches = text.match(tagRegex);
      if (matches) {
        matches.forEach(tag => tagSet.add(tag));
      }
    });

    return {
      filteredPosts: results,
      trendingTags: Array.from(tagSet).slice(0, 8) // Limit to 8 tags
    };
  }, [posts, searchInput]);

  const displayError = typeof errorMsg === 'string' ? errorMsg : errorMsg?.message;

  return (
    <div className="min-h-screen relative">
      <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: "url('/farm-1.avif')",
        filter: 'brightness(0.45) contrast(1.05)'
      }} />
      <div className="absolute inset-0 opacity-40" style={{
        backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(34, 197, 94, 0.28) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(59, 130, 246, 0.28) 0%, transparent 50%)'
      }} />
      <div className="relative z-10 max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Community Feed</h1>
          <p className="text-gray-300">Share your farming experiences and learn from others</p>
        </div>
        
        <PostComposer onSubmit={handlePostSubmit} userInitial={userName[0].toUpperCase()} />
        {displayError && <p className="text-red-500 text-sm mt-2 bg-red-50 p-3 rounded-lg">{displayError}</p>}
        
        <PostList
          posts={filteredPosts}
          isLoading={isLoading}
          hasMore={hasMoreItems}
          onLoadMore={handleLoadMore}
          onLikeToggle={handleLikeToggle}
          onCommentSubmit={handleCommentSubmit}
          onCommentDelete={handleCommentDelete}
          onDeletePost={handleDeletePost}
          currentUserId={currentUserId}
        />
      </div>
    </div>
  );
};

export default FeedPage;