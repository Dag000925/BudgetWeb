import withAntdLess from 'next-plugin-antd-less';

/** @type {import('next').NextConfig} */
const nextConfig = {};

const config = withAntdLess({
    ...nextConfig,
});

export default nextConfig;
