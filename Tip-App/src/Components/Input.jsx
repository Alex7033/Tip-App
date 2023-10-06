const Input = ({ className, data, setter, placeholder = "0" }) => {
  return (
    <input
      placeholder={placeholder}
      className={className}
      type="number"
      min="0"
      value={data}
      onChange={(e) => setter(e.target.value)}
    />
  );
};
export default Input;
