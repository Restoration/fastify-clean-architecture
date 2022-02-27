import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, BaseEntity } from 'typeorm';

// UserModel
@Entity()
class Users extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @CreateDateColumn({ precision: 0, default: () => 'NOW()' })
  created_at: Date;

  @UpdateDateColumn({ precision: 0, default: () => 'NOW()' })
  updated_at: Date;
}

export default Users;
