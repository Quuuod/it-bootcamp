import { CharacterPage } from '../pages';
import { CharacterModal } from '../features';
import { FloatButton } from 'antd';

const App = () => {
	return (
		<div className='App'>
			<CharacterPage />
			<CharacterModal />
			<FloatButton.BackTop />
		</div>
	);
};

export default App;
