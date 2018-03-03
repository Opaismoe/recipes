import React, { PureComponent } from 'react'
import 'assets/styles/LikeButton.css'

class LikeButton extends PureComponent {

  classNames() {
    const { liked } = this.state
    let classes = 'like'

    if (liked) {
      classes += 'liked'
    }
    return classes
  }

  toggleLike() {
    console.log('clicked ToggleLike button')
  }

  render() {
    const liked = false

    return (
      <p className={ this.classNames() }>
        <button onClick={ this.toggleLike.bind(this) }>
        { liked ? '❤️' : '♡' }
        </button>
        <span className="likes">{ liked ? 'You like this' : null }</span>
      </p>
    )
  }
}

export default LikeButton
