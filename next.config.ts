import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
 
const withNextIntl = createNextIntlPlugin();
 
const nextConfig: NextConfig = {
    images:{
        remotePatterns:[
            {
                protocol: 'https',
                hostname: '**',
            },
            {
                protocol: 'http',
                hostname: '**',
            },
        ],
        qualities:[100,75,50,25]
    },
    reactStrictMode:false
};

export default withNextIntl(nextConfig);
