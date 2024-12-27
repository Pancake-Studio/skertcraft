import Image from "next/image";


export default function Details() {
    return (
        <>
            <div id="howtoplay" className="relative h-screen bg-transparent">
                <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center w-full px-4 gap-4">
                    <div className="flex flex-col space-y-7 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-[40px]">
                        <div data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                            <Image
                                className="w-screen max-w-[300px] lg:max-w-[600px] rounded-xl border-2 border-dashed border-gray-800 dark:border-gray-400 lg:p-2"
                                src="/into-server.webp"
                                alt="Into Server"
                                width={1050}
                                height={959}
                            />
                        </div>
                        <div
                            className="flex items-center"
                            data-aos="fade-zoom-in"
                            data-aos-anchor-placement="center-bottom"
                        >
                            <div className=" flex-col-1">
                                <h2 className=" text-[20px] lg:text-[45px] font-bold text-black dark:text-white">
                                    สิ่งที่ต้องทำก่อนเข้าเซิร์ฟเวอร์
                                </h2>
                                <h2 className="text-[15px] lg:text-[25px] font-bold text-gray-500">
                                    เพื่อให้เซิร์ฟเวอร์แสดงผลได้อย่างถูกต้อง
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}