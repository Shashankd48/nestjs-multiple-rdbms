import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { StudentsService } from './students.service';
import { Student } from 'src/common/database-silos/master/entities/student.entity';
import { CreateStudentInput } from './dto/create-student.input';
import { UpdateStudentInput } from './dto/update-student.input';

@Resolver(() => Student)
export class StudentsResolver {
  constructor(private readonly studentService: StudentsService) {}

  @Query(() => [Student])
  async students(): Promise<Student[]> {
    return this.studentService.findAll();
  }

  @Query(() => Student, { nullable: true })
  async student(@Args('id') id: string): Promise<Student> {
    return this.studentService.findOne(id);
  }

  @Mutation(() => Student)
  async updateStudent(
    @Args('updateStudentInput') updateStudentInput: UpdateStudentInput,
  ): Promise<Student> {
    return this.studentService.update(updateStudentInput);
  }

  @Mutation(() => Student)
  async removeStudent(@Args('id') id: string): Promise<Student> {
    return this.studentService.remove(id);
  }

  @Mutation(() => Student) // Ensure the output type is correctly defined
  async createStudent(
    @Args('createStudentInput') createStudentInput: CreateStudentInput,
  ): Promise<Student> {
    return this.studentService.create(createStudentInput);
  }
}
