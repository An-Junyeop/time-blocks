import styled from 'styled-components';
import GlobalStyle from './GlobalStyle';
import CalendarContainer from './container/CalendarContainer';
import HeaderContainer from './container/HeaderContainer';

function App() {
	return (
		<>
			<GlobalStyle />
			<Container>
				<HeaderContainer />
				<CalendarContainer />
			</Container>
		</>
	);
}

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
`;

export default App;
