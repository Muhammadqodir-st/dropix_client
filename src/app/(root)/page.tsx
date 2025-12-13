import Posts from '@/components/Posts';
import Suggested from '@/components/Suggested';

export default function Home() {
  return (
    <div className="w-full flex items-center flex-col gap-3 py-18">
      <div className='flex gap-5'>
        <Posts />
        <Suggested />
      </div>
    </div>
  );
}
