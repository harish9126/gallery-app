import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, isSelected, updateDisplayImage} = props
  const {
    id,
    imageUrl,
    thumbnailUrl,
    imageAltText,
    thumbnailAltText,
  } = imageDetails

  const onClickThumbnail = () => {
    updateDisplayImage(imageUrl, imageAltText, id)
  }
  const thumbnailStyles = isSelected ? '' : 'thumbnail-opacity'

  return (
    <li className="list-item">
      <button
        type="button"
        onClick={onClickThumbnail}
        className="thumbnail-button"
      >
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={`thumbnail-image ${thumbnailStyles}`}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
