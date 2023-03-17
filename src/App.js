import ActivatedUsersChart from "./components/activated-users/activatedUsersChart";
import MessageVolumeChart from "./components/message-volume/messageVolumeChart";
import FoundSupportChart from "./components/found-support/foundSupportChart";

function App() {
  return (
    <>
      <ActivatedUsersChart />;
      <MessageVolumeChart />
      <FoundSupportChart />
    </>
  );
}

export default App;
