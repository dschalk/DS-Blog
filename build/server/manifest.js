const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "blog/_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {start:"_app/immutable/entry/start.D1KOmC7a.js",app:"_app/immutable/entry/app.D7FO2R6W.js",imports:["_app/immutable/entry/start.D1KOmC7a.js","_app/immutable/chunks/Bx_lVT5h.js","_app/immutable/chunks/BWZD8c2K.js","_app/immutable/chunks/BJOo3ji3.js","_app/immutable/entry/app.D7FO2R6W.js","_app/immutable/chunks/BWZD8c2K.js","_app/immutable/chunks/AvQR8eLy.js","_app/immutable/chunks/Cr_1vraW.js","_app/immutable/chunks/BJOo3ji3.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./chunks/0-CgLQw7LB.js')),
			__memo(() => import('./chunks/1-D8envD_t.js')),
			__memo(() => import('./chunks/2-CMFmQAxU.js')),
			__memo(() => import('./chunks/3-DyrL0ace.js')),
			__memo(() => import('./chunks/4-BLAwrxSl.js')),
			__memo(() => import('./chunks/5-BufAqScV.js')),
			__memo(() => import('./chunks/6-BbN7TMTQ.js')),
			__memo(() => import('./chunks/7-CQ71lTwS.js')),
			__memo(() => import('./chunks/8-J5Jf1NZ8.js')),
			__memo(() => import('./chunks/9-Bu-WE0br.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/Grover",
				pattern: /^\/Grover\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/Insects",
				pattern: /^\/Insects\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/Nitrate-nitrite-research",
				pattern: /^\/Nitrate-nitrite-research\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/P_adic",
				pattern: /^\/P_adic\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/Server",
				pattern: /^\/Server\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/Variable_Mutation",
				pattern: /^\/Variable_Mutation\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/wave equation",
				pattern: /^\/wave equation\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set([]);

const base = "/blog";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
