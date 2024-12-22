import mongoose,{Schema,Document} from "mongoose";


export interface Message extends Document{
    content:string,
    createdAt:Date
}


const messageSchema:Schema<Message>=new Schema({
    content:{
        type:String,
        required:true
    },
    createdAt: {
        type:Date,
        required:true,
        default:Date.now
    }
    })
export interface User extends Document{
    username:string,
    email:string,
    password:string,
    messages:Message[],
    isAcceptingMessages:boolean,
    verifyCodeExpiry:Date,
    verifyCode:string,
    isVerified:boolean
  
}
const userSchema:Schema<User>=new Schema({
  username:{
        type:String,
        required:[true,"Username is required"],
        unique:true,
        trim:true
  },
    email:{
            type:String,
            required:[true,"Email is required"],
            unique:true,
            match:[/^\S+@\S+\.\S+$/,"Please enter a valid email"],

        
           
    },
    password:{
            type:String,
            required:[true,"Password is required"],
            trim:true
    },
    verifyCode:{
        type:String,
        required:true
    },
    verifyCodeExpiry:{
        type:Date,
        required:true
    },
    isVerified:{
        type:Boolean,
        default:false
    },
    isAcceptingMessages:{
        type:Boolean,
        default:true
    },
    messages:[messageSchema]
})


const UserModel=(mongoose.models.User as mongoose.Model<User>)||(mongoose.model<User>("User",userSchema))
