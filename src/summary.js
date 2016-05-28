export const Summary = ({ 
  counters 
}) => (
  <section>
    <h1>Summary</h1>
    <ul>
      {
        counters.map((counter, i) => {
          return <li key={i}>{counter.title}: {counter.value || counter.initialValue}</li>;
        })
      }
    </ul>
  </section>
);
