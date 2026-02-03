// import type { ReactNode } from "react";

import type { FC, PropsWithChildren } from "react";
type CourseGoalProps = PropsWithChildren<{
  title: string;
  handleDeleteGoal: (id: number) => void;
  id: number;
}>;
const CourseGoal: FC<CourseGoalProps> = ({
  title,
  children,
  handleDeleteGoal,
  id,
}) => {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>

      <button onClick={() => handleDeleteGoal(id)}>Delete</button>
    </article>
  );
};
export default CourseGoal;
// export default function CourseGoal({ title, children }: CourseGoalProps) {
//   return (
//     <article>
//       <div>
//         <h1>{title}</h1>
//         {children}
//       </div>
//       <button>Delete</button>
//     </article>
//   );
// }
