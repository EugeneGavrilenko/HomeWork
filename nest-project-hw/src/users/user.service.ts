import {Injectable} from "@nestjs/common";
import {allUsers} from "./consts";

@Injectable()
export class UserService {
    public getUser(id: number) {
        return allUsers.find(user => user.id === +id);
    }
}