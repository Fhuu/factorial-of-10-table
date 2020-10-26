import logo from './logo.svg';
import './App.css';

function App() {
  let tag = [];
  let toggle = true;
  let factorial = 1;
  for(let number = 1; number <= 10; number++) {
      factorial = factorial * number;
      tag.push(
      <tr>
        <td className={toggle.toString()}>{number}!</td>
        <td className={toggle.toString()}>{factorial}</td>
      </tr>); 
    toggle = !toggle;
  }

  return (
    <div className="App">
       <table>
         <tr>
           <th>Factorial</th>
           <th>Hasil</th>
         </tr>
         {tag}
       </table>
    </div>
  );
}

export default App;
