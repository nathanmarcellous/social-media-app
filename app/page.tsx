import { PostFeed } from '@/components/post-feed';
import { Sidebar } from '@/components/sidebar';
import { Widgets } from '@/components/widgets';

export default function Home() {
  return (
    <>
      <div className='text-black min-h-screen max-w-7xl mx-auto flex justify-center'>
        <Sidebar />
        <PostFeed />
        <Widgets />
      </div>

      
    </>
  );
}
