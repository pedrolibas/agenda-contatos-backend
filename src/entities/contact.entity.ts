import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  ManyToOne,
  PrimaryColumn,
} from "typeorm";
import { v4 as uuidv4 } from "uuid";
import { User } from "./user.entity";

@Entity("contact")
export class Contact {
  @PrimaryColumn("uuid")
  readonly id: string;

  @Column({ length: 255 })
  name: string;

  @Column({ length: 60 })
  email: string;

  @Column({ length: 12 })
  telephone: string;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(() => User, { onDelete: "CASCADE" })
  user: User;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}
