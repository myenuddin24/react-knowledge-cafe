import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <div className='mx-12 mt-5'>
            <div className='flex justify-between items-center'>
                <h3 className='text-4xl font-bold'>Knowledge Cafe</h3>
                <img className='w-14'
                    src={profile} alt={`profile_img`}
                />
            </div>
            <hr className='my-5 text-[#11111126]' />
        </div>
    );
};

export default Header;