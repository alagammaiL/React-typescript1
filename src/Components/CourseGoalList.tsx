import CourseGoal from "./CourseGoal";
import type { Goalprops as CGoal } from "../App";
type CourseGoalListProps = {
  goals: CGoal[];
  handleDeleteGoal: (id: number) => void;
};
export default function CourseGoalList({
  goals,
  handleDeleteGoal,
}: CourseGoalListProps) {
  return (
    <>
      <ul>
        {goals.map((goal) => {
          return (
            <li key={goal.id}>
              <CourseGoal
                title={goal.title}
                handleDeleteGoal={handleDeleteGoal}
                id={goal.id}
              >
                <p>{goal.description}</p>
              </CourseGoal>
            </li>
          );
        })}
      </ul>
    </>
  );
}
