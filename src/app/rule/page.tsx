export default function Rule() {
    const rules = [
        "ห้ามผู้เล่นสร้างความวุนวายภายในเซิร์ฟเวอร์ทุกกรณี",
        "ห้ามใช้ถอยคำ ดูหมิ่น,เหยียด,ข่มขู่,ขัดขื่นใจ,ว่าร้าย ในทางที่โจมตีผู้อื่นที่ทำให้เสียความรู้สึก",
        "ห้ามอ้างตนและแสดงตนเป็นเจ้าหน้าที่หรือแอดมินที่ดูแลเซิร์ฟเวอร์โดยเด็ดขาด",
        "ห้ามสร้างสิ่งปลูกสร้างทุกชนิดที่หวังทำลายระบบของเซิร์ฟเวอร์",
        "ห้ามทำระบบฟาร์มขนาดใหญ่เกินจำเป็นและการทำวงจรวนลูป ทุกชนิด (ตรวจเจอมีสิทธิโดนแบน)",
        "ห้ามก่อกวนผู้เล่นคนอื่นไม่ว่าจะ เกรียน ใดๆก็ตาม",
        "ห้ามสร้างที่อยู่อาศัยแบบลอยฟ้าโดยเด็ดขาด ยกเว้นแต่จะมีหลักการสร้างเช่นการวางเส้าค้ำ (พบเห็นแอดมินจะทำการลบทิ้งโดยทันที)",
        "ห้ามใช้บัคหรือข้อผิดพลาดของเซิร์ฟเวอร์เพื่อแสว่งหาผลประโยชน์ทุกชนิด",
        "ห้ามซื้อขายไอเทมใดๆนอกเกมส์ที่ใช้เงินจริงในการแลกเปลี่ยนซื้อขาย",
        "ห้ามใช้ โปรแกรมอัตโนมัติ ในการเล่นทุกชนิด (พบเจอแบน)",
        "ห้ามโปรโมทร้านค้าหรือสื่อต่างๆไม่ว่าจะเซิร์ฟเวอร์อื่นๆใดๆก็ตามในพื้นที่เซิร์ฟเวอร์ของเราที่เราไม่ได้อนุญาตให้ทำ",
        "ห้าม ใช้คำหยาบคายในแชทและสร้างความก่อกวนในแชทโลก",
        "ห้ามสแปมข้อความก่อกวนแอดมินและผู้เล่นคนอื่นๆในพื้นที่ของเซิร์ฟเวอร์",
        "ห้ามเผยแพร่ข้อมูลที่เป็นอนาจารบนพื้นที่เซิร์ฟเวอร์ของเรา",
        "ห้ามสร้างความแตกแยกกัน (หากมีปัญหาติดต่อแอดมินเพื่อทำการไกล่เกลี่ยและเจรจา)"
    ];

    return (
        <div id="rule" className="relative min-h-screen py-20 text-black dark:text-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row justify-between gap-8 max-w-7xl mx-auto">
                    {/* Rules Section */}
                    <div className="w-full lg:w-2/3">
                        <h2
                            data-aos="fade-up"
                            data-cursor-scale="10"
                            className="text-2xl md:text-4xl lg:text-5xl font-bold mb-8 text-orange-600 dark:text-orange-400"
                        >
                            กฎของเซิร์ฟเวอร์
                        </h2>

                        <div
                            className="bg-white/80 dark:bg-black/40 rounded-2xl shadow-lg overflow-hidden"
                            data-aos="fade-up"
                            data-aos-delay="100"
                        >
                            <div className="max-h-[600px] overflow-y-auto">
                                <div className="p-6 space-y-4">
                                    {rules.map((rule, index) => (
                                        <div
                                            key={index}
                                            data-cursor-scale="6"
                                            className="flex gap-4 p-4 bg-orange-100/50 dark:bg-orange-950/30 rounded-xl
                                            hover:bg-orange-200/50 dark:hover:bg-orange-900/30 transition-colors"
                                        >
                                            <span className="text-orange-500 font-bold shrink-0">
                                                {index + 1}.
                                            </span>
                                            <p className="text-sm md:text-base">{rule}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Penalties Section */}
                    <div className="w-full lg:w-1/3">
                        <div
                            className="bg-white/80 dark:bg-black/40 backdrop-blur-sm rounded-2xl p-6 shadow-lg"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-orange-600 dark:text-orange-400" data-cursor-scale="10">
                                บทลงโทษภายในเซิร์ฟเวอร์
                            </h3>

                            <div className="space-y-4">
                                <div className="flex items-start space-x-2 p-3 bg-orange-100/50 dark:bg-orange-950/30 rounded-xl" data-cursor-scale="6">
                                    <span className="text-orange-500 font-bold">1.</span>
                                    <p>ตักเตือนผู้เล่น 1-2 ครั้ง เมื่อผู้เล่นกระทำผิดใดๆก็ตาม</p>
                                </div>

                                <div className="flex items-start space-x-2 p-3 bg-orange-100/50 dark:bg-orange-950/30 rounded-xl" data-cursor-scale="6">
                                    <span className="text-orange-500 font-bold">2.</span>
                                    <p>แอดมินบังคับใช้คำสั่ง jail 30 นาที จนถึง 2 ชั่วโมง</p>
                                </div>

                                <div className="flex items-start space-x-2 p-3 bg-orange-100/50 dark:bg-orange-950/30 rounded-xl" data-cursor-scale="6">
                                    <span className="text-orange-500 font-bold">3.</span>
                                    <p>บังคับแบนทันทีตัดสิทธิการเข้าเล่นของผู้เล่นคนนั้น ถาวร</p>
                                </div>

                                <div className="flex items-start space-x-2 p-3 bg-orange-100/50 dark:bg-orange-950/30 rounded-xl" data-cursor-scale="6">
                                    <span className="text-orange-500 font-bold">4.</span>
                                    <p>ร้ายแรงสุด ลบไอดีผู้เล่น ที่กระทำผิดคนนั้นออกจากระบบของเรา</p>
                                </div>
                            </div>

                            <div className="mt-8 pt-6 border-t border-orange-200 dark:border-orange-800">
                                <h3 className="text-xl md:text-2xl font-bold mb-4 text-orange-600 dark:text-orange-400" data-cursor-scale="6">
                                    นโยบายการซื้อสินค้าและการเติมเงิน
                                </h3>
                                <p className="text-sm md:text-base bg-orange-100/50 dark:bg-orange-950/30 p-4 rounded-xl" data-cursor-scale="6">
                                    ทางเราไม่มีนโยบายคืนเงินให้กับผู้เล่นทุกกรณี เมื่อผู้เล่นเติมเงินเข้าสู่ระบบ
                                    ผู้เล่นจะได้รับเงินเป็นพ้อยที่จะทำไปแลกซื้อสินค้าที่ต้องการได้ทันที
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
