import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/Button';
import { ButtonTheme } from 'shared/Button/ui/Button';
import cls from './LangSwitcher.module.scss';

interface LangSwitcherProps {
	className?: string;
}

export function LangSwitcher({ className }: LangSwitcherProps) {
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
			{t('Language')}
		</Button>
	);
}
