import { classNames } from 'shared/lib/classNames/classNames';
import { SvgIcon } from 'shared/SvgIcon';
import { Button } from 'shared/Button';
import { ButtonTheme } from 'shared/Button/ui/Button';
import { useTheme } from 'app/providers/ThemeProvider';
import ThemeIcon from '../../../shared/assets/icons/ThemeIcon.svg';

interface ThemeSwitcherProps {
	className?: string;
}

export function ThemeSwitcher({ className }: ThemeSwitcherProps) {
   const { toggleTheme } = useTheme();
   return (
      <Button
         className={classNames('', {}, [className])}
         onClick={toggleTheme}
         theme={ButtonTheme.CLEAR}
      >
         <SvgIcon>
            <ThemeIcon />
         </SvgIcon>
      </Button>
   );
}
