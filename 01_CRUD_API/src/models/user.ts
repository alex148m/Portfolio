import {Schema, Types, model, Model} from "mongoose";
import {User} from "../interfaces/user.interface";

const UserSchema = new Schema<User>(
    {
        name:{
            type: String,
            require: true
        },
        password:{
            type: String,
            require: true
        },
        email:{
            type: String,
            require: true,
            unique: true
        },
        description:{
            type: String,
            default:'Soy la descripcion'
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
)


const UserModel = model('Users', UserSchema);

export default UserModel;