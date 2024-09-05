type Mods = Record<string, boolean | string>;

export function classNames(
	cls: string,
	mode: Mods = {},
	additional: string[] = []
): string {
	return [
		cls,
		...additional.filter(Boolean),
		...Object.entries(mode)
			.filter(([_, value]) => Boolean(value))
			.map(([className]) => className),
	].join(' ');
}
