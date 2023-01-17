import Destructuring from './components/Destructuring';
import FirstComponent from './components/FirstComponent';
import SecondComponent from './components/SecondComponent';
import State from './components/State';

function App() {
  // 1 - variaveis

  const name: string = 'Felipe';
  const age: number = 29;
  const isWorking: boolean = true;

  // 2 - funcoes

  const userGreeting = (name: string): string => {
    return `Olá, ${name}!`;
  };

  return (
    <div className="App">
      <h1>Typescript com react</h1>
      <p>
        Nome: {name} - Idade: {age}
      </p>
      {isWorking && <p>Está trabalhando</p>}
      <h3>{userGreeting(name)}</h3>
      <FirstComponent />
      <SecondComponent name="segundo componente" />
      <Destructuring
        title="Primeiro post"
        content="Algum conteúdo"
        comentsQty={10}
        tags={['ts', 'js']}
      />
      <State />
    </div>
  );
}

export default App;
