import mongoose, { connect } from 'mongoose'

const connectDB=()=>{
    connect(process.env.MOG_URL).then(
        ()=>{
            console.log('Database connected successfully...')
        }
    )
}

export default connectDB