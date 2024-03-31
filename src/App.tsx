// import './App.css';
import { Card } from './components/Card/Card'; // Импорт компонента Card из его файла
import { task1, task2 } from './components/data/data'; // Импорт данных task1 и task2 из файла данных


function App() {
  return (
    <div className='container'>
       {/* Рендеринг компонента Card с данными task1 и изображением */}
        <Card {...task1}>{<img src={task1.img} className='image'/>}</Card>
      
       {/* Рендеринг компонента Card с данными task2 */}
        <Card {...task2}></Card>
    </div>
  );
}

export default App;
