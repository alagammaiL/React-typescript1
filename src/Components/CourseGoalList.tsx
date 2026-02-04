import CourseGoal from "./CourseGoal";
import type { Goalprops as CGoal } from "../App";
import InfoBox from "./InfoBox";
import type { ReactNode } from "react";
type CourseGoalListProps = {
  goals: CGoal[];
  handleDeleteGoal: (id: number) => void;
};
export default function CourseGoalList({
  goals,
  handleDeleteGoal,
}: CourseGoalListProps) {
  if (goals.length === 0) {
    return <InfoBox mode="hint">Goals are empty try to add goals</InfoBox>;
  }
  let warning: ReactNode;

  if (goals.length >= 4) {
    warning = (
      <InfoBox mode="warning" warningRange="low">
        more course goals try to delete completed goals
      </InfoBox>
    );
  }
  return (
    <>
      {warning}
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
