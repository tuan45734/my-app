export interface TimelineItem {
  year: string;
  title: string;
  description: string;
  image: string;
  link?: string;
  linkText?: string;
  position: 'left' | 'right';
}

export const timelineData: TimelineItem[] = [
  {
    year: "2022",
    title: "Khởi đầu",
    description: "Ra mắt sản phẩm thương hiệu Ăn Cùng Bà Tuyết với những sản phẩm bim bim quẩy đầu tiên tại Thái Nguyên",
    image: "https://res.cloudinary.com/dvg7ourbo/image/upload/v1763787303/cld-sample-4.jpg",
    position: 'left'
  },
  {
    year: "2023",
    title: "Vượt khó",
    description: "Mở rộng mô hình kinh doanh, bước đầu tiên rời mô hình kinh doanh xuống Hà Nội",
    image: "https://res.cloudinary.com/dvg7ourbo/image/upload/v1763787303/cld-sample-4.jpg",
    position: 'right'
  },
  {
    year: "2024",
    title: "Mở rộng",
    description: "Xây dựng mở rộng nhà máy, đa dạng hình thức bán hàng",
    image: "https://res.cloudinary.com/dvg7ourbo/image/upload/v1763787303/cld-sample-4.jpg",
    position: 'left'
  },
  {
    year: "2025",
    title: "Bứt phá",
    description: "Chuẩn hóa nhà máy. Đưa sản phẩm đến người tiêu dùng toàn quốc",
    image: "https://res.cloudinary.com/dvg7ourbo/image/upload/v1767342533/nmcg_yycoms.png",
    position: 'right'
  }
];