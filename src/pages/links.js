
import art from '../images/art-gallery.png'
import breads from '../images/breadCrud.png'

function Links(){
    return(
        <div className="flex text-black items-center justify-center h-screen w-screen ">
            <div>
                <h1 className='text-3xl font-mono p-8'>Projects</h1>
                <div >
                    <a href='https://art-gallery224223.herokuapp.com/'><img className='w-48 rounded-xl' src={art}/></a>
                    <p className='font-mono'>Art gallery</p>
                </div>
                <div >
                    <a href='https://tranquil-island-45337.herokuapp.com/breads'><img className='w-48 rounded-xl' src={breads}/></a>
                    <p className='font-mono'>Bread Crud </p>
                </div>
                
                
            </div>
                
        </div>
    )
}
export default Links
  