import { helix } from "ldrs";
import "./styles.css";

const Loading = () => {
  helix.register("helix-spinner");

  return (
    <div className="loading-container">
      <helix-spinner size="117" color="#C40C0C" />
    </div>
  );
};

export default Loading;
