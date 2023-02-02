import { Exclude } from "class-transformer";
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryColumn,
} from "typeorm";
import { v4 as uuidv4 } from "uuid";
import { Contact } from "./contact.entity";

@Entity("user")
export class User {
  @PrimaryColumn("uuid")
  readonly id: string;

  @Column({ length: 255 })
  name: string;

  @Column({ length: 60, unique: true })
  email: string;

  @Column({ length: 12 })
  telephone: string;

  @CreateDateColumn()
  createdAt: Date;

  @Column({ length: 120 })
  @Exclude()
  password: string;

  @OneToMany(() => Contact, (contact) => contact.user)
  contacts: Contact[];

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}
