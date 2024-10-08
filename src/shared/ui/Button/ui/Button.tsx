import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, FC } from 'react';
import cls from './Button.module.scss';

export enum ButtonSize {
	M = 'size_m',
	L = 'size_l',
	XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	theme?: string;
	square?: boolean;
	size?: ButtonSize;
}

export enum ButtonTheme {
	CLEAR = 'clear',
	CLEAR_INVERTED = 'clearInverted',
	OUTLINE = 'outline',
	BACKGROUND = 'background',
	BACKGROUND_INVERTED = 'backgroundInverted',
}

export const Button: FC<ButtonProps> = (props) => {
	const {
		className,
		children,
		theme = ButtonTheme.CLEAR,
		square,
		size = ButtonSize.M,
		...otherProps
	} = props;

	const mods: Record<string, boolean> = {
		[cls.square]: square,
		[cls[size]]: true,
	};

	return (
		<button
			type="button"
			className={classNames(cls.Button, mods, [className, cls[theme]])}
			{...otherProps}
		>
			{children}
		</button>
	);
};
