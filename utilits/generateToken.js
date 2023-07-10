import JWT from 'jsonwebtoken'

const genrateToken=(id)=>{
    return JWT.sign({id},process.env.JWT_SECRET)
}

export default genrateToken