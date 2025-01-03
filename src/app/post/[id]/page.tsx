import Image from 'next/image'
import Link from 'next/link'
import { posts } from '../../data/post'
import Comments from '../../components/comment'

export default function Post({ params }: { params: { id: string } }) {
  const post = posts.find(p => p.id === parseInt(params.id))

  if (!post) {
    return <div className='my-10 text-center text-5xl text-red-600'>Post not found</div>
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600">
      <div className="container mx-auto px-4 py-8">
        <Link href="/" className="text-white hover:underline mb-4 inline-block">&larr; Back to Home</Link>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <Image src={post.image} alt={post.title} width={1200} height={600} className="w-full h-64 object-cover" />
          <div className="p-6">
            <h1 className="text-3xl font-bold mb-4 text-gray-800">{post.title}</h1>
            <p className="mb-8 text-gray-600">{post.content}</p>
            <Comments />
          </div>
        </div>
      </div>
    </div>
  )
}