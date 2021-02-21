import "antd/dist/antd.css";
import { Layout } from "antd";
import AppHeader from "./components/common/header";
import "./App.css";
const { Header } = Layout;
function App() {
  return (
    <div className="App">
      <Layout className="mainLayout">
        <Header>
          <AppHeader />
        </Header>
      </Layout>
      ,
    </div>
  );
}

export default App;
