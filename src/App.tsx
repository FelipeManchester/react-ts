import { createContext } from 'react';
import Context from './components/Context';
import Destructuring, { Category } from './components/Destructuring';
import FirstComponent from './components/FirstComponent';
import SecondComponent from './components/SecondComponent';
import State from './components/State';

type textOrNull = string | null;

interface IAppContext {
  language: string;
  framework: string;
  projects: number;
}

export const AppContext = createContext<IAppContext | null>(null);

function App() {
  // 1 - variaveis

  const name: string = 'Felipe';
  const age: number = 29;
  const isWorking: boolean = true;

  // 2 - funcoes

  const userGreeting = (name: string): string => {
    return `Olá, ${name}!`;
  };

  const myText: textOrNull = 'Tem algum texto aqui';
  let mySecondText: textOrNull = null;

  mySecondText = 'opa';

  const contextValue: IAppContext = {
    language: 'JavaScript',
    framework: 'Express',
    projects: 5,
  };

  return (
    <AppContext.Provider value={contextValue}>
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
          category={Category.TS}
        />
        <State />
        {myText && <p>Tem texto na variável</p>}
        {mySecondText && <p> Tem texto na variável</p>}
      </div>
      <Context />
    </AppContext.Provider>
  );
}

export default App;
