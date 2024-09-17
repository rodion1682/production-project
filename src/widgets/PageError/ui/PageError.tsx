import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/Button';
import { ButtonTheme } from 'shared/Button/ui/Button';
import cls from './PageError.module.scss';

interface PageErrorProps {
	className?: string;
}

export const PageError = ({ className }: PageErrorProps) => {
	const { t } = useTranslation();

	const reloadPage = () => {
		// eslint-disable-next-line no-restricted-globals
		location.reload();
	};

	return (
		<div className={classNames(cls.PageError, {}, [className])}>
			<div>{t('Something went wrong')}</div>
			<Button onClick={reloadPage} theme={ButtonTheme.OUTLINE}>
				{t('Reload page')}
			</Button>
		</div>
	);
};
