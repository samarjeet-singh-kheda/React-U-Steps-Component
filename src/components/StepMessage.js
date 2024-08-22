function StepMessage({ step, children }) {
  return (
    <div
      className="message"
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "center",
        gap: "6px",
      }}
    >
      <h3 style={{ fontSize: "22px" }}>Step {step}: </h3>
      <span> {children}</span>
    </div>
  );
}

export default StepMessage;
