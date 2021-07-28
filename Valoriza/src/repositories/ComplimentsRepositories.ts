import { Repository, EntityRepository } from "typeorm";
import { Compliments } from "../models/Compliments";

@EntityRepository(Compliments)
class ComplimentsRepositories extends Repository<Compliments> {

}

export { ComplimentsRepositories }