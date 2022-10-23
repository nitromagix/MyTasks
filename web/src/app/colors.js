//

const taskStatusGbColorClassName = (task) => {
  if (task.startedOn && task.completedOn) return "bg-green";
  if (task.startedOn) return "bg-yellow";
  return "bg-red";
};

export { taskStatusGbColorClassName };
