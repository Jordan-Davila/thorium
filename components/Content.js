export default function Content() {
    return (
        <section className="w-full relative">
            <div className="white-block-bg bg-white absolute top-0 left-0 w-3/4 h-full"></div>
            <div className="content-container max-w-sm sm:max-w-lg lg:max-w-6xl md:max-w-3xl mx-auto py-32 relative z-10 block items-center mb-4 lg:flex md:flex">
                <div className="content-image relative shadow-2xl mr-16 mb-16 sm:mb-12" style={{ width: "45%" }}>
                    <div className="yellow-shadow w-full h-full bg-mustard absolute top-2 right-2 rounded-lg z-0 shadow-2xl"></div>
                    <div className="image rounded-lg overflow-hidden w-full h-full relative z-10">
                        <img src="/assets/celebration.png" alt="" className="w-full h-full object-cover" />
                    </div>
                </div>
                <div className="content-info flex-1">
                    <h2 className="text-5xl font-domine filter drop-shadow mb-6">
                        Knowing the numbers
                        <br />
                        is never <i>enough</i>.
                    </h2>
                    <p className="leading-relaxed">
                        It's about understanding the opportunities and challenges behind the numbers — and planning for
                        a stronger future. What's the right product selection for your customers? Which tools and
                        information could make your business even more successful? At Southern Glazer's, we tailor our
                        services for each and every one of our customers. Because we know that when we come together,
                        there's always something to celebrate.
                    </p>
                </div>
            </div>
            <div className="content-links grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 max-w-sm sm:max-w-lg lg:max-w-6xl md:max-w-3xl mx-auto gap-24 relative z-10 pb-28">
                <div className="flex flex-col justify-center items-center">
                    <div className="circle w-52 h-52 rounded-full flex items-center justify-center bg-mint-julep mb-8 hover:shadow-2xl">
                        <img src="/assets/customers.svg" alt="" />
                    </div>
                    <h4 className="text-3xl font-domine mb-4">Customers</h4>
                    <a href="#" className="">
                        See our portfolio <i className="icons icon-chevron-right ml-2"></i>
                    </a>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <div className="circle w-52 h-52 rounded-full flex items-center justify-center bg-mint-julep mb-8 hover:shadow-2xl">
                        <img src="/assets/suppliers.svg" alt="" />
                    </div>
                    <h4 className="text-3xl font-domine mb-4">Suppliers</h4>
                    <a href="#" className="">
                        Work with us <i className="icons icon-chevron-right ml-2"></i>
                    </a>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <div className="circle w-52 h-52 rounded-full flex items-center justify-center bg-mint-julep mb-8 hover:shadow-2xl">
                        <img src="/assets/team.svg" alt="" />
                    </div>
                    <h4 className="text-3xl font-domine mb-4">Team</h4>
                    <a href="#" className="">
                        Sign in or apply <i className="icons icon-chevron-right ml-2"></i>
                    </a>
                </div>
            </div>
        </section>
    );
}
