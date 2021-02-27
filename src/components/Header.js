import { Timer } from './Timer';

export const Header = ({ name, round }) => {
  return (
    <>
      <div>Round: {round}</div>
      <div>{name}</div>
      <div><Timer /></div>
    </>
  )

}