import { useRef, type SyntheticEvent } from "react";
import type { Goalprops } from "../App";
type NewGoalProps = {
  handleAddGoal: (goal: Goalprops) => void;
};
export default function NewGoal({ handleAddGoal }: NewGoalProps) {
  const titleRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLInputElement>(null);
  function handleSubmit(e: SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!titleRef.current || !descriptionRef.current) return;
    handleAddGoal({
      title: titleRef.current.value,
      description: descriptionRef.current.value,
      id: Math.random(),
    });
    e.currentTarget.reset();
  }
  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="title">Goal</label>
        <input type="text" id="title" name="title" ref={titleRef} />
      </p>
      <p>
        <label htmlFor="summary">summary</label>
        <input
          type="text"
          id="summary"
          name="description"
          ref={descriptionRef}
        />
      </p>
      <p>
        <button>Add Goal</button>
      </p>
    </form>
  );
}
