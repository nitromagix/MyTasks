//

const taskStatusBgColorClassName = (task) => {
  if (task.startedOn && task.completedOn) return "bg-green";
  if (task.startedOn) return "bg-yellow";
  return "bg-red";
};

const taskStatus = (task) => {
  if (task.startedOn && task.completedOn) return "Completed";
  if (task.startedOn) return "In Progress";
  return "Not Started";
}

export { taskStatusBgColorClassName, taskStatus };
