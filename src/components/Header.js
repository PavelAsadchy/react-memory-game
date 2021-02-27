import { Timer } from './Timer';

export const Header = ({ name }) => {
  return (
    <>
      <div>Level:</div>
      <div>{name}</div>
      <div><Timer /></div>
    </>
  )

}