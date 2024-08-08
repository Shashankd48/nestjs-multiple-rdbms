// import { Injectable } from '@nestjs/common';
// import { CreateStudentInput } from './dto/create-student.input';
// import { UpdateStudentInput } from './dto/update-student.input';

// @Injectable()
// export class StudentsService {
//   create(createStudentInput: CreateStudentInput) {
//     return 'This action adds a new student';
//   }

//   findAll() {
//     return `This action returns all students`;
//   }

//   findOne(id: string) {
//     return `This action returns a #${id} student`;
//   }

//   update(id: string, updateStudentInput: UpdateStudentInput) {
//     return `This action updates a #${id} student`;
//   }

//   remove(id: string) {
//     return `This action removes a #${id} student`;
//   }
// }

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from 'src/common/database-silos/master/entities/student.entity';
import { CreateStudentInput } from './dto/create-student.input';
import { UpdateStudentInput } from './dto/update-student.input';
import dbSource from 'src/common/utils/db-source';

@Injectable()
export class StudentsService {
  constructor(
    @InjectRepository(Student, dbSource.MASTER)
    private readonly studentRepository: Repository<Student>,
  ) {}

  findAll(): Promise<Student[]> {
    return this.studentRepository.find();
  }

  findOne(id: string): Promise<Student> {
    return this.studentRepository.findOne({ where: { id } });
  }

  create(createStudentInput: CreateStudentInput): Promise<Student> {
    const newStudent = this.studentRepository.create(createStudentInput);
    return this.studentRepository.save(newStudent);
  }

  async update(updateStudentInput: UpdateStudentInput): Promise<Student> {
    const student = await this.studentRepository.findOne({
      where: { id: updateStudentInput.id },
    });
    if (!student) {
      throw new Error('Student not found');
    }
    Object.assign(student, updateStudentInput);
    return this.studentRepository.save(student);
  }

  async remove(id: string): Promise<Student> {
    const student = await this.studentRepository.findOne({ where: { id } });
    if (!student) {
      throw new Error('Student not found');
    }
    await this.studentRepository.remove(student);
    return student;
  }
}
