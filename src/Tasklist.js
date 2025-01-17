// props.tasks = [{text:'',completed:true}, {text:'',completed:false},...,{text:'',completed:false}]

const Tasklist = (props) => {
  return (
    <ul>
      {props.tasks.length === 0 ? (
        <p>No tasks</p>
      ) : (
        // eslint-disable-next-line array-callback-return
        props.tasks.map((task, index) => (
          <li key={index} className={index % 2 === 1 ? "colored" : ""}>
            <span>{index + 1 + "." + task.text}</span>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => props.toggleTaskCompletion(index)}
            />

            <button onClick={() => props.handleDeleteTask(index)}>
              Delete
            </button>
          </li>
        ))
      )}
    </ul>
  );
};

export default Tasklist;
