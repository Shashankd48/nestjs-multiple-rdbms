import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class TenantDatabase {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  serverType: string;

  @Column()
  host: string;

  @Column()
  port: number;

  @Column({ unique: true })
  databaseName: string;

  @Column()
  databaseUser: string;

  @Column()
  databasePassword: string;

  @CreateDateColumn({
    type: 'datetime',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'datetime',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  updatedAt: Date;
}
