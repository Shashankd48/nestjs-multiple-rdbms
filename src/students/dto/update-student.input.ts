import { InputType, Field, ID } from '@nestjs/graphql';

@InputType()
export class UpdateStudentInput {
  @Field(() => ID)
  id: string;

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  age?: number;

  @Field({ nullable: true })
  course?: string;
}
