import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Modal } from 'shared/ui/Modal';
import { useCallback, useState } from 'react';
import { Button } from 'shared/ui/Button';
import { ButtonTheme } from 'shared/ui/Button/ui/Button';
import cls from './Navbar.module.scss';

interface NavbarProps {
	className?: string;
}

export function Navbar({ className }: NavbarProps) {
	const { t } = useTranslation();
	const [isAuthModal, setIsAuthModal] = useState(false);

	const onToggleModal = useCallback(() => {
		setIsAuthModal((prev) => !prev);
	}, []);

	return (
		<nav className={classNames(cls.Navbar, {}, [className])}>
			<Button
				theme={ButtonTheme.CLEAR_INVERTED}
				className={cls.links}
				onClick={onToggleModal}
			>
				{t('Enter')}
			</Button>
			<Modal isOpen={isAuthModal} onClose={onToggleModal}>
				{t(`Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui vitae
				facilis ipsam voluptatum sed, totam atque optio similique sapiente
				laudantium veniam dignissimos assumenda ex est error, beatae minus
				laboriosam dolor?`)}
			</Modal>
		</nav>
	);
}
