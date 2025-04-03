import React from "react";
import Image from 'next/image'

const BentoPage = () => {
    return (
        <div className="flex min-h-screen w-full justify-center bg-gray-100 p-4">
            <div className="w-full max-w-[1000px] h-full flex">
                {/* Changed grid structure to reorder boxes */}
                <div className="grid h-full w-full grid-cols-4 grid-rows-12 md:grid-cols-8 md:grid-rows-10 gap-3 md:gap-4 p-4 md:p-10 lg:p-20">
                    {/* Box 2 - Main Title - Now first on mobile */}
                    <div className="bg-[#7651DC] col-span-4 row-span-3 md:col-span-4 md:row-span-4 md:order-2 rounded-xl shadow-lg">
                        <div className="text-white text-3xl md:text-3xl flex flex-col items-center justify-center h-full w-full p-4 text-center">
                            <h1>
                                Social Media <span className="text-[#FFCC69]">10x</span>
                            </h1>
                            <h1>
                                <span className="italic">Faster </span>with AI
                            </h1>
                            <Image
                                src="/assets/images/illustration-five-stars.webp"
                                width={100}
                                height={100}
                                alt=""
                                className="mt-2 md:mt-3 mb-1 w-[100px] md:w-[120px]"
                            />
                            <p className="text-[12px] md:text-[12px] font-light">
                                Over 4,000 5-star review
                            </p>
                        </div>
                    </div>

                    {/* Box 1 - Moved after main title on mobile */}
                    <div className="bg-[#FAEEE2] italic text-2xl md:text-2xl col-span-4 md:col-span-2 row-span-3 md:row-span-5 md:order-1 rounded-xl shadow-lg p-4 md:p-5">
                        <div className="w-full h-full flex flex-col items-center justify-center ">
                            <div className="">
                                <p className="text-black  not-italic">Create and <br /> schedule<br /> content</p>
                                <p className=" text-[#7651DC] ">quicker.</p>
                            </div>
                            <img
                                src="assets/images/illustration-create-post.webp"
                                alt=""
                                className="mt-3 md:mt-5 w-full h-auto max-h-[120px] md:max-h-[180px] object-contain"
                            />
                        </div>
                    </div>

                    {/* Box 3 */}
                    <div className="bg-[#DCD1FC] col-span-4 md:col-span-2 row-span-4 md:row-span-7 md:order-3 rounded-xl shadow-lg overflow-hidden">
                        <div className="text-black text-2xl md:text-2xl flex flex-col items-center justify-center h-full w-full p-4 text-center">
                            <h1 className="leading-5 md:leading-5">
                                Schedule to <br />
                                social media.
                            </h1>
                            <Image
                                src="/assets/images/illustration-schedule-posts.webp"
                                width={280}
                                height={280}
                                alt=""
                                className="my-2 md:my-4 w-full h-auto max-h-[280px] md:max-h-[280px] object-contain"
                            />
                            <p className="text-[18px] md:text-[12px] font-light">
                                Optimize post timings <br />
                                to publish content at <br />
                                the perfect time for <br />
                                your audience.
                            </p>
                        </div>
                    </div>

                    {/* Box 4 */}
                    <div className="bg-white col-span-2 row-span-2 md:row-span-3 md:order-4 rounded-xl shadow-lg">
                        <div className="w-full h-full flex flex-col items-center justify-center overflow-hidden p-3 md:p-4 text-center">
                            <Image
                                src="/assets/images/illustration-multiple-platforms.webp"
                                width={200}
                                height={200}
                                alt=""
                                className="mt-2 md:mt-5 w-[90%] h-auto"
                            />
                            <p className="text-lg md:text-2xl mt-2 md:mt-5 leading-5">
                                Manage <br />
                                multiple<br />
                                account and <br />
                                platforms.
                            </p>
                        </div>
                    </div>

                    {/* Box 5 */}
                    <div className="bg-[#FFCC69] col-span-2 row-span-2 md:row-span-3 md:order-5 rounded-xl shadow-lg">
                        <div className="w-full h-full flex flex-col items-center justify-center p-3 md:p-5 text-center">
                            <p className="text-lg md:text-2xl mt-2 md:mt-5 leading-5">
                                Maintain <br />
                                consistent<br />
                                posting<br />
                                schedule.
                            </p>
                            <Image
                                src="/assets/images/illustration-consistent-schedule.webp"
                                width={200}
                                height={200}
                                alt=""
                                className="mt-2 md:mt-5 w-[90%] h-auto"
                            />
                        </div>
                    </div>

                    {/* Box 6 */}
                    <div className="bg-[#FFCC69] col-span-4 md:col-span-2 row-span-3 md:row-span-5 md:order-6 rounded-xl shadow-lg">
                        <div className="w-full h-full flex flex-col items-center justify-center p-3 md:p-5 text-center">
                            <h1 className="text-2xl md:text-3xl leading-5 md:leading-6">
                                Write your<br />
                                content<br />
                                using AI.
                            </h1>
                            <Image
                                src="/assets/images/illustration-ai-content.webp"
                                width={200}
                                height={200}
                                alt=""
                                className="mt-5 md:mt-10 w-full h-auto max-h-[180px] object-contain"
                            />
                        </div>
                    </div>

                    {/* Box 7 */}
                    <div className="bg-white col-span-2 md:col-span-2  row-span-2 md:row-span-3 md:order-7 rounded-xl shadow-lg">
                        <div className="w-full h-full flex flex-col items-center justify-center p-3 md:p-5 text-center">
                            <h1 className="text-3xl md:text-5xl font-medium">
                                {">56%"}
                            </h1>
                            <p className="text-[10px] md:text-[12px] my-1 md:my-2">
                                faster audience growth
                            </p>
                            <Image
                                src="/assets/images/illustration-audience-growth.webp"
                                width={100}
                                height={100}
                                alt=""
                                className="mt-2 md:mt-3 mb-1 w-[80px] md:w-[120px]"
                            />
                        </div>
                    </div>

                    {/* Box 8 */}
                    <div className="bg-[#7651DC] col-span-4 row-span-3 md:order-8 rounded-xl shadow-lg">
                        <div className="w-full h-full p-3 md:p-5 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 text-center md:text-left">
                            <Image
                                src="/assets/images/illustration-grow-followers.webp"
                                width={150}
                                height={150}
                                alt=""
                                className="w-[120px] md:w-[200px] h-auto"
                            />
                            <p className="text-xl md:text-2xl text-white leading-5">
                                Grow followers <br />
                                with non-stop<br />
                                content.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BentoPage;