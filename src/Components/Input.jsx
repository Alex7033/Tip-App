const Input = ({ className, data, setter, placeholder = "0" }) => {
  return (
    <input
      placeholder={placeholder}
      // disabled={people >= 1 ? true : false}
      className={className}
      type="number"
      min="0"
      value={data}
      onChange={(e) => setter(e.target.value)}
    />
  );
};
export default Input;
