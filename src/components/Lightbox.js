import React, { Component, Fragment } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
// import Img from "gatsby-image"
import thumb from "../images/radio.png"

class Lightbox extends Component {
  state = {
    showLightbox: false,
    selectedImage: 0,
    id: null,
    images: [],
    iframeActive: false,
  }

  componentDidMount = () => {
    const { images } = this.props
    this.setState({ images })
    window.addEventListener("keyup", this.handleKeyUp, false)
  }

  componentWillUnmount = () => {
    window.removeEventListener("keyup", this.handleKeyUp, false)
  }

  handleClick = (e, index) => {
    e.preventDefault()
    let id = null
    if (this.props.type === "vimeo") {
      id = this.state.images[index].link.substr(18)
    } 
    else {
      id = this.state.images[index].link
    }
    this.setState({
      showLightbox: !this.state.showLightbox,
      selectedImage: index,
      id,
    })
  }

  closeModal = () => {
    this.setState({ showLightbox: false })
  }

  goBack = e => {
    e.preventDefault()
    const selectedImage = this.state.selectedImage - 1
    let id = null
    if (selectedImage > -1) {
      if (this.props.type === "vimeo") {
        id = this.state.images[selectedImage].link.substr(18)
      } else {
        id = this.state.images[selectedImage].link
      }
      this.setState({ selectedImage, id })
    }
  }

  goForward = e => {
    e.preventDefault()
    const selectedImage = this.state.selectedImage + 1
    if (selectedImage < this.state.images.length) {
      let id = null
      if (this.props.type === "vimeo") {
        id = this.state.images[selectedImage].link.substr(18)
      } else {
        id = this.state.images[selectedImage].link
      }
      this.setState({ selectedImage, id })
    }
  }

  handleKeyUp = e => {
    e.preventDefault()
    const { keyCode } = e
    if (this.state.showLightbox) {
      if (keyCode === 37) {
        // Left Arrow Key
        if (this.state.selectedImage > 0) {
          this.setState({ selectedImage: this.state.selectedImage - 1 })
        }
      }
      if (keyCode === 39) {
        // Right Arrow Key
        if (this.state.selectedImage < this.props.images.length - 1) {
          this.setState({ selectedImage: this.state.selectedImage + 1 })
        }
      }
      if (keyCode === 27) {
        // Escape key
        this.setState({ showLightbox: false })
      }
    }
  }

  toggleClassIframe = () => {
    this.setState({ iframeActive: true })
  }

  render() {
    const { images, type } = this.props
    const { showLightbox, selectedImage, id } = this.state
    return (
      <Fragment>
        <Gallery>
          {images.map((img, i) => (
            <GalleryItem key={img.link} className="box">
              <a
                href={img.link}
                alt="Car Image"
                onClick={e => this.handleClick(e, i)}
              >
                {type === "vimeo" && (
                  // <>
                    <img
                      alt="Video"
                      src={img.thumbnail}
                      // src={`http://i.vimeocdn.com/video/${img.link}_590x332.webp`}
                    />
                    
                )}
                {type === "soundcloud" && <img alt="algo" src={img.thumbnail} />}
                {/* <StyledImg sizes={img.node.sizes} /> */}
              </a>
            </GalleryItem>
          ))}
        </Gallery>

        <LightboxModal visible={showLightbox}>
          <LightboxContent>
            <div
              style={{
                height: type === "soundcloud" ? 300 : "auto",
              }}
            >
              {type === "vimeo" && showLightbox && (
                <iframe
                  title="Video"
                  src={`https://player.vimeo.com/video/${id}`}
                  width="640"
                  height="360"
                  frameBorder="0"
                  onLoad={this.toggleClassIframe}
                  className={this.state.iframeActive ? null : "hide"}
                  allow="autoplay; fullscreen"
                  allowFullScreen
                ></iframe>
              )}
              {type === "soundcloud" && showLightbox && (
                <iframe
                  title="Audio"
                  width="100%"
                  height="300"
                  scrolling="no"
                  frameBorder="no"
                  allow="autoplay"
                  onLoad={this.toggleClassIframe}
                  className={this.state.iframeActive ? null : "hide"}
                  src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${id}&color=%231a1a1a&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true`}
                ></iframe>
              )}
            </div>
            {/* <Img sizes={images[selectedImage].node.sizes} /> */}
            <span className="closer" onClick={this.closeModal}>
              X
            </span>
            <div
              className="nav-previous"
              onClick={e => this.goBack(e)}
              disabled={selectedImage === 0}
            >
              <div> {"<"}</div>
            </div>
            <div
              className="nav-next"
              onClick={e => this.goForward(e)}
              disabled={selectedImage === images.length - 1}
            >
              <div>{">"}</div>
            </div>
          </LightboxContent>
        </LightboxModal>
      </Fragment>
    )
  }
}

// const StyledImg = styled(Img)`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   z-index: -1;
//   height: 100%; // or whatever
//   & > img {
//     object-fit: cover !important; // or whatever
//     object-position: 0% 0% !important; // or whatever
//   }
// `

const Gallery = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  @media (min-width: 700px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 900px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (min-width: 1100px) {
    grid-template-columns: repeat(5, 1fr);
  }

  grid-gap: 15px;
  .gatsby-image-outer-wrapper {
    height: 100%;
  }
`

const GalleryItem = styled.div`
  position: relative;
`

const LightboxModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 100;
  background: rgba(0, 0, 0, 0.5);
  opacity: ${props => (props.visible ? "1" : "0")};
  transition: opacity 0.8s;
  visibility: ${props => (props.visible ? "visible" : "hidden")};
`
const LightboxContent = styled.div`
  flex: none;
  max-width: 50%;
  background: rgb(0, 0, 0, 0.8);
  color: rgb(0, 0, 0);
  padding: 10px 10px;
  display: inline-block;
  vertical-align: middle;
  position: relative;
  z-index: 202;
  cursor: pointer;
  min-width: 200px;
  min-height: 100px;
  width: auto;
  height: auto;
`

// const Controls = styled.div`
//   display: flex;
//   justify-content: space-between;
// `

Lightbox.propTypes = {
  images: PropTypes.array.isRequired,
}

export default Lightbox
