const logo = require('../images/linkedin.png')
const logo2 = require('../images/github-mark-white.png') 



function home(){
    return(
            <div className="flex text-black items-center justify-center h-screen w-screen ">
                <div>
                    <p className="text-3xl font-mono">Zachary Dowell </p> 
                    <p className='font-mono'>Full Stack Developer</p>
        
                </div>
                <div className='flex-row'>
                        <a  href="https://github.com/zacharyd97"><img className=' w-10 h-10 p-2' src={logo2}/></a>
                        <a  href="https://www.linkedin.com/in/zachary-dowell/"><img className=' w-10 h-10 p-2' src={logo}/></a>
                    </div>
            </div>
    )

}
export default home;