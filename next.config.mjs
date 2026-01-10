/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: [
        "api.microlink.io", // Microlink Image Preview
      ],
    },
    webpack(config, options){
      config.module.rules.push({
        test: /\.mp3$/,
        use: {
            loader: "url-loader",
        },
    });
    return config;
    }
  };

export default nextConfig;
