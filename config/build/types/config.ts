export type BuildMode = 'development' | 'production';

export interface BuildPaths {
	entry: string;
	build: string;
	html: string;
	src: string;
}

export interface BuildEnv {
	port: number;
	mode: BuildMode;
}

export interface BuildOPtions {
	mode: BuildMode;
	paths: BuildPaths;
	isDev: boolean;
	port: number;
}
