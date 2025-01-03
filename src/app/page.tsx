import Link from 'next/link';
import Image from 'next/image';
import { posts } from './data/post';



export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">

      <h1 className="text-4xl font-bold mb-8 text-black text-center">Blogs & News</h1>
      <p className="text-2xl font-thin mb-8 text-black text-center">Find out more about our on-site operations, read up on animal-related topics and <br /> receive regular updates from our FOUR PAWS experts.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {posts.map((post) => (
          <Link key={post.id} href={`/post/${post.id}`} className="block">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
              <Image
                src={post.image} // Fixed from posts.imageUrl to post.imageUrl
                alt={post.title}   // Fixed from posts.title to post.title
                width={600}
                height={400}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2 text-gray-800">{post.title}</h2>
                <p className="text-gray-600 line-clamp-3">{post.content}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
