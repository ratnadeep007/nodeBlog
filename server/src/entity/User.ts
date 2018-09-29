import {Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinTable} from "typeorm";
import {Post} from "./Post";

@Entity()
export class User {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: String;

  @Column("text")
  password: string;

  @OneToMany(type => Post, post => post.user)
  @JoinTable()
  posts: Post[];

}