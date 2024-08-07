import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Candidate {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  // Relation to master ->  user table
  @Column()
  createdBy: number;

  // Relation to application contnent ->  app-content-db table
  @Column()
  aspect: number;

  @Column()
  about: string;
}
