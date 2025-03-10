import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';




export default function Footer(){
    return (
        <div className='m-top light-salmon footer'>
            <p className='flex'><div className='red'><FavoriteIcon/>  </div>   Represents a healthy snack where fiber is greater than 5g, protein is greater than 5g, and sugar is less than 5g</p>

            <p className='flex neg-mtop'><div className='white'><FavoriteBorderIcon/>  </div>   Represents an unhealthy snack</p>

        </div>
    )
}