import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

// Model
@Entity()
class User {
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

export default User;
