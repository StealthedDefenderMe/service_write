import { HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { GenericOperationRes } from "src/common/interface/operation.interface";
import { UsersModel, UsersModelDocument } from "src/model";

@Injectable()
export class UsersService {

    constructor(
        @InjectModel(UsersModel.name) private usersModel: Model<UsersModelDocument>
    ){}


    // Function to create user into system
    async createUserService(payload: {dto: any} ):Promise<GenericOperationRes>{
        console.log("DTO received at write service----------------", payload)
        return {
            statusCode: HttpStatus.CREATED,
            message: "User created successfully"
        }
    }
}