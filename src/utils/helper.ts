import {Response} from 'express'
import config from 'config'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const saltWorkFactor = config.get<number>("saltWorkFactor")
const secretKey = config.get<string>("secretKey")
const salt = bcrypt.genSaltSync(saltWorkFactor)

//password checking and converting
export const encode =  (payload : string  ) =>  bcrypt.hashSync(payload , salt )
export const compass =  (payload : string , dbPass : string) =>  bcrypt.compareSync(payload , dbPass)

//tokenization
export const createToken = (payload : {}) => jwt.sign(payload , secretKey , {expiresIn : '12h'})
export const checkToken = (payload : string) : any => jwt.verify( payload , secretKey )


//for response 
const fMsg = (res : Response , msg : string ='all success' , result : any =[] ) =>{
    res.status(200).json({con:true , msg , result})
  }

export default fMsg 