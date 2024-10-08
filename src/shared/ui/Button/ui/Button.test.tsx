import { render, screen } from '@testing-library/react';
import { Button } from 'shared/ui/Button/ui/Button';
import { ButtonTheme } from './Button';

describe('Button', () => {
	test('Test render', () => {
		render(<Button>TEST</Button>);
		expect(screen.getByText('TEST')).toBeInTheDocument();
	});

	test('Test clear theme', () => {
		render(<Button theme={ButtonTheme.CLEAR}>TEST</Button>);

		expect(screen.getByText('TEST')).toHaveClass('clear');
		screen.debug();
	});
});
