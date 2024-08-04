
export default function Partners() {

    return (
        <>
            <div className="w-full my-10">
            <div className="flex w-full justify-center">
      <img width="400" src="/img/bck4.png" />
      </div>
                <h1 className="py-7 animateHeader text-4xl font-extrabold text-center text-white">
                    <i className="fal fa-stars text-amber-400 mr-2" />
                    Ortaklar
                </h1>
            </div>

            <div className="lg:max-w-screen-lg mt-10 mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">

            <div className="flex flex-col justify-center text-white rounded">
            <a href="https://discord.com/oauth2/authorize?client_id=774043716797071371&permissions=277028620608&scope=bot%20applications.commands">
                        <div className="flex-1 gap-x-4 flex items-center bg-gradient-to-b from-neutral-900/80 to-neutral-900/20 p-3 rounded-full">
                            <img className="rounded-full h-32 w-32" src="https://cibot.vercel.app/img/logo2.png" />
                            <div>
                                <h1 className="leading-none text-3xl font-bold text-white">CiBot</h1>        
                                <div className="flex items-center mt-1">
                                    <p className="font-normal font-sm">
                                      Cibot ile sunucuna renk katmaya ne dersin?
                                    </p>
                                </div>     
                            </div>
                        </div>
                    </a>
                    </div>


                            <div className="flex flex-col justify-center text-white rounded">
            <a href="https://discord.gg/EtQHzyaGz2">
                        <div className="flex-1 gap-x-4 flex items-center bg-gradient-to-b from-neutral-900/80 to-neutral-900/20 p-3 rounded-full">
                            <img className="rounded-full h-32 w-32" src="https://cdn.discordapp.com/avatars/972564795846983750/1fa58b82346166119aea44b91ebf2397.png?size=256" />
                            <div>
                                <h1 className="leading-none text-3xl font-bold text-white">Ortaklık Anlaşması</h1>        
                                <div className="flex items-center mt-1">
                                    <p className="font-normal font-sm">
                                   Bizimle ortaklık kurmak istiyorsan discord sunucumuza katıl.
                                    </p>
                                </div>     
                            </div>
                        </div>
                    </a>
                    </div>

                </div>
                <div className="py-10"></div>
        </>
    );
};
