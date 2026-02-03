import { useState } from "react";

import Header from "./Components/Header";
import courseGoalImg from "./assets/goals.jpg";
import CourseGoalList from "./Components/CourseGoalList";
import NewGoal from "./Components/NewGoal";
export type Goalprops = {
  title: string;
  description: string;
  id: number;
};
export default function App() {
  const [goals, setGoals] = useState<Goalprops[]>([]);
  function handleAddGoal(newGoals: Goalprops) {
    setGoals((pre) => {
      return [...pre, newGoals];
    });
  }
  function handleDeleteGoal(id: number) {
    const filterGoal = goals.filter((goal) => goal.id !== id);
    setGoals(() => {
      return [...filterGoal];
    });
  }
  return (
    <main>
      <Header image={{ src: courseGoalImg, alt: "CourseGoalImage" }}>
        <h1>Your Course Goals</h1>
      </Header>
      <NewGoal handleAddGoal={handleAddGoal} />

      <CourseGoalList goals={goals} handleDeleteGoal={handleDeleteGoal} />
    </main>
  );
}
