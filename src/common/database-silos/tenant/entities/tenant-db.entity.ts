import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class TenantDb {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  // Relation to master ->  master-db table
  @Column()
  master: number;

  // Relation to application contnet ->  app-content-db table
  @Column()
  appContnet: number;

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  updatedAt: Date;
}
