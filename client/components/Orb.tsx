interface Props {
  image: string
}
export function Orb(props: Props) {
  return <img src={props.image} alt="crystal ball"></img>
}
