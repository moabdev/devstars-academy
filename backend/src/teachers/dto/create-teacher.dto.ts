import { IsInt } from 'class-validator';
import { CreateUserDto } from 'src/users/dto/create-user.dto';

export class CreateTeacherDto extends CreateUserDto {
  @IsInt()
  userId: number;
}
