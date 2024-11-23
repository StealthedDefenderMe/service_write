import { Controller } from "@nestjs/common";
import { MessagePattern, Payload } from "@nestjs/microservices";
import { MessagePatterUsersModule } from "src/common/enum/micro-service.enum";
import { GenericOperationRes } from "src/common/interface/operation.interface";
import { UsersService } from "src/service/users.service";


@Controller('users')
export class UserController {

    constructor(
        private usersService: UsersService
    ) {}

    @MessagePattern(MessagePatterUsersModule.CREATE_USER)
    async createUser(@Payload() payload: any):Promise<GenericOperationRes>{
        return this.usersService.createUserService(payload)
    }
}