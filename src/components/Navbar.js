import logo from '../assets/logo.jpg'

function Navbar() {
    return <div className='w-full h-1 flex'> 
    <a><img className='w-20' src={logo} /> </a>
    <ul className='flex mx-auto'>
        <li className='m-5 font-semibold'>About</li>
        <li className='m-5 font-semibold'>Learn</li>
        <li className='m-5 font-semibold'>Experience</li>
        <li className='m-5 font-semibold'>Blog</li>
    </ul>
    
    
    
     </div>
};

export default Navbar