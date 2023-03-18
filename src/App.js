import "./index.css";
import ColumnChart from "./components/charts/columnChart";

function App() {
  return (
    <main className="container font-poppins sm:mx-auto">
      <section className="flex flex-col items-center my-4">
        <h3 className="text-3xl font-bold text-gray-800 mb-1.5">Total activated Users</h3>
        <ColumnChart datafile={require('./data/hardStats.json')} dimensions={'month'} measures={'activated users'} />
      </section>
      <section className="flex flex-col items-center my-4">
        <h3 className="text-3xl font-bold text-gray-800 mb-1.5">Total message volume</h3>
        <p className="mb-3 text-gray-700 font-medium">Messages in our Discord channels: general chat, general help, quest help and forum, community collabs, safe space</p>
        <ColumnChart datafile={require('./data/hardStats.json')} dimensions={'month'} measures={'message volume'}/>
      </section>
      <section className="flex flex-col items-center my-4">
        <h3 className="text-3xl font-bold text-gray-800 mb-1.5">Found support in community</h3>
        <p className="mb-3 text-gray-700 font-medium">Instances of Stackies who found support in the community</p>
        <ColumnChart datafile={require('./data/hardStats.json')} dimensions={'month'} measures={'stackies who found support in the community'}/>
      </section>
    </main>
  );
}

export default App;
