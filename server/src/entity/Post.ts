import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinTable} from "typeorm";
import {User} from "./User";

@Entity()
export class Post {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: String;

  @Column("text")
  text: string;

  @ManyToOne(type => User, {
    cascade: true
  })
  @JoinTable()
  user: User;

}