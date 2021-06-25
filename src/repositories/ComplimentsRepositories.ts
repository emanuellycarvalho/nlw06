import { EntityRepository, Repository } from "typeorm";
import { Compliment } from "../entities/Compliment";


@EntityRepository(Compliment)
class ComlimentsRepositories extends Repository<Compliment>{

}

export { ComlimentsRepositories }