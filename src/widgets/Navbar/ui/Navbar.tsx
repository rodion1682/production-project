import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';

interface NavbarProps {
	className?: string;
}

export function Navbar({ className }: NavbarProps) {
	return (
		<nav className={classNames(cls.Navbar, {}, [className])}>
			<div className={classNames(cls.links, {}, [])}>/</div>
		</nav>
	);
}
