import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Entity()
export class Student {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  age: number;

  @Field()
  @Column()
  course: string;

  //   @CreateDateColumn({
  //     type: 'timestamp',
  //     default: () => 'CURRENT_TIMESTAMP(6)',
  //   })
  //   createdAt: Date;

  //   @UpdateDateColumn({
  //     type: 'timestamp',
  //     default: () => 'CURRENT_TIMESTAMP(6)',
  //     onUpdate: 'CURRENT_TIMESTAMP(6)',
  //   })
  //   updatedAt: Date;
}

@ObjectType()
export class StudentType {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  age: number;

  @Field()
  course: string;
}
