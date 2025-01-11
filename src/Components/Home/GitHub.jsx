import githubLogo from "../../assets/github.svg";

const Logo = () => {
    return (
        <div>
            <a href="https://github.com/joseluispinaya/desarrollo-react" target="_blank">
                <img src={githubLogo} className="logo" alt="Vite logo"/>
            </a>
        </div>
    );
};

export default Logo;