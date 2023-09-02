const BillShowcase = ({ data, handleReset }) => {
  return (
    <div className="showcase">
      {data.map(({ tip, person }) => {
        const newTip = (Math.round(tip * 100) / 100).toFixed(2);
        const newPerson = (Math.round(person * 100) / 100).toFixed(2);
        return (
          <div key={tip}>
            <div className="showcaseFirst">
              <div>
                <p className="showcaseTipText">Tip Amount</p>
                <p className="showcaseTipPerson">/ person</p>
              </div>
              <p className="showcaseTipAmount">
                {newTip == 0 ? "$0.00" : newTip}
              </p>
            </div>
            <div className="showcaseSecond">
              <div>
                <p className="showcaseTotalText">Total</p>
                <p className="showcaseTotalPerson">/ person</p>
              </div>
              <p className="showcaseTotalAmount">
                {newPerson == 0 ? "$0.00" : newPerson}
              </p>
            </div>
          </div>
        );
      })}
      <button className="resetBtn" onClick={handleReset}>
        RESET
      </button>
    </div>
  );
};
export default BillShowcase;
