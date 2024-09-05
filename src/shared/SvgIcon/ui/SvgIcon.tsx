import { classNames } from 'shared/lib/classNames/classNames';
import { FC, ReactNode } from 'react';
import cls from './SvgIcon.module.scss';

interface SvgIconProps {
	className?: string;
	children: ReactNode;
}

export const SvgIcon: FC<SvgIconProps> = ({ className, children }) => (
   <div className={classNames(cls.SvgIcon, {}, [className])}>{children}</div>
);
