import Header from "../components/Header";

const NftPage: React.FC = () => {
    return (
        <div className="">
            <div id="header" className="flex flex-row-reverse bg-[#2B2B2B] h-[100px] items-center px-12 py-5">
                <Header />
            </div>
            <div className="bg-yellow-300">
                <div id="image" className="bg-[url('/src/assets/image-nft.png')] bg-cover bg-no-repeat bg-center min-w-full max-w-7xl min-h-[560px] max-h-[560px] min-h-auto">
                </div>
                <div id="content" className="bg-[#2B2B2B] px-10 py-7">
                    <div id="description-detail" className="flex flex-row justify-around">
                        <div id="column1" className="flex flex-col max-w-[605px] justify-self-center">
                            <div id="title" className="mb-[30px]">
                                <h2 className="font-workSans text-[51px] leading-[56px] font-semibold mb-2">The orbitians</h2>
                                <h2 className="font-workSans text-[22px] leading-[35px] text-[#858584]">Minted On Sep 30, 2022</h2>
                            </div>
                            <div id="author">
                                <h1 className="font-spaceMono text-[22px] leading-[35.2px] font-bold text-[#858584] mb-2">Created by</h1>
                                <div className="flex flex-row mb-[30px]">
                                    <p></p>
                                    <h2 className="font-workSans text-[22px] leading-[30.8px] font-semibold">Orbitian</h2>
                                </div>
                            </div>
                            <div id="description">
                                <h1 className="font-spaceMono text-[22px] leading-[35.2px] font-bold text-[#858584] mb-2">Description</h1>
                                <p className="font-workSans text-[16px] leading-[35px] mb-[30px]">
                                    The Orbitians
                                    is a collection of 10,000 unique NFTs on the Ethereum blockchain,
                                    
                                    There are all sorts of beings in the NFT Universe. The most advanced and friendly of the bunch are Orbitians.
                                    
                                    They live in a metal space machines, high up in the sky and only have one foot on Earth.
                                    These Orbitians are a peaceful race, but they have been at war with a group of invaders for many generations. The invaders are called Upside-Downs, because of their inverted bodies that live on the ground, yet do not know any other way to be. Upside-Downs believe that they will be able to win this war if they could only get an eye into Orbitian territory, so they've taken to make human beings their target.
                                </p>
                            </div>
                            <div id="details" className=" mb-[30px]">
                                <h1 className="font-spaceMono text-[22px] font-bold leading-[35.2px] text-[#858584]">Details</h1>
                                <p className="font-workSans text-[16px] leading-[35px]">View on etherscan</p>
                                <p className="font-workSans text-[16px] leading-[35px]">View original</p>
                            </div>
                        </div>
                        <div id="column2" className="">
                            <div id="auction-info" className="flex flex-col bg-[#3B3B3B] p-[30px] rounded-[20px] content-around">
                                <p className="font-spaceMono text-[12px] leading-[13.2px]">Auction end in:</p>
                                <div>
                                    <p className="font-spaceMono text-[38px] leading-[45.6px] font-bold">59 : 59 : 59</p>
                                </div>
                                <div>
                                    <p className=" h-[60px] max-w-[235px] min-w-full bg-[#A259FF] text-center rounded-[20px] font-workSans text-[16px] leading-[22.4px] font-semibold content-center">Place bid</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            {/* <div id="footer" className="bg-[#3B3B3B]">
                <div className="flex flex-row justify-around">
                    <div>
                        <p>NFT Market Place</p>
                        <p>NFT marketplace UI created with Anima for Figma.</p>
                        <p>Join our community</p>
                        <div className="flex flex-row">
                            <p>insta</p>
                            <p>X</p>
                            <p>ytb</p>
                        </div>
                    </div>
                    <div>
                        <p>Explore</p>
                        <p>Marketplace</p>
                        <p>Rankings</p>
                        <p>Connect Wallet</p>
                    </div>
                    <div>
                        <p>Join our weekly digest</p>
                        <p>Get exclusive promotions & updates straight to your inbox.</p>
                    </div>
                </div>
                <div className="bg-white w-2/3 h-[1px]"></div>
                <div>
                    Ⓒ NFT Market. Use this template freely.
                </div>
            </div> */}
        </div>
    );
}

export default NftPage;