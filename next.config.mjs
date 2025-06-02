/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol: "https",
                hostname: "www.thecocktaildb.com",
                port:'',
                pathname: '/images/**'
            }
        ]
    },
    experimental: {
        ppr: 'incremental',
    }
};

export default nextConfig;
