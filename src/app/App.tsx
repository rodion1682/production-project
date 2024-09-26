import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider/lib/useTheme';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense } from 'react';
import { Button } from 'shared/ui/Button';
import { AppRouter } from './providers/router';

function App() {
	const { theme } = useTheme();

	return (
		<div className={classNames('app', {}, [theme])}>
			<Suspense fallback="">
				<Navbar />
				<div className="page">
					<Sidebar />
					<div className="page__content">
						<AppRouter />
					</div>
				</div>
			</Suspense>
		</div>
	);
}

export default App;
