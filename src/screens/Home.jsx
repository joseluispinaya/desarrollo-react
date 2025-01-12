import { useSelector } from 'react-redux'
//import Logo from '../Components/Home/Logo.jsx'
import OpenLink from '../Components/Core/OpenLink.jsx'
import Body from '../Components/Home/Body.jsx'
import Footer from '../Components/Home/Footer.jsx'
//import GitHub from '../Components/Home/GitHub.jsx'

import viteLogo from "../assets/vite.svg";
import reactLogo from "../assets/react.svg";
import githubLogo from "../assets/github.svg";

const Home = () => {
    const count = useSelector((state) => state.counter.value)

    return (
        <div>
            <span>Count value: {count}</span>
            <div>
                <OpenLink
                    redirectURL="https://vite.dev"
                    logoImage={viteLogo} />

                <OpenLink
                    redirectURL="https://react.dev"
                    logoImage={reactLogo}
                />
                <OpenLink
                    redirectURL="https://github.com/joseluispinaya/desarrollo-react"
                    logoImage={githubLogo}
                />

            </div>
            <Body />
            <Footer />
        </div>
    );
};

export default Home;