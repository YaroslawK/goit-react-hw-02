function Feedback({ feedback, totalFeedback }) {
  const positiveFeedback = ((feedback.good / totalFeedback) * 100).toFixed(0);
  return (
    <div>
        <p>Good: {feedback.good}</p>
        <p>Neutral: {feedback.neutral}</p>
      <p>Bad: {feedback.bad}</p>
      <p>Total: {totalFeedback}</p>
      <p>Positive: {positiveFeedback}%</p>
    </div>
  );
}

  export default Feedback