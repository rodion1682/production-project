import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';
import { ButtonTheme } from 'shared/ui/Button/ui/Button';
import cls from './LangSwitcher.module.scss';

interface LangSwitcherProps {
	className?: string;
	short?: boolean;
}

export function LangSwitcher({ className, short }: LangSwitcherProps) {
	const { i18n, t } = useTranslation();

	const toggleLanguage = () => {
		const newLanguage = i18n.language === 'en' ? 'ru' : 'en';
		i18n.changeLanguage(newLanguage);
	};
	return (
		<Button
			className={classNames(cls.LangSwitcher, {}, [className])}
			onClick={() => toggleLanguage()}
			theme={ButtonTheme.CLEAR}
		>
			{t(short ? 'Short language' : 'Language')}
		</Button>
	);
}
