import withTM from "next-transpile-modules";

const nextConfig = withTM(["ui"]);

export default nextConfig({
  reactStrictMode: true,
});
