interface Props {
  image: string
}

function SidebarLeft(props: Props) {
  return (
    <div className="ad-sidebar">
      <h1>Sponsored Content:</h1>
      <img src={props.image} alt="ad"></img>
      <p>Magic Myke's Mystical Emporium LLC neither endorses nor takes any responsibilty for content or services provided by our affiliates.</p>
    </div>
  )
}

export default SidebarLeft
