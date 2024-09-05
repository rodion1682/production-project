import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/Button';
import Chevrone from 'shared/assets/icons/Chevrone.svg';
import { SvgIcon } from 'shared/SvgIcon';
import { useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import cls from './Sidebar.module.scss';

interface SidebarProps {
	className?: string;
}

export function Sidebar({ className }: SidebarProps) {
   const [colappsed, setColappsed] = useState(false);

   const toggleColappsed = () => {
      setColappsed((prev) => !prev);
   };

   return (
      <div
         className={classNames(cls.Sidebar, { [cls.colappsed]: colappsed }, [
            className,
         ])}
      >
         <div className={classNames(cls.switchers, {}, [])}>
            <LangSwitcher />
            <ThemeSwitcher />
         </div>
         <Button
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
