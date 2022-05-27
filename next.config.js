/** @type {import('next').NextConfig} */
const API_KEY = process.env.API_KEY;
const nextConfig = {
    reactStrictMode: true,
    async redirects() {
        return [
            {
                source: "/old-blog/:path*", //받을 주소
                destination: "/new-blog/:path*", //이동할 주소
                permanent: false, //브라우저에 해당 내용을 저장할 것인지 여부
            },
        ];
    },
    async rewrites() {
        //가리고 싶은 api 등의 주소가 있을 경우 rewirtes를 통해 소스에서 확인 불가능하도록 만들 수 있음.
        return [
            {
                source: "/api/movies",
                destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
            },
            {
                source: "/api/movies/:id",
                destination: `https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}`,
            },
        ];
    },
};

module.exports = nextConfig;
