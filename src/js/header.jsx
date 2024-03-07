import logo from "../assets/logo.svg";
export function Header (){
    return(
        <header>
            <div className="logo">
            <img src={logo} alt=""></img>
            </div>
        </header>
    );
}