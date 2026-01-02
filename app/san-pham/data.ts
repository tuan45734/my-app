// app/san-pham/data.ts
export interface SanPham {
  id: number;
  ten: string;
  danhMuc: string;
  hinhAnh: string;
  hot: boolean;
}

export const sanPhams: SanPham[] = [
  {
    id: 111,
    ten: 'Tăm cay 5k',
    danhMuc: 'Bim bim gói 5k',
    hinhAnh: 'https://res.cloudinary.com/dvg7ourbo/image/upload/v1766472895/tc_tu92z9.png',
    hot: true
  }, {
    id: 6,
    ten: 'Đùi gà rong biển',
    danhMuc: 'Bim bim gói 5k',
    hinhAnh: 'https://res.cloudinary.com/dvg7ourbo/image/upload/v1766454096/rb6_w1gpnv.png',
    hot: true
  }, {
    id: 10,
    ten: 'Nem nướng',
    danhMuc: 'Snack ướt',
    hinhAnh: 'https://res.cloudinary.com/dvg7ourbo/image/upload/v1766454481/nn6_jepdhz.png',
    hot: true
  }, {
    id: 22,
    ten: 'Chân gà rút xương tê cay',
    danhMuc: 'Chân gà',
    hinhAnh: 'https://res.cloudinary.com/dvg7ourbo/image/upload/v1766454470/cgtcrx1_r97qyg.png',
    hot: true
  }, {
    id: 5,
    ten: 'Mái tôn',
    danhMuc: 'Bim bim gói 5k',
    hinhAnh: 'https://res.cloudinary.com/dvg7ourbo/image/upload/v1766454481/mt6_oukleo.png',
    hot: true
  }, {
    id: 1,
    ten: 'Tăm cay vị tiêu đen',
    danhMuc: 'Bim bim gói 5k',
    hinhAnh: 'https://res.cloudinary.com/dvg7ourbo/image/upload/v1766454488/tctd6_tyced5.png',
    hot: false
  }, {
    id: 122,
    ten: 'Chịu',
    danhMuc: 'Bim bim gói 5k',
    hinhAnh: 'https://res.cloudinary.com/dvg7ourbo/image/upload/v1766472894/chiu_jb6xve.png',
    hot: false
  }, {
    id: 123,
    ten: 'Đùi gà phô mai ngô',
    danhMuc: 'Bim bim gói 5k',
    hinhAnh: 'https://res.cloudinary.com/dvg7ourbo/image/upload/v1766472895/dgpmg_anmilw.png',
    hot: false
  }, {
    id: 124,
    ten: 'Tăm cay lạc hồng 2',
    danhMuc: 'Bim bim gói 5k',
    hinhAnh: 'https://res.cloudinary.com/dvg7ourbo/image/upload/v1766472894/tclh2_ceyaij.png',
    hot: false
  }, {
    id: 2,
    ten: 'Chân gà có xương tê cay',
    danhMuc: 'Chân gà',
    hinhAnh: 'https://res.cloudinary.com/dvg7ourbo/image/upload/v1766454470/cgcxtc1_cf4xvn.png',
    hot: false
  }, {
    id: 3,
    ten: 'Chân gà xả tắc',
    danhMuc: 'Chân gà',
    hinhAnh: 'https://res.cloudinary.com/dvg7ourbo/image/upload/v1766454470/cgst1_kzs2hx.png',
    hot: false
  }, {
    id: 4,
    ten: 'Tăm cay 10k',
    danhMuc: 'Bim bim gói 10k',
    hinhAnh: 'https://res.cloudinary.com/dvg7ourbo/image/upload/v1766454488/tc10_qarkkk.png',
    hot: false
  }, {
    id: 50,
    ten: 'Đùi gà mix 7 vị',
    danhMuc: 'Bim bim gói 10k',
    hinhAnh: 'https://res.cloudinary.com/dvg7ourbo/image/upload/v1766454471/dgm7v6_mypvsj.png',
    hot: false
  }, {
    id: 7,
    ten: 'Đùi gà phô mai',
    danhMuc: 'Bim bim gói 5k',
    hinhAnh: 'https://res.cloudinary.com/dvg7ourbo/image/upload/v1766454471/dgpm6_qrmega.png',
    hot: false
  }, {
    id: 66,
    ten: 'Mái bờ lô',
    danhMuc: 'Bim bim gói 5k',
    hinhAnh: 'https://res.cloudinary.com/dvg7ourbo/image/upload/v1766454470/bl22_i2mgrl.png',
    hot: false
  }, {
    id: 67,
    ten: 'Đùi gà bơ sữa',
    danhMuc: 'Bim bim gói 5k',
    hinhAnh: 'https://res.cloudinary.com/dvg7ourbo/image/upload/v1766454471/dgbs22_mk0klu.png',
    hot: false
  }, {
    id: 68,
    ten: 'Đùi gà tê cay',
    danhMuc: 'Bim bim gói 5k',
    hinhAnh: 'https://res.cloudinary.com/dvg7ourbo/image/upload/v1766454471/dgtc22_hbytyn.png',
    hot: false
  }, {
    id: 69,
    ten: 'Mái ngói',
    danhMuc: 'Bim bim gói 5k',
    hinhAnh: 'https://res.cloudinary.com/dvg7ourbo/image/upload/v1766454481/mn22_t1z4aa.png',
    hot: false
  }, {
    id: 70,
    ten: 'Tam thể',
    danhMuc: 'Bim bim gói 10k',
    hinhAnh: 'https://res.cloudinary.com/dvg7ourbo/image/upload/v1766454488/tt22_hhmy9n.png',
    hot: false
  }, {
    id: 71,
    ten: 'Tăm cay lạc hồng 1',
    danhMuc: 'Bim bim gói 5k',
    hinhAnh: 'https://res.cloudinary.com/dvg7ourbo/image/upload/v1766454481/lh1_he5016.png',
    hot: false
  }, {
    id: 9,
    ten: 'Bò KoBe',
    danhMuc: 'Snack ướt',
    hinhAnh: 'https://res.cloudinary.com/dvg7ourbo/image/upload/v1766454470/bkb22_gyvtbi.png',
    hot: false
  }, {
    id: 8,
    ten: 'Sashimi',
    danhMuc: 'Snack ướt',
    hinhAnh: 'https://res.cloudinary.com/dvg7ourbo/image/upload/v1766454487/ssm6_gn0aso.png',
    hot: false
  }, {
    id: 11,
    ten: 'Cột điện',
    danhMuc: 'Snack ướt',
    hinhAnh: 'https://res.cloudinary.com/dvg7ourbo/image/upload/v1766454470/cd6_myfnbi.png',
    hot: false
  }, {
    id: 88,
    ten: 'Bìa cát tông',
    danhMuc: 'Snack ướt',
    hinhAnh: 'https://res.cloudinary.com/dvg7ourbo/image/upload/v1766454470/bct6_pnv7sg.png',
    hot: false
  }, {
    id: 100,
    ten: 'Gân rồng hấp sả',
    danhMuc: 'Snack ướt',
    hinhAnh: 'https://res.cloudinary.com/dvg7ourbo/image/upload/v1766454471/grhx22_znxdio.png',
    hot: false
  }, {
    id: 21,
    ten: 'Hũ tăm cay',
    danhMuc: 'Bim bim hũ',
    hinhAnh: 'https://res.cloudinary.com/dvg7ourbo/image/upload/v1766454473/htcbt1_am7gex.png',
    hot: false
  }, {
    id: 20,
    ten: 'Hũ mái tôn',
    danhMuc: 'Bim bim hũ',
    hinhAnh: 'https://res.cloudinary.com/dvg7ourbo/image/upload/v1766454473/hmt1_vdxsrr.png',
    hot: false
  }, {
    id: 34,
    ten: 'Hũ mái ngói',
    danhMuc: 'Bim bim hũ',
    hinhAnh: 'https://res.cloudinary.com/dvg7ourbo/image/upload/v1766454472/hmg6_jzkemc.png',
    hot: false
  }, {
    id: 19,
    ten: 'Hũ đùi gà rong biển',
    danhMuc: 'Bim bim hũ',
    hinhAnh: 'https://res.cloudinary.com/dvg7ourbo/image/upload/v1766454472/hdgrb1_pxmavc.png',
    hot: false
  }, {
    id: 35,
    ten: 'Hũ đùi gà phô mai',
    danhMuc: 'Bim bim hũ',
    hinhAnh: 'https://res.cloudinary.com/dvg7ourbo/image/upload/v1766454472/hdgpm22_ajhctz.png',
    hot: false
  }, {
    id: 17,
    ten: 'Hũ tăm cay vị tiêu đen',
    danhMuc: 'Bim bim hũ',
    hinhAnh: 'https://res.cloudinary.com/dvg7ourbo/image/upload/v1766454481/htcvtd1_ovqjmz.png',
    hot: false
  }, {
    id: 18,
    ten: 'Hũ tăm cay lạc hồng 2',
    danhMuc: 'Bim bim hũ',
    hinhAnh: 'https://res.cloudinary.com/dvg7ourbo/image/upload/v1766454473/htclh1_qfip5s.png',
    hot: false
  }, {
    id: 29,
    ten: 'Hũ tăm cay lạc hồng 1',
    danhMuc: 'Bim bim hũ',
    hinhAnh: 'https://res.cloudinary.com/dvg7ourbo/image/upload/v1766454473/htclh26_rd3wil.png',
    hot: false
  }, {
    id: 30,
    ten: 'Hũ chịu',
    danhMuc: 'Bim bim hũ',
    hinhAnh: 'https://res.cloudinary.com/dvg7ourbo/image/upload/v1766454472/hc6_grcxzq.png',
    hot: false
  }, {
    id: 31,
    ten: 'Hũ đùi gà bơ sữa',
    danhMuc: 'Bim bim hũ',
    hinhAnh: 'https://res.cloudinary.com/dvg7ourbo/image/upload/v1766454472/hdgbs6_pyp9tx.png',
    hot: false
  }, {
    id: 32,
    ten: 'Hũ đùi gà mix 7 vị',
    danhMuc: 'Bim bim hũ',
    hinhAnh: 'https://res.cloudinary.com/dvg7ourbo/image/upload/v1766454472/hdgm7v6_jwvejq.png',
    hot: false
  }, {
    id: 33,
    ten: 'Hũ đùi gà tê cay',
    danhMuc: 'Bim bim hũ',
    hinhAnh: 'https://res.cloudinary.com/dvg7ourbo/image/upload/v1766454472/hdgtc6_y02jz2.png',
    hot: false
  }, {
    id: 130,
    ten: 'Hũ đùi gà phô mai ngô',
    danhMuc: 'Bim bim hũ',
    hinhAnh: 'https://res.cloudinary.com/dvg7ourbo/image/upload/v1766472894/dgpmgg_ukkqi4.png',
    hot: false
  }, {
    id: 131,
    ten: 'Hũ mái bờ lô',
    danhMuc: 'Bim bim hũ',
    hinhAnh: 'https://res.cloudinary.com/dvg7ourbo/image/upload/v1766472895/hmbl_zp2gbi.png',
    hot: false
  }, {
    id: 27,
    ten: 'Sốt Bà Tuyết 10k',
    danhMuc: 'Nước sốt',
    hinhAnh: 'https://res.cloudinary.com/dvg7ourbo/image/upload/v1766454482/s6_poc5m0.png',
    hot: false
  }, {
    id: 28,
    ten: 'Sốt Bà Tuyết vị hải sản',
    danhMuc: 'Nước sốt',
    hinhAnh: 'https://res.cloudinary.com/dvg7ourbo/image/upload/v1766454487/shs6_nwkftm.png',
    hot: false
  },{
    id: 222,
    ten: 'Sốt Bà Tuyết vị chua ngọt',
    danhMuc: 'Nước sốt',
    hinhAnh: 'https://res.cloudinary.com/dvg7ourbo/image/upload/v1766567950/GoiSot_xiuccd.png',
    hot: false
  },{
    id: 223,
    ten: 'Sốt Bà Tuyết 30k',
    danhMuc: 'Nước sốt',
    hinhAnh: 'https://res.cloudinary.com/dvg7ourbo/image/upload/v1766569172/sot30k_yghbjl.png',
    hot: false
  }
  
];