import React, { useState, useRef } from 'react';
import ImageUpload from './ImageUpload';

const PostComposer = ({
  onSubmit,
  onCancel,
  placeholder = "What's on your mind?",
  userInitial = "U",
  userAvatar,
  className = '',
}) => {
  const [text, setText] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [isPosting, setIsPosting] = useState(false);
  const [formError, setFormError] = useState(null);

  const textInputRef = useRef(null);

  const resetForm = () => {
    setText('');
    setSelectedImage(null);
    setFormError(null);
    if (textInputRef.current) {
      textInputRef.current.focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError(null);

    const hasText = text.trim().length > 0;
    const hasImage = selectedImage !== null;

    if (!hasText && !hasImage) {
      setFormError("Post cannot be empty.");
      return;
    }

    setIsPosting(true);
    try {
      if (onSubmit) {
        await onSubmit({
          title: text.trim().substring(0, 100) || 'Post',
          content: text.trim(),
          imageFile: selectedImage
        });
        resetForm();
      }
    } catch (err) {
      console.error("Composer error:", err);
      setFormError(err.message || "Something went wrong.");
    } finally {
      setIsPosting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`bg-white rounded-2xl shadow-lg p-6 mb-6 ${className}`}>
      <div className="flex items-start gap-3">
        {userAvatar ? (
          <img src={userAvatar} alt="User Avatar" className="h-12 w-12 rounded-full object-cover" />
        ) : (
          <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary to-secondary text-white flex items-center justify-center font-bold text-lg">
            {userInitial}
          </div>
        )}
        <textarea
          ref={textInputRef}
          className="flex-1 resize-none rounded-xl border-2 border-gray-200 bg-gray-50 px-4 py-3 text-gray-700 focus:outline-none focus:border-secondary focus:bg-white transition-all"
          placeholder={placeholder}
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={3}
          disabled={isPosting}
        />
      </div>

      <div className="mt-4 flex items-center justify-between">
        <ImageUpload onImageSelect={setSelectedImage} className="flex-shrink-0" />
        <div className="flex items-center gap-3">
          {formError && <span className="text-sm text-red-500 font-medium">{formError}</span>}
          <button
            type="button"
            onClick={resetForm}
            className="text-sm text-gray-600 hover:text-gray-900 font-semibold px-4 py-2 rounded-full hover:bg-gray-100 transition-all"
            disabled={isPosting}
          >
            Clear
          </button>
          <button
            type="submit"
            className="rounded-full bg-secondary px-6 py-2 text-sm font-semibold text-white hover:bg-secondary/90 disabled:opacity-60 shadow-lg hover:shadow-xl transition-all"
            disabled={isPosting || (!text.trim() && !selectedImage)}
          >
            {isPosting ? 'Posting...' : 'Post'}
          </button>
        </div>
      </div>
    </form>
  );
};

export default PostComposer;