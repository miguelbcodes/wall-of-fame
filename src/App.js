import ActivatedUsersChart from "./components/activated-users/activatedUsersChart";
import MessageVolumeChart from "./components/message-volume/messageVolumeChart";
import FoundSupportChart from "./components/found-support/foundSupportChart";
import "./index.css";

function App() {
  return (
    <main className="container sm:mx-auto">
      <section className="flex flex-col items-center my-4">
        <h3 className="text-3xl font-bold text-gray-800 mb-1.5">Total activated Users</h3>
        <ActivatedUsersChart />
      </section>
      <section className="flex flex-col items-center my-4">
        <h3 className="text-3xl font-bold text-gray-800 mb-1.5">Total message volume</h3>
        <p className="mb-3 text-gray-700 font-medium">Messages in our Discord channels: general chat, general help, quest help and forum, community collabs, safe space</p>
        <MessageVolumeChart />
      </section>
      <section className="flex flex-col items-center my-4">
        <h3 className="text-3xl font-bold text-gray-800 mb-1.5">Found support in community</h3>
        <p className="mb-3 text-gray-700 font-medium">Instances of Stackies who found support in the community</p>
        <FoundSupportChart />
      </section>
    </main>
  );
}

export default App;
