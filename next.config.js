module.exports = {
	env: {
		// environment vars here
	},
	pageExtensions: ["mdx", "jsx", "js", "ts", "tsx"],
	poweredByHeader: false,
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			issuer: {
				test: /\.(js|ts)x?$/,
			},
			use: ["@svgr/webpack"],
		});

		return config;
	},
};
