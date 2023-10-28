import React from 'react';
import HeroCarousel from './HeroCarousel';
import Image from 'next/image';

const Banner = () => {
    return (
        <div>

            <section>
                <section className="px-6 md:px-20 py-24">
                    <div className="flex max-xl:flex-col gap-16">
                        <div className="flex flex-col justify-center">
                            <p className="small-text">
                                Smart Shopping Starts Here:
                                <Image
                                    src="/assets/icons/arrow-right.svg"
                                    alt="arrow-right"
                                    width={16}
                                    height={16}
                                />
                            </p>

                            <h1 className="head-text">
                                Unleash the Power of
                                <span className="text-red-600 "> PriceWise</span>
                            </h1>

                            <p className="mt-6">
                                Powerful, self-serve product and growth analytics to help you convert, engage, and retain more.
                            </p>

                            <input type="text" className='px-12 py-2 rounded-md border' />
                        </div>

                        <HeroCarousel />
                    </div>
                </section>

            </section>

            {/*  <section className="bg-gray-50">
                <div
                    className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center"
                >
                    <div className="mx-auto max-w-xl text-black text-center">
                        <h1 className="text-3xl font-extrabold sm:text-5xl">
                            Understand User Flow.
                            <strong className="font-extrabold text-yellow-700 sm:block">
                                Increase Conversion.
                            </strong>
                        </h1>

                        <p className="mt-4 sm:text-xl/relaxed">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo
                            tenetur fuga ducimus numquam ea!
                        </p>

                        <div className="mt-8 flex flex-wrap justify-center gap-4">
                            <a
                                className="block w-full rounded bg-yellow-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-yellow-700 focus:outline-none focus:ring active:bg-yellow-500 sm:w-auto"
                                href="/get-started"
                            >
                                Get Started
                            </a>

                            <a
                                className="block w-full rounded px-12 py-3 text-sm font-medium text-yellow-600 shadow hover:text-yellow-700 focus:outline-none focus:ring active:text-yellow-500 sm:w-auto"
                                href="/about"
                            >
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>
            </section> */}

        </div>
    );
};

export default Banner;