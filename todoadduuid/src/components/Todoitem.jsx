export const TodoItem = ({ title, status, id }) => {
  return (
    <>
      <div>
        {title} - {status ? "Done" : "Not done"}
      </div>
    </>
  );
};
