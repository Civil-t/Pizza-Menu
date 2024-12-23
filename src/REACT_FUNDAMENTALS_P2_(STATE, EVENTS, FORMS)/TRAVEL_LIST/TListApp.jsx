import "./index.css";

function TListApp() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

export default TListApp;

function Logo() {
  return <h1>Far Away</h1>;
}

function Form() {
  return (
    <div className="add-form">
      <h3>What do you need for the trip</h3>
    </div>
  );
}

function PackingList() {
  return <div className="list">LIST</div>;
}

function Stats() {
  return (
    <footer className="stats">
      <em> You have X items on your list and you have already packed X (X%)</em>
    </footer>
  );
}
