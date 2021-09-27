//Hooks
import { useContext, useEffect } from "react";
import { WheatherContext } from "./context/WheatherContext";
//Components
import Result from "./components/Result";
import Search from "./components/Search";
function App() {
  const { info, loading } = useContext(WheatherContext);
  return (
    <>
      {loading ? (
        ""
      ) : (
        <main className={info.main.temp > 20 ? 'app warm' : 'app'}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <Search />
                <Result />
              </div>
            </div>
          </div>
        </main>
      )}
    </>
  );
}
export default App;
