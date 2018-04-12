"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
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
