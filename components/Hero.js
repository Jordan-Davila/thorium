export default function Hero() {
    return (
        <section className="hero w-full bg-red-hero relative min-w-min">
            <img
                src="/assets/bg-texture.svg"
                alt=""
                className="multiply-blend object-cover w-full h-full absolute top-0 left-0 z-0"
            />
            <img src="/assets/icon-brand.svg" alt="" className="h-64 w-64 absolute -bottom-32 right-0 z-10" />
            <div className="hero-container max-w-sm sm:max-w-lg lg:max-w-6xl md:max-w-3xl mx-auto flex h-full relative">
                <div className="hero-header text-white w-full md:w-1/2 lg:w-1/2 relative z-10 py-32 flex flex-col justify-center">
                    <h1 className="font-domine text-6xl mb-8">
                        To bringing
                        <br />
                        people <i>together</i>.
                    </h1>
                    <p className="mb-8 w-3/4">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                        of type and scrambled it to make a type specimen book.
                    </p>
                    <a href="#" className="uppercase bg-mustard text-black px-16 py-4 rounded-md font-bold max-w-min">
                        Portfolio
                    </a>
                </div>
                <div className="hero-images w-1/2 h-full absolute right-0 justify-center items-center hidden md:flex">
                    <div className="yellow-block bg-mustard rounded-xl w-72 h-64 shadow-2xl absolute top-44 right-12"></div>
                    <div className="absolute w-96 h-52 rounded-xl overflow-hidden shadow-2xl top-10 right-22">
                        <img src="/assets/header-image1.png" alt="" className="w-full h-full object-cover" />
                    </div>
                    <div className="max-w-max absolute w-72 h-72 rounded-xl overflow-hidden shadow-2xl top-64 mt-2 right-0">
                        <img src="/assets/header-image2.png" alt="" className="w-full h-full object-cover" />
                    </div>
                </div>
            </div>
        </section>
    );
}
