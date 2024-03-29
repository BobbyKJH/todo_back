import { Repository } from 'typeorm';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
/** Entity */
import { UserModel } from 'src/user/entities/user.entity';
/** Dto */
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { UpdateUserDto } from 'src/user/dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserModel)
    private readonly userRepository: Repository<UserModel>
  ) {}

  create(createUserDto: CreateUserDto) {
    const createUser = this.userRepository.create({ ...createUserDto });

    const saveUser = this.userRepository.save(createUser);

    return saveUser;
  }

  async login(nickName: string, password: string) {
    const loginUser = await this.userRepository.findOne({
      where: {
        nickName: nickName,
        password: password
      }
    });
    
    if(!loginUser) {
      throw new NotFoundException("아이디 또는 비밀번호를 확인해주세요.")
    }

    return loginUser;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
