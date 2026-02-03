type UsersProps = {
  name: string;
};
function Users({ name }: UsersProps) {
  return (
    <>
      <p>My name is {name}</p>
    </>
  );
}
export default function SampleKey() {
  const usersArray = ["alagu", "ammai", "siva"];
  return (
    <>
      <ul>
        {usersArray.map((item, index) => {
          return (
            <li>
              <Users key={index} name={item} />
            </li>
          );
        })}
      </ul>
    </>
  );
}
