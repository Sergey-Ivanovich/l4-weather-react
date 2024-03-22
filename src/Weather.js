import axios from "axios";
import { Audio } from "react-loader-spinner";

export default function Weather(props) {
  function handleApiResponse(response) {
    alert(
      `In ${response.data.city}, It is ${Math.round(
        response.data.temperature.current
      )}°C`
    );
  }

  let apiKey = `oe3107c03bbf1b061844a8c3d518t9b3`;
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.city}&key=${apiKey}`;
  axios.get(apiUrl).then(handleApiResponse);

  return (
    <div>
      <Audio
        height="80"
        width="80"
        radius="9"
        color="green"
        ariaLabel="loading"
        wrapperStyle
        wrapperClass
      />
    </div>
  );
}
