export default {
    webpack: {
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: ["style-loader", "postcss-loader"],
                },
            ],
        },
    },
};
