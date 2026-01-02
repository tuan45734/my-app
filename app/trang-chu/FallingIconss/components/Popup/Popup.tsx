import {  useEffect } from 'react';
import { ECOMMERCE_PLATFORMS } from '../../constants';


interface PopupProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function Popup({ isOpen, onClose }: PopupProps) {
   

    useEffect(() => {
        if (!isOpen) return;
 }, [isOpen]);

   

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
           
            <div
                className="absolute inset-0 bg-black/50 pointer-events-auto"
                onClick={onClose}
            />
            <div className="relative pointer-events-auto animate-scale-in max-w-md w-full">

                <div className="bg-gradient-to-br from-white to-orange-50 rounded-2xl shadow-2xl overflow-hidden border-2 border-orange-200">

                    <div className="p-6">
                        <div className="text-center mb-6">
                            <p className="text-gray-700 mb-4">
                                <span className="font-semibold text-red-600">BẠN MAY MẮN</span> đã trúng
                                <span className="font-bold text-orange-600"> 1 SUẤT ƯU ĐÃI </span>
                                từ Ăn Cùng Bà Tuyết
                            </p>
                        </div>

                        <div className="text-center mb-4">
                            <div className="text-sm font-semibold text-gray-700 mb-3">
                                👇 NHẤN NGAY VÀO SÀN DƯỚI ĐÂY ĐỂ NHẬN QUÀ
                            </div>
                        </div>

                        <div className="space-y-4 mb-6">
                            {ECOMMERCE_PLATFORMS.map((platform, index) => {
                                return (
                                    <a
                                        key={platform.name}
                                        href={platform.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`
                                           block relative overflow-hidden rounded-xl bg-gradient-to-r ${index === 0
                                                ? 'from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600'
                                                : index === 1
                                                    ? 'from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600'
                                                    : 'from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600'
                                            }
                                           text-white  transition-all duration-300 transformgroup
                                            `}
                                    >


                                        <div className="p-4">
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-3">
                                                    <div className="text-left">
                                                        <div className="font-bold text-lg">{platform.name}</div>
                                                        <div className="text-white/80 text-sm flex items-center gap-1">
                                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                                            </svg>
                                                            Nhận ưu đãi ngay
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                                    </a>
                                );
                            })}
                        </div>

                        <div className="mt-6 pt-4 border-t border-orange-200">
                            <div className="text-center">
                                <div className="flex items-center justify-center gap-3 md:gap-6">
                                    <div className="flex-1 max-w-[160px] md:max-w-none">
                                        <div className="p-2 md:p-3 bg-blue-50 rounded-lg border border-blue-200">
                                            <div className="text-center">
                                                <p className="text-xs md:text-sm font-medium text-gray-600 mb-1">Liên hệ Zalo</p>
                                                <a
                                                    href="tel:0989852948"
                                                    className="text-sm md:text-lg font-bold text-orange-600 hover:text-blue-700 transition-colors block"
                                                >
                                                    0989 852 948
                                                </a>
                                                <p className="text-xs md:text-sm font-medium text-gray-600 mt-2 mb-1">Liên hệ Facebook</p>
                                                <a
                                                    href="https://www.facebook.com/ancungbatuyet"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-xs md:text-sm font-semibold text-orange-600 hover:text-blue-700 transition-colors inline-flex items-center justify-center gap-1"
                                                >
                                                    Ăn Cùng Bà Tuyết
                                                    <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex-1 max-w-[100px] md:max-w-none">
                                        <div className="p-1 md:p-2 bg-white rounded-lg border border-gray-300">
                                            <img
                                                src="https://res.cloudinary.com/dvg7ourbo/image/upload/v1766454522/qrfb1_duxlft.png"
                                                alt="QR Code Facebook Ăn Cùng Bà Tuyết"
                                                className="w-full h-auto max-w-[80px] md:max-w-[100px] mx-auto"
                                            />
                                            <p className="text-[10px] md:text-xs text-gray-500 mt-1 text-center">
                                                Quét mã QR
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="text-center mt-6">
                            <button
                                onClick={onClose}
                                className="text-gray-400 hover:text-orange-600 text-sm transition-colors inline-flex items-center gap-1"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                                Tôi muốn xem sau
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}