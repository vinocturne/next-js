import NavBar from "../components/NavBar";
import "../styles/globals.css";
//nextjs에서는 컴포넌트를 랜더링하기 전에 _app을 먼저 확인함
//공통되는 것들만
export default function App({ Component, pageProps }) {
    return (
        <div>
            <NavBar />
            <Component {...pageProps} />
            <style jsx global>{`
                a {
                    color: white;
                }
            `}</style>
        </div>
    );
}
