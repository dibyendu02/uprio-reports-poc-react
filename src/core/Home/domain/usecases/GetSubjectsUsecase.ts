import { HomeRepository } from "../repositories/HomeRepository";
import { SubjectEntity } from "@/commons/domain/entities/SubjectEntity";

export class GetSubjectsUseCase {
  constructor(private homeRepository: HomeRepository) {}

  async execute(): Promise<SubjectEntity[]> {
    return await this.homeRepository.getSubjects();
  }
}
