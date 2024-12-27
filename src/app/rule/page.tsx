export default function Rule() {
    return (
        <>
            <div id="rule" className="relative h-screen bg-transparent text-black dark:text-white">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-4">
                    <div className="flex flex-col lg:flex-row justify-between lg:gap-20 max-w-7xl mx-auto">
                        <div className="w-full lg:w-2/3 flex flex-col">
                            <h2 data-aos="fade-up" data-aos-anchor-placement="center-bottom" className="mb-5 text-xl md:text-3xl lg:text-5xl font-bold text-neutral-800 dark:text-neutral-200 pt-7">
                                กฎของเซิร์ฟเวอร์ต่างๆ
                            </h2>
                            <h3 className="text-xs md:text-base lg:text-xl font-bold leading-relaxed overflow-y-auto max-h-[300px] lg:max-h-[500px] w-full pr-4 scrollbar-thin scrollbar-thumb-orange-500 scrollbar-track-orange-100 dark:scrollbar-track-orange-900 bg-orange-400/25 p-4 rounded-xl">
                                1.ห้ามผู้เล่นสร้างความวุนวายภายในเซิร์ฟเวอร์ทุกกรณี<br /><br />

                                2.ห้ามใช้ถอยคำ ดูหมิ่น,เหยียด,ข่มขู่,ขัดขื่นใจ,ว่าร้าย ในทางที่โจมตีผู้อื่นที่ทำให้เสียความรู้สึก<br /><br />

                                3.ห้ามอ้างตนและแสดงตนเป็นเจ้าหน้าที่หรือแอดมินที่ดูแลเซิร์ฟเวอร์โดยเด็ดขาด<br /><br />

                                4.ห้ามสร้างสิ่งปลูกสร้างทุกชนิดที่หวังทำลายระบบของเซิร์ฟเวอร์<br /><br />

                                5.ห้ามทำระบบฟาร์มขนาดใหญ่เกินจำเป็นและการทำวงจรวนลูป ทุกชนิด (ตรวจเจอมีสิทธิโดนแบน)<br /><br />

                                6.ห้ามก่อกวนผู้เล่นคนอื่นไม่ว่าจะ เกรียน ใดๆก็ตาม<br /><br />

                                7.ห้ามสร้างที่อยู่อาศัยแบบลอยฟ้าโดยเด็ดขาด ยกเว้นแต่จะมีหลักการสร้างเช่นการวางเส้าค้ำ (พบเห็นแอดมินจะทำการลบทิ้งโดยทันที)<br /><br />

                                8.ห้ามใช้บัคหรือข้อผิดพลาดของเซิร์ฟเวอร์เพื่อแสว่งหาผลประโยชน์ทุกชนิด<br /><br />

                                9.ห้ามซื้อขายไอเทมใดๆนอกเกมส์ที่ใช้เงินจริงในการแลกเปลี่ยนซื้อขาย<br /><br />

                                10.ห้ามใช้ โปรแกรมอัตโนมัติ ในการเล่นทุกชนิด (พบเจอแบน)<br /><br />

                                11.ห้ามโปรโมทร้านค้าหรือสื่อต่างๆไม่ว่าจะเซิร์ฟเวอร์อื่นๆใดๆก็ตามในพื้นที่เซิร์ฟเวอร์ของเราที่เราไม่ได้อนุญาตให้ทำ<br /><br />

                                12.ห้าม ใช้คำหยาบคายในแชทและสร้างความก่อกวนในแชทโลก<br /><br />

                                13.ห้ามสแปมข้อความก่อกวนแอดมินและผู้เล่นคนอื่นๆในพื้นที่ของเซิร์ฟเวอร์<br /><br />

                                14. ห้ามเผยแพร่ข้อมูลที่เป็นอนาจารบนพื้นที่เซิร์ฟเวอร์ของเรา<br /><br />

                                15 ห้ามสร้างความแตกแยกกัน (หากมีปัญหาติดต่อแอดมินเพื่อทำการไกล่เกลี่ยและเจรจา)<br /><br />
                            </h3>
                        </div>
                        <div className="w-full lg:w-1/3 mt-6 lg:mt-0">
                            <h2 className="text-xs md:text-base lg:text-xl font-bold leading-relaxed bg-orange-400/25 p-6 rounded-xl">
                                <div className="text-lg md:text-2xl lg:text-3xl mb-4 text-orange-600 dark:text-orange-400">บทลงโทษภายในเซิร์ฟเวอร์</div>

                                <div className="space-y-4">
                                    <div className="flex items-start space-x-2">
                                        <span className="text-orange-500">1.</span>
                                        <p>ตักเตือนผู้เล่น 1-2 ครั้ง เมื่อผู้เล่นกระทำผิดใดๆก็ตาม</p>
                                    </div>

                                    <div className="flex items-start space-x-2">
                                        <span className="text-orange-500">2.</span>
                                        <p>แอดมินบังคับใช้คำสั่ง jail 30 นาที จนถึง 2 ชั่วโมง</p>
                                    </div>

                                    <div className="flex items-start space-x-2">
                                        <span className="text-orange-500">3.</span>
                                        <p>บังคับแบนทันทีตัดสิทธิการเข้าเล่นของผู้เล่นคนนั้น ถาวร</p>
                                    </div>

                                    <div className="flex items-start space-x-2">
                                        <span className="text-orange-500">4.</span>
                                        <p>ร้ายแรงสุด ลบไอดีผู้เล่น ที่กระทำผิดคนนั้นออกจากระบบของเรา</p>
                                    </div>
                                </div>

                                <div className="mt-8 pt-4 border-t border-orange-300 dark:border-orange-700">
                                    <div className="text-lg md:text-xl lg:text-2xl mb-3 text-orange-600 dark:text-orange-400">นโยบายการซื้อสินค้าและการเติมเงิน</div>
                                    <p className="text-sm md:text-base">
                                        ทางเราไม่มีนโยบายคืนเงินให้กับผู้เล่นทุกกรณี เมื่อผู้เล่นเติมเงินเข้าสู่ระบบ ผู้เล่นจะได้รับเงินเป็นพ้อยที่จะทำไปแลกซื้อสินค้าที่ต้องการได้ทันที
                                    </p>
                                </div>
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};