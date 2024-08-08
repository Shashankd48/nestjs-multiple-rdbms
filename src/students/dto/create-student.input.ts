import { InputType, Field, ID } from '@nestjs/graphql';

@InputType()
export class CreateStudentInput {
  //   @Field(() => ID)
  //   id: string;

  @Field()
  name: string;

  @Field()
  age: number;

  @Field()
  course: string;
}
