import "./StyleSkeletonGameItem.scss"

export default function SkeletonGameItem() {
  return (
    <div className="skeletonBox">
      <span className="img"></span>

      <div className="content">
        <span className="title"></span>
        <span className="genres"></span>
        <span className="platforms"></span>
      </div>
    </div>
  )
}