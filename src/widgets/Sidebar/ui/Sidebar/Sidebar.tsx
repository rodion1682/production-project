import { classNames } from 'shared/lib/classNames/classNames';
import Chevrone from 'shared/assets/icons/Chevrone.svg';
import { SvgIcon } from 'shared/ui/SvgIcon';
import { useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { AppLink } from 'shared/ui/AppLink';
import { AppLinkTheme } from 'shared/ui/AppLink/ui/AppLink';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import MainIcon from 'shared/assets/main.svg';
import AboutIcon from 'shared/assets/about.svg';
import { Button } from 'shared/ui/Button';
import cls from './Sidebar.module.scss';

interface SidebarProps {
	className?: string;
}

export function Sidebar({ className }: SidebarProps) {
	const { t } = useTranslation();
	const [colappsed, setColappsed] = useState(false);

	const toggleColappsed = () => {
		setColappsed((prev) => !prev);
	};

	return (
		<div
			data-testid="sidebar"
			className={classNames(cls.Sidebar, { [cls.colappsed]: colappsed }, [
				className,
			])}
		>
			<div className={classNames(cls.items, {}, [])}>
				<AppLink
					to={RoutePath.main}
					theme={AppLinkTheme.SECONDARY}
					className={cls.item}
				>
					<MainIcon className={cls.icon} />
					<span className={cls.link}>{t('Main Page')}</span>
				</AppLink>
				<AppLink
					to={RoutePath.about}
					theme={AppLinkTheme.SECONDARY}
					className={cls.item}
				>
					<AboutIcon className={cls.icon} />
					<span className={cls.link}>{t('About Page')}</span>
				</AppLink>
			</div>
			<div className={classNames(cls.switchers, {}, [])}>
				<LangSwitcher short={colappsed} />
				<ThemeSwitcher />
			</div>
			<Button
				data-testid="sidebar-toggle"
				className={classNames(cls.buttonColappsed, {}, [])}
				onClick={toggleColappsed}
			>
				<SvgIcon>
					<Chevrone />
				</SvgIcon>
			</Button>
		</div>
	);
}
