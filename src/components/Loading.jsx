import { HashLoader } from "react-spinners";
const overlayStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  minHeight: "100px", 
  padding: "20px 0",
};

const Loading = ({ loading }) => {
  if (!loading) return null;
  return (
    <div style={overlayStyle}>
      <HashLoader color="#FFD370" size={30} />
    </div>
  );
};

export default Loading;
