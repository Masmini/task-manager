const TaskInput = (props) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        props.handleNewTask();
      }}
    >
      <input
        type="text"
        placeholder="Input your taskname here"
        onChange={(e) => props.setNewTask(e.target.value)}
        value={props.newTask}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};
export default TaskInput;
