import ScaleLoader from "react-spinners/ScaleLoader";
import {useState} from 'react'

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};
const color = "#001275"

const PreLoader = () => {
  let [loading, setLoading] = useState(true);
  return (
    <div>
        <ScaleLoader
          color={color}
          loading={loading}
          cssOverride={override}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
    </div>
  )
}
export default PreLoader