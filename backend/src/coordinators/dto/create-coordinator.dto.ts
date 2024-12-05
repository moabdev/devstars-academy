import { IsInt } from 'class-validator';
import { CreateUserDto } from 'src/users/dto/create-user.dto';

export class CreateCoordinatorDto extends CreateUserDto {
  @IsInt()
  userId: number;
}
