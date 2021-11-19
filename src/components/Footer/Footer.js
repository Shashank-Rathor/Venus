import { Facebook, Instagram, KeyboardArrowRight, MailOutline, Phone, Pinterest, Room, Twitter } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../../responsive";
import LOGO from '../../assets/images/logo.png';

const Container = styled.div `
    display: flex;
    padding: 60px;
    background-color: #232527;
    ${mobile({flexDirection: "column"})}
`;
const Left = styled.div `
    flex: 1;  
    display: flex;
    flex-direction: column;
    padding: 20px;
`;
const Center = styled.div `
    flex: 2;
    ${mobile({display: "none"})}
`;
const Right = styled.div `
    ${mobile({backgroundColor: "#fff8f8"})}
`
const Logo = styled.h1 `
    color: #FFFFFF;
    margin-bottom: 50px;
`;
const SocialContainer = styled.div `
    display: flex;
`;
const SocialIcon = styled.div `
    width: 40px;
    height: 40px;
    color: #C4C4C5;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`;
const List = styled.ul `
    margin: 0;
    padding: 0;
    list-style: none;
`;
const ListItem = styled.li `
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    line-height: 30px;
    color: #949494;
`;
const InputContainer = styled.div `
    width: 80%;
    height: 50px;
    margin-bottom: 50px;
    background-color: black;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
    border-left: 0 none;
    border-right: 0 none;
    border-top: 0 none;
    ${mobile({width: "80%"})}
`;
const Input = styled.input `
    border: none;
    flex: 8;
    background-color: #232527;
    padding-left: 20px;
`;
const Button = styled.button `
    flex: 1;
    border: none;
    background-color: white;
    color: black;
`;

const Footer = () => {
    return (
        <Container>
        <Left>
            <Logo>Subscribe To Our Newsletter</Logo>
            <InputContainer>
                <Input placeholder="Email Address"/>
                <Button>
                    <KeyboardArrowRight/>
                </Button>
            </InputContainer>
            <SocialContainer>
                <SocialIcon>
                    <Facebook/>
                </SocialIcon>
                <SocialIcon>
                    <Instagram/>
                </SocialIcon>
                <SocialIcon>
                    <Twitter/>
                </SocialIcon>
                <SocialIcon>
                    <Pinterest/>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <div class="container">
                <div class="row">
                 <div class="col-sm-4">
                 <h5 style={{color: 'white', marginBottom: '30px'}}>About Us</h5>
            <List>
                <ListItem>Who we are</ListItem>
                <ListItem>Our Strategy</ListItem>
                <ListItem>History</ListItem>
                <ListItem>Operation</ListItem>
                <ListItem>Board of Directors</ListItem>
                <ListItem>Executive Team</ListItem>
                <ListItem>Accredition</ListItem>
                <ListItem>Awards</ListItem>
                <ListItem>Ethics   Compliance</ListItem>
            </List>
                </div>
                <div class="col-sm-4">
                <h5 style={{color: 'white', marginBottom: '30px'}}>Responsibility</h5>
            <List>
                <ListItem>CSR</ListItem>
                <ListItem>Management</ListItem>
                <ListItem>Plea</ListItem>
                <ListItem>Operation Safety</ListItem>
                <ListItem>Venus Army</ListItem>
            </List>
                </div>
                <div class="col">
                <h5 style={{color: 'white', marginBottom: '30px'}}>Investors</h5>
            <List>
                <ListItem>Investor Relations</ListItem>
                <ListItem>Investor Information</ListItem>
                <ListItem>Financial Information</ListItem>
            </List>
                </div>
                </div>
            </div>
        </Center>
        <Right>
           <img src={LOGO} width='100'/>
        </Right>
        </Container>
    )
}

export default Footer
