'use client'

import { useState } from 'react'

interface Comment {
  id: number;
  text: string;
}

export default function Comments() {
  const [comments, setComments] = useState<Comment[]>([])
  const [newComment, setNewComment] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (newComment.trim()) {
      setComments([...comments, { id: Date.now(), text: newComment }])
      setNewComment('')
    }
  }

  return (
    <div className="mt-8 bg-gray-100 p-6 rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Comments</h2>
      <form onSubmit={handleSubmit} className="mb-4">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Write a comment..."
          rows={3}
        />
        <button type="submit" className="mt-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-md hover:from-blue-600 hover:to-purple-700 transition duration-300">
          Add Comment
        </button>
      </form>
      <ul className="space-y-4">
        {comments.map((comment) => (
          <li key={comment.id} className="bg-white p-4 rounded-md shadow">
            {comment.text}
          </li>
        ))}
      </ul>
    </div>
  )
}