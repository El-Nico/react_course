import facebook_icon from '../../images/Facebook_Icon.png'
import twitter_icon from '../../images/Twitter_Icon.png'
import instagram_icon from '../../images/Instagram_Icon.png'
import github_icon from '../../images/GitHub_Icon.png'

export function Footer() {
    return (
        <footer>
            <img src={twitter_icon} alt="" />
            <img src={facebook_icon} alt="" />
            <img src={instagram_icon} alt="" />
            <img src={github_icon} alt="" />
        </footer>
    )
}