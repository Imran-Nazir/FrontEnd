
import UseEffect1 from './components/UseEffect1';
import UseRef1 from './components/UseRef1';
import UseRefCSS from './components/UseRefCSS';
import UseRefExpensiveComputations from './components/UseRefExpensiveComputations';
import UseRefImg from './components/UseRefImg';
import UseRefInput from './components/UseRefInput';
import UseRefPersistedMutable from './components/UseRefPersistedMutable';
import UseStateArrayTodoList from './components/UseStateArrayTodoList';
import UseStateForm from './components/UseStateForm';
import UseStateObject from './components/UseStateObject';
import UseState1 from './components/useState1';

const App = () => {

  return (
    <div className="container ">
        <UseRef1 />
        <UseRefImg />
        <UseRefInput />
        <UseRefCSS />
        <UseRefPersistedMutable />
        <UseRefExpensiveComputations />
        <UseState1 />
        <UseStateObject />
        <UseStateArrayTodoList />
        <UseStateForm />
        <UseEffect1 />
    </div>
  );
};

export default App;