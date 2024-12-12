import { useSelector } from "react-redux";
import { useEffect, useState, lazy, Suspense } from "react";
// import SingUp from "../Parts/SingUp/SingUp.js";

const componentsMap = {
  SingUp: lazy(() => import("../Parts/SingUp/SingUp.js")),
  List: lazy(() => import("../Parts/List/List.js")),
};

const Main = () => {
  const selectedChoice = useSelector((state) => state.choice.selectedChoice);
  const [ComponentDyn, setComponentDyn] = useState(
    componentsMap[selectedChoice]
  );

  useEffect(() => {
    if (selectedChoice) {
      setComponentDyn(componentsMap[selectedChoice]);
    }
  }, [selectedChoice]);

  return (
    <main style={{ paddingTop: 48, paddingLeft: 20, paddingRight: 20 }}>
      {!ComponentDyn && <div>Choice component for watching...</div>}
      {ComponentDyn && (
        <div>
          <Suspense>
            <ComponentDyn />
          </Suspense>
        </div>
      )}
    </main>
  );
};

export default Main;
