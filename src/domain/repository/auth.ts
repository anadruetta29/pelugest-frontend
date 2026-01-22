import type { LoginUserReq } from "../dto/auth/request/LoginUserReq";
import type { RegisterUserReq } from "../dto/auth/request/RegisterUserReq";

export abstract class AuthRepositoryI {
    abstract login(dto: LoginUserReq): Promise<LoginUserRes>;
    abstract register(dto: RegisterUserReq): Promise<void>;
}
