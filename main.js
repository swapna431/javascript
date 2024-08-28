import express from 'express'
import dotenv from 'dotenv'
import chalk from 'chalk'
import connectDB from './config/db.js'

dotenv.config()

connectDB()
const app=express()

app.get('/',(req,res)=>{
    res.send('<h1>Hello World</h1>')
})

app.listen(5050,(req,res)=>{
    console.log(chalk.bgRed('Server Running'))
})