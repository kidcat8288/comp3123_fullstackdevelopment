import logo from './logo.svg';
import './App.css';


function StudentInfo(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
      <h3>{props.studentId}</h3>
      <h4>{props.studentName}</h4>
      <h5>{props.college}</h5>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <StudentInfo
          title="Welcome to Fullstack Development - I"
          subtitle="React JS Programming Week09 Lab exercise"
          studentId="101568394"
          studentName="Camille Yu"  
          college="George Brown College, Toronto"
        />
      </header>
    </div>
  );
}

export default App;