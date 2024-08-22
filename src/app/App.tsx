import { Suspense } from 'react';
import './styles/index.scss';
import { Routes, Route, Link } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider/lib/useTheme';
import Loading from 'shared/Laoding';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';

const App = () => {
	const { theme, toggleTheme } = useTheme();
	return (
		<div className={classNames('app', {}, [theme])}>
			<button onClick={toggleTheme}>Toggle</button>
			some texT
			<nav>
				<Link to={'/'}>Main Page</Link>
				<Link to={'/aboutPage'}>About page</Link>
			</nav>
			<Suspense fallback={<Loading />}>
				<Routes>
					<Route path={'/'} element={<MainPage />} />
					<Route path={'aboutPage'} element={<AboutPage />} />
				</Routes>
			</Suspense>
		</div>
	);
};

export default App;
