import {Header, HeaderNav, HeaderLogo, HeaderAuth} from "@/_components/Header.js";

export default function Home(){
  return (
    <Header>
      <HeaderNav/>
      <HeaderLogo/>
      <HeaderAuth notLoggedIn={false}/>
    </Header>
  );
}
