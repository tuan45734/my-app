'use client';

export default function Promotion2() {
  return (
    <section className="w-full bg-white">
      <div className="w-full bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: "url('https://res.cloudinary.com/dvg7ourbo/image/upload/v1766038388/pnsp1_ab0xda.png')",
          aspectRatio: 'auto'
        }}>
        <img
          src="https://res.cloudinary.com/dvg7ourbo/image/upload/v1766038388/pnsp1_ab0xda.png"
          alt="Promotion Background"
          className="w-full  invisible"
        />
        
      </div>
      <div className="w-full bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: "url('https://res.cloudinary.com/dvg7ourbo/image/upload/v1766038397/pnsp2_snwsri.png')",
          aspectRatio: 'auto'
        }}>
        <img
          src="https://res.cloudinary.com/dvg7ourbo/image/upload/v1766038397/pnsp2_snwsri.png"
          alt="Promotion Background"
          className="w-full  invisible"
        />
        
      </div>
      <div className="w-full bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: "url('https://res.cloudinary.com/dvg7ourbo/image/upload/v1766038410/pnsp3_rcpj8u.png')",
          aspectRatio: 'auto'
        }}>
        <img
          src="https://res.cloudinary.com/dvg7ourbo/image/upload/v1766038410/pnsp3_rcpj8u.png"
          alt="Promotion Background"
          className="w-full  invisible"
        />
        
      </div>
    </section>
  );
}