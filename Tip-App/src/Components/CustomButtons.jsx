const CustomButtons = ({ setter }) => {
  return (
    <>
      {[5, 10, 15, 25, 50].map((per) => (
        <button onClick={setter} key={per} value={per}>
          {per}%
        </button>
      ))}
    </>
  );
};
export default CustomButtons;
