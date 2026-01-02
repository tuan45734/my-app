import Hero from './trang-chu/Hero';
import Features from './trang-chu/Features';
import Products from './trang-chu/Products';
import Promotion from '@/app/trang-chu/Promotion'; 
import Promotion2 from '@/app/trang-chu/Promotion2';
import CursorWrapper from '@/app/trang-chu/CursorWrapper';

export default function Home() {
  return (
    <div className="min-h-screen">
      <CursorWrapper>
        <Hero />
        <Features />
        <Promotion />
        <Promotion2 />
        <Products />
      </CursorWrapper>
    </div>
  );
}