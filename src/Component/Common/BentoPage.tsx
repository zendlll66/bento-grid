import React from "react";
import Image from 'next/image'
const BentoPage = () => {
    return (
        <div className="flex h-screen w-full justify-center bg-gray-100">
            {/* ทำให้รอบนอกเป็นสี่เหลี่ยมจัตุรัส */}
            <div className=" max-w-[1000px] max-h-[1000px] h-full w-full flex ">
                <div className="grid h-full  w-full grid-cols-1 grid-rows-1 md:grid-cols-8 md:grid-rows-10 gap-4 p-20">
                    <div className="bg-[#FAEEE2] -tracking-widest  italic  leading-6 text-2xl  text-[#7651DC]  col-span-2 row-span-5 rounded-xl shadow-lg p-5">
                        <div className="w-full h-full flex flex-col  justify-center  ">
                            <p className=" text-black not-italic">Create and <br /> schedule<br />  content</p> quicker.
                            <img src="assets/images/illustration-create-post.webp" alt="" className="mt-5" />
                        </div>
                    </div>
                    <div className="bg-[#7651DC] col-span-4 row-span-4 rounded-xl shadow-lg">
                        <div className="text-white text-3xl  flex justify-center items-center flex-col h-full w-full">
                            <h1 className=" ">
                                Social Media <span className="text-[#FFCC69]">10x</span>
                            </h1>
                            <h1>
                                <span className="italic">Faster </span>with AI
                            </h1>
                            <Image
                                src="/assets/images/illustration-five-stars.webp"
                                width={120}
                                height={120}
                                alt=""
                                className="mt-3 mb-1"
                            />
                            <p className="text-[12px] font-light">
                                Over 4,000 5-star review
                            </p>
                        </div>
                    </div>
                    <div className="bg-[#DCD1FC] col-span-2 row-span-7 rounded-xl shadow-lg overflow-hidden">
                        <div className="text-black text-2xl  flex ml-[40px] justify-center  flex-col h-full w-full ">
                            <h1 className="-tracking-wider leading-5 ">
                                Schedule to <br />
                                social media.
                            </h1>
                            <Image
                                src="/assets/images/illustration-schedule-posts.webp"
                                width={320}
                                height={320}
                                alt=""
                                className="my-4"
                            />
                            <p className="text-[12px] font-light">
                                Optimize post timings <br />
                                to publish content at <br />
                                the perfect time for <br />
                                toyr audience.
                            </p>
                        </div>
                    </div>
                    <div className="bg-white col-span-2 row-span-3 rounded-xl shadow-lg">
                        <div className="w-full h-full flex flex-col overflow-hidden relative">
                            <Image
                                src="/assets/images/illustration-multiple-platforms.webp"
                                width={250}
                                height={250}
                                alt=""
                                className="border-2 ml-[20px] mt-5"
                            />
                            <p className="text-2xl px-5   mt-5 -tracking-wider leading-5  ">
                                Manage <br />
                                multiple<br />
                                account and <br />
                                platforms.
                            </p>
                        </div>
                    </div>
                    <div className="bg-[#FFCC69] col-span-2 row-span-3 rounded-xl shadow-lg">
                        <div className="w-full h-full flex px-5 flex-col overflow-hidden relative">
                            <p className="text-2xl mt-5 -tracking-wider leading-5  ">
                                Maintain <br />
                                consistent<br />
                                posting<br />
                                schedule.
                            </p>
                            <Image
                                src="/assets/images/illustration-consistent-schedule.webp"
                                width={250}
                                height={250}
                                alt=""
                                className="border-2 mt-5"
                            />

                        </div>
                    </div>
                    <div className="bg-[#FFCC69] col-span-2 row-span-5 rounded-xl shadow-lg">
                        <div className="w-full h-full flex flex-col p-5 ">
                            <h1 className="text-3xl -tracking-widest leading-6">
                                Write your<br />
                                content<br />
                                using AI.
                            </h1>
                            <Image
                                src="/assets/images/illustration-ai-content.webp"
                                width={250}
                                height={250}
                                alt=""
                                className="mt-10 p-0"
                            />
                        </div>
                    </div>
                    <div className="bg-white col-span-2 row-span-3 rounded-xl shadow-lg">
                        <div className="w-full h-full flex flex-col p-5">
                            <h1 className="text-5xl font-medium ">
                                {">56%"}
                            </h1>
                            <p className="text-[12px] my-2">
                                faster audience growth
                            </p>
                            <Image
                                src="/assets/images/illustration-audience-growth.webp"
                                width={120}
                                height={120}
                                alt=""
                                className="mt-3 mb-1"
                            />
                        </div>
                    </div>
                    <div className="bg-[#7651DC] col-span-4 row-span-3 rounded-xl shadow-lg">
                        <div className="w-full h-full p-5 flex flex-rows  text-center overflow-hidden relative">
                            <Image
                                src="/assets/images/illustration-grow-followers.webp"
                                width={200}
                                height={200}
                                alt=""
                                className="border-2 "
                            />
                            <p className="text-2xl -tracking-wider self-center  text-white leading-5  ">
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
