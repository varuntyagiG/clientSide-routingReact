import { useNavigate } from "react-router-dom";

function Routing() {
  let navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Landing-page
      </button>
      <br />
      <br />
      <button
        onClick={() => {
          navigate("/dashboard");
        }}
      >
        Dashboard-page
      </button>
    </div>
  );
}

export { Routing };
