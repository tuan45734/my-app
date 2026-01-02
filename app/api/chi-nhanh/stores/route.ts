import { NextResponse } from 'next/server';
import storesData from '@/app/chi-nhanh/data/stores.json';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
 
  const tinhThanh = searchParams.get('tinhThanh');
  const limit = searchParams.get('limit');
  const offset = searchParams.get('offset');
  
  let filteredData = storesData;

  if (tinhThanh && tinhThanh !== 'Tất cả') {
    filteredData = filteredData.filter(store => store.tinhThanh === tinhThanh);
  }

  if (offset && limit) {
    const start = parseInt(offset);
    const end = start + parseInt(limit);
    filteredData = filteredData.slice(start, end);
  }

  const headers = {
    'Content-Type': 'application/json',
    'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400',
  };

  return NextResponse.json(filteredData, { headers });
}