//movies/:id 형식으로 라우터를 동작시키고 싶을 때에는
//Movies 폴더 내에 [변수명].js로 만들 수 있다.(Dynamic Routes)
import { useRouter } from "next/router";
import Seo from "../../components/Seo";

export default function Detail({ params }) {
    const router = useRouter();
    const [title, id] = params || []; //넘어오는 쿼리의 배열 순서대로 변수를 지정
    //뒤에 []를 붙여주는 이유는, 시크릿모드에서 실행될 때에는 컴포넌트들이 서버측에서 먼저 렌더링 되기 때문에
    //라우터의 쿼리를 통해 받아올 수 있는 데이터가 없어 오류가 발생하기 때문.
    return (
        <div>
            <Seo title={title} />
            <h4>{title}</h4>
        </div>
    );
}
//getServerSideProps에 기본적으로 제공되는 ctx안에 라우터 관련정보들이 포함되었다.
export function getServerSideProps({ params: { params } }) {
    return {
        props: { params },
    };
}
