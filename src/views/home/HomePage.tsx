import { PiDiscordLogoLight, PiInstagramLogoLight, PiTwitterLogoLight, PiYoutubeLogoLight } from 'react-icons/pi';
import { Box, Button, Card, Container, Spacer, Image, Divider } from '@chakra-ui/react'
import { MdOutlineRocketLaunch } from "react-icons/md";
import { FaDumpster, FaEye } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
import './HomePage.css'
import image0 from '../../assets/images/image-0.png'
import image1 from '../../assets/images/image-1.png'
import image2 from '../../assets/images/image-2.png'
import avatar0 from '../../assets/avatars/avatar-0.png'
import avatar12 from '../../assets/avatars/avatar-12.png'

interface IGridUser {
    name: string,
    avatar: string,
    price: number
};

interface IListUser {
    title: string,
    avatar: string,
    name: string,
    price: number,
    highestBid: number,
    image: string
}

const HomePage = () => {
    const mocketGridUser: IGridUser[] = [
        {
            name: 'Antoine',
            avatar: avatar0,
            price: 57.56
        },
        {
            name: 'Antoine',
            avatar: avatar0,
            price: 57.56
        },
        {
            name: 'Antoine',
            avatar: avatar0,
            price: 57.56
        },
        {
            name: 'Antoine',
            avatar: avatar0,
            price: 57.56
        },
        {
            name: 'Antoine',
            avatar: avatar0,
            price: 57.56
        },
        {
            name: 'Antoine',
            avatar: avatar0,
            price: 57.56
        },
        {
            name: 'Antoine',
            avatar: avatar0,
            price: 57.56
        },
        {
            name: 'Antoine',
            avatar: avatar0,
            price: 57.56
        },
        {
            name: 'Antoine',
            avatar: avatar0,
            price: 57.56
        },
        {
            name: 'Antoine',
            avatar: avatar0,
            price: 57.56
        },
        {
            name: 'Antoine',
            avatar: avatar0,
            price: 57.56
        },
        {
            name: 'Antoine',
            avatar: avatar0,
            price: 57.56
        },
        {
            name: 'Antoine',
            avatar: avatar0,
            price: 57.56
        },
        {
            name: 'Antoine',
            avatar: avatar0,
            price: 57.56
        },
        {
            name: 'Antoine',
            avatar: avatar0,
            price: 57.56
        },
        {
            name: 'Antoine',
            avatar: avatar0,
            price: 57.56
        },
    ];

    const mockedListUser: IListUser[] = [
        {
            title: 'Space Walking',
            avatar: avatar12,
            name: 'MoonDancer',
            price: 67.90,
            highestBid: 0.33,
            image: image0
        },
        {
            title: 'Space Walking',
            avatar: avatar12,
            name: 'MoonDancer',
            price: 67.90,
            highestBid: 0.33,
            image: image2,
        },
        {
            title: 'Space Walking',
            avatar: avatar12,
            name: 'MoonDancer',
            price: 67.90,
            highestBid: 0.33,
            image: image1
        },
    ];

    const getGridItem = (map: IGridUser[]) => {


        return (
            map.map((item, index) => {
                return (
                    <Box className='grid-item' backgroundColor='rgba(59, 59, 59, 1)'>
                        <div className='column-left-sided'>
                            <div className='row-centered'>
                                <Box boxSize={9} borderRadius='20px' backgroundColor='rgba(43, 43, 43, 1)' className='center'>
                                    {index + 1}
                                </Box>
                                <Spacer />
                            </div>
                            <div className='row-centered'>
                                <Spacer w={39} />
                                <Image borderRadius='60px' className='avatar' src={item.avatar} />
                            </div>
                            <div className='row-centered'>
                                <Spacer w={3} />
                                <div className='column-centered' style={{ marginTop: '10px', marginBottom: '10px', width: '180px' }}>
                                    <h4>{item.name}</h4>
                                    <div className='row-centered spaced'>
                                        <h6>Total Sales: </h6>
                                        <Spacer width={2} />
                                        <span className='price-text'>{item.price} ETH</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Box>
                );
            })
        );
    }

    const getListUser = (list: IListUser[]) => {
        return (
            list.map((item) => {
                return (
                    <Box className='column-centered'>
                        <Image w={330} h={300} borderRadius='10px 10px 0px 0px' src={item.image} fit={'cover'} />
                        <Card w={330} h={160} className='column-left-sided' backgroundColor='rgba(59, 59, 59, 1)'>
                            <Box margin='10px 0px 0px 35px'>
                                <h4 style={{ color: 'white' }}>{item.title}</h4>
                            </Box>
                            <div className='row-centered' style={{ margin: '0px 0px 0px 15px' }}>
                                <Box margin='0px 0px 0px 22px'>
                                    <Image borderRadius='20px' className='avatar-mini' src={item.avatar} />
                                </Box>
                                <span className='owner' style={{ margin: '0px 0px 0px 10px', color: 'white' }}>{item.name}</span>
                            </div>
                            <div className='row-centered' style={{ margin: '20px 0px 0px 30px' }}>
                                <div className='column-left-sided'>
                                    <h6>Price</h6>
                                    <span className='price-text' style={{ color: 'white' }}>{item.price} ETH</span>
                                </div>
                                <Spacer w={20} />
                                <div className='column-left-sided right-sided'>
                                    <h6>Highest Bid</h6>
                                    <span className='price-text' style={{ color: 'white' }}>{item.highestBid} wETH</span>
                                </div>
                            </div>
                        </Card>
                    </Box>
                );
            })
        );
    };

    return (
        <div className='column-centered'>
            <header className='row-centered' style={{ width: '100%', height: '100px'}}>
                <div className='container-left-block center' style={{ justifyContent: 'start' }}>
                    <div className='row-centered'>
                        <FaDumpster color='rgba(162, 89, 255, 1)' />
                        <Spacer w={2} />
                        <span>NFT Marketplace</span>
                    </div>
                </div>

                
                <div className='container-right-block center' style={{ justifyContent: 'end' }}>
                    <div className='row-centered' style={{ justifyContent: 'space-evenly' }}>
                        <div className='row-centered' style={{ margin: '0px 100px 0px 0px' }}>
                            <div>Marketplace</div>
                        </div>

                        <div className='row-centered' style={{ margin: '0px 100px 0px 0px' }}>
                            <div>Rankings</div>
                        </div>

                        <div className='row-centered' style={{ margin: '0px 100px 0px 0px' }}>
                            <div>Connect a wallet</div>
                        </div>

                        <Spacer w={150} />

                        <Button className='button' w={152} borderRadius={20} background='#A259FF' color='white' padding='0px 30px 0px 30px' _hover='none'>
                            <div className='row-centered'>
                                <FaRegUser />
                                <Spacer w={2} />
                                <span>Sign Up</span>
                            </div>
                        </Button>
                    </div>
                </div>


            </header>

            {/* Digital Art */}
            <Container height={800} minWidth='100%' className='container-block row-centered'>
                <div className='container-left-block center'>
                    <div className='column-left-sided'>
                        <Box width={510} height={222} margin='0px 0px 20px 0px'>
                            <h1>Discover Digital Art & Collect NFTs</h1>
                        </Box>

                        <Box width={510} height={105} margin='0px 0px 40px 0px'>
                            <h2>NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists.</h2>
                        </Box>
                        
                        <Button className='button' borderRadius={10} background='#A259FF' color='white' margin='0px 0px 40px 0px' _hover='none'>
                            <div className='row-centered'>
                                <MdOutlineRocketLaunch />
                                <Spacer w={2} />
                                <span>Get started</span>
                            </div>
                        </Button>
                        
                        <div className='row-centered'>
                            <Box w={150} h={39} className='container-left-block'>
                                <div className='column-left-sided'>
                                    <h3>240k+</h3>
                                    <h2>Total Sale</h2>
                                </div>
                            </Box>
                            <Box w={150} h={39} className='container-left-block'>
                                <div className='column-left-sided'>
                                    <h3>100k+</h3>
                                    <h2>Aunctions</h2>
                                </div>
                            </Box>
                            <Box w={150} h={39} className='container-left-block'>
                                <div className='column-left-sided'>
                                    <h3>240k+</h3>
                                    <h2>Artists</h2>
                                </div>
                            </Box>
                        </div>
                    </div>
                </div>
                
                <div className='container-right-block center' style={{ justifyContent: 'end' }}>
                    <div className='column-centered'>
                        <Image w={510} h={401} borderRadius='10px 10px 0px 0px' src={image0} fit={'cover'} />
                        <Card width={510} height={109} className='column-left-sided' backgroundColor='rgba(59, 59, 59, 1)'>
                            <Box margin='10px 0px 10px 15px'>
                                <h4 style={{ color: 'white' }}>Space walking</h4>
                            </Box>
                            <div className='row-centered'>
                                <Box margin='0px 0px 0px 15px'>
                                    <Image borderRadius='20px' className='avatar-mini-plus' src={avatar0} />
                                </Box>
                                    <Spacer w={3} />
                                    <span className='owner' style={{ color: 'white' }}>Animakid</span>
                            </div>
                        </Card>
                    </div>
                </div>
            </Container>

            {/* Top Creators */}
            <Container height={650} minWidth='100%' className='container-block row-centered' style={{ margin: '0px 0px 430px 0px' }}>
                <div className='container-block'>
                    <div className='row-centered'>
                            <div className='container-left-block center'>
                                <div className='column-left-sided'>
                                    <h5>Top Creators</h5>
                                    <h2>Checkout Top Rated Creators on the NFT Marketplace</h2>
                                </div>
                            </div>
                            <div className='container-right-block'>
                                <div className='right-sided'>
                                    <Spacer height={20} />
                                    <Button className='button' background='transparent' border='2px' borderRadius={10} borderColor='#A259FF' color='white' _hover='none'>
                                        <div className='row-centered'>
                                            <MdOutlineRocketLaunch color='rgba(162, 89, 255, 1)' />
                                            <Spacer w={3} />
                                            <span>View Rankings</span>
                                        </div>
                                    </Button>
                                </div>
                            </div>
                        </div>

                    <Spacer height={10} />

                    <div className='column-centered'>
                        <div className='four-grid-container scrollable' style={{ height: '850px', margin: '0px 0px 0px 200px' }}>
                        { getGridItem(mocketGridUser) }
                        </div>
                    </div>
                </div>
            </Container>


            {/* Discover more nfts */}
            <Container height={800} minWidth='100%' className='container-block row-centered'>
                <div className='container-block'>
                    <div className='row-centered'>
                            <div className='container-left-block'>
                                <div className='column-left-sided' style={{ margin: '0px 0px 0px 100px' }}>
                                    <h5>Discover more NFTs</h5>
                                    <h2>Explore new trending NFTs</h2>
                                </div>
                            </div>
                            <div className='container-right-block'>
                            <div className='right-sided'>
                                <Spacer height={20} />
                                <Button className='button' background='transparent' border='2px' borderRadius={10} borderColor='#A259FF' color='white' _hover='none'>
                                    <div className='row-centered'>
                                        <FaEye color='rgba(162, 89, 255, 1)' />
                                        <Spacer w={4} />
                                        <span>See All</span>
                                    </div>
                                </Button>
                            </div>
                        </div>
                    </div>

                    <Spacer height={10} />

                    <div className='column-centered'>
                        <div className='three-grid-container'>
                            { getListUser(mockedListUser) }
                        </div>
                    </div>
                    
                </div>
            </Container>

            {/* Footer */}
            <Container className='column-centered' style={{ minWidth: '100%', height: '320px', backgroundColor: 'rgba(59, 59, 59, 1)'}}>
                <div className='container-block row-centered' style={{ width: '65%', justifyContent: 'space-evenly', marginBottom: '10px' }}>
                    <div className='column-left-sided' style={{ width: '25%', height: '80%', justifyContent: 'space-evenly' }}>
                        <div className='row-centered'>
                            <FaDumpster color='rgba(162, 89, 255, 1)' />
                            <Spacer w={2} />
                            <span className='footer-title'>NFT Marketplace</span>
                        </div>
                        <span style={{ marginBottom: '20px', marginTop: '20px' }} className='footer-span'>NFT marketplace UI created with Anima for Figma.</span>
                        <span style={{ marginBottom: '20px' }} className='footer-span'>Join our community</span>
                        <div className='row-centered'>
                            <PiDiscordLogoLight size={35} color='rgba(133, 133, 132, 1)' style={{ marginRight: '5px' }} />
                            <PiYoutubeLogoLight size={35} color='rgba(133, 133, 132, 1)' style={{ marginRight: '5px' }} />
                            <PiTwitterLogoLight size={35} color='rgba(133, 133, 132, 1)' style={{ marginRight: '5px' }} />
                            <PiInstagramLogoLight size={35} color='rgba(133, 133, 132, 1)' style={{ marginRight: '5px' }} />
                        </div>
                    </div>
                    
                    <div className='column-left-sided' style={{ width: '25%', height: '80%', justifyContent: 'space-evenly' }}>
                        <span style={{ marginBottom: '20px' }} className='footer-title'>Explore</span>
                        <span style={{ marginBottom: '20px' }} className='footer-span'>Marketplace</span>
                        <span style={{ marginBottom: '20px' }} className='footer-span'>Rankings</span>
                        <span style={{ marginBottom: '20px' }} className='footer-span'>Connect a wallet</span>
                    </div>
                    
                    <div className='column-left-sided' style={{ width: '25%', height: '80%', justifyContent: 'space-evenly' }}>
                        <span style={{ marginBottom: '20px' }} className='footer-title'>Join our weekly digest</span>
                        <span style={{ marginBottom: '20px' }} className='footer-span'>Get exclusive promotions & updates straight to your inbox.</span>
                        <div className='row-centered container-block' style={{ justifyContent: 'left', width: '400px', height: '60px' }}>
                            <div className='container-left-block row-centered' style={{ backgroundColor: 'white', minWidth: '365px', borderRadius: '10px' }}>
                                <span style={{ color: 'black', padding: "20px", width: '400px', marginRight: '10px' }}>Enter your email here</span>
                                <div className='right-sided' style={{ height: '100%', width: '100%' }}>
                                    <Button className='button' w='100%' h='100%' borderRadius={10} background='#A259FF' color='white' padding='0px 30px 0px 30px' _hover='none'>Subscribe</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='column-centered' style={{ width: '60%', marginLeft: '50px' }}>
                    <Divider h={1} w='100%' marginBottom={5} backgroundColor='rgba(133, 133, 132, 1)'/>

                    <div className='container-block' style={{ marginBottom: '30px' }}>
                        <div className='container-left-block'>
                            <span className='footer-span-little'>Ⓒ NFT Market. Use this template freely.</span>
                        </div>
                        <div className='container-right-block'>
                            <Spacer w={5} />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default HomePage;
