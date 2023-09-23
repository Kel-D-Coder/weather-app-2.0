import { WeatherContainer } from './components/styles/Weather.styled'
import { Form } from './components/Form';
import { WeatherInfo } from './components/WeatherInfo';
import { DataProvider } from './Data';

function App() {

  return (
    <>
      <DataProvider>
        <WeatherContainer>
          <Form />
          <WeatherInfo />
        </WeatherContainer>
      </DataProvider>
    </>
  );
}

export default App;