interface Props {
  image: string
}
export function Orb(props: Props) {
  return <img id="orb" src={props.image} alt="crystal ball"></img>
}
