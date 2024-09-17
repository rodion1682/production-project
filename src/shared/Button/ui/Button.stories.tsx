import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Button, ButtonTheme } from './Button';

const meta = {
	title: 'shared/Button',
	component: Button,
	args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		children: 'Text',
	},
};

export const Clear: Story = {
	args: {
		children: 'Text',
		theme: ButtonTheme.CLEAR,
	},
};

export const Outline: Story = {
	args: {
		children: 'Text',
		theme: ButtonTheme.OUTLINE,
	},
};

export const OutlineDark: Story = {
	args: {
		children: 'Text',
		theme: ButtonTheme.OUTLINE,
	},
};

OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];
