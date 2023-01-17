interface HabitsProps {
  completed: number;
}

export function Habit(props: HabitsProps) {
  return <div className="bg-purple-400 w-10 h-10">{props.completed}</div>;
}
