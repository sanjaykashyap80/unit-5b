export const TodoItem = ({ title, status, id, handleToggle }) => {
  console.log("Id from", title, "is", id)
  return (
    <>
      <div>
        {title} - {status ? "Done" : "Not done"}
        <button onClick={() => handleToggle(id)}>Mark as done</button>
      </div>
    </>
  );
};
