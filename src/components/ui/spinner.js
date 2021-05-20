import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

import "../../styles/spinner.css";

const Spinner = ({ className }) => {
  return (
    <div className={`spinner ${className}`}>
      <FontAwesomeIcon icon={faCircleNotch} />
    </div>
  );
};

export default Spinner;
