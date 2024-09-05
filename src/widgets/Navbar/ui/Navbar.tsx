import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/AppLink';
import { useTranslation } from 'react-i18next';
import { AppLinkTheme } from 'shared/AppLink/ui/AppLink';
import cls from './Navbar.module.scss';

interface NavbarProps {
	className?: string;
}

export function Navbar({ className }: NavbarProps) {
   const { t } = useTranslation();
   return (
      <nav className={classNames(cls.Navbar, {}, [className])}>
         <div className={classNames(cls.links, {}, [])}>
            <AppLink
               to="/"
               theme={AppLinkTheme.SECONDARY}
               children={t('Main Page')}
            />
            <AppLink
               to="/about"
               theme={AppLinkTheme.SECONDARY}
               children={t('About Page')}
            />
         </div>
      </nav>
   );
}
