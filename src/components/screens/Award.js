import React from 'react';
import styled from "styled-components";
import Logo from "../../components/Assets/logo.png";
import Spot from "../Assets/spot - image.png";
import Apple from "../Assets/apple.svg";
import Flat from "../Assets/flaticon.svg";
import Google from "../Assets/google.svg";
import Freepik from "../Assets/freepik-logo-.svg";
import Cross from "../Assets/cross - line.svg";
import Arrow from "../Assets/arrow.svg";
import Footer from "../Assets/Footer - image.png";
import Blur from "../Assets/pattern - color.svg";

export default function Award() {
    return (
       <>
       <Fullbody>
           <section class="wrapper">
                <Main>
                    <Header>
                        <Left>
                        <H1> <Link href="#"> <Logo1 src={Logo} alt="logo" /> </Link> </H1>
                        </Left>
                        <Right>
                            <Unlist>
                             <List> <Link href="#"> Home </Link></List> 
                             <List> <Link href="#"> About Us  </Link></List> 
                             <List> <Link href="#"> Awards </Link></List> 
                             <List> <Link href="#"> Contact  </Link></List> 
                             <List> <Linkbutton>Get Started</Linkbutton></List> 
                            </Unlist>
                        </Right>
                    </Header>
                    <Spotlightmain>
                        <DivLeft>
                            <Mainhead>2021 Global Design <Color> Awards </Color> Published </Mainhead>
                            <Para> Here We published 2021 global design awards for the design Competition</Para>
                            <Button> <Buttona> Already impressed ? <Linke> Get started today! </Linke> </Buttona> </Button>
                        </DivLeft> 
                        <Divright>
                            <Imgcontainer>
                                <Blurimagecontainer src={Blur} alt="Image" />
                                <Blurimagecontainer1 src={Blur} alt="Image" />
                                <Spotlight src={Spot} alt="Image" />
                            </Imgcontainer>
                        </Divright>
                    </Spotlightmain>
                    <Boxes>
                        <Box>
                            <Top>
                                <Link> <Icon src = {Apple} alt="Icon" /> </Link>
                                <Date>18 June 2020</Date>
                            </Top>
                            <Middel>
                                <Small>Gold Winner</Small>
                                <Large>Apple Design Award</Large>
                                <Medium>2020-21 </Medium>
                                <Crosspick src={Cross} alt="icon" />
                            </Middel>
                            <Bottom>
                                <Country> United States </Country>
                                <Arowwpic src={Arrow} alt="Icon" />
                            </Bottom>
                        </Box>
                        <Box>
                            <Top>
                                <Link> <Icon src = {Google} alt="Icon" /> </Link>
                                <Date>08 March 2021</Date>
                            </Top>
                            <Middel>
                                <Small>Runner Up</Small>
                                <Large>Google Design Award</Large>
                                <Medium>2020-21 </Medium>
                                <Crosspick src={Cross} alt="icon" />
                            </Middel>
                            <Bottom>
                                <Country> India, New Dlehi </Country>
                                <Arowwpic src={Arrow} alt="Icon" />
                            </Bottom>
                        </Box>
                        <Box>
                            <Top>
                                <Link> <Icon src = {Freepik} alt="Icon" /> </Link>
                                <Date>18 June 2019</Date>
                            </Top>
                            <Middel>
                                <Small>Silver Award</Small>
                                <Large>Freepik Best UI Award</Large>
                                <Medium>2019-20 </Medium>
                                <Crosspick src={Cross} alt="icon" />
                            </Middel>
                            <Bottom>
                                <Country> France </Country>
                                <Arowwpic src={Arrow} alt="Icon" />
                            </Bottom>
                        </Box>
                        <Box>
                            <Top>
                                <Link> <Icon src = {Flat} alt="Icon" /> </Link>
                                <Date>18 June 2020</Date>
                            </Top>
                            <Middel>
                                <Small>Spacial Jury</Small>
                                <Large>Flat Icon Design Award</Large>
                                <Medium>2020-21 </Medium>
                                <Crosspick src={Cross} alt="icon" />
                            </Middel>
                            <Bottom>
                                <Country> New York </Country>
                                <Arowwpic src={Arrow} alt="Icon" />
                            </Bottom>
                        </Box>
                    </Boxes>
                </Main>
                <Secoundary>
                    <Imagecontainer>
                        <Footerimage src={Footer} alt="Image" />
                        <Content>
                            <Heading>Want to get new design news</Heading>
                            <Paragra>Here is an comparison chart of us with thipsum tool , but at end we win</Paragra>
                            <Form>
                                <Input type="text" placeholder ="Your Email Address"></Input>
                                <Inputbutton>Get started</Inputbutton>
                            </Form>
                        </Content>
                    </Imagecontainer>
                    <End>
                        <Leftend>
                            <Logocon>
                                <Image src={Logo} alt="Icon" />
                            </Logocon>
                            <P1>Apartment 0031 Boardmoor Ln,</P1>
                            <P2>Rotonad Westwood ,</P2>
                            <P3>Fl, 33947</P3>
                        </Leftend>
                        <Rightend>
                        <Order>
                           <Oders> <Links>Home</Links> </Oders>
                           <Oders> <Links>About Us</Links> </Oders>
                           <Oders> <Links>Awards</Links> </Oders>
                           <Oders> <Links>Contact</Links> </Oders>
                            <Design> Designed by <A> www.steyp.com </A> </Design>
                        </Order>
                        </Rightend>
                    </End>
                </Secoundary>
            </section>
       </Fullbody>
       </>
    )
}

const Fullbody = styled.body `
    background : #141414;
`;
const Main = styled.section `
`;
const Header = styled.header `
    display :flex;
    justify-content :space-between;
    align-items :center;
    padding-top: 35px;
    margin: 0 auto;
`;
const Left = styled.div `
    width: 20%;
    @media all and (max-width:640px){
       width:48%;
    }
`;
const H1 = styled.h1 `
    
`;
const Right = styled.nav `
    @media all and (max-width:640px){
        display:none;
}
`;
const Link = styled.a `
    color:#595959;
    &:hover{
        color:#ffffff;
    }
`;
const Unlist = styled.ul `
    display :flex;
    justify-content :space-between;
    alignitems :center;
`;
const List = styled.li `
    margin-left:20px;
`;
const Linkbutton = styled.a `
    padding:13px 20px;
    border: 1px solid #fb5200;
    border-radius :8px;
    color :#fb5200;
    cursor:pointer;
    @media all and (max-width:768px){
        padding:13px 18px;
    }
`;
const Logo1 = styled.img `
    dipaly:block;
    width:100%;
`;
const Spotlightmain = styled.div `
    display: flex;
    justify-content: space-between;
`;
const DivLeft = styled.div `
`;
const Mainhead = styled.h1 `
    font-size: 45px;
    font-weight: 600;
    margin-top: 135px;
    color:#ffffff;
    width: 75%;
    @media all and (max-width:980px){
        font-size: 36px;
    }
    @media all and (max-width:768px){
        font-size: 36px;
        margin-top: 100px;
    }
    @media all and (max-width:640px){
        font-size: 29px;
        margin-top: 41px
     }
`;
const Divright = styled.div `
    width: 50%;
    @media all and (max-width:768px){
        display:none;
    }
}
`;
const Imgcontainer = styled.div `
    margin-top: 60px;
    position:relative;
    z-index:0;
`;
const Color = styled.span `
    font-size: 45px;
    font-weight: 600;
    margin-top: 135px;
    color :#fb5200;
    @media all and (max-width:980px){
        font-size: 40px;
    }
    @media all and (max-width:768px){
        font-size: 36px;
    }
    @media all and (max-width:640px){
        font-size: 29px;
    }
`;
const Para = styled.p `
    color:#595959;
    width: 45%;
    padding: 10px 0;
    @media all and (max-width:1280px){
        width: 56%;
    }
    @media all and (max-width:1080px){
        width: 58%;
    }
    @media all and (max-width:980px){
        width: 75%;
    }
`;
const Button = styled.a `
    cursor:pointer;

   
`;
const Buttona = styled.p `
    margin-top: 25px;
    padding: 8px;
    background-image: linear-gradient(to right, #fa5200, #b8488f);
    border-radius: 8px;
    color:#e99da6;
    width: 25%;
    @media all and (max-width:1280px){
        width: 28%;
    }
    @media all and (max-width:1080px){
        width: 30%;
    }
    @media all and (max-width:980px){
        width: 33%;
    }
    @media all and (max-width:980px){
        width: 40%;
    }
    
  
}
`;
const Linke = styled.span `
    color:#ffff;
`;
const Blurimagecontainer =styled.img `
    position:absolute;
    z-index: -1;
    display:block;
    width:51%;
    filter:blur(55px);   
    top: 60%;
    left: -13%; 
`;
const Blurimagecontainer1 = styled.img `
    position:absolute;
    z-index:-1;
    display :block;
    filter:blur(55px);
    left:40%;
    width: 40%;
`;
const Spotlight = styled.img `
    display:block;
    width:100%;
    z-index:1;
`;
const Boxes = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 70px;
    flex-wrap: wrap;
}
`;
const Box = styled.div `
    border: 1px solid #fb5200;
    padding: 28px;
    width: 24%;
    border-radius: 8px;
    transition: height 60s;
    &:hover{
        background-image: linear-gradient(to bottom right, #e64f3c, #b34897);
        height :450px;
        cursor:pointer;
    }
    @media all and (max-width:768px){
        width: 47%;
        margin-top: 20px;
    }
    @media all and (max-width:640px){
        width: 90%;
    }
`;
const Icon = styled.img `
`;
const Top = styled.div `
    display: flex;
    justify-content: space-between;
    margin-bottom: 35px;
}
`;
const Content = styled.div `
    position:absolute;
    top: 20%;
    left: 10%;
`;
const Date = styled.span `
    color:#595959;
`;
const Middel = styled.div `
`;
const Small = styled.p `
    padding: 16px 0px;
    color:#595959;
`;
const Large =styled.h2 `
    font-size: 24px;
    color:#ffffff;
    padding:10px 0;
`;
const Medium = styled.h3 `
    color:#ffffff;
    padding:10px 0;
`;
const Crosspick = styled.img `
    padding:30px 0;
`;
const Bottom = styled.div `
    display:flex;
    justify-content:space-between;
`; 
const Country = styled.span `
    color:#ffffff;
`;
const Arowwpic = styled.img `
`;
const Secoundary = styled.section `
    margin-top: 135Px;
`;
const Imagecontainer = styled.div `
    position:relative;
`;
const Heading = styled.h2 `
    color: #ffffff;
    font-size: 45px;
    width: 85%;
    @media all and (max-width:980px){
        font-size: 36px;
        width: 78%;
    }
    @media all and (max-width:768px){
        font-size: 27px;
    }
`;
const Footerimage = styled.img `
    display: block;
    width: 100%;
    @media all and (max-width:640px){
        diplay:none;
    }
`;
const Paragra = styled.p `
    padding: 16px 0px;
    color: #ffffff;
    width: 67%;
    font-size: 20px;
    @media all and (max-width:980px){
        font-size: 16px;
    }
`;
const Form = styled.form `
   
`;
const Input = styled.input `
    border: 2px solid #ffffff;
    padding: 16px;
    border-radius: 8px;
    width: 43%;
    background: #fff;
    position :relative;
`;
const Inputbutton = styled.button `
    padding: 18px 18px;
    background-image: linear-gradient(to right,#fa5200,#b8488f);
    border-radius: 8px;
    color: #ffffff;
    position: absolute;
    right: 56%;
    cursor:pointer;
    @media all and (max-width:640px){
       position:none;
    }
`;
const End = styled.footer `
    display :flex;
    justify-content: space-between;
    margin:70px 0;
`;
const Leftend = styled.div `
`;
const Logocon = styled.div `
    width: 65%;
`;
const Image = styled.img `
    diplay:block;
    width: 100%;
`;
const P1 = styled.p `
    font-size: 16px;
    color :#595959;
`;
const P2 = styled.p `
    font-size: 16px;
    color :#595959;
`;
const P3 = styled.p `
    font-size: 16px;
    color :#595959;
`;
const Rightend = styled.div `
    @media all and (max-width:980px){
    width:50%
}
`;
const Links = styled.a `
    color :#595959;
    &:hover{
        color:#ffff;
    }
    cursor:pointer;
`;
const Design =styled.span `
    color :#595959;
    border-left: 2px solid;
    padding-left: 20px;
    @media all and (max-width:980px){
        border:none;
        margin-top:20px;
        padding-left:0;
    }
`;
const A = styled.a `
    color :#fb5200;
    cursor:pointer;
`;
const Order =styled.ul `
    display:flex;
    justify-content:space-betweeen;
    align-items:center;
    margin-top: 35px;
    flex-wrap:wrap;
`;
const Oders =styled.li `
    margin-right:20px;
    @media all and (max-width:768px){
        width: 30%;
        margin-top:20px;
    }
`;
