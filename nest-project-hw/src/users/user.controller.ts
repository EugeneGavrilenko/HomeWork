import {Body, Controller, Get, Param, Post, Query} from "@nestjs/common";
import {UserService} from "./user.service";
import {allUsers} from "./consts";

@Controller('users')
export class UserController {
constructor(private userService: UserService) {}

    @Get(':id')
    getUser(@Param('id') id: number) {
    return this.userService.getUser(+id);
    }

    @Post('add')
    postNewUser(@Body() body: any) {
    allUsers.push(body);
    return allUsers;
    }

    @Get('')
    getUsersFromTo(@Query() query: any) {
    return allUsers.filter((user) => user.id >= query.from && user.id <= query.to);
    }

}